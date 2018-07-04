import { AsyncStorage } from "react-native";
import { userConstants } from "../_constants";

// _retrieveData = async () => {
//   try {
//     const value = await AsyncStorage.getItem("user");
//     if (value !== null) {
//       // We have data!!
//       return value;
//     }
//   } catch (error) {
//     // Error retrieving data
//     return;
//   }
// };
// let user = _retrieveData();

export function signUp(state = {}, action) {
  switch (action.type) {
    case userConstants.SIGNUP_REQUEST:
      return {
        registering: true
      };
    case userConstants.SIGNUP_SUCCESS:
      return {};
    case userConstants.SIGNUP_FAILURE:
      return {};
    default:
      return state;
  }
}
