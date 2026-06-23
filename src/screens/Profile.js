import { View, Text,StyleSheet,TouchableOpacity,ScrollView,Image } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={style.profile}>
    <Text style={style.profiletxt}>Profile</Text>

<ScrollView>

    <View style={style.user}>
        
     <View style={style.userimg}>
        
     <Image style={style.userimg1}source={require('../assets/profile.png')}/>
     </View>
<Text style={style.username}>User Name</Text>
     <Text style={style.gmail}>user@gmail.com , 93******00</Text>

<TouchableOpacity>
    <View style={style.editbutton}>
     <Text style={style.edittxt}>Edit</Text>
</View>
</TouchableOpacity>
    </View>

    {/*  Account options */}


        <Text style={style.accounttxt}>Account</Text>
<TouchableOpacity>
<View style={style.myorder}>
    <View style={style.orderbg}>
<Image style={style.orderimg}source={require('../assets/list.png')}/> 
</View>
<Text style={style.ordertxt} >My Orders</Text>

</View>
</TouchableOpacity>



<TouchableOpacity>
<View style={style.address}>
    <View style={style.addressbg}>
<Image style={style.addressimg}source={require('../assets/locator.png')}/> 
</View>
<Text style={style.addresstxt} >Saved Address</Text>

</View>
</TouchableOpacity>



<TouchableOpacity>
<View style={style.favourite}>
    <View style={style.favouritebg}>
<Image style={style.favouriteimg}source={require('../assets/favourite.png')}/> 
</View>
<Text style={style.favouritetxt} >Favourite</Text>
</View>
</TouchableOpacity>



<TouchableOpacity>
<View style={style.payment}>
    <View style={style.paymentbg}>
<Image style={style.paymentimg}source={require('../assets/payment.png')}/> 
</View>
<Text style={style.paymenttxt} >My Orders</Text>

</View>
</TouchableOpacity>


{/* now makking prefference section */}


<Text style={style.prefference}>Preference</Text>


<TouchableOpacity>
<View style={style.notification}>
    <View style={style.notificationbg}>
<Image style={style.notificationimg}source={require('../assets/notification.png')}/> 
</View>
<Text style={style.notificationtxt} >Notification</Text>

</View>
</TouchableOpacity>



<TouchableOpacity>
<View style={style.setting}>
    <View style={style.settingbg}>
<Image style={style.settingimg}source={require('../assets/setting.png')}/> 
</View>
<Text style={style.settingtxt} >Payment method</Text>

</View>
</TouchableOpacity>






<TouchableOpacity>
<View style={style.help}>
    <View style={style.helpbg}>
<Image style={style.helpimg}source={require('../assets/support.png')}/> 
</View>
<Text style={style.helptxt} >Help & Support</Text>

</View>
</TouchableOpacity>



<TouchableOpacity>
<View style={style.signout}>
    <View style={style.signoutbg}>
<Image style={style.signoutimg}source={require('../assets/signout.png')}/> 
</View>
<Text style={style.signouttxt} >Sign Out</Text>

</View>
</TouchableOpacity>

<View style={{backgroundColor:"#f8f0cf", width:"100%",height:50,}}>

</View>


</ScrollView>
    </View>
  )
}

export default Profile

const style=StyleSheet.create({

    profile:{
        flex:1,
  backgroundColor:"#f8f0cf",


    },
    profiletxt:{
        paddingTop:40,
        fontStyle:"italic",
        fontSize:30,
        paddingLeft:20,
    },

    user:{
    
        width:"98%",
        height:90,
        backgroundColor:"#1d7d3e",
        alignSelf:"center",
        position:"relative",
        top:10,
        borderRadius:30,
    },

    userimg:{
       
        backgroundColor:"#4f9d67",
        width:60,
        height:60,
        position:"relative",
        top:15,
        left:20,
        borderRadius:50,
    },
    userimg1:{
        width:40,
        height:40,
        alignSelf:"center",
        position:"relative",
        top:7,
    },

    username:{
      
        position:"relative",
        left:90,
        top:-45,
        fontSize:20,
    },

    gmail:{

        color:"#99c8a2",
        position:"relative",
        top:-45,
        left:90,
    },

    editbutton:{

        backgroundColor:"#53ae6e",
        width:50,
        height:30,
        borderRadius:20,
        position:"relative",
        left:300,
    top:-80,
    },

    edittxt:{

        padding:6,
        paddingLeft:11,
        color:"#f8f0cf",
    },

    accounttxt:{

        color:"#788482",
        padding:20,
        fontSize:20,
    },

    myorder:{
        width:"90%",
        height:70,
        backgroundColor:"#ffffff",
        alignSelf:"center",
        borderTopLeftRadius:20,
         borderTopRightRadius:20,
    },

    orderimg:{
       width:30,
       height:30,position:"relative",
       left:10,
       top:10,
        },


    orderbg:{

        backgroundColor:"#f7efd1",
        width:50,
        height:50,
        position:"relative",
        left:15,
        top:10,
        borderRadius:40,

    },

    ordertxt:{
        color:"#000000",
        position:"relative",
        left:80,
        fontSize:18,
        top:-30,
    },

    address:{

        backgroundColor:"#ffffff",
        width:"90%",
        height:70,
        alignSelf:"center",
        position:"relative",
        top:2,
    },

    addressbg:{

  backgroundColor:"#f7efd1",
        width:50,
        height:50,
        position:"relative",
        left:15,
        top:10,
        borderRadius:40,
        },

        addressimg:{

            width:30,
       height:30,position:"relative",
       left:10,
       top:10,
        },

        addresstxt:{

            color:"#000000",
        position:"relative",
        left:80,
        fontSize:18,
        top:-30,
        },

        favourite:{
        backgroundColor:"#ffffff",
        width:"90%",
        height:70,
        alignSelf:"center",
        position:"relative",
        top:4,
        },

        favouritebg:{

             backgroundColor:"#f7efd1",
        width:50,
        height:50,
        position:"relative",
        left:15,
        top:10,
        borderRadius:40,
        },

        favouriteimg:{

            width:30,
       height:30,position:"relative",
       left:10,
       top:10,

        },


        favouritetxt:{

            color:"#000000",
        position:"relative",
        left:80,
        fontSize:18,
        top:-30,
        },

        payment:{
            backgroundColor:"#ffffff",
        width:"90%",
        height:70,
        alignSelf:"center",position:"relative",
        top:6,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        },

        paymentbg:{
            
             backgroundColor:"#f7efd1",
        width:50,
        height:50,
        position:"relative",
        left:15,
        top:10,
        borderRadius:40,

        },
        paymentimg:{
        width:30,
       height:30,
       position:"relative",
       left:10,
       top:10,

        },

        paymenttxt:{
       
            color:"#000000",
        position:"relative",
        left:80,
        fontSize:18,
        top:-30,
        },

        prefference:{

            color:"#788482",
            fontSize:20,
            paddingTop:15,
            paddingBottom:15,
            paddingLeft:15,

        },

         notification:{
            backgroundColor:"#ffffff",
        width:"90%",
        height:70,
        alignSelf:"center",position:"relative",
        top:2,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        },

        notificationbg:{
            
             backgroundColor:"#f7efd1",
        width:50,
        height:50,
        position:"relative",
        left:15,
        top:10,
        borderRadius:40,

        },
        notificationimg:{
        width:30,
       height:30,
       position:"relative",
       left:10,
       top:10,

        },

        notificationtxt:{
       
            color:"#000000",
        position:"relative",
        left:80,
        fontSize:18,
        top:-30,
        },

         setting:{
            backgroundColor:"#ffffff",
        width:"90%",
        height:70,
        alignSelf:"center",
        position:"relative",
        top:4,
        
        },

        settingbg:{
            
             backgroundColor:"#f7efd1",
        width:50,
        height:50,
        position:"relative",
        left:15,
        top:10,
        borderRadius:40,

        },
        settingimg:{
        width:30,
       height:30,
       position:"relative",
       left:10,
       top:10,

        },

        settingtxt:{
       
            color:"#000000",
        position:"relative",
        left:80,
        fontSize:18,
        top:-30,
        },


    help:{

        backgroundColor:"#ffffff",
        width:"90%",
        height:70,
        alignSelf:"center",
        position:"relative",
        top:6,

    },

    helpbg:{

  backgroundColor:"#f7efd1",
        width:50,
        height:50,
        position:"relative",
        left:15,
        top:10,
        borderRadius:40,
        },

        helpimg:{

            width:30,
       height:30,
       position:"relative",
       left:10,
       top:10,
        },

        helptxt:{

            color:"#000000",
        position:"relative",
        left:80,
        fontSize:18,
        top:-30,
        },

         signout:{
            backgroundColor:"#ffffff",
        width:"90%",
        height:80,
        alignSelf:"center",position:"relative",
        top:8,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        
        },

        signoutbg:{
            
             backgroundColor:"#f7efd1",
        width:50,
        height:50,
        position:"relative",
        left:15,
        top:10,
        borderRadius:40,

        },
        signoutimg:{
        width:30,
       height:30,
       position:"relative",
       left:10,
       top:10,

        },

        signouttxt:{
       
            color:"#000000",
        position:"relative",
        left:80,
        fontSize:18,
        top:-30,

        },


})