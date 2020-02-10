import React from "react";
import { View } from "react-native";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PayRoll from "./components/PayRoll";
import SelectionComp from "./components/SelectionComp";
import ImageComp from "./components/ImageComp";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Login /> */}
      {/* <SignUp /> */}
      <PayRoll />
      {/* <SelectionComp /> */}
      {/* <ImageComp /> */}
    </View>
  );
}
