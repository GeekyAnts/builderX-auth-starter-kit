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
      submitted: false,
      usenameError: "",
      emailError: "",
      passwordError: "",
      inValid: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, name) {
    this.setState({ [name]: e });
  }

  validateValues(e, name) {
    switch (name) {
      case "usename":
        let usename = !/^[A-Za-z0-9 ]{2,20}$/.test(e);
        this.setState({ usenameError: usename });
        break;
      case "email":
        let email = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e);
        this.setState({ emailError: email });
        break;
      case "password":
        let password = !/^[a-zA-Z0-9._%+-~`@!? ]{4,20}$/.test(e);
        this.setState({ passwordError: password });
        break;
      default:
        break;
    }
    if (
      !this.state.usenameError &&
      !this.state.emailError &&
      !this.state.passwordError
    ) {
      this.setState({ inValid: false });
    }
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
    const { username, password, submitted } = this.state;
    return (
      <View style={styles.root}>
        <StatusBar
          barStyle="light-content"
          style={styles.statusBar}
          backgroundColor="rgba(90,17,117,1)"
        />
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
          <Icon style={styles.icon2} name="md-person-add" type="Ionicons" />
        </View>
        <View style={styles.header}>
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
        </View>
        <View style={styles.rect7}>
          <UntitledSymbol
            iconName="account"
            textInput="Username"
            style={styles.username}
            iconType="MaterialCommunityIcons"
            errorText={this.state.usenameError ? "Invalid Username" : ""}
            onChangeText={e => this.handleChange(e, "username")}
            onBlur={() => this.validateValues(this.state.username, "usename")}
          />
          <UntitledSymbol
            style={styles.email}
            iconName="email-outline"
            textInput="Email"
            iconType="MaterialCommunityIcons"
            errorText={this.state.emailError ? "Invalid Email" : ""}
            onChangeText={e => this.handleChange(e, "email")}
            onBlur={() => this.validateValues(this.state.email, "email")}
          />
          <UntitledSymbol
            style={styles.password}
            iconName="lock-outline"
            textInput="Password"
            secureTextEntry={true}
            errorText={this.state.passwordError ? "Invalid Password" : ""}
            onChangeText={e => this.handleChange(e, "password")}
            onBlur={() => this.validateValues(this.state.password, "password")}
          />
        </View>
        <Signin
          style={styles.signin}
          disabled={this.state.inValid}
          root={this.handleSubmit}
        />
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

const mapStateToProps = state => ({
  data: state
});
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
    backgroundColor: "rgba(179,79,197,1)"
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
    top: "74.13%"
  },
  email: {
    top: "37%",
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
    margin: 0,
    fontWeight: "bold",
    color: "#999"
  }
});
