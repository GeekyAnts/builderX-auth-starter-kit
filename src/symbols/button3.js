import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default class button3 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 56,
    width: 56,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.root, this.props.style]}
      >
        <Icon style={styles.icon} name="close" type="MaterialCommunityIcons" />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#3F51B5",
    minWidth: 40,
    minHeight: 40
  },
  icon: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 30
  }
});
