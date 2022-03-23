import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ViewUser = (props) => {
  const { id } = useParams();

  const userData = useSelector(state => state.UserReducer.users)
  console.log("aysy",userData)
  return (
    
     
    
    <div className="my-5 w-80 m-auto ">
      <div className="conatiner">
        <h3> view user</h3>
        <div className="border border-warning m-2 p-2 ">
          <label>id:</label> {id} <br />
          <label>Name:</label> {userData.name} <br />
          <label>Email:</label> {userData.email} <br />
          <label>Phone-Num:</label> {userData.phone} <br />
        </div>

        <Link to='/'>
        <button className='btn btn-danger m-2'> Back </button>
        </Link>
      
      </div>
    </div>
  );
};

export default ViewUser;
