import React, { Component } from "react";

import Icon from "@builderx/icons";
import Card1 from "../symbols/card1";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { NavigationActions } from "react-navigation";

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "SignUp" })]
});
export default class Untitled3 extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <View style={styles.rect14}>
          <View style={styles.rect15}>
            <View style={styles.rect16} />
            <View
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: "absolute",
                justifyContent: "center"
              }}
              pointerEvents="box-none" /*center*/
            >
              <Icon
                style={styles.icon}
                name="power"
                type="MaterialCommunityIcons"
                onPress={() => {
                  this.props.navigation.dispatch(resetAction);
                }}
              />
            </View>
          </View>
          <View
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              position: "absolute",
              alignItems: "center",
              justifyContent: "center"
            }}
            pointerEvents="box-none" /*center*/
          >
            <Text style={styles.text2}>Home</Text>
          </View>
        </View>
        <ScrollView
          style={styles.scrollArea}
          horizontal={false}
          contentContainerStyle={styles.ScrollView1}
        >
          <Card1 style={styles.card1} />
          <Card1 style={styles.card1} />
          <Card1 style={styles.card1} />
          <Card1 style={styles.card1} />
          <Card1 style={styles.card1} />
          <Card1 style={styles.card1} />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  rect: {
    top: 0,
    left: "0%",
    bottom: 0,
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(179,79,197,1)"
  },

  rect14: {
    top: "4.06%",
    left: 0,
    right: 0,
    height: "7.88%",
    position: "absolute"
  },
  rect15: {
    top: "-1.3%",
    left: "0%",
    width: "100%",
    height: "101.3%",
    position: "absolute"
  },
  rect16: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute",
    backgroundColor: "transparent"
  },

  text2: {
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    letterSpacing: 0.15,
    color: "rgba(255,255,255,1)"
  },
  icon: {
    left: 17.87,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  scrollArea: {
    height: 715,
    top: 97,
    left: 0,
    position: "absolute",
    right: 0,
    padding: 10
  },
  card1: {
    width: 359
  },
  ScrollView1: {
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
