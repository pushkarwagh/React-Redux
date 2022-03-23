import { fetchUserError, fetchUserRequest, fetchUserSuccess } from "./actions"
import axios from 'axios';


export const userFetch = () => {
 return (dispatch) => {
    dispatch(fetchUserRequest)
      
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      if (response && response.data) {
        dispatch(fetchUserSuccess(response.data));
      }
    })
    .catch((error) => {
        console.log("error",error)
        dispatch(fetchUserError(error.message));
      })

 };
}

// export const userFetch = () => {
//   return async dispatch => {
//       try {
//           dispatch(fetchUserRequest);
//           const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//           dispatch(fetchUserSuccess(response.data));
//           console.log(response.data);
//       }
//       catch(error){
//           dispatch(fetchUserError(error.message));
//       }
//   }
// }