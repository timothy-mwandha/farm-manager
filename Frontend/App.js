import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PayRoll from "./components/PayRoll";
import PasswordRecoveryOne from "./components/PasswordRecoveryOne";
import PasswordRecoveryTwo from "./components/PasswordRecoveryTwo";
import Advance from "./components/Advance";
import ToolBinCard from "./components/ToolBinCard";
import Personnel from "./components/Personnel";
import ExpenditureForm from "./components/ExpenditureForm";
import IncomeForm from "./components/IncomeForm";
import BottomNav from "./components/BottomNav";
import Harvest from "./components/Harvest";
import Consumable from "./components/Consumable";
import RequisitionForm from "./components/RequisitionForm";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HomePage />
        {/* <Login /> */}
        {/* <SignUp /> */}
        {/* <PayRoll /> */}
        {/* <PasswordRecoveryOne /> */}
        {/* <PasswordRecoveryTwo /> */}
        {/* <Advance/> */}
        {/* <Personnel /> */}
        {/* <ToolBinCard /> */}
        {/* <ExpenditureForm /> */}
        {/* <IncomeForm/> */}
        {/* <BottomNav /> */}
        {/* <Harvest /> */}
        {/* <Consumable/> */}
        {/* <RequisitionForm/> */}
      </View>
    );
  }
}
