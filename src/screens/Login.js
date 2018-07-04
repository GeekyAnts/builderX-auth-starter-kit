import React, { Component } from "react";

import Username from "../symbols/Username";
import Password from "../symbols/Password";
import Buttonlogin from "../symbols/Buttonlogin";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import { connect } from "react-redux";
import { userActions } from "../_actions";

class Login extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: "",
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
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password, this.props.navigation));
    }
  }
  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <View style={styles.root}>
        <ImageBackground
          style={styles.bg}
          source={require("../assets/Gradient_svWK4s9.png")} /*gradient: {"activeIndex":2,"from":{"x":0.5,"y":0},"gradientType":"LinearGradient","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(158,74,207,1)","style":{}},{"offset":1,"stopColor":"rgba(197,89,161,1)","style":{}}],"style":{},"to":{"x":0.5,"y":1}}*/
          /*locked*/
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
          <Text style={styles.text}>Bx</Text>
        </View>
        <View style={styles.login}>
          <Username
            style={styles.username}
            // error={submitted && !username}
            onChangeText={e => this.handleChange(e, "username")}
          />
          <Password
            style={styles.username2}
            textInput="Password"
            iconType="MaterialCommunityIcons"
            iconName="lock-outline"
            // error={submitted && !password}
            onChangeText={e => this.handleChange(e, "password")}
          />
        </View>
        <Buttonlogin style={styles.buttonlogin} root={this.handleSubmit} />
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            this.props.navigation.pop();
          }}
        >
          <Text style={styles.notSetUpYet}>Not set up yet?</Text>
          <Text style={styles.signUp1}>Sign Up</Text>
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

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  bg: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "transparent"
  },

  login: {
    position: "absolute",

    left: 0,
    height: 166.91,
    right: 0,
    top: "43.1%"
  },

  button2: {
    position: "absolute",
    top: "90.02%",
    left: 93,
    height: "2.71%",
    right: 93
  },
  notSetUpYet: {
    position: "absolute",
    top: "10.53%",
    left: "0.00%",
    opacity: 0.5,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "Avenir-Medium",
    letterSpacing: -0.22
  },
  signUp1: {
    position: "absolute",
    top: "4.55%",
    left: "55.5%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "Avenir-Light",
    letterSpacing: -0.22
  },
  username: {
    position: "absolute",
    // top: "-7.14%",
    left: "0%",
    height: "35.71%",
    width: "100%",
    borderWidth: 0,
    borderColor: "green",
    borderBottomColor: "rgba(155,155,155,1)",
    borderBottomWidth: 1
  },
  buttonlogin: {
    position: "absolute",
    top: "77.46%",
    height: "8.98%",
    left: 46.5,
    right: 46.5
  },
  text: {
    top: 130.67,
    position: "absolute",
    backgroundColor: "transparent",
    fontFamily: "AvenirNext-Italic",
    fontSize: 90,
    color: "rgba(255,255,255,1)"
  },
  username2: {
    left: "0%",
    top: "50%",
    width: "100%",
    height: 51,
    position: "absolute",
    borderWidth: 0,
    borderColor: "green",
    borderBottomColor: "rgba(155,155,155,1)",
    borderBottomWidth: 1
  }
});
