import { AsyncStorage } from "react-native";
import { userConstants } from "../_constants";

// let user = JSON.parse(AsyncStorage.getItem("user"));
let user = {
  id: 1,
  username: "Test",
  password: "test",
  firstName: "Test",
  lastName: "User"
};
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
