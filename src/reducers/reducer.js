//import { useEffect } from "react";
import { ADD_USER, EDIT_USER, DELETE_USER, VIEW_USER }  from "../actions/actiontypes";

const initialState = {
  loading: null,
  users: [],
  adduser: "",
  error: "",
};

const UserReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
      };

    case EDIT_USER:
      return {
        ...state,
        users: action.payload
        
      };

    case DELETE_USER:
      const delUser = state.users.filter(
        (user) => user.id != action.payload );
      return {
        ...state,
         users:delUser
      };

      case VIEW_USER:
      return {
        users: action.payload,
        
      };

    case "FETCHUSERREQUEST":
      return {
        ...state,
        loading: true,
      };

    case "FETCHUSERSUCCESS":
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    case "FETCHUSERERROR":
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
export default UserReducer;
