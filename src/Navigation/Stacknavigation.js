import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Loginpage from '../auth/Loginpage'
import Homepage from '../screens/Homepage'
import Profile from '../screens/Profile'
import Setting from '../screens/Setting'
import Signup from '../auth/Signup'
import Tabnavigation from '../Navigation/Tabnavigation'

import { NavigationContainer } from '@react-navigation/native'
const Stacknavigation = () => {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>

            <Stack.Screen name="Loginpage" component={Loginpage} />
            <Stack.Screen name="Homepage" component={Homepage}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Setting" component={Setting}/>
            <Stack.Screen name="Signup" component={Signup}/>

            <Stack.Screen name="Tab" component={Tabnavigation}/>

        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Stacknavigation
