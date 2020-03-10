import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  KeyboardAvoidingView
} from "react-native";
import * as ImagePicker from "expo-image-picker";
var t = require("tcomb-form-native");
const Form = t.form.Form;

var Qualifications = t.enums({
  PHD: "PhD",
  Masters: "Masters",
  Degree: "Degree",
  Diploma: "Diploma",
  Certificate: "Certificate",
  UACE: "A-Level",
  UCE: "O-Level",
  PLE: "PLE",
  None: "None"
});

const FirstName = t.refinement(t.String, FirstName => {
  const regex = /^[a-zA-Z0-9].*[\s\.]*$/i; //case insensitive string with space.
  return regex.test(FirstName);
});

const LastName = t.refinement(t.String, LastName => {
  const regex = /^[a-zA-Z].*[\s\.]*$/i; //case insensitive string with space
  return regex.test(LastName);
});

const PhoneNumber1 = t.refinement(t.Number, PhoneNumber1 => {
  const regex = /^[0-9].*[\s\.]*$/i; //case insensitive//alphanumeric//with spaces.
  return regex.test(PhoneNumber1);
});

const JobTitle = t.refinement(t.String, JobTitle => {
  const regex = /^[a-zA-Z].*[\s\.]*$/i; //case insensitive string with space
  return regex.test(JobTitle);
});

/** create the structure of the form. Image field is treated separately. */
const Employee = t.struct({
  FirstName: FirstName, //string
  LastName: LastName, //string
  DateOfBirth: t.Date, //date picker
  PhoneNumber1: PhoneNumber1, //number
  PhoneNumber2: t.maybe(t.Number), //optional number
  NationalIdNo: t.maybe(t.String), //optional number
  JobTitle: JobTitle, //string
  JobStartDate: t.Date, //date picker
  Qualifications: Qualifications //drop down select t.enums
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
      color: "#39A693",
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

/** define extra options of the form fields. */
const options = {
  fields: {
    FirstName: {
      label: "First Name",
      error: "Please use only letters."
    },
    LastName: {
      label: "Last Name",
      error: "Please use only letters."
    },
    DateOfBirth: {
      label: "Date of Birth",
      mode: "date",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    JobStartDate: {
      label: "Job Start Date",
      mode: "date",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    PhoneNumber1: {
      label: "Phone Number1",
      error: "Please use only digits."
    },
    PhoneNumber2: {
      label: "Phone Number2"
    },
    NationalIdNo: {
      label: "National Id No"
    },
    JobTitle: {
      label: "Job Title",
      error: "Please use only letters & words."
    }
  },
  stylesheet: formStyles
};
/** class based component */

export default class Personnel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }

 InsertRecordsToServer = () => {
    fetch("localhost/personnel", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        FirstName: this.FirstName,
        LastName: this.LastName,
        //DateOfBirth: DateOfBirth1,
        PhoneNumber1: PhoneNumber11,
        PhoneNumber2: PhoneNumber21,
        NationalIdNo: NationalIdNo1,
        JobTitle: JobTitle1,
        JobStartDate: JobStartDate1,
        Qualifications: Qualifications1
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
    console.log("value: ", value);
    
     if (value != null) {
        (this.FirstName = value.FirstName),
        (this.LastName = value.LastName),
        (this.DateOfBirth1 = value.DateOfBirth),
        (this.PhoneNumber11 = value.PhoneNumber1),
        (this.PhoneNumber21 = value.PhoneNumber2),
        (this.NationalIdNo1 = value.NationalIdNo),
        (this.JobTitle1 = value.JobTitle),
        (this.JobStartDate1 = value.JobStartDate),
        (this.Qualifications1 = value.Qualifications),
        this.InsertRecordsToServer();
    }

  };
  componentDidMount() {
    this.getPermissionAsync();
    console.log("hi, component mounted");
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    let { image } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Personnel File</Text>
            <Form ref={c => (this._form = c)} type={Employee} options={options} action={"/personnel"} />
            <Button
              title="Select Image."
              onPress={this._pickImage}
            />
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
            <View style={styles.button}>
              <Button
                color="#0A802B"
                title="Save"
                onPress={this.handleSubmit}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 24,
    padding: 20
  },
  title: {
    fontSize: 35,
    marginTop: 5,
    color: "#39A693",
    textAlign: "center",
    marginBottom: 25
  },
  question: {
    color: "#39A693",
    textAlign: "center",
    marginTop: 18,
    fontSize: 18
  },

  button: {
    marginTop: 20,
    marginBottom: 20
  }
});
