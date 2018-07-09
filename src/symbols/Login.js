import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Login extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 268,
    height: 60
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.rectangle} />
        <Text style={styles.signIn}>Login</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {},
  rectangle: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(255,255,255,0.2794384057971014)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 1,
    shadowRadius: 12
  },
  signIn: {
    top: "35.83%",
    left: "41.79%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    letterSpacing: -0.25,
    color: "rgba(196,113,244,1)"
  }
});
