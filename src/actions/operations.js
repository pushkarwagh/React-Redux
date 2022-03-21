import React, { useState } from "react";
import axios from 'axios';


// export const userFetch = () =>
// {
//   return async dispatch => {
//     try{
//       dispatch()
//     }catch(){

//     }
//   }
// }
// export const Users = () => {
//   const [ user, setUser ] = useState([]);
//   const users = 
//   axios.get('https://reqres.in/api/users?page=2')
//   .then((response) => {
//     if (response && response.data) {
//       const users = response.data.items;
//       setUser( users );
//     }
//   })
//   .catch( (err) => console.log("error",err))
  
//   return users; 

  
// }

export const fetchUserRequest = () => {
  return {
      type: "FETCHUSERREQUEST",
  }
}

export const fetchUserSuccess = (users) => {
  return {
      type: "FETCHUSERSUCCESS",
      payload: users,
  }
}

export const fetchUserError = (error) => {
  return {
      type: "FETCHUSERERROR",
      payload: error,
  }
}

export const userFetch = () => {
  return async dispatch => {
      try {
          dispatch(fetchUserRequest);
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          dispatch(fetchUserSuccess(response.data));
          console.log(response.data);
      }
      catch(error){
          dispatch(fetchUserError(error.message));
      }
  }
}