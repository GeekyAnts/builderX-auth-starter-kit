import React, { Component } from "react";
import Icon from "@builderx/icons";

import { View, StyleSheet, Text, TextInput } from "react-native";

export default class Username extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 378,
    height: 49
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Icon
          style={styles.icon}
          name={this.props.iconName ? this.props.iconName : "account"}
          type={
            this.props.iconType ? this.props.iconType : "MaterialCommunityIcons"
          }
        />
        <TextInput
          style={styles.textInput}
          placeholder={this.props.textInput ? this.props.textInput : "Username"}
          placeholderTextColor="#FFF"
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row"
  },

  textInput: {
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "Avenir-Light",
    letterSpacing: -0.22,
    color: "rgba(255,255,255,1)",
    flex: 1,
    alignSelf: "stretch",
    marginLeft: 12
  },
  icon: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    alignSelf: "center",
    marginLeft: 16
  }
});
