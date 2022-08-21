import { StyleSheet, Text, View, Button, TextInput  } from 'react-native'
import React from 'react'
import DateInput from '../components/DateInput'

const Birth  = ({route, navigation}) => {
  return (
    <View style={styles.container}>
       <View style={styles.info}>
    
       <Text style={{fontSize:20, textAlign:'left'}}>What Is Your Birth Date  ?</Text>
         
         
         <DateInput />
         
       </View>
      
    </View>
  )
}

export default Birth 




const styles = StyleSheet.create({
  container:{
   top:80,
   display:'flex',
   height:"38%",
   
  
  },
  info:{
   
  },
  NextButton:{
   alignItems:'flex-end',
  
   
  },
  Input:{
    borderColor:'gray',
    borderWidth:2,
    borderRadius:7,
    padding:7
  }
});