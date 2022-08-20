import { StyleSheet, Text, View, Button, TextInput  } from 'react-native'
import React from 'react'
import DateInput from '../components/DateInput'

const Birth  = () => {
  return (
    <View style={styles.container}>
       <View style={styles.info}>
         <Text style={{fontSize:27}}>What Is Your Birth Date  ?</Text>
         <DateInput />
       </View>
       <View style={styles.NextButton}>
          <Button title='Next' color={"red"} />
          
       </View>
    </View>
  )
}

export default Birth 



const styles = StyleSheet.create({
   container:{
    top:80,
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
    
    
   }
});