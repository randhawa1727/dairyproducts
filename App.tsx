import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Setting from './src/screens/Setting'
import Homepage from './src/screens/Homepage'
import Stacknavigation from './src/Navigation/Stacknavigation'
import { NavigationContainer } from '@react-navigation/native'
const App = () => {
  return (
   
    // <Setting></Setting>
    <NavigationContainer>
{/* <Homepage></Homepage> */}
     <Stacknavigation/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  
})