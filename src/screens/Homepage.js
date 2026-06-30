import { View, Text,ScrollView,TextInput,TouchableOpacity,Image,StyleSheet } from 'react-native'
import React from 'react'

const arr=["All","Ghee","Milk","Curd","Butter","Panner","Lassi","Packs"]
const Homepage = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.heading}>
      <View style={style.headingleft}>
        <TouchableOpacity>
        <Image style={style.deliverimg}source={require('../assets/locator.png')}/>
        </TouchableOpacity>
        <Text style={style.delivertxt}>Deliver to .Home</Text>
        <View style={style.iconstop}>
        <TouchableOpacity>
          
        <Image style={style.bellimg}source={require("../assets/bell.png")}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={style.cartimg}source={require("../assets/cart.png")}/>
        </TouchableOpacity>
        </View>
      </View>
        <Text style={style.morning}>Good Morning, User</Text>
</View>

<TextInput style={style.search}placeholder='Search milk, panner, ghee....'>
</TextInput>
<ScrollView>
  <TouchableOpacity>
<View style={style.banner}>
  <View style={style.bannerleft}>
    <Text style={style.bannertxt1}>Today's Fresh</Text>
    <Text style={style.bannertxt2}>Farm-fresh milk, at your foor by 7 Am</Text>
    <View style={style.subbutton}>
      <Text style={style.subtxt}>Subscriber only</Text>
    </View>
  </View>
  <Image style={style.pannelimg} source={require("../assets/pannel.jpg")}/>
</View>
</TouchableOpacity>
<Text style={style.categories}>Categories</Text>

<ScrollView horizontal showsHorizontalScrollIndicator={false}>
<View style={style.all}>
{
            arr.map(c => (
              <TouchableOpacity>
                <View style={style.horizontalarray}>

                  <Text style={style.txtarray}>{c}</Text>
                </View>
              </TouchableOpacity>
            ))
          }
</View>
</ScrollView>

<Text style={style.title}>Fresh Today</Text>
<View style={style.content}>

</View>

</ScrollView>

{/* <View style={style.navigationbar1}>
  <View style={style.navigationicons}>
  <TouchableOpacity>
  <Image style={style.home}source={require("../assets/home.png")}/>
  </TouchableOpacity>
  <TouchableOpacity>
   <Image style={style.home}source={require("../assets/offer.png")}/>
   </TouchableOpacity>
   <TouchableOpacity>
   <Image style={style.home}source={require("../assets/handshake.png")}/>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
   <Image style={style.home}source={require("../assets/profile.png")} />
  </TouchableOpacity>
</View>
<View style={style.navigationtxt}>

  <Text>Home</Text>

  <Text>Discounts</Text>

  <Text>Combo</Text>


  <Text>Profile</Text>

</View>
</View> */}

    </View>
  )
}

export default Homepage

const style=StyleSheet.create({

  container:{
    backgroundColor:"#f8eec7",
    flex:1,
  },
  heading:{
     paddingTop:50,
     left:15,
  },

  headingleft:{
     flexDirection:"row",
    
  },
 deliverimg:{
  width:25,
  height:25,
 },

 delivertxt:{
  fontSize:16,
  left:12,
 },
bellimg:{
  width:30,
  height:30,
  top:12,

},
setting:{
  width:30,
  height:30,
  top:12,
  paddingHorizontal:15,
},
iconstop:{
  flexDirection:"row",
  left:110,
},

morning:{
  fontSize:20,
  paddingLeft:5,
},

cartimg:{
   width:30,
  height:30,
  position:"absolute",
  left:50,
  top:12,

},
search:{
  width:"90%",
  height:50,
  backgroundColor:"#ffff",
  borderRadius:20,
  alignSelf:"center",
  top:12,
  paddingLeft:16,
  marginBottom:15,
  
},
banner:{
  flexDirection:"row",
  justifyContent:"center",
  top:12,
  
  
},

bannerleft:{
  width:180,
  height:180,
  backgroundColor:"#fceaa2",
  borderBottomLeftRadius:20,
  borderBottomLeftRadius:20,

},
pannelimg:{
  width:180,
  height:180,
  borderTopRightRadius:20,
  borderBottomRightRadius:20,
},
bannertxt1:{
  color:"#1d7d3e",
  padding:12,
  fontWeight:2,
},
bannertxt2:{
  fontSize:18,
  paddingLeft:10,
  fontFamily:"fantasy",
  fontWeight:700,
},
subbutton:{
  backgroundColor:"#1d7d3e",
  width:110,
  height:30,
  borderRadius:20,
  left:22,
  top:12,
  
},
subtxt:{
  color:"#fff",
 padding:7,
 fontSize:12,
 left:5,
},
categories:{
  fontSize:25,
  padding:20,
  fontFamily:"fantasy",
},
all:{
  flexDirection:"row",
  marginLeft:12,
  marginRight:12,
  
},
horizontalarray:{
  backgroundColor:"#1d7d3e",
  height:40,
   borderRadius:10,
   width:80,
   marginLeft:12,
   
},

txtarray:{
  color:"#fff",
  textAlign:"center",
  top:10,
},

title:{
  fontSize:25,
  padding:20,
  fontFamily:"fantasy",
},
content:{
  backgroundColor:"#fff",
  width:"100%",
  height:"auto",
},
// navigationbar1:{
//  backgroundColor:"#fff",
//  width:"100%",
//   height:110,
// },

// navigationicons:{
//   flexDirection:"row",
//   justifyContent:"space-around",
//   paddingTop:12,
// },
// home:{
//   width:50,
//   height:50,
// },
// navigationtxt:{
//   flexDirection:"row",
//   justifyContent:"space-around",
// }
})