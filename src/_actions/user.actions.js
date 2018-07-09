import { Alert } from "react-native";
import { userConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const userActions = {
  signUp,
  login,
  logout,
  getAll,
  getFeeds
};

function signUp(username, password, email, navigation) {
  return dispatch => {
    dispatch(request({ username }));
    dispatch(alertActions.clear());

    userService.signUp(username, password, email).then(
      user => {
        Alert.alert("New User", "Added " + user.username + " Successfully");
        dispatch(success(user));
        dispatch(alertActions.success("New user added"));
        navigation.push("Login");
      },
      error => {
        Alert.alert("Failed", error);
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.SIGNUP_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.SIGNUP_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.SIGNUP_FAILURE, error };
  }
}

function login(username, password, navigation) {
  return dispatch => {
    dispatch(request({ username }));
    dispatch(alertActions.clear());

    userService.login(username, password).then(
      user => {
        dispatch(success(user));
        dispatch(alertActions.success("Logged In Successfully"));
        navigation.push("Home");
      },
      error => {
        Alert.alert("Failed", error);
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function getAll() {
  return dispatch => {
    dispatch(request());

    userService
      .getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error))
      );
  };

  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}
function getFeeds() {
  return dispatch => {
    userService.getFeed().then(
      feed => {
        return { type: userConstants.GETALL_FEED, feed };
      },
      error => {
        // dispatch(alertActions.error(error));
      }
    );
  };
}
