import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import Icon from "@builderx/icons";
import { View, StyleSheet, Text, TextInput } from "react-native";

export default class UntitledSymbol extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 49,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.rect1}>
          <Icon
            style={styles.icon}
            name={this.props.iconName ? this.props.iconName : "mail-outline"}
            type={this.props.iconType ? this.props.iconType : "MaterialIcons"}
          />
          <TextInput
            style={styles.textInput}
            placeholder={
              this.props.textInput ? this.props.textInput : "Username"
            }
            secureTextEntry={
              this.props.secureTextEntry ? this.props.secureTextEntry : false
            }
            onChangeText={this.props.onChangeText}
            onBlur={this.props.onBlur}
            onEndEditing={this.props.onEndEditing}
          />
        </View>
        <Text
          style={[
            styles.textNaN,
            {
              color: this.props.errorText
                ? "rgba(208,2,27,1)"
                : "rgba(155,155,155,0)"
            }
          ]}
        >
          {this.props.errorText}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  input: {
    flexDirection: "row"
  },
  rect1: {
    flexDirection: "row"
  },
  textNaN: {
    alignSelf: "flex-end",
    paddingTop: 4,
    paddingRight: 8
  },

  textInput: {
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "Avenir-Light",
    letterSpacing: -0.22,
    color: "rgba(0,0,0,1)",
    height: 50,
    flex: 1,
    marginLeft: 12
  },
  line: {
    width: "100.26%",
    height: "11.76%",

    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  icon: {
    backgroundColor: "transparent",
    color: "rgba(155,155,155,1)",
    fontSize: 30,
    alignSelf: "center",
    marginLeft: 16
  }
});
