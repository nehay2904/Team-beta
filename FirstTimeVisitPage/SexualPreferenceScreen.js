import { StyleSheet, Text, View, Button, TextInput  } from 'react-native'
import React from 'react'
import SexualPreferenceInput from '../components/SexualPreferenceInput'


const SexualPreference = ({route, navigation}) => {
  return (
    <View style={styles.container}>
       <View style={styles.info}>
         <Text style={{fontSize:25}}>What is your Sexual Preference ?</Text>
         <SexualPreferenceInput />
       </View>
       
    </View>
  )
}

export default SexualPreference



const styles = StyleSheet.create({
   container:{
    top:10,
    
   
   
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
     
   }
});