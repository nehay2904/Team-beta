import { StyleSheet, Text, View, Button, TextInput  } from 'react-native'
import React from 'react'

const Insta = ({route, navigation}) => {
  return (
    <View style={styles.container}>
       
       <View style={styles.info}>
         <Text style={{fontSize:20 , marginTop:20}}>What Is Your Instagram-URL ?</Text>
         <TextInput placeholder='Insta' style={styles.Input} />
       </View>
      
    </View>
  )
}

export default Insta




const styles = StyleSheet.create({
  container:{
  //  top:80,
  //  display:'flex',
  //  flexDirection:'column',
  //  height:"85%",
  //  justifyContent:'space-between',
  //  marginHorizontal:30
  
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
    padding:7
  }
});