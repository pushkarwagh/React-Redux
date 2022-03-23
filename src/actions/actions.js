import { ADD_USER, EDIT_USER, DELETE_USER, VIEW_USER } from './actiontypes';

export const AddUser = (newUser) => {
  console.log('num',newUser)
    return{
      type: ADD_USER,
      payload: newUser
    }  
}

export const EditUser = (user) => {
  return{
    type: EDIT_USER,
    payload: user
  }  
}

export const DeleteUser = (id) => {
  return{
    type: DELETE_USER,
    payload: id
  }  
}

export const ViewUser = (user) => {
  return{
    type: VIEW_USER,
    payload: user
  }  
}

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