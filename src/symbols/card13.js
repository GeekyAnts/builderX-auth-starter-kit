import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default class card13 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 272,
    width: 359,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          style={styles.cardItemImagePlace}
          source={require("../assets/cardImage3.jpg")}
        />
        <View style={styles.body}>
          <TouchableOpacity style={styles.button1}>
            <Icon
              style={styles.icon1}
              name="heart"
              type="MaterialCommunityIcons"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Icon
              style={styles.icon2}
              name="book"
              type="MaterialCommunityIcons"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button3}>
            <Icon
              style={styles.icon3}
              name="share"
              type="MaterialCommunityIcons"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    padding: 16,
    borderWidth: 1,
    borderColor: "#CCC",
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
    flex: 1,
    backgroundColor: "#ccc",
    minWidth: 240,
    minHeight: 240
  },
  body: {
    padding: 8,
    paddingLeft: 16
  },
  button1: {
    marginTop: 8,
    marginBottom: 8,
    padding: 8
  },
  icon1: {
    opacity: 0.5,
    color: "#000",
    fontSize: 24
  },
  button2: {
    marginTop: 8,
    marginBottom: 8,
    padding: 8
  },
  icon2: {
    opacity: 0.5,
    color: "#000",
    fontSize: 24
  },
  button3: {
    marginTop: 8,
    marginBottom: 8,
    padding: 8
  },
  icon3: {
    opacity: 0.5,
    color: "#000",
    fontSize: 24
  }
});
