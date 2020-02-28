import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import { StyleSheet } from "react-native";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default class Routes extends Component {
  render() {
    return (
      <Router
      // // leftButtonIconStyle={{ tintColor: "green" }}
      // barButtonIconStyle={{ tintColor: "green" }}
      // // barButtonIconStyle={styles.barButtonIconStyle}
      // hideNavBar={true}
      // navigationBarStyle={{ backgroundColor: "#650225" }}
      // titleStyle={{ color: "white", fontWeight: "bold" }}
      >
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" />
          <Scene key="signup" component={Signup} title="Sign up" />
        </Stack>
      </Router>
    );
  }
}

// const styles = {
//   barButtonIconStyle: {
//     tintColor: "black"
//   }
// };
const styles = StyleSheet.create({
  barButtonIconStyle: {
    tintColor: "#fff"
  }
});
