import { View, Text ,StyleSheet,FlatList,Image} from 'react-native'
import React, { useEffect,useState } from 'react'


const Apifetching = () => {
    const[userData,setUserData]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response=>Response.json())
        .then(data=>setUserData(data))
        .catch(err=>console.log(err))
    },[])

const renderItem=({item})=>(

    <View style={style.cards}>
       <Text>{item.name}</Text>
    </View>
)
    
  return (
    <View style={style.bg}>
    <FlatList
    data={userData}
    keyExtractor={item=>item.id}
    renderItem={renderItem} 
    />
    </View>
  )
}

export default Apifetching;
const style=StyleSheet.create({
    bg:{
        flex:1,
        backgroundColor:"#fff",
    },
    cards:{
        width:"90%",
        backgroundColor:"rgba(215, 84, 215, 0.2)",
        alignSelf:"center",
       marginVertical:12,
       paddingVertical:30,
       paddingHorizontal:20,
       borderRadius:20,
    }
})