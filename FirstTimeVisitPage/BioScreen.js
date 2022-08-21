import { StyleSheet, Text, View, Button, TextInput  } from 'react-native'
import React from 'react'

const Bio = ({route, navigation}) => {
  return (
    <View style={styles.container}>
       <View style={styles.info}>
       
         <Text style={{fontSize:20}}>Write Something About Yourself </Text>
         <TextInput placeholder='Bio' style={styles.Input} multiline />
       </View>
       
    </View>
  )
}

export default Bio




const styles = StyleSheet.create({
  container:{
   top:40,
  

  
  },
  info:{
   
  },
  NextButton:{
   alignItems:'flex-end',
  
   
  },
  Input:{
    borderColor:'gray',
    borderWidth:2,
    marginTop:7,
    borderRadius:7,
    padding:10
  }
});