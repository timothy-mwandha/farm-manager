import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Text, Button, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import moment from "moment";
import ImageFactory from "react-native-image-picker-form";


var t = require("tcomb-form-native");
const Form = t.form.Form;

/** We use regular expression to validate the user input. */

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

/** The tools model is defined using the t.struct() method*/

const Person = t.struct({
    FirstName: FirstName,  //string
    LastName: LastName,
    DateofBirth: t.Date, //drop down calendar
    PhoneNumber1: PhoneNumber1,
    PhoneNumber2: t.maybe(t.Number),
    NIN: t.maybe(t.Number), 
    JobTitle: JobTitle,
    StartDate: t.Date, // 
    Qualifications: t.String, //drop-down select
    PersonImage: t.maybe(t.String) //imagefiletype UI = upload image
});

/** Styling the text for labels, valid and invalid input*/

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

/** Encapsulating the various field options  */

const options = {
    fields: {
        FirstName: {
            error: "Please use only letters."
        },
        LastName: {
            error: "Please use only letters."
        },
        DateofBirth: {
            label: "Date of Birth",
            mode: "date",
            error: "Please select date of birth.",
            config: {
                format: date => moment(date).format("DD-MM-YYYY")
            }
        },
        PhoneNumber1: {
            error: "Please use only digits."
        },
        
        JobTitle: {
            error: "Please use only letters & words."
        },

        StartDate: {
            label: "Job start date",
            mode: "date",
            error: "Please select job start date.",
            config: {
                format: date => moment(date).format("DD-MM-YYYY")
            }
        },
        
        ToolImage: {
            config: {
                title: "Add Personnel's Image",
                options: ["Open camera", "Select from gallery", "Cancel"],
                // Used on Android to style BottomSheet
                style: {
                    titleFontFamily: "Roboto"
                }
            },
            // error: 'No image provided',
            factory: ImageFactory
        }


    },
    stylesheet: formStyles
}


export default class Personnel extends Component {
    handleSubmit = () => {
        const value = this._form.getValue();
        console.log("value: ", value);
    };
    render() {
        return (
            <View>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
                <ScrollView>
                        <Text style={styles.title}>Personnel File</Text>
                        <Form ref={c => (this._form = c)} type={Person} options={options} />
                        <View style={styles.button}><Button color="#0A802B" title="Save" onPress={this.handleSubmit} /></View>
                </ScrollView>
            </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        marginTop: 24,
        padding: 20,

    },
    title: {
        fontSize: 25,
        marginTop: 5,
        color: "#650205",
        textAlign: "center",
        marginBottom: 25
    },

       subtitle: {
        fontSize: 25,
        marginTop: 5,
        color: "#650205",
        textAlign: "center",
        marginBottom: 25
    },
  
       butt: {
        marginTop: 20,
    }
});
