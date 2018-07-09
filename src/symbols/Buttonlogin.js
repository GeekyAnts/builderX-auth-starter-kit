import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default class Buttonlogin extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 266,
    height: 74
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.root, this.props.style]}
        disabled={this.props.disabled}
        onPress={this.props.root ? this.props.root : null}
      >
        <Text style={styles.signIn}>Sign In</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(255,255,255,0.2794384057971014)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 1,
    shadowRadius: 10
  },
  signIn: {
    top: "37.84%",
    left: "39.85%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    fontFamily: "Avenir-Medium",
    letterSpacing: -0.25,
    color: "rgba(196,113,244,1)"
  }
});
