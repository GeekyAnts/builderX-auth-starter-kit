export function userLogedIn(bool: boolean) {
  return {
    type: "USER_LOGED_IN",
    isLogedIn: bool
  };
}
export function fetchUser(username: String) {
  return {
    type: "FETCH_USER",
    username
  };
}
export function addNewUser(username: String, password: String) {
  console.log(username, password, "Shivtest");
  return {
    type: "ADD_NEW_USER",
    username,
    password
  };
}
export function authUser(username: String, password: String) {
  return {
    type: "AUTH_USER",
    username,
    password
  };
}
