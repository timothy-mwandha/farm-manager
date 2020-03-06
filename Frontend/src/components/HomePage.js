import 'react-native-gesture-handler';
import React from "react";
import {
  View, StyleSheet,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import LandReportFinance from "./LandReportFinance";
import LandReportInventory from "./LandReportInventory";

const Stack = createStackNavigator();


export default function HomePage( {navigation} ) {
  const ref = React.useRef(null);
  return (

<View style={{ flex: 1 }}>
      <NavigationContainer ref={ref}>
        <Stack.Navigator>
          <Stack.Screen name="LandReportFinance" component={LandReportFinance} />
          <Stack.Screen name="LandReportInventory" component={LandReportInventory} />
        </Stack.Navigator>
      </NavigationContainer>
      <Button
        onPress={() => ref.current && ref.current.navigate('Login')}
        title="Login"
      />
    </View>

    // <NavigationContainer ref={ref} style={styles.container}>
    
    //   {/* <StatusBar barStyle="yellow" hidden={false} backgroundColor="blue" translucent={true} /> */}
    //   <View style={styles.nav}>
    //     <TouchableOpacity style={styles.menu} >
    //       <Text>MENU</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity style={styles.detail}>
    //       <Text>DETAIL</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <Button
    //     onPress={() => ref.current && ref.current.navigate('LandReportFinance')}
    //     title="Finance"
    //   />
    //   <TouchableOpacity style={styles.finance} onPress={() => ref.current && ref.current.navigate('LandReportFinance')}>
    //     <View>
    //       <Text>FINANCE</Text>
    //     </View>
    //   </TouchableOpacity>

    //   <TouchableOpacity style={styles.inventory} onPress={() => ref.current && ref.current.navigate('LandReportInventory')}>
    //     <View>
    //       <Text>INVENTORY</Text>
    //     </View>
    //   </TouchableOpacity>

    //   <View style={styles.update}>
    //     <Text style={styles.text}>UPDATE</Text>
    //   </View>
    
    // </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
  nav: {
    flex: 0.7,
    flexDirection: "row",
    backgroundColor: "#ad2525",
    justifyContent: "center",
    alignItems: "center"
  },
  menu: {
    flex: 1,
    height: 90,
    alignItems: "flex-start",
    paddingLeft: 15,
    justifyContent: "center",
    color: "white"
  },
  detail: {
    flex: 1,
    justifyContent: "center",
    height: 90,
    alignItems: "flex-end",
    paddingRight: 15
  },
  finance: {
    backgroundColor: "green",
    flex: 2,
    justifyContent: "center",
    margin: 8,
    alignItems: "center"
  },
  inventory: {
    backgroundColor: "gray",
    margin: 8,
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  update: {
    backgroundColor: "black",
    margin: 8,
    flex: 1.3,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white"
  }
});
