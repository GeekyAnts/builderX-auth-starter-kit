import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class card4 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 435,
    width: 359,
    defaultHeight: "auto",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.cardItem1Style}>
          <View style={styles.left}>
            <Image
              style={styles.leftImage}
              source={require("../assets/cardImage5.jpg")}
            />
            <View style={styles.headerContent}>
              <Text style={styles.textStyle}>Title</Text>
              <Text style={styles.noteTextStyle}>Subhead</Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.cardItemImagePlace}
          source={require("../assets/cardImage6.jpg")}
        />
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            \n BuilderX is a screen design tool which codes React Native for
            you.\n{" "}
          </Text>
        </View>
        <View style={styles.actionBody}>
          <TouchableOpacity style={styles.actionButton1}>
            <Text style={styles.actionText1}>ACTION 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton2}>
            <Text style={styles.actionText2}>ACTION 2</Text>
          </TouchableOpacity>
        </View>
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
  cardItem1Style: {
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    padding: 16
  },
  left: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  leftImage: {
    width: 40,
    height: 40,
    backgroundColor: "#CCC",
    borderRadius: 20
  },
  headerContent: {
    justifyContent: "center",
    paddingLeft: 16
  },
  textStyle: {
    fontSize: 16,
    fontFamily: "Roboto",
    lineHeight: 20,
    color: "#000"
  },
  noteTextStyle: {
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "Roboto",
    lineHeight: 16,
    color: "#000"
  },
  cardItemImagePlace: {
    flex: 1,
    backgroundColor: "#ccc",
    minHeight: 210
  },
  body: {
    padding: 16
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#424242"
  },
  actionBody: {
    padding: 8
  },
  actionButton1: {
    height: 36,
    padding: 8
  },
  actionText1: {
    opacity: 0.9,
    fontSize: 14,
    color: "#000"
  },
  actionButton2: {
    height: 36,
    padding: 8
  },
  actionText2: {
    opacity: 0.9,
    fontSize: 14,
    color: "#000"
  }
});
