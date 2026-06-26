// import { View, Text ,StyleSheet,TouchableOpacity,ScrollView,Image} from 'react-native'
// import React from 'react'
// import { beginAsyncEvent } from 'react-native/Libraries/Performance/Systrace'

// const setting = () => {
//   return (
//     <View style={style.conatiner}>
//       <View style={style.arrow}>
//         <TouchableOpacity>
//         <View style={style.arrowtag}></View>
//         </TouchableOpacity>
//         <Text style={style.arrowtxt}>Setting</Text>
//       </View>

//       <ScrollView>
//         <View style={style.conatiner2}>

//             <Text style={style.pref}>Preference</Text>
//             <View style={style.container3}>
//             <TouchableOpacity>
//             <View style={style.notification}>
//               <Image style={style.bellimg}source={require('../assets/bell.png')}/>
//               <View style={{flexDirection:"column",marginTop:8,marginLeft:13,}}>
//               <Text style={style.notitxt}>Order Notification</Text>
//               <Text>Update about your deliveries</Text>
//               </View>
//             </View>
//             </TouchableOpacity>
// <TouchableOpacity>
//               <View style={style.promotion}>
//               <Image style={style.bellimg}source={require('../assets/bell.png')}></Image>
//               <View style={{flexDirection:"column",marginTop:8,marginLeft:13,}}>
//               <Text style={style.promotxt}>Promotions and Offers</Text>
//               <Text>New Deals and discount alerts</Text>
//               </View>
//             </View>
//             </TouchableOpacity>
//             </View>

//             <TouchableOpacity>
//               <View style={style.promotion}>
//               <Image style={style.bellimg}source={require('../assets/truck.png')}></Image>
//               <View style={{flexDirection:"column",marginTop:8,marginLeft:13,}}>
//               <Text style={style.promotxt}>Daily subscription</Text>
//               <Text>Auto deliver milk daily morning</Text>
//               </View>
//             </View>
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <View style={style.mode}>
//                 <Image style={style.modeimg}source={require('../assets/mode.png')}/>
//                  <View style={{flexDirection:"column",marginTop:8,marginLeft:13,}}>
//               <Text style={style.modetxt}>Screen Mode</Text>
//               <Text>Change the screen color mode</Text>
//               </View>
//               </View>
//             </TouchableOpacity>
//         </View>

//         <View style={style.conatiner4}>
//           <Text style={style.regiontxt}>Region</Text>

          
//             <TouchableOpacity>
//             <View style={style.notification}>
//               <Image style={style.langimg}source={require('../assets/language.png')}/>
//               <View style={{flexDirection:"column",marginTop:8,marginLeft:13,}}>
//               <Text style={style.language}>Language</Text>
//               <Text>change language</Text>
//               </View>
//             </View>
//             </TouchableOpacity>

//             <View style={style.conatiner6}>

//               <Text style={style.accounttxt}>Account</Text>
//                <TouchableOpacity>
//             <View style={style.password}>
//               <Image style={style.passwordimg}source={require('../assets/password.png')}/>
            
//               <Text style={style.passwordtxt}>Change password</Text>
            
              
//             </View>
//             </TouchableOpacity>

//                <TouchableOpacity>
//             <View style={style.payment}>
//               <Image style={style.paymentimg}source={require('../assets/payment.png')}/>
             
//               <Text style={style.paymenttxt}>Payment method</Text>
            
             
//             </View>
//             </TouchableOpacity>

//                <TouchableOpacity>
//             <View style={style.address}>
//               <Image style={style.addressimg}source={require('../assets/truck.png')}/>
             
//               <Text style={style.addresstxt}>Delivery Addresses</Text>
            
             
//             </View>
//             </TouchableOpacity>
//             </View>
//           </View>
           
//            <View style={style.conatiner7}>
//             <Text style={style.legaltxt}>Legal</Text>
//             <TouchableOpacity>
              
//              <View style={style.privacy}>
//               <Image style={style.privacyimg}source={require('../assets/security.png')}/>
//               <Text style={style.privacytxt}>Privacy policy</Text>
//              </View>
            
//             </TouchableOpacity>

//              <TouchableOpacity>
              
//              <View style={style.term}>
//               <Image style={style.termimg}source={require('../assets/list.png')}/>
//               <Text style={style.termtxt}>Term & Conditions</Text>
//              </View>
            
//             </TouchableOpacity>
//            </View>

//            <View style={style.bottomconatiner}>
//            <TouchableOpacity>
              
//              <View style={style.signout}>
//               <Image style={style.signoutimg}source={require('../assets/signout.png')}/>
//               <Text style={style.signouttxt}>Sign out</Text>
//              </View>
            
//             </TouchableOpacity>

//             <TouchableOpacity>
              
//              <View style={style.delete}>
//               <Image style={style.deleteimg}source={require('../assets/delete.png')}/>
//               <Text style={style.deletetxt}>Delete Account</Text>
//              </View>
            
//             </TouchableOpacity>

//            </View>
//       </ScrollView>
//     </View>
//   )
// }

// export default setting

// const style=StyleSheet.create({

//     conatiner:{
//         flex:1,
//       backgroundColor:"#f7f4e4",
      
//     },

//     arrow:{
//         width:"100%",
//         height:40,
//         marginTop:60,
//         flexDirection:"row",
//         paddingHorizontal:20,
//         justifyContent:"flex-start",
        

//     },
//     arrowtag:{
//         width:30,
//         height:30,
//         backgroundColor:"#ffffff",
//         borderRadius:100, 
//     },

//     arrowtxt:{
//         marginLeft:15,
//         fontSize:25,
//         fontFamily:"fantasy",
//     },

// conatiner2:{
    
//     width:"100%",
//     height:"auto",
//     marginTop:30,
// },

// pref:{
//     fontSize:20,
//     marginLeft:25,
//     color:"#7f7070",
// },

// container3:{
// backgroundColor:"#f7f4e4",
// width:"100%",
// height:"auto",

// },
// notification:{
//    width:"95%",
//    height:70,
//    backgroundColor:"#ffffff", 
//    flexDirection:"row",
//    alignSelf:"center",
//    borderTopLeftRadius:10,
//    borderTopRightRadius:10,
//    marginTop:12,
// },

// bellimg:{
//   width:30,
//   height:30,
//   backgroundColor:"#f7f4e4",
//   borderRadius:20,
//   marginTop:12,
//   marginLeft:12,
  
// },

// notitxt:{
//   fontSize:18,
// },

// promotion:{
//   width:"95%",
//    height:70,
//    backgroundColor:"#ffffff", 
//    flexDirection:"row",
//    alignSelf:"center",
//    marginTop:2,
// },
// promotxt:{
//   fontSize:18,
// },
// mode:{
// width:"95%",
//    height:70,
//    backgroundColor:"#ffffff", 
//    flexDirection:"row",
//    alignSelf:"center",
//    marginTop:2,
//    borderBottomLeftRadius:10,
//    borderBottomRightRadius:10,
// },
// modeimg:{
//   width:30,
//   height:30,
//   backgroundColor:"#f7f4e4",
//   borderRadius:20,
//   marginTop:12,
//   marginLeft:12,
// },
// modetxt:{
//   fontSize:18,

// },

// conatiner4:{
//    width:"100%",
//    height:"auto",
//    marginTop:18,
// },

// regiontxt:{
//   fontSize:20,
//     marginLeft:25,
//     marginTop:12,
//     color:"#7f7070",
// },

// conatiner5:{
//   backgroundColor:"#f7f4e4",
// width:"100%",
// height:"auto",
// },

// langimg:{
//     width:30,
//   height:30,
//   backgroundColor:"#f7f4e4",
//   borderRadius:20,
//   marginTop:15,
//   marginLeft:12,
// },
// language:{
//   fontSize:18,
// },
// conatiner6:{
//    width:"100%",
//    height:"auto",
//    marginTop:18,
// },
// accounttxt:{
//   fontSize:20,
//     marginLeft:25,
//     marginTop:12,
//     marginBottom:12,
//     color:"#7f7070",
// },

// password:{
//   width:"95%",
//    height:70,
//    backgroundColor:"#ffffff", 
//    flexDirection:"row",
//    alignSelf:"center",
//    marginTop:2,
//    borderTopLeftRadius:10,
//    borderTopRightRadius:10,
// },
// passwordimg:{
//   width:30,
//   height:30,
//   backgroundColor:"#f7f4e4",
//   borderRadius:20,
//   marginTop:18,
//   marginLeft:12,
// },

// passwordtxt:{
//    marginLeft:12,
//    fontSize:18,
//     marginTop:20,
// },

// payment:{
//    width:"95%",
//    height:70,
//    backgroundColor:"#ffffff", 
//    flexDirection:"row",
//    alignSelf:"center",
//    marginTop:2,
// },

// paymentimg:{
//   width:30,
//   height:30,
//   backgroundColor:"#f7f4e4",
//   borderRadius:20,
//   marginTop:18,
//   marginLeft:12,
// },

// paymenttxt:{
//    marginLeft:12,
//    fontSize:18,
//     marginTop:20,
// },

// address:{
//    width:"95%",
//    height:70,
//    backgroundColor:"#ffffff", 
//    flexDirection:"row",
//    alignSelf:"center",
//    marginTop:2,
//    borderBottomLeftRadius:10,
//    borderBottomRightRadius:10,
// },

// addressimg:{
//   width:30,
//   height:30,
//   backgroundColor:"#f7f4e4",
//   borderRadius:20,
//   marginTop:18,
//   marginLeft:12,
// },

// addresstxt:{
//   marginLeft:12,
//    fontSize:18,
//     marginTop:20,
// },
// conatiner7:{
//   width:"100%",
//    height:230,
//    marginTop:18,
// },

// legaltxt:{
//    fontSize:20,
//     marginLeft:25,
//     marginTop:12,
//     marginBottom:12,
//     color:"#7f7070",
// },

// privacy:{
//  width:"95%",
//    height:70,
//    backgroundColor:"#ffffff", 
//    flexDirection:"row",
//    alignSelf:"center",
//    marginTop:2,
//    borderTopLeftRadius:10,
//    borderTopRightRadius:10,
// },

// privacyimg:{
//    width:30,
//   height:30,
//   backgroundColor:"#f7f4e4",
//   borderRadius:20,
//   marginTop:18,
//   marginLeft:12,
// },

// privacytxt:{
//    marginLeft:12,
//    fontSize:18,
//     marginTop:20,
// },

// term:{
//   width:"95%",
//    height:70,
//    backgroundColor:"#ffffff", 
//    flexDirection:"row",
//    alignSelf:"center",
//    marginTop:2,
//    borderBottomLeftRadius:10,
//    borderBottomRightRadius:10,
// },

// termimg:{
//   width:30,
//   height:30,
//   backgroundColor:"#f7f4e4",
//   borderRadius:20,
//   marginTop:18,
//   marginLeft:12,
// },

// termtxt:{
//   marginLeft:12,
//    fontSize:18,
//     marginTop:20,
// },


// bottomconatiner:{
//   width:"100%",
//    height:230,
// },
// signout:{
//   width:"95%",
//    height:70,
//    backgroundColor:"#ffffff", 
//    flexDirection:"row",
//    alignSelf:"center",
//    borderTopLeftRadius:10,
//    borderTopRightRadius:10,
//    marginTop:12,
// },

// signoutimg:{
//    width:30,
//   height:30,
//   backgroundColor:"#f7f4e4",
//   borderRadius:20,
//   marginTop:18,
//   marginLeft:12,
// },
// signouttxt:{
//   marginLeft:12,
//    fontSize:18,
//     marginTop:20, 
// },
// delete:{
//  width:"95%",
//    height:70,
//    backgroundColor:"#ffffff", 
//    flexDirection:"row",
//    alignSelf:"center",
//    borderBottomLeftRadius:10,
//    borderBottomRightRadius:10,
//    marginTop:3,
// },

// deleteimg:{
//   width:30,
//   height:30,
//   backgroundColor:"#f7f4e4",
//   borderRadius:20,
//   marginTop:18,
//   marginLeft:12,
// },

// deletetxt:{
//    marginLeft:12,
//    fontSize:18,
//     marginTop:20, 
//     color:"rgb(232, 45, 45)",
// }













// })

import { View, Text ,StyleSheet,Image,FlatList,TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'


const Setting = () => {

  const setting=[
    {
      "id": 1,
      "img":require('../assets/userprofile.png'),
      "user":"Sahil",
      "gmail":"sahil@gmaail.com",
      
    },

    {
      "id":2,
      "img":require(),
      "edit":"Edit Profile",

    },

    {
      "id":3,
      "img":require(),
      "username":"sahil1234",
    },
    {
      "id":4,
      "email":"sahil@gmial.com",

    },
    {
      "id":5,
      "number":"Phone Number",
      
    }
    
  ]
  const renderItem=({item})=>(
    <View style={style.profile}> 
     <Image style={style.userimg} source={item.img}  />
     
    </View>
  )


  return (
    <View style={style.bg}>

      <View style={style.setting}>
        <Text style={style.settingtxt}>Setting</Text>
      </View>

    <FlatList
      data={setting}
      keyExtractor={item=>item.id}
      renderItem={renderItem}

    />

    </View>
   
  
  )
}

export default Setting

const style=StyleSheet.create({

  bg:{
    backgroundColor:"#3232BA",
    flex:1,
  },
  userimg:{
    height:60,
    width:60,
  },

  setting:{
    width:"100%",
    height:60,
    marginTop:60,
    padding:12,
  },
  settingtxt:{
    fontSize:22,
  },

  profile:{
    backgroundColor:"#d3d3",
    flexDirection:"row",
    
  }

})


