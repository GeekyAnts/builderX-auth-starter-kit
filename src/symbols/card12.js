import React, { Component } from "react";
import Button10 from "./button10";
import { View, Text, Image, StyleSheet } from "react-native";

export default class card12 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 206,
    width: 359,
    defaultHeight: "auto",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.cardBody}>
          <View style={styles.bodyContent}>
            <Text style={styles.subtitleStyle}>
              {this.props.subtitleStyle ? (
                this.props.subtitleStyle
              ) : (
                "Lorem Ipsum\xA0is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\xA0"
              )}
            </Text>
          </View>
          <Image
            style={styles.cardItemImagePlace}
            source={require("../assets/cardImage8.jpg")}
          />
        </View>
        <Button10 style={styles.button10} />
        <Image style={styles.image} source={require("../assets/image5.png")} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
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
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    flex: 1,
    padding: 16,
    paddingTop: 24
  },
  subtitleStyle: {
    opacity: 0.5,
    fontSize: 11,
    fontFamily: "Roboto",
    lineHeight: 16,
    color: "#000",
    width: 174.63,
    height: 47,
    textAlign: "left"
  },
  cardItemImagePlace: {
    width: 120,
    height: 120,
    backgroundColor: "#ccc",
    margin: 16
  },
  button10: {
    top: 104.08,
    left: 16.95,
    position: "absolute",
    height: 36
  },
  image: {
    top: 546.85,
    left: 219.97,
    width: 117,
    height: 126,
    position: "absolute"
  }
});
