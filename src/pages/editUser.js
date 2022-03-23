import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from 'react-router-dom';

import { EditUser } from "../actions/actions";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const editUser = useSelector(state => state.UserReducer.users);
  console.log("ss",editUser)

  const [name, setName ] = useState(editUser.name)
  const [email,setEmail] = useState(editUser.email)
  const [phone, setPhone ] = useState(editUser.phone)
  
  const HandleValue = (e) =>{
    e.preventDefault();
    const newUser = {
      name:name,
      email:email,
      phone:phone
    }
      dispatch(EditUser(newUser))
    navigate("/");
    
  }

   return (
    <div className="conatiner bg-secondary">
    <div className="my-5 w-50 m-auto ">
      <div className="text-center text-warning"> 
             <h3> Edit-User -{id}</h3> 
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
            onChange={(e)=> setName(e.target.value)}
          />
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
            onChange={(e)=> setEmail(e.target.value)}
          />          
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputNumber1" className="form-label">
            Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNumber1"
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
          />
        </div> 

        <button className='btn btn-success m-2' onClick={HandleValue}>
           Done
        </button>
        
        <Link to='/'>
        <button className='btn btn-danger m-2'>Cancel</button>
        </Link>

      </form>
    </div>
    </div>
  );
}
