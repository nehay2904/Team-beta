import { StyleSheet, Text, View, Button, TextInput  } from 'react-native'
import React from 'react'

const Profession = ({route, navigation}) => {
  return (
    <View style={styles.container}>
       <View style={styles.info}>
     
         <Text style={{fontSize:20, marginTop:60}}>What is your Profession </Text>
         <TextInput placeholder='Student/Engineer/Doctor' style={styles.Input}  />
       </View>
     
    </View>
  )
}

export default Profession



const styles = StyleSheet.create({
   container:{
  
    
   
   },
   info:{
    
   },
   NextButton:{
    alignItems:'flex-end',
   
    
   },
   Input:{
     borderColor:'gray',
     borderWidth:2,
     marginTop:5,
     borderRadius:7,
     padding:5
   }
});