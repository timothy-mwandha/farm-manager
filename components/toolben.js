import 'react-native-gesture-handler';
import React, { Component } from "react";

import { ScrollView, View, StyleSheet, 
Text, Button, KeyboardAvoidingView,Image, 
TouchableOpacity, NativeModules, 
Dimensions } from "react-native";

import moment from "moment";
import Video from 'react-native-video';
import ImagePicker from 'react-native-image-crop-picker';
import ImageFactory from "react-native-image-picker-form";

var t = require("tcomb-form-native");
const Form = t.form.Form;


/** We use regular expression to validate the user input. */

const ToolName = t.refinement(t.String, ToolName => {
    const regex = /^[a-zA-Z0-9].*[\s\.]*$/i; //case insensitive//alphanumeric//with spaces.
    return regex.test(ToolName);
});

const SerialNumber = t.refinement(t.String, SerialNumber => {
    const regex = /^[a-zA-Z0-9].*[\s\.]*$/g; //alphanumeric with spaces
    return regex.test(SerialNumber);
});

const StoreName = t.refinement(t.String, StoreName => {
    const regex = /^[a-zA-Z0-9].*[\s\.]*$/i; //case insensitive//alphanumeric//with spaces.
    return regex.test(StoreName);
});

const ToolTakenBy = t.refinement(t.String, ToolTakenBy => {
    const regex = /^[a-zA-Z0-9].*[\s\.]*$/i; //case insensitive//alphanumeric//with spaces.
    return regex.test(ToolTakenBy);
});



/** The tools model is defined using the t.struct() method*/

const Tool = t.struct({
    ToolName: ToolName,  //alphanumric. 
    Description: t.maybe(t.String),
    DateTakenIn: t.Date, // UI = calendar popup.
    StoreName: StoreName, // string. UI = text input box
    DateTakenOut: t.Date, //UI = calendar popup.
    ToolTakenBy: ToolTakenBy, // string. UI =  text input box
    ToolCondition: t.String, // string. UI = text input box
    DateOfPurchase: t.maybe(t.Date),//UI = calendar popup.
    SerialNumber: t.maybe(SerialNumber),  
    ToolImage: t.String //imagefiletype UI = upload image
});

/** Styling the text for labels, valid and invalid input*/

const formStyles = {
    ...Form.stylesheet,
    formGroup: {
        normal: {
            textAlign: 'center',
            justifyContent: 'center',
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
        ToolName: {
            error: "Please use only letters & digits."
        },
        SerialNumber: {
            error: "Please use only letters & digits."
        },
        Description: {
            error: "Please use only letters and words."
        },
        
        DateTakenIn: {
            label: "Date Taken In",
            mode: "date",
            error: "Please enter date tool was stored.",
            config: {
                format: date => moment(date).format("DD-MM-YYYY")
            }
        },
        StoreName: {
            error: "Please use only letters & digits."
        },
        
        DateTakenOut: {
            label: "Date Taken Out",
            mode: "date",
            error: "Please enter date tool was taken out.",
            config: {
                format: date => moment(date).format("DD-MM-YYYY")
            }
        },
        
        ToolTakenBy: {
            error: "Please use only letters & digits."
        },
        ToolCondition: {
            error: "Please select one option."
        },

        DateOfPurchase: {
            label: "Date of Purchase",
            mode: "date",
            error: "Please enter date tool was purchased.",
            config: {
                format: date => moment(date).format("DD-MM-YYYY")
            }
        },


        ToolImage: {
            config: {
                title: "Add Tool Image",
                options: ["Open camera", "Select from gallery", "Cancel"],
                // Used on Android to style BottomSheet
                style: {
                    titleFontFamily: "Roboto"
                }
            },
            // error: 'No Tool image provided',
            factory: ImageFactory
        }

        
    },
    stylesheet: formStyles
}

type Props = {}
type State = {
  value: Object,
  options: Object
}
export default class ToolBenCard extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      value: {},
      options: {
        fields: {

          image: {
            config: {
              title: 'Select image',
              options: ['Open camera', 'Select from gallery', 'Cancel'],
              // Used on Android to style BottomSheet
              style: {
                titleFontFamily: 'Roboto'
              }
            },
            error: 'No image provided',
            factory: ImageFactory
          }
        }
      }
    }
  }    
    

    
render() {

handleSubmit = () => {
        const value = this.refs.tool.getValue();
        console.log("value: ", value);
    };


ImagePicker.openPicker({
  width: 300,
  height: 400,
  cropping: true
}).then(image => {
  console.log(image);
});

ImagePicker.openCamera({
  width: 300,
  height: 400,
  cropping: true,
}).then(image => {
  console.log(image);
});


ImagePicker.openCropper({
  path: 'my-file-path.jpg',
  width: 300,
  height: 400
}).then(image => {
  console.log(image);
});



        return (
            <View>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
                <ScrollView>
                        <Text style={styles.subtitle}>Tool Bin Card</Text>
                       
                        <Form ref='tool'
                        type={Tool}
                        value={this.state.value}
                        options={this.state.options}
                        // onPress={(options)=>this.ImagePicker.openPicker()} 
                        />
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
        fontSize: 35,
        marginTop: 5,
        color: "#650205",
        textAlign: "center",
        marginBottom: 25
    },

       subtitle: {
        fontSize: 35,
        marginTop: 5,
        color: "#650205",
        textAlign: "center",
        marginBottom: 25
    },
  
       butt: {
        marginTop: 100,
    }
});

