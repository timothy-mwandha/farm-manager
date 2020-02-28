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

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  saveData = async () => {
    const { email, password } = this.state;

    //save data with asyncstorage
    let loginDetails = {
      email: email,
      password: password
    };

    if (this.props.type !== "Login") {
      AsyncStorage.setItem("loginDetails", JSON.stringify(loginDetails));

      Keyboard.dismiss();
      alert(
        "You successfully registered. Email: " +
          email +
          " password: " +
          password
      );
      this.login();
    } else if (this.props.type == "Login") {
      try {
        let loginDetails = await AsyncStorage.getItem("loginDetails");
        let ld = JSON.parse(loginDetails);

        if (ld.email != null && ld.password != null) {
          if (ld.email == email && ld.password == password) {
            alert("Go in!");
          } else {
            alert("Email and Password does not exist!");
          }
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  showData = async () => {
    let loginDetails = await AsyncStorage.getItem("loginDetails");
    let ld = JSON.parse(loginDetails);
    alert("email: " + ld.email + " " + "password: " + ld.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TextLabel}>Email</Text>
        <TextInput
          autoFocus={true}
          clearTextOnFocus={true}
          style={styles.inputBox}
          onChangeText={email => this.setState({ email })}
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
        />
        <Text style={styles.TextLabel}>Password</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={password => this.setState({ password })}
          secureTextEntry={true}
          ref={input => (this.password = input)}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={this.saveData}>
            {this.props.type}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 30
  },
  inputBox: {
    width: 350,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10,
    borderBottomWidth: 0.5
  },
  button: {
    width: 350,
    backgroundColor: "#0A802B",
    marginTop: 30,
    paddingVertical: 12
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center"
  },
  TextLabel: {
    color: "#650225",
    alignItems: "flex-start",
    paddingTop: 10,
    fontSize: 20,
    marginBottom: 0
  }
});
