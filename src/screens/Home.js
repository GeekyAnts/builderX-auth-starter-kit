import React, { Component } from "react";

import Button3 from "../symbols/button3";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect2}>
          <View style={styles.rect}>
            <Text style={styles.text}>Welcome to BuilderX</Text>
          </View>
          <View style={styles.rect3}>
            <Button3
              style={styles.button3}
              onPress={() => {
                this.props.navigation.pop();
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  rect2: {
    flex: 1
  },
  rect: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 30,
    color: "rgba(0,189,213,1)",
    fontFamily: "Arial-Black"
  },
  rect3: {
    alignSelf: "stretch",
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "0%",
    bottom: 42.64,
    width: "100%"
  },
  button3: {
    width: 56,
    height: 56,
    backgroundColor: "rgba(0,189,213,1)",
    opacity: 1,
    borderRadius: 50,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    alignItems: "center",
    justifyContent: "center"
  }
});
