import React, { Component } from "react";

import Card12 from "../symbols/card12";
import Swiper from "@builderx/react-native-swiper";

import Icon from "@builderx/icons";
import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";

export default class Untitled3 extends Component {
  render() {
    return (
      <View style={styles.root}>
        <ImageBackground
          style={styles.rect}
          source={require("../assets/Gradient_svWK4s9.png")} /*gradient: {"activeIndex":2,"from":{"x":0.5,"y":0},"gradientType":"LinearGradient","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(130,33,187,1)","style":{}},{"offset":1,"stopColor":"rgba(207,112,176,1)","style":{}}],"style":{},"to":{"x":0.5,"y":1}}*/
        />
        <Swiper
          style={styles.carousel2}
          dotStyle={{}}
          activeDotStyle={{}}
          buttonTextStyle={{}}
          index={0}
        >
          <View style={styles.rect11}>
            <Image
              style={styles.image5}
              source={require("../assets/image3.png")}
            />
          </View>
          <View style={styles.rect12} />
          <View style={styles.rect13} />
        </Swiper>
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
                  this.props.navigation.pop();
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
            <Text style={styles.text2}>Matching Profile</Text>
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
  rect: {
    top: 0,
    left: "0%",
    bottom: 0,
    width: "100%",
    position: "absolute",
    backgroundColor: "transparent"
  },
  card122: {
    top: 531.54,
    left: 17.5,
    right: 17.5,
    height: 155,
    position: "absolute"
  },
  card123: {
    top: 694,
    left: 18,
    right: 18,
    height: 155,
    position: "absolute"
  },
  carousel2: {
    top: 105,
    left: 18,
    right: 18,
    height: 260,
    position: "absolute"
  },
  rect11: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1
  },
  image5: {
    top: 0,
    left: 0,
    right: 0,
    height: 211,
    position: "absolute"
  },
  rect12: {
    flex: 1,
    backgroundColor: "#2196F3"
  },
  rect13: {
    flex: 1,
    backgroundColor: "#009688"
  },
  card124: {
    top: 369,
    left: 18,
    right: 18,
    height: 155,
    position: "absolute"
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
    fontSize: 16,
    fontFamily: "Avenir-Heavy",
    letterSpacing: 0.15,
    color: "rgba(255,255,255,1)"
  },
  icon: {
    left: 17.87,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  }
});
