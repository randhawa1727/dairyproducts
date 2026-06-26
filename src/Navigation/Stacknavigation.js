import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Loginpage from '../auth/Loginpage'
import Homepage from '../screens/Homepage'

const Stacknavigation = () => {

    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>

            <Stack.Screen name="Loginpage" component={Loginpage} />
            <Stack.Screen name="Homepage" component={Homepage}/>

        </Stack.Navigator>
    )
}

export default Stacknavigation