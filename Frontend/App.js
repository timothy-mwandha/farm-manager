import 'react-native-gesture-handler';
import React, { Component } from "react";
import { View, Text,Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from "./src/components/HomePage";
import SignUp from "./src/components/SignUp";
import Login from "./src/components/Login";
import PayRoll from "./src/components/PayRoll";
import PasswordRecoveryOne from "./src/components/PasswordRecoveryOne";
import PasswordRecoveryTwo from "./src/components/PasswordRecoveryTwo";
import Advance from "./src/components/Advance";
import ToolBinCard from "./src/components/ToolBinCard";
import Personnel from "./src/components/Personnel";
import ExpenditureForm from "./src/components/ExpenditureForm";
import IncomeForm from "./src/components/IncomeForm";
import BottomNav from "./src/components/BottomNav";
import Harvest from "./src/components/Harvest";
import Consumable from "./src/components/Consumable";
import RequisitionForm from "./src/components/RequisitionForm";
import LandReportFinance from "./src/components/LandReportFinance";
import LandReportInventory from "./src/components/LandReportInventory";
// import HomeScreen from './src/components/HomeScreen'
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
