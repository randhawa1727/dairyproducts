import { View, Text , StyleSheet,TouchableOpacity,ScrollView,Image,TextInput} from 'react-native'
import React from 'react'

const Signuppage = () => {
  return (
    <View style={style.conatiner}>

<View style={style.title}>

<Text style={style.kheer}>KHEER</Text>
</View>

<Text style={style.create}>Create your account</Text>
<Text style={style.line3}>Fresh milk,ghee,panner and more.....</Text>

<View style={style.conatiner2}>

<TextInput style={style.fullname} placeholder='Full Name'></TextInput>

<TextInput style={style.fullname} placeholder='Email'></TextInput>

<TextInput style={style.fullname} placeholder='Mobile number'></TextInput>

<TextInput style={style.fullname} placeholder='Create password'></TextInput>

</View>

<Text style={style.terms}>I agree to kheer term's and conditions</Text>
<TouchableOpacity>
<View style={style.signupbtn}>
  <Text style={style.signtxt}>SignUp</Text>
</View>
</TouchableOpacity>

<View style={style.signin}>
  <Text>Already have an account?  </Text>
  <TouchableOpacity>
  <Text style={{color:"blue"}}>Signin</Text>
  </TouchableOpacity>
</View>
     </View>
  )
}

export default Signuppage

const style=StyleSheet.create({

  conatiner:{
    
    flex:1,
    backgroundColor:"#fcfaf1",
    
  },

  title:{

    backgroundColor:"#fcfaf1",
    width:"100%",
    height:20,
    marginTop:150,
    display:"flex",
  },

  kheer:{
    
    paddingLeft:25,
    fontSize:16,
    color:"#1d7d3e",
    fontFamily:"monospace",
  },

create:{

  fontSize:24,
  fontFamily:"fantasy",
  fontWeight:"bold",
  marginLeft:20,
},

line3:{
    paddingLeft:20,
    marginTop:5,
},

conatiner2:{

  width:"100%",
  height:"auto",
  marginTop:10,
},

fullname:{

  backgroundColor:"#ffffff",
  width:"90%",
  height:45,
  borderRadius:20,
  alignSelf:"center",
  marginBottom:20,
  marginTop:15,
paddingLeft:30,
},

terms:{
      marginLeft:30,
      color:"#aa9c9c",
},

signupbtn:{
  width:"70%",
  height:45,
  backgroundColor:"#1d7d3e",
  flexDirection:"row",
  borderRadius:20,
  justifyContent:"center",
  alignSelf:"center",
  marginTop:15,

},

signtxt:{
  color:"#ffffff",
  marginTop:13,
},

signin:{
flexDirection:"row",
justifyContent: "center",
marginTop:15,
}
})