import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  KeyboardAvoidingView
} from "react-native";

var t = require("tcomb-form-native");
const Form = t.form.Form;
const Email = t.refinement(t.String, Email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
  return reg.test(Email);
});
const Phone = t.refinement(t.Number, Phone => {
  const reg = /^[0]?[0-9]\d{9}$/;
  return reg.test(Phone);
});
const Name = t.refinement(t.String, Name => {
  const regex = /^[a-zA-Z].*[\s\.]*$/g;
  return regex.test(Name);
});

const User = t.struct({
  Name: Name,
  Email: Email,
  Phone: Phone,
  Password: t.String
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 5
    }
  },
  controlLabel: {
    normal: {
      color: "#650205",
      fontSize: 20,
      marginBottom: 5
    },

    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    }
  }
};

const options = {
  fields: {
    Name: {
      error: "Please enter a correct Name"
    },
    Email: {
      error: "Please enter a correct email address"
    },
    Phone: {
      error: "Please enter a correct phone number"
    },
    Password: {
      error: "Please create a password",
      Password: true,
      secureTextEntry: true
    }
  },
  stylesheet: formStyles
};

class SignUp extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log("value: ", value);
  };
  static navigationOptions = {
    title: "Sign Up"
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Sign Up</Text>
            <Form ref={c => (this._form = c)} type={User} options={options} />
            <View style={styles.button}>
              <Button
                color="#0A802B"
                title="Sign Up"
                onPress={this.handleSubmit}
              />
            </View>
            <Text style={styles.question}>Have an account?</Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("http://google.com")}
            >
              Log In
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // marginTop: 24
    padding: 20
  },
  title: {
    fontSize: 35,
    marginTop: 5,
    color: "#650205",
    textAlign: "center",
    marginBottom: 25
  },
  question: {
    color: "#650205",
    textAlign: "center",
    marginTop: 18,
    fontSize: 18
  },
  link: {
    fontWeight: "bold",
    color: "#650205",
    textAlign: "center",
    marginTop: 8,
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    marginTop: 20
  }
});

export default SignUp;
