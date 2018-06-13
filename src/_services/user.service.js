import { AsyncStorage } from "react-native";
import { authHeader, fakeFetch } from "../_helpers";

export const userService = {
  login,
  logout,
  getAll
};

function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  };

  return fakeFetch("/users/authenticate", requestOptions)
    .then(
      response => {
        if (!response.ok) {
          return Promise.reject(response.statusText);
        }

        return response.json();
      }
      // error => {
      //   console.log("error Shivtest");
      // }
    )
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        AsyncStorage.setItem("user", JSON.stringify(user));
      }

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  AsyncStorage.removeItem("user");
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch("/users", requestOptions).then(handleResponse);
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response.json();
}
