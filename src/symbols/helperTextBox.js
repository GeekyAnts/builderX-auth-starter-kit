import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default class helperTextBox extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 60,
    width: 375,
    defaultHeight: "auto",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TextInput
          style={[
            styles.inputStyle,
            {
              borderColor: this.props.error ? "rgba(208,2,27,1)" : "#D9D5DC",
              borderBottomWidth: this.props.error ? 0 : 1
            }
          ]}
          placeholder="Username"
          onChangeText={this.props.onChangeText}
        />
        <Text
          style={[
            styles.helper,
            {
              opacity: this.props.error ? 1 : 0
            }
          ]}
        >
          Error
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "transparent"
  },
  inputStyle: {
    alignSelf: "stretch",
    paddingTop: 8,
    paddingBottom: 8,

    fontSize: 16,
    fontFamily: "Roboto",
    lineHeight: 16,
    color: "#000",
    right: 0,
    height: 40
  },
  helper: {
    paddingTop: 8,
    fontFamily: "Roboto",
    textAlign: "left",
    color: "rgba(208,2,27,1)"
  }
});
