import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Loginpage from '../auth/Loginpage'

const Stacknavigation = () => {
    const Stack = createNativeStackNavigator()
  return (

            <Stack.Screen Name="Loginpage" component={Loginpage}/>
       
   
  )
}

export default Stacknavigation