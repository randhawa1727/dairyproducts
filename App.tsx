import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Setting from './src/screens/Setting'
import Apifetching from './src/screens/Apifetching'
import Homepage from './src/screens/Homepage'
import Stacknavigation from './src/Navigation/Stacknavigation'
import { NavigationContainer } from '@react-navigation/native'
const App = () => {
  return (
   
      //  <Setting></Setting>
      <Stacknavigation/>
    // <Apifetching></Apifetching>
  )
}

export default App

const styles = StyleSheet.create({
  
})