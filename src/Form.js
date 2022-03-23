import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import shortid from "shortid";

import { AddUser } from "./actions/actions";

export default function Form() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  let editUser = useSelector(state => state.UserReducer);
  
  const [name, setName ] = useState('')
  const [email,setEmail] = useState('')
  const [number, setNumber ] = useState('')
  
  const HandleValue = (e) =>{
    e.preventDefault();
    const newUser = {
      id: shortid.generate(),
      name:name,
      email:email,
      number:number
    }
      dispatch(AddUser(newUser))

    
    HandleReset();
    navigate("/");
    
  }

  const HandleReset = (e) => {
    setEmail('');
    setName('');
    setNumber('');
  }

  return (
    <div className="conatiner bg-secondary">
    <div className="my-5 w-50 m-auto ">
      <div className="text-center text-warning"> 
             <h3> ADD-USER </h3>
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
            type="number"
            className="form-control"
            id="exampleInputNumber1"
            value={number}
            onChange={(e)=> setNumber(e.target.value)}
          />
        </div> 

        <button className='btn btn-success m-2' onClick={HandleValue}>
         ADD  
        </button>

        <button className='btn btn-info m-2' onClick={HandleReset}>Reset</button>
        
        <Link to='/'>
        <button className='btn btn-danger m-2'>Cancel</button>
        </Link>

      </form>
    </div>
    </div>
  );
}
