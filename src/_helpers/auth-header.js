import { AsyncStorage } from "react-native";
export function authHeader() {
  // return authorization header with jwt token
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        // We have data!!
        return value;
      }
    } catch (error) {
      // Error retrieving data
      return;
    }
  };
  let user = _retrieveData();

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}
