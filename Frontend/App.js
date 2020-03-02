import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";


import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PayRoll from "./components/PayRoll";
import PasswordRecoveryOne from "./components/PasswordRecoveryOne";
import PasswordRecoveryTwo from "./components/PasswordRecoveryTwo";
import Advance from "./components/Advance";
import ToolBinCard from './components/ToolBinCard';
import Personnel from './components/Personnel';
import ExpenditureForm from './components/ExpenditureForm';
import Harvest from './components/Harvest';  

const Stack = createStackNavigator();

// export default function App() {
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Harvest/>
      <Personnel />
      <ToolBinCard />
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <PayRoll /> */}
      {/* <PasswordRecoveryOne /> */}
      {/* <PasswordRecoveryTwo /> */}
      <ExpenditureForm />
      {/* <IncomeForm/> */}
      {/* <BottomNav /> */}

      </View>
    );
  }
}
