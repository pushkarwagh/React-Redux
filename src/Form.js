import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddUser } from "./actions/actions";

export default function Form() {
  const [name,setname] = useState('')
  console.log(name);
  const dispatch = useDispatch()
  const HandleValue = (e) =>{
    e.preventDefault()
    dispatch(AddUser(name))
  }
  return (
    <div className="my-5 w-50 m-auto">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e)=>setname(e.target.value)}
          />
          
        </div>
        {/* <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button onClick={HandleValue}>Add</button>
      </form>
    </div>
  );
}
