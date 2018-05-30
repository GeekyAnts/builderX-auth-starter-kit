import React, { Component } from "react";

import Button11 from "../symbols/button11";

import HelperTextBox from "../symbols/helperTextBox";
import HelperTextBox1 from "../symbols/helperTextBox1";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { authUser } from "../actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onSubmit() {
    this.props.authUser(this.state.username, this.state.password);
  }

  render() {
    console.log(this.props.data, "test");
    return (
      <View style={styles.root}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
        <View style={styles.rect}>
          <HelperTextBox
            style={styles.helperTextBox}
            onChangeText={e => this.setState({ username: e })}
          />
          <HelperTextBox1
            style={styles.helperTextBox1}
            onChangeText={e => this.setState({ password: e })}
          />
          <Button11
            style={styles.button11}
            buttonContent="LOGIN"
            onPress={() => {
              this.onSubmit();
              this.props.navigation.push("Home");
            }}
          />
        </View>
      </View>
    );
  }
}
function bindAction(dispatch) {
  return {
    authUser: (url, abc) => dispatch(authUser(url, abc))
  };
}

const mapStateToProps = state => ({
  data: state
});
export default connect(mapStateToProps, bindAction)(Login);
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  rect: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
    padding: 20,
    opacity: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  stackedLabel: {
    top: 113.17,
    left: 45,
    position: "absolute",
    width: 375
  },

  button11: {
    height: 37,
    marginTop: 20,
    backgroundColor: "rgba(0,189,213,1)",
    opacity: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  helperTextBox: {
    alignSelf: "stretch"
  },
  helperTextBox1: {
    alignSelf: "stretch"
  },
  image: {
    width: 178,
    height: 178,
    marginTop: 60,
    alignSelf: "center"
  }
});