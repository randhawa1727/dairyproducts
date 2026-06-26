import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Loginpage from '../auth/Loginpage'
import Homepage from '../screens/Homepage'
import Profile from '../screens/Profile'
import Setting from '../screens/Setting'
const Stacknavigation = () => {

    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>

            <Stack.Screen name="Loginpage" component={Loginpage} />
            <Stack.Screen name="Homepage" component={Homepage}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen nmae="Setting" component={Setting}/>

        </Stack.Navigator>
    )
}

export default Stacknavigation