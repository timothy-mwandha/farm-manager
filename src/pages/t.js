import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  Animated,
  TouchableHighlight,
  ScrollView
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
var t = require("tcomb-form-native");
var _ = require("lodash");
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);
stylesheet.textbox.normal.color = "#00FF00";
(stylesheet.textbox.normal.borderRadius = 5),
  (stylesheet.textbox.normal.width = 250);
stylesheet.textbox.normal.height = 38;
stylesheet.textbox.normal.marginLeft = 70;
stylesheet.textbox.normal.marginTop = 5;
stylesheet.textbox.normal.fontFamily = "bodytext";
stylesheet.controlLabel.normal.color = "#fff";
stylesheet.controlLabel.normal.marginLeft = 70;
stylesheet.controlLabel.normal.fontSize = 18;
stylesheet.controlLabel.normal.fontFamily = "bodytext";
stylesheet.controlLabel.normal.fontWeight = "bold";
stylesheet.controlLabel.normal.marginTop = 5;
stylesheet.textbox.error.color = "#37D300";
stylesheet.textbox.error.fontSize = 18;
stylesheet.textbox.error.fontWeight = "bold";
stylesheet.controlLabel.error.color = "#fff";
const Form = t.form.Form;
const Email = t.refinement(t.String, Email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
  return reg.test(Email);
});
const User = t.struct({
  FirstName: t.String,
  LastName: t.String,
  Email: Email,
  Username: t.String,
  CreatePassword: t.String
});
const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {}
  },
  controlLabel: {
    normal: {},
    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600",
      fontFamily: "bodytext"
    }
  }
};
const options = {
  fields: {
    FirstName: {
      error: "Please Input Your First Name",
      stylesheet: stylesheet
    },
    LastName: {
      error: "Please Input Your Last Name",
      stylesheet: stylesheet
    },
    Email: {
      error: "Please Input Your Email Address",
      stylesheet: stylesheet
    },
    Username: {
      error: "Please Input a Username",
      stylesheet: stylesheet
    },
    CreatePassword: {
      error: "Please Create a Password",
      stylesheet: stylesheet,
      CreatePassword: true,
      secureTextEntry: true
    }
  },
  stylesheet: formStyles
};
class Sign extends Component {
  constructor(props) {
    super(props);
    this.fadeAnimation = new Animated.Value(0);
    this.FirstName1,
      this.LastName1,
      this.Email1,
      this.Username1,
      this.Password1;
  }
  componentDidMount() {
    Animated.timing(this.fadeAnimation, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true
    }).start();
  }
  InsertRecordsToServer = () => {
    fetch("https://bcd123c1.ngrok.io/data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: this.FirstName1,
        lastname: this.LastName1,
        Email: this.Email1,
        Username: this.Username1,
        Password: this.Password1
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        alert("Thank You for Signing Up!");
        this.props.navigation.navigate("ScreenTwo");
      })
      .catch(error => {
        console.error(error);
      });
  };
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log(value);
    if (value != null) {
      (this.FirstName1 = value.FirstName),
        (this.LastName1 = value.LastName),
        (this.Email1 = value.Email),
        (this.Username1 = value.Username),
        (this.Password1 = value.CreatePassword),
        this.InsertRecordsToServer();
    }
  };
  render() {
    return (
      <KeyboardAwareScrollView
        behavior="padding"
        style={{ backgroundColor: "rgb(63,12,91)" }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
      >
        <ImageBackground
          source={require("../assets/otyohomee.jpg")}
          style={styles.container}
        >
          <ScrollView>
            <View>
              <View style={styles.heading}>
                <Animated.Text
                  style={[styles.otyotext, { opacity: this.fadeAnimation }]}
                >
                  Otyo!
                </Animated.Text>
                <Image
                  source={require("../assets/zigzag-White.png")}
                  style={styles.whitescribble}
                />
                <Animated.Text
                  style={[styles.textone, { opacity: this.fadeAnimation }]}
                >
                  By Sooo Many Stories
                </Animated.Text>
              </View>
              <Form ref={c => (this._form = c)} type={User} options={options} />
              <TouchableHighlight
                style={styles.signup}
                onPress={this.handleSubmit}
              >
                <Text style={styles.signupbutton}>Sign Up</Text>
              </TouchableHighlight>
              <Text style={styles.endpage}>
                Already a user?
                <Text
                  style={styles.loginbutton}
                  onPress={() => this.props.navigation.navigate("ScreenTwo")}
                >
                  Log in
                </Text>
              </Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    width: wp("100%")
  },
  whitescribble: {
    width: 140,
    height: 34,
    marginLeft: wp("0")
  },
  heading: {
    alignContent: "center",
    marginLeft: 120,
    marginTop: 65
  },
  otyotext: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: wp("25"),
    marginTop: wp("0"),
    marginLeft: wp("-5"),
    fontFamily: "heading"
  },
  textone: {
    color: "#fff",
    fontSize: wp("5"),
    fontFamily: "subheading",
    fontWeight: "bold",
    marginLeft: wp("-1"),
    marginTop: 20
  },
  word: {
    justifyContent: "center",
    fontSize: 25,
    marginTop: 10,
    color: "purple"
  },
  words: {
    justifyContent: "center",
    fontSize: 75,
    fontFamily: "heading",
    marginLeft: 100,
    marginTop: 100,
    color: "#fff"
  },
  signup: {
    alignItems: "center",
    backgroundColor: "#fff",
    width: 220,
    height: 38,
    borderRadius: 5,
    marginLeft: 85,
    marginTop: 5
  },
  signupbutton: {
    color: "rgb(106,0,168)",
    padding: 10,
    marginLeft: -5,
    fontFamily: "bodytext"
  },
  endpage: {
    color: "#fff",
    marginLeft: 130,
    fontFamily: "bodytext",
    marginTop: 10
  },
  loginbutton: {
    color: "#00FF00"
  }
});
export default Sign;
