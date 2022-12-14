import { StyleSheet, Text, View, Button, TextInput  } from 'react-native'
import React from 'react'
import GenderInput from '../components/GenderInput'

const Gender = ({route, navigation}) => {
  return (
    <View style={styles.container}>
       <View style={styles.info}>
       
         <Text style={{fontSize:25 , textAlign:'center'}}>What is your gender ?</Text>
         <GenderInput />
       
       </View>
      
    </View>
  )
}

export default Gender



const styles = StyleSheet.create({
   container:{
    top:40,
    display:'flex',
    flexDirection:'column',
    height:"85%",
    justifyContent:'space-between',
    marginHorizontal:30
   
   },
   info:{
    
   },
   NextButton:{
    alignItems:'flex-end',
   
    
   },
   Input:{
     borderColor:'gray',
     borderWidth:2,
     marginTop:20,
     borderRadius:7,
     padding:10
   }
});