import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class button11 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 36,
    width: 100,
    defaultHeight: "fixed",
    defaultWidth: "auto"
  };
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.root, this.props.style]}
      >
        <Text style={styles.buttonContent}>
          {this.props.buttonContent ? this.props.buttonContent : "BUTTON"}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",

    backgroundColor: "#3F51B5",
    minWidth: 88,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  buttonContent: {
    fontSize: 14,
    fontWeight: "200",
    fontFamily: "Roboto",
    color: "rgba(255,255,255,1)"
  }
});
