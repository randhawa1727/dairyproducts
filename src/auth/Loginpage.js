import { View, Text , StyleSheet,ScrollView,TouchableOpacity, TextInput, Button,Image} from 'react-native'
import React from 'react'


const Loginpage = () => {

  return (
    <View style={{flex:1,backgroundColor:"#fef7d7"}}>

      <Text style={style.brandtxt}>Kheer</Text>
            <Text style={style.brandtxt1}>Welcome Back !</Text>
            <Text style={style.brandtxt2}>Signin to continue ordering farm-fresh dairy.</Text>

            <View style={style.container}>
               
               <TextInput style={style.email} placeholder='Email'></TextInput>

               <TextInput style={style.password} placeholder='password'></TextInput>

<View style={style.forgetbtn}>

                 <Text style={style.remember}>Remember Me</Text> 
         
         <TouchableOpacity>
          <Text style={style.forget}>Forget password?</Text>
         </TouchableOpacity>
</View>

         <TouchableOpacity style={style.touchsignin}>
          <View style={style.signbutton}>
            <Text style={style.signintxt}>Signin</Text>
          </View>
         </TouchableOpacity>

         <Text style={style.continue}>------------- or continue with -------------</Text>

<TouchableOpacity style={style.touchgoogle}>

         <View style={style.google}>

          <Text style={style.googletxt}>Google</Text>

         </View>
         </TouchableOpacity>

        <View style={style.createnew}>
          <Text>New to Kheer ?</Text>
           <TouchableOpacity>
      <Text style={style.createnewtxt}>  Create new account</Text>
         </TouchableOpacity>
         </View>
               
            </View>

           

    </View>
  )
}

export default Loginpage

const style=StyleSheet.create({

  brandtxt:{
    paddingTop:180,
    paddingLeft:30,
    fontSize:25,
    color:"#938c8c",
  },

  brandtxt1:{
    paddingTop:8,
    paddingLeft:30,
    color:"#757834",
    fontSize:40,

  },

  brandtxt2:{

    color:"#676262",
    paddingLeft:28,
    paddingTop:5,
  },

  container:{

    backgroundColor:"#fef7d7",
    width:"100%",
    height:"100%",
  },

email:{

  width:"90%",
  height:45,
  backgroundColor:"#fdfdfd",
  borderRadius:20,
  alignSelf:"center",
  paddingLeft:25,
  position:"relative",
  top:40,

},

password:{

  width:"90%",
  height:45,
  backgroundColor:"#fdfdfd",
  borderRadius:20,
  alignSelf:"center",
  paddingLeft:25,
  position:"relative",
  top:70,

},
forgetbtn:{
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between",
  paddingHorizontal:10,
  marginTop:80,
  margin:20,
},

forget:{

  fontSize:13,
  fontWeight:"bold",
  color:"blue",
},

touchsignin:{
     height:1,
},
signbutton:{

  width:"80%",
  height:40,
  backgroundColor:"#1d7d3e",
  borderRadius:20,
  alignSelf:"center",
  position:"relative",
  top:18,


},

signintxt:{

  color:"#d3d3d3",
  fontWeight:"bold",
  textAlign:"center",
  paddingTop:8,
},

continue:{

  marginTop:80,
  textAlign:"center",

},

touchgoogle:{
height:1,
},

google:{
  backgroundColor:"#ffffff",
  width:140,
  borderRadius:20,
  height:50,
  flexDirection:"row",
  paddingHorizontal:5,
  alignSelf:"center",
  marginTop:20,
},

googletxt:{
      marginTop:10,
      fontSize:20,
      marginLeft:3nb 5,
},

createnew:{
  
  flexDirection:"row",
  justifyContent:"space-evenly",
  paddingHorizontal:80,
  marginTop:90,
},

createnewtxt:{
  color:"blue",
}

})