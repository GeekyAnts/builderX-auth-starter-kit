import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../_actions";

import Signin from "../symbols/Signin";
import UntitledSymbol from "../symbols/UntitledSymbol";
import Icon from "@builderx/icons";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity
} from "react-native";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, name) {
    this.setState({ [name]: e });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password, email } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(
        userActions.signUp(username, password, email, this.props.navigation)
      );
    }
  }
  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <View style={styles.root}>
        <StatusBar
          barStyle="light-content"
          style={styles.statusBar}
          backgroundColor="rgba(90,17,117,1)"
        />
        <ImageBackground
          style={styles.bg}
          source={require("../assets/Gradient_svWK4s9.png")} /*gradient: {"activeIndex":2,"from":{"x":0.5,"y":0},"gradientType":"LinearGradient","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(130,33,187,1)","style":{}},{"offset":1,"stopColor":"rgba(215,116,183,1)","style":{}}],"style":{},"to":{"x":0.5,"y":1}}*/
        />
        <View
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: "absolute",
            alignItems: "center"
          }}
          pointerEvents="box-none" /*center*/
        >
          <Icon style={styles.icon2} name="md-person-add" type="Ionicons" />
        </View>
        <View style={styles.header}>
          <Icon
            style={styles.icon3}
            name="menu"
            type="MaterialCommunityIcons"
          />
          <View
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              position: "absolute",
              alignItems: "center",
              justifyContent: "center"
            }}
            pointerEvents="box-none" /*center*/
          >
            <Text style={styles.planner}>Create Account</Text>
          </View>
          <Icon
            style={styles.icon4}
            name="check"
            type="MaterialCommunityIcons"
          />
        </View>
        <View style={styles.rect7}>
          <UntitledSymbol
            iconName="account"
            textInput="Username"
            style={styles.username}
            iconType="MaterialCommunityIcons"
            onChangeText={e => this.handleChange(e, "username")}
          />
          <UntitledSymbol
            style={styles.email}
            iconName="email-outline"
            textInput="Email"
            iconType="MaterialCommunityIcons"
            onChangeText={e => this.handleChange(e, "email")}
          />
          <UntitledSymbol
            style={styles.password}
            iconName="lock-outline"
            textInput="Password"
            secureTextEntry={true}
            onChangeText={e => this.handleChange(e, "password")}
          />
        </View>
        <Signin style={styles.signin} root={this.handleSubmit} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.push("Login");
          }}
        >
          <Text style={styles.text}>Go To Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

export default connect(mapStateToProps)(SignUp);

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  bg: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "37.48%",
    width: "100.00%",
    backgroundColor: "transparent"
  },

  header: {
    position: "absolute",
    top: 32.07,
    left: 0,
    height: "9.60%",
    right: 0
  },

  planner: {
    position: "absolute",

    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "Avenir-Heavy",
    letterSpacing: 0.15
  },

  statusBar: {},

  signin: {
    position: "absolute",
    top: "76.94%",

    left: 54.01,
    right: 54.04,
    backgroundColor: "rgba(179,79,197,1)",
    opacity: 1,
    borderWidth: 0,
    borderColor: "green",
    borderRadius: 50,
    bottom: 114.17
  },

  rect7: {
    height: "22.51%",
    top: 344,
    left: 0,
    position: "absolute",
    right: 0
  },
  username: {
    top: "0%",
    left: 0,
    right: 0,
    height: "27.32%",
    position: "absolute"
  },
  icon2: {
    top: 173.39,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 83
  },
  icon4: {
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    top: 20,
    right: 16.99
  },
  icon3: {
    top: 20,
    left: 14,
    width: 39,
    height: 38,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  password: {
    left: 0,
    right: 0,
    height: 51,
    position: "absolute",
    top: "72.13%"
  },
  email: {
    top: "35%",
    left: 0,
    right: 0,
    height: 51,
    position: "absolute"
  },
  button: {
    height: 31,
    top: 721,
    left: 139,
    position: "absolute",
    right: 139,
    justifyContent: "center",
    padding: 0,
    alignItems: "center"
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
    margin: 0
  }
});
