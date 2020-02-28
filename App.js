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

import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PayRoll from "./components/PayRoll";

import PasswordRecoveryOne from "./components/PasswordRecoveryOne";
import PasswordRecoveryTwo from "./components/PasswordRecoveryTwo";

import Advance from "./components/Advance";


const Stack = createStackNavigator();

function App() {
  return (

    <View style={{ flex: 1 }}>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <PayRoll /> */}
      {/* <PasswordRecoveryOne /> */}
      <PasswordRecoveryTwo />
    </View>

//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Login"
//         screenOptions={{ gestureEnabled: false }}
//       >
//         <Stack.Screen
//           name="Advance"
//           component={Advance}
//           options={{ headerShown: true }}
//         />
//         <Stack.Screen
//           name="login"
//           component={Login}
//           initialParams={{ user: "me" }}
//         />
//         <Stack.Screen
//           name="signup"
//           component={SignUp}
//           options={{ headerShown: true }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }

export default App;
