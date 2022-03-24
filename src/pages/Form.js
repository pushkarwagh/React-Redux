import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import shortid from "shortid";
import { IoIosPersonAdd } from "react-icons/io";

import { AddUser } from "../actions/actions";

export default function Form() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  let editUser = useSelector((state) => state.UserReducer);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let formIsValid = true;

    //Name
    if (!name) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof name !== "undefined") {
      if ( !name.match(/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/) ) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!email) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof email !== "undefined") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    //number
    if (!phone) {
      formIsValid = false;
      errors["phone"] = "Cannot be empty";
    }
    if (typeof phone !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(phone)) {
        formIsValid = false;
        errors["phone"] = "Please enter only number.";
      } 
      else if (phone.length != 10) {
        formIsValid = false;
        errors["phone"] = "Please enter valid phone number.";
      }
    }

    setErrors(errors);
    return formIsValid;
  };

  const HandleValue = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      const newUser = {
        id: shortid.generate(),
        name: name,
        email: email,
        phone: phone,
      };
      dispatch(AddUser(newUser));

      HandleReset();
      navigate("/");
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  };

  const HandleReset = (e) => {
    setEmail("");
    setName("");
    setPhone("");
  };

  return (
    <div className="conatiner bg-secondary">
      <div className="my-5 w-50 m-auto ">
        <div className="text-center text-warning">
          <h3>
            <IoIosPersonAdd /> ADD-USER
          </h3>
        </div>

        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span style={{ color: "red" }}>{errors["name"]}</span>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span style={{ color: "red" }}>{errors["email"]}</span>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputNumber1" className="form-label">
              Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputNumber1"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <span style={{ color: "red" }}>{errors["phone"]}</span>
          </div>

          <button className="btn btn-success m-2" onClick={HandleValue}>
            ADD
          </button>

          <button className="btn btn-info m-2" onClick={HandleReset}>
            Reset
          </button>

          <Link to="/">
            <button className="btn btn-danger m-2">Cancel</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
