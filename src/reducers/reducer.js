import { ADD_USER } from '../actions/actiontypes';

const initialState = {
  loading: null,
  users: [],
  adduser : '',
  error: ''
}
const userReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_USER:
      return {
        adduser:action.payload
      }
      case "FETCHUSERREQUEST":
          return {
              ...state,
              loading: true
          }
      case "FETCHUSERSUCCESS":
          return {
              loading: false,
              users: action.payload,
              error: ''
          }
      case "FETCHUSERERROR":
          return {
              loading: false,
              users: [],
              error: action.payload,
          }
      default: return state;
  }
}
export default userReducer;