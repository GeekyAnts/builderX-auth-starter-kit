import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { signUp } from "./signUp.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
  authentication,
  signUp,
  users,
  alert
});

export default rootReducer;
