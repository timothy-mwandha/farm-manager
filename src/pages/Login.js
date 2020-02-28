import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Keyboard
} from "react-native";

import { Actions } from "react-native-router-flux";

import Form from "../components/Form";

export default class Login extends Component {
  signup() {
    Actions.signup();
  }

  render() {
    return (
      <View style={styles.container}>
        <Form type="Login" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Dont have an account yet? </Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingTop: 20,
    backgroundColor: "#fff",
    fontWeight: "bold"
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
    flexDirection: "row"
  },
  signupText: {
    color: "#650225",
    fontSize: 18
  },
  signupButton: {
    fontSize: 20,
    color: "#650225",
    fontWeight: "bold"
  }
});
