import React from "react";
import { View } from "react-native";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PayRoll from "./components/PayRoll";
import PasswordRecoveryOne from "./components/PasswordRecoveryOne";
import PasswordRecoveryTwo from "./components/PasswordRecoveryTwo";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <PayRoll /> */}
      {/* <PasswordRecoveryOne /> */}
      <PasswordRecoveryTwo />
    </View>
  );
}
