import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import SignUp from "./src/components/SignUp";
import Login from "./src/components/Login";
import PayRoll from "./src/components/PayRoll";
import PasswordRecoveryOne from "./src/components/PasswordRecoveryOne";
import PasswordRecoveryTwo from "./src/components/PasswordRecoveryTwo";
import Advance from "./src/components/Advance";

const Stack = createStackNavigator();

// export default function App() {
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Login /> */}
        <SignUp />
        {/* <PayRoll /> */}
        {/* <PasswordRecoveryOne /> */}
        {/* <PasswordRecoveryTwo /> */}
        {/* <MainC /> */}
      </View>
    );
  }
}
