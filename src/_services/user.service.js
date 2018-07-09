import { AsyncStorage } from "react-native";
import { authHeader, fakeFetch } from "../_helpers";

export const userService = {
  login,
  signUp,
  logout,
  getAll,
  getFeed
};
let appUsers = [
  {
    id: 1,
    username: "Test",
    password: "test",
    email: "Test"
  }
];
function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password, appUsers })
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
      //   console.log("error");
      // }
    )
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        storeData(user);
      }

      return user;
    });
}
function signUp(username, password, email) {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password, email, appUsers })
  };

  return fakeFetch("/users/signUp", requestOptions)
    .then(
      response => {
        if (!response.ok) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      }
      // error => {
      //   console.log("error");
      // }
    )
    .then(user => {
      // login successful if there's a jwt token in the response
      // if (user) {
      //   // store user details and jwt token in local storage to keep user logged in between page refreshes
      //   storeData(user);
      // }
      appUsers.push(user);
      return user;
    });
}

storeData = async user => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
};
function logout() {
  // remove user from local storage to log user out
  removeData();
}
removeData = async user => {
  try {
    await AsyncStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
};

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fakeFetch("/users", requestOptions).then(handleResponse);
}
function getFeed() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };
  return fetch(
    `https://source.unsplash.com/collection/1163637/480x480/?sig=221`
  )
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response;
    })
    .then(res => {
      return res.url;
    });
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response.json();
}
