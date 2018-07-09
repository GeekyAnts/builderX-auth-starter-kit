import React, { Component } from "react";

import Username from "../symbols/Username";
import Password from "../symbols/Password";
import Buttonlogin from "../symbols/Buttonlogin";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

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
      submitted: false,
      usenameError: false,
      passwordError: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, name) {
    this.setState({ [name]: e });
  }
  validateValues(e, name) {
    console.log(e, name, "blur");
    switch (name) {
      case "usename":
        let usename = !/^[A-Za-z0-9 ]{2,20}$/.test(e);
        this.setState({ usenameError: usename });
        break;
      case "password":
        let password = !/^[a-zA-Z0-9._%+-~`@!? ]{4,20}$/.test(e);
        this.setState({ passwordError: password });
        break;
      default:
        break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password, this.props.navigation));
    } else Alert.alert("Failed", "Enter Valid Username and Password");
  }
  render() {
    const { username, password, submitted } = this.state;
    return (
      <View style={styles.root}>
        <View style={styles.bg} />
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
            errorText={this.state.usenameError ? "Invalid Username" : ""}
            onChangeText={e => this.handleChange(e, "username")}
            onBlur={() => this.validateValues(this.state.username, "usename")}
          />
          <Password
            style={styles.username2}
            textInput="Password"
            iconType="MaterialCommunityIcons"
            iconName="lock-outline"
            errorText={this.state.passwordError ? "Invalid Password" : ""}
            onChangeText={e => this.handleChange(e, "password")}
            onBlur={() => this.validateValues(this.state.password, "password")}
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

const mapStateToProps = state => ({
  data: state
});

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
    backgroundColor: "rgba(179,79,197,1)"
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
    fontWeight: "bold",
    fontFamily: "Avenir-Light",
    letterSpacing: -0.22
  },
  username: {
    position: "absolute",
    // top: "-7.14%",
    left: "0%",
    height: "29.94%",
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    top: 0
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
    top: "49.7%",
    height: "29.94%",
    width: "100%",
    position: "absolute",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
});
