import React from 'react';
import { View,Text } from 'react-native';

//import Login from './components/Login';
//import SignUp from './components/SignUp';
import ToolBinCard from './components/ToolBinCard';
//import Personnel from './components/Personnel';
import Personnel from './components/Personnel';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/*<Login /> */}
      {/* <Text>fghfhf</Text> */}
      {/* <SignUp /> */}
      <Personnel />
      <ToolBinCard />      
    </View>
  )
}

