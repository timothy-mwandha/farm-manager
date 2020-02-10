import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  KeyboardAvoidingView,
  Linking,
  Image
} from "react-native";

var t = require("tcomb-form-native");
const Form = t.form.Form;

const RecoveryTwo = t.struct({
  NewPassword: t.String,
  ConfirmPassword: t.String
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    }
  },
  controlLabel: {
    normal: {
      color: "#650225",
      fontSize: 20,
      marginBottom: 5
    },

    error: {
      color: "red",
      fontSize: 12,
      marginBottom: 5,
      fontWeight: "bold"
    }
  }
};

const options = {
  fields: {
    NewPassword: {
      error: "Please create a new password",
      password: true,
      secureTextEntry: true
    },
    ConfirmPassword: {
      error: "Password should match the one above",
      password: true,
      secureTextEntry: true
    }
  },
  stylesheet: formStyles
};

export default class PasswordRecovery extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log("value: ", value);
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          flexDirection: "column",
          justifyContent: "center"
        }}
        behavior="padding"
        enabled
      >
        <ScrollView>
          <View style={styles.container}>
            <Image
              style={{
                width: 300,
                marginTop: 30,
                marginBottom: 20,
                margin: 20
              }}
              source={require("../assets/images/user.png")}
            />
            <Form
              ref={c => (this._form = c)}
              type={RecoveryTwo}
              options={options}
            />
            <Button
              title="SUBMIT"
              color="#0A802B"
              onPress={this.handleSubmit}
            ></Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    fontWeight: "bold"
  },
  word: {
    fontSize: 25,
    marginTop: 70,
    color: "#650225",
    paddingBottom: 40,
    paddingTop: 20
  }
});
