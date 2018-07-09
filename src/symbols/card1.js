import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default class card1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 282,
    width: 359,
    defaultHeight: "auto",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          style={styles.cardItemImagePlace}
          source={require("../assets/cardImage10.jpg")}
        />
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            BuilderX is a screen design tool which codes React Native for you.
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "rgba(179,79,197,1)",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    backgroundColor: "rgba(179,79,197,0.3)",
    height: 210
  },
  body: {
    padding: 16
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#424242"
  }
});
