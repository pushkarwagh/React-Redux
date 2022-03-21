import { ADD_USER, EDIT_USER, DELETE_USER } from './actiontypes';

export const AddUser = (num) => {
  console.log('num',num)
    return{
      type: ADD_USER,
      payload: num
    }  
}

export const EditUser = (num) => {
  return{
    type: EDIT_USER,
    payload: num
  }  
}

export const DeleteUser = (num) => {
  return{
    type: DELETE_USER,
    payload: num
  }  
}