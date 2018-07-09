import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default class Signin extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 267,
    height: 73
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.root, this.props.style]}
        disabled={this.props.disabled ? this.props.disabled : false}
        onPress={this.props.root ? this.props.root : null}
      >
        <Text style={styles.signIn1}>Sign Up</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {},
  signIn1: {
    top: "38.36%",
    left: "38.39%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    letterSpacing: -0.25,
    color: "rgba(255,255,255,1)"
  }
});
