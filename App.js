

//import Login from './components/Login';
// import SignUp from './components/SignUp';


import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import SignUp from "./components/SignUp";
// import Login from "./components/Login";
// import PayRoll from "./components/PayRoll";
// import ExpenditureForm from './components/ExpenditureForm';
// import BottomNav from './components/BottomNav';
import IncomeForm from "./components/IncomeForm";
// import PasswordRecoveryOne from "./components/PasswordRecoveryOne";
// import PasswordRecoveryTwo from "./components/PasswordRecoveryTwo";
// import Advance from "./components/Advance";



export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <PayRoll /> */}
      {/* <PasswordRecoveryOne /> */}
      {/* <PasswordRecoveryTwo /> */}
      {/* <ExpenditureForm /> */}
      <IncomeForm/>
      {/* <Sidebyside /> */}
      {/* <BottomNav /> */}
    </View>

  );
}