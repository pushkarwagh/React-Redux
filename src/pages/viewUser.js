//import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";


const ViewUser = () => {
  const { id } = useParams();
  // const data = useLocation(); // get state through link..

  const userData = useSelector(state => state.UserReducer.adduser)
  console.log("aysy",userData);

  return (    
    
    <div className="my-5 w-80 m-auto ">
      <div className="conatiner bg-dark text-light">
        <h3 className="text-center bg-secondary"> <GrView /> View-User </h3>
        <div className="border border-warning m-2 p-2 ">
          <label>id:</label> {id} <br />
          <label>Name:</label> {userData.name} <br />
          <label>Email:</label> {userData.email} <br />
          <label>Phone-Num:</label> {userData.phone} <br />
        </div>

        {/* <button 
          className='btn btn-warning m-2'
          onClick={ () => console.log("full-info",userData)}
        >
          Full-info
        </button> */}

        <Link to="/">
        <button className='btn btn-danger m-2'> Back </button>
        </Link>
      
      </div>
    </div>
  );
};

export default ViewUser;
