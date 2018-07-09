import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet, Text } from "react-native";

export default class UntitledSymbol1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 42
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.email1}>Email</Text>
        <Svg
          style={styles.line1}
          viewBox="0 0 388.00 5.00"
          preserveAspectRatio="none"
        >
          <Path
            strokeWidth={1}
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            isClosed={false}
            d="M1.00 2.00 C386.00 2.00 386.00 2.00 386.00 2.00 "
            fillOpacity={0.1}
            strokeOpacity={0.1}
          />
        </Svg>
        <View style={styles.email2}>
          <Svg
            style={styles.fill14}
            viewBox="0 0 22.00 10.00"
            preserveAspectRatio="none"
          >
            <Path
              strokeWidth={0}
              fill="rgba(0,0,0,0)"
              isClosed={false}
              d="M0.00 0.00 C11.00 10.00 11.00 10.00 11.00 10.00 L22.00 0.00 "
            />
          </Svg>
          <Svg
            style={styles.stroke34}
            viewBox="0 0 24.00 12.00"
            preserveAspectRatio="none"
          >
            <Path
              strokeWidth={1}
              fill="transparent"
              stroke="rgba(0,0,0,1)"
              isClosed={false}
              d="M0.50 0.50 C11.50 10.50 11.50 10.50 11.50 10.50 L22.50 0.50 "
            />
          </Svg>
          <Svg
            style={styles.fill43}
            viewBox="0 0 22.00 18.00"
            preserveAspectRatio="none"
          >
            <Path
              strokeWidth={0}
              fill="rgba(0,0,0,0)"
              isClosed={true}
              d="M0.00 0.00 L22.00 0.00 L22.00 18.00 L0.00 18.00 L0.00 0.00 Z"
            />
          </Svg>
          <Svg
            style={styles.stroke53}
            viewBox="0 0 24.00 20.00"
            preserveAspectRatio="none"
          >
            <Path
              strokeWidth={1}
              fill="transparent"
              stroke="rgba(0,0,0,1)"
              isClosed={true}
              d="M0.50 0.50 L22.50 0.50 L22.50 18.50 L0.50 18.50 L0.50 0.50 Z"
            />
          </Svg>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {},
  email1: {
    top: "14.29%",
    left: "21.33%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 14,
    letterSpacing: -0.22,
    color: "rgba(0,0,0,1)"
  },
  line1: {
    top: "89.71%",
    left: "-0.13%",
    width: "100.26%",
    height: "11.76%",
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  email2: {
    top: "9.52%",
    left: "9.6%",
    width: "6.13%",
    height: "47.62%",
    position: "absolute",
    opacity: 0.3
  },
  fill14: {
    top: "2.63%",
    left: "2.17%",
    width: "95.65%",
    height: "52.63%",
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke34: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "57.89%",
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill43: {
    top: "2.63%",
    left: "2.17%",
    width: "95.65%",
    height: "94.74%",
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  stroke53: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
