import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../screens/Homepage';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
const Tabnavigation = () => {
    const Tab=createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Homepage}/>
        <Tab.Screen name="Profile" component={Profile}/>
        <Tab.Screen name="Setting" component={Setting}/>
        
    </Tab.Navigator>
  )
}

export default Tabnavigation
const style=StyleSheet.create({

})