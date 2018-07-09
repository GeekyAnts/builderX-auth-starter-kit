import React from "react";
import { YellowBox, AsyncStorage } from "react-native";
import { Provider } from "react-redux";

import SignUp from "./src/screens/SignUp";
import Login from "./src/screens/Login";

import { Font } from "expo";

import { store } from "./src/_helpers";

import Home from "./src/screens/Home";
import { StackNavigator, DrawerNavigator } from "react-navigation";
let user = [
  {
    id: 1,
    username: "Test",
    password: "test",
    email: "Test"
  }
];
const DrawerNavigation = DrawerNavigator({
  SignUp: {
    screen: SignUp
  },
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    SignUp: {
      screen: SignUp
    },
    Login: {
      screen: Login
    },
    Home: {
      screen: Home
    }
  },
  {
    headerMode: "none"
  }
);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
  }
  storeData = async user => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };
  async componentDidMount() {
    this.storeData(user);
    // AsyncStorage.setItem("user", JSON.stringify(users));
    await Font.loadAsync({
      "Avenir-Medium": require("./src/assets/fonts/Arial.ttf")
    });

    this.setState({ fontLoaded: true });
    console.warn("Fallback font is being used. Please check App.js file.");
  }
  render() {
    return this.state.fontLoaded ? (
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    ) : (
      <Expo.AppLoading />
    );
  }
}
