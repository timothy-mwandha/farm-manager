import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/public/components/Home";
import SignUp from "./src/public/components/SignUp";
import Login from "./src/public/components/Login";
import PayRoll from "./src/public/components/PayRoll";
import PasswordRecoveryOne from "./src/public/components/PasswordRecoveryOne";
import PasswordRecoveryTwo from "./src/public/components/PasswordRecoveryTwo";
import Advance from "./src/public/components/Advance";

const Stack = createStackNavigator();

function App() {
  return (
    // <View style={{ flex: 1 }}>
    //   {/* <Login /> */}
    //   {/* <SignUp /> */}
    //   {/* <PayRoll /> */}
    //   {/* <PasswordRecoveryOne /> */}
    //   <PasswordRecoveryTwo />
    // </View>

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: true }}
        />
        {/* <Stack.Screen
          name="signup"
          component={SignUp}
          options={{ headerShown: true }}
        /> */}
        <Stack.Screen
          name="login"
          component={Login}
          initialParams={{ user: "me" }}
        />
        <Stack.Screen
          name="Payroll"
          component={PayRoll}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="PasswordRecoveryOne"
          component={PasswordRecoveryOne}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="PasswordRecoveryTwo"
          component={PasswordRecoveryTwo}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Advance"
          component={Advance}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// React.render(<App />, document.getElementById("app"));

// import React from "react";
// import { View } from "react-native";

// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import PayRoll from "./components/PayRoll";

// export default function App() {
//   return (
//     <View style={{ flex: 1 }}>
//       {/* <Login /> */}
//       {/* <SignUp /> */}
//       <PayRoll />
//     </View>
//   );
// }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
