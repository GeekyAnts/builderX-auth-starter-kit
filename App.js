import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
import { Provider } from "react-redux";
import Login from "./src/screens/Login";

import { store } from "./src/_helpers";

import Home from "./src/screens/Home";
import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
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
      isLoading: false,
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Arial-Black": require("./src/assets/fonts/Arial_Black.ttf")
    });

    this.setState({ fontLoaded: true });
    console.warn("Fallback font is being used. Please check App.js file.");
  }
  render() {
    console.disableYellowBox = true;
    return this.state.fontLoaded || this.state.isLoading ? (
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    ) : (
      <Expo.AppLoading />
    );
  }
}
