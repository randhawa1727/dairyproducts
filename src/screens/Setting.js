import { View, Text ,StyleSheet,Image,FlatList,TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'


const Setting = () => {

  const setting=[
   
{
  "id":"h1",
  "title":"PERSONAL",
  "subtitle":"Your identity and account",
  type:"header",
  "arrow":">"


},
    {
      "id":2,
      "img":require('../assets/profile.png'),
      "title":"Edit Profile",
      type:"setting",
"arrow":">"
    },

    {
      "id":3,
      "img":require('../assets/people.png'),
      "title":"sahil1234",
      type:"setting",
      "arrow":">"
    },
    {
      "id":4,
      "title":"sahil@gmial.com",
      "img":require('../assets/email.png'),
type:"setting",
"arrow":">"
    },
    {
      "id":5,
      "title":"Phone Number",
      "img":require('../assets/telephone.png'),
      type:"setting",
      "arrow":">"
    },
    {
      "id":6,
      "title":"Change password",
      "img":require('../assets/password.png'),
      type:"setting",
      "arrow":">"
    },
    {
      "id":7,
      "title":"Personal information",
      "img":require('../assets/info.png'),
      type:"setting",
      "arrow":">"
    },
    
  ]

  const privacy=[
    {
      "id":"h2",
      "title":"PRIVACY",
      "subtitle":"Control who see you",
      type:"header",
      "arrow":">"

    },
    {
      "id":8,
      "title":"Private account",
      type:"privacy",
      "arrow":">",
      "img":require('../assets/security.png')
    },
    {
      "id":9,
      "title":"Activity status",
       type:"privacy",
       "arrow":">",
       "img":require('../assets/graph.png')
    },
    {
      "id":10,
      "title":"Two-factor auth",
       type:"privacy",
       "arrow":">",
       "img":require('../assets/two-factor-authentication.png')
    },
    {
      "id":11,
      "title":"Blocked account",
       type:"privacy",
       "arrow":">",
       "img":require('../assets/block-user.png')
    },
    {
      "id":12,
      "title":"Restrickted account",
       type:"privacy",
       "arrow":">",
       "img":require('../assets/not-allowed.png')
    },
    {
      "id":13,
      "title":"Privacy policy",
       type:"privacy",
       "arrow":">",
       "img":require('../assets/file.png')
    }
  ]

  const general=[
   {
    "id":"h3",
    type:"header",
    "title":"GENERAL",
    "subtitle":"App preference",

   },
   {
    "id":14,
    "title":"Push notification",
    type:"general",
   },
   {
"id":15,
    "title":"Email notification",
    type:"general",
   },
   {
    "id":16,
    "title":"Dark mode",
    type:"general",
   },
   {
    "id":17,
    "title":"Data saver",
    type:"general",
   },
   {
    "id":18,
    "title":"Language",
    type:"general",
   },
   {
    "id":19,
    "title":"Region",
    type:"general",
   },
   {
    "id":20,
    "title":"Storage & cache",
    type:"general",
   },


  ]
  const renderItem=({item})=>{
   if(item.type==="header") 
    return(
     <View style={style.headerconatiner}> 
     <Text style={style.header}>{item.title}</Text>
     <Text style={style.subtitle}>{item.subtitle}</Text>
      </View>
    )

    if(item.type==="setting")
      return(
    <TouchableOpacity style={style.container1}>
      <Image style ={style.image}source={item.img}/>
      <Text style={style.title}>{item.title}</Text>
      
    </TouchableOpacity>
      )

      if(item.type==="privacy")
        return(
      <TouchableOpacity style={style.container2}>
        <Image style={style.image} source={item.img}/>
      <Text style={style.title}>{item.title}</Text>
      
      </TouchableOpacity>
        )
   
        if(item.type==="general")
          return(
        <TouchableOpacity style={style.container3}>
        <Text style={style.title}>{item.title}</Text>
        
        </TouchableOpacity>
          )
  }


  return (
    <View style={style.bg}>
      <View style={style.setting}>
        <Text style={style.settingtxt}>Setting</Text>
      </View>

    <FlatList
     data={[...setting,...privacy,...general]}
     keyExtractor={item=>item.id}
     renderItem={renderItem}
  
    />

    </View>
   
  
  )
}

export default Setting

const style=StyleSheet.create({

bg:{
  flex:1,
  backgroundColor:"#f5ecbb",
},
setting:{
  width:"100%",
  paddingVertical:20,
  marginTop:50,
  paddingHorizontal:22,
},
settingtxt:{
  fontSize:24,
  color:"rgb(12, 12, 12)",
},
image:{
  width:30,
  height:30,
  tintColor:"rgba(9, 3, 79, 0.89)",
},

container1:{
  backgroundColor:"#f9f6e3",
  flexDirection:"row",
  width:"90%",
  alignSelf:"center",
  borderRadius:20,
  marginTop:10,
  paddingVertical:15,
  paddingHorizontal:12,

},

container2:{
  backgroundColor:"#f9f6e3",
  flexDirection:"row",
  width:"90%",
  alignSelf:"center",
  borderRadius:20,
  paddingVertical:15,
  marginTop:10,
  paddingHorizontal:12,
},
title:{
  marginLeft:12,
  fontSize:15,
  color:"#rgba(9, 3, 79, 0.89)",
},

headerconatiner:{
  width:"100%",
  paddingVertical:15,
  paddingHorizontal:15,

},
header:{
  color:"rgba(231, 33, 39, 0.85)",
  fontSize:15,
  fontWeight:20,
  marginTop:12,

  
},
container3:{
  backgroundColor:"#f9f6e3",
  flexDirection:"row",
  width:"90%",
  alignSelf:"center",
  borderRadius:20,
  marginTop:10,
  paddingVertical:15,
  paddingHorizontal:12,
},  

})
