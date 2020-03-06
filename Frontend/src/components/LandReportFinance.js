import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

export default class LandReportFinance extends Component {
    render( {navigation} ) {
        const ref = React.useRef(null);
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
};

