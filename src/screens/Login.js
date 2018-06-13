import React, { Component } from "react";

import Button11 from "../symbols/button11";

import HelperTextBox from "../symbols/helperTextBox";
import HelperTextBox1 from "../symbols/helperTextBox1";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
// import { authUser } from "../actions";
import { userActions } from "../_actions";

class Login extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // onSubmit() {
  //   this.props.authUser(this.state.username, this.state.password);
  // }

  handleChange(e, name) {
    this.setState({ [name]: e });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password, this.props.navigation));
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;

    return (
      <View style={styles.root}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
        <ScrollView
          style={styles.rect}
          contentContainerStyle={styles.rectScroll}
        >
          <HelperTextBox
            style={styles.helperTextBox}
            onChangeText={e => this.handleChange(e, "username")}
          />
          <HelperTextBox1
            style={styles.helperTextBox1}
            onChangeText={e => this.handleChange(e, "password")}
          />
          <Button11
            style={styles.button11}
            buttonContent="LOGIN"
            onPress={
              this.handleSubmit
              //   () => {
              //   this.onSubmit();
              //   this.props.navigation.push("Home");
              // }
            }
          />
        </ScrollView>
      </View>
    );
  }
}
// function bindAction(dispatch) {
//   return {
//     authUser: (url, abc) => dispatch(authUser(url, abc))
//   };
// }

// const mapStateToProps = state => ({
//   data: state
// });

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  rect: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
    padding: 20,
    opacity: 1
  },
  rectScroll: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  stackedLabel: {
    top: 113.17,
    left: 45,
    position: "absolute",
    width: 375
  },

  button11: {
    height: 37,
    marginTop: 20,
    backgroundColor: "rgba(0,189,213,1)",
    opacity: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  helperTextBox: {
    alignSelf: "stretch"
  },
  helperTextBox1: {
    alignSelf: "stretch"
  },
  image: {
    width: 178,
    height: 178,
    marginTop: 60,
    alignSelf: "center"
  }
});
