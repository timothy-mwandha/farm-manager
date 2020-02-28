import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Form from "../components/Form";

import { Actions } from "react-native-router-flux";

export default class Signup extends Component {
  goBack() {
    Actions.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <Form type="Signup" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <TouchableOpacity onPress={this.goBack} style={styles.button}>
            <Text style={styles.signupButton}>Sign in</Text>
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
