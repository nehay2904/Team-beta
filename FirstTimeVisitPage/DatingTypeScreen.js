import { StyleSheet, Text, View, Button, TextInput  } from 'react-native'
import React from 'react'
import DatingTypeInput from '../components/DatingTypeInput'

const DatingType = ({route, navigation}) => {
  return (
    <View style={styles.container}>
       <View style={styles.info}>
 
         <Text style={{fontSize:25}}>What is your Dating Type ?</Text>
         <DatingTypeInput />
       </View>
       
    </View>
  )
}

export default DatingType;



const styles = StyleSheet.create({
   container:{
  marginVertical:10
   
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