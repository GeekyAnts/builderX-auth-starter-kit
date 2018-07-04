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
      "Aller-Bold": require("./src/assets/fonts/Aller_Std_Bd.ttf"),
      "Avenir-Heavy": require("./src/assets/fonts/AEH.ttf"),
      "Avenir-Light": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Avenir-Medium": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Avenir-Book": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Avenir-Oblique": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Avenir-HeavyOblique": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Avenir-MediumOblique": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Avenir-BookOblique": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Avenir-BlackOblique": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Avenir-Black": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Avenir-Roman": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      Roboto: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      AlTarikh: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      AlNile: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "AppleBraille-Outline8Dot": require("./src/assets/fonts/Apple_Braille_Outline_8_Dot.ttf"),
      "": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      AppleGothic: require("./src/assets/fonts/AppleGothic.ttf"),
      "Arial-Black": require("./src/assets/fonts/Arial_Black.ttf"),
      "Arial-BoldMT": require("./src/assets/fonts/Arial_Bold.ttf"),
      "Apple-Chancery": require("./src/assets/fonts/Apple_Chancery.ttf"),
      "AppleSDGothicNeo-Heavy": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "ArialHebrew-Light": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      AppleColorEmoji: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      AppleSymbols: require("./src/assets/fonts/Apple_Symbols.ttf"),
      AppleMyungjo: require("./src/assets/fonts/AppleMyungjo.ttf"),
      "ArialNarrow-Italic": require("./src/assets/fonts/Arial_Narrow_Italic.ttf"),
      "AvenirNextCondensed-DemiBoldItalic": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "AvenirNext-UltraLight": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      Baghdad: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "BanglaMN-Bold": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      Baskerville: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      Beirut: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      BanglaSangamMN: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "BodoniSvtyTwoOSITCTT-Book": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      Chalkboard: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Cochin-BoldItalic": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "ChalkboardSE-Regular": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      Chalkduster: require("./src/assets/fonts/Chalkduster.ttf"),
      ComicSansMS: require("./src/assets/fonts/Comic_Sans_MS.ttf"),
      "CorsivaHebrew-Bold": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      DamascusMedium: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Courier-BoldOblique": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "CourierNewPS-BoldMT": require("./src/assets/fonts/Courier_New_Bold.ttf")
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
