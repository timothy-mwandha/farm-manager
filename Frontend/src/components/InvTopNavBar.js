import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import ToolBinCard from "./ToolBinCard";
import Consumable from "./Comsumable";
import Harvest from "./Harvest";

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Stores and Inventory</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator;

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Harvest"
      activeColor="#fff"
      labelStyle={{ fontSize: 60 }}
      backgroundColor="#650205"
      style={{ backgroundColor: "#650205", fontSize: 40 }}
    >
      <Tab.Screen
        name="Tools"
        component={ToolBinCard}
        backgroundColor="#650205"
        options={{
          tabBarLabel: "TOOLS",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="finance" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Consumables"
        component={Consumable}
        options={{
          tabBarLabel: "Consumables",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="key" color={color} size={size} />
          )
        }}
      />

        <Tab.Screen
        name="Harvest"
        component={Harvest}
        options={{
          tabBarLabel: "Harvest",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="key" color={color} size={size} />
          )
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default function TopNav() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
