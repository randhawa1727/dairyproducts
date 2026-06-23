import { View, Text,StyleSheet,TextInput,FlatList,Image } from 'react-native'
import React from 'react'

const Homepage = () => {
  return (
    <View style={style.conatiner}>
      <View style={style.title}>

      </View>
    </View>
  )
}

export default Homepage

const style=StyleSheet.create({

conatiner:{
    backgroundColor:"#f8f0cf",
    width:"100%",
    height:"auto",
},

title:{
    backgroundColor:"yellow",
    width:"100%",
    height:50,
}
})