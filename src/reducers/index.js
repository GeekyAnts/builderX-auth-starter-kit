const initialState = {
  username: "",
  password: "",
  isLogedIn: false
};

export default function(state: any = initialState, action: Function) {
  if (action.type === "FETCH_USER") {
    return {
      ...state,
      username: action.username
    };
  }
  if (action.type === "ADD_NEW_USER") {
    return {
      ...state,
      username: action.username,
      password: action.password
    };
  }
  if (action.type === "AUTH_USER") {
    return {
      ...state,
      username: action.username,
      password: action.password
    };
  }
  if (action.type === "USER_LOGED_IN") {
    return {
      ...state,
      isLogedIn: action.isLogedIn
    };
  }
  return state;
}
