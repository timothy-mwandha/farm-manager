import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  KeyboardAvoidingView,
  TouchableHighlight
} from "react-native";
import moment from "moment";
import ImageFactory from "react-native-image-picker-form";
// import ImagePicker from 'react-native-image-crop-picker';
// import ImagePicker from 'react-native-image-picker';

// var ImagePicker = require('react-native-image-picker');
var t = require("tcomb-form-native");
const Form = t.form.Form;

const MobileMoneyNumber = t.refinement(t.Number, MobileMoneyNumber => {
  const reg = /^[0]?[0-9]\d{9}$/;
  return reg.test(MobileMoneyNumber);
});
const Name = t.refinement(t.String, Name => {
  const regex = /^[a-zA-Z].*[\s\.]*$/g;
  return regex.test(Name);
});

const User = t.struct({
  Date: t.Date,
  Name: Name,
  Position: t.maybe(t.String),
  Status: t.String,
  PaymentMode: t.String,
  BankAccount: t.maybe(t.Number),
  MobileMoneyNumber: t.maybe(MobileMoneyNumber),
  SalaryAmount: t.Number,
  PAYE: t.maybe(t.Number),
  NSSF: t.maybe(t.Number),
  NetPay: t.Number,
  PaySlip: t.maybe(t.String),
  Total: t.Number
});

const formStyles = {
  ...Form.stylesheet,
  //   formGroup: {
  //     normal: {
  //       marginBottom: 5
  //     }
  //   },
  controlLabel: {
    normal: {
      color: "#650205",
      fontSize: 20
      //   marginBottom: 5
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
    Date: {
      label: "Date",
      mode: "date",
      error: "Please enter a correct date",
      config: {
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    Name: {
      error: "Please enter a correct Name"
    },
    Position: {
      error: "Please enter the employee's position"
    },
    Status: {
      error: "Please enter the status of the employee"
    },
    PaymentMode: {
      error: "Please select a mode of payment"
    },
    BankAccount: {
      error: "Please enter a correct bank account number"
    },

    MobileMoneyNumber: {
      error: "Please enter a correct phone number"
    },
    SalaryAmount: {
      error: "Please enter a correct Salary Amount"
    },
    PAYE: {
      error: "PAYE is missing"
    },
    NSSF: {
      error: "NSSF is missing"
    },
    NetPay: {
      error: "Net pay is missing"
    },
    PaySlip: {
      config: {
        title: "Select Pay Slip Image",
        options: ["Open camera", "Select from gallery", "Cancel"],
        // Used on Android to style BottomSheet
        style: {
          titleFontFamily: "Roboto"
        }
      },
      factory: ImageFactory
    }
  },
  stylesheet: formStyles
};

export default class PayRoll extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log("value: ", value);
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Payroll Form</Text>
            <Form ref={c => (this._form = c)} type={User} options={options} />
            <TouchableHighlight onPress={this._onPressButton}>
              <View style={styles.butt}>
                <Button
                  color="#0A802B"
                  title="SAVE"
                  onPress={this.handleSubmit}
                />
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 15,
    padding: 20
  },
  title: {
    fontSize: 35,
    marginTop: 5,
    color: "#650205",
    textAlign: "center",
    marginBottom: 25
  },
  butt: {
    marginBottom: 15
  }
});
