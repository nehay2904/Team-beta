import { StyleSheet, Text, View, Button, TextInput  } from 'react-native'
import React from 'react'

const Profession = ({route, navigation}) => {
  return (
    <View style={styles.container}>
       <View style={styles.info}>
       <Text style={{display:"none"}}>{route.params.name}</Text>
         <Text style={{fontSize:25}}>What is your Profession </Text>
         <TextInput placeholder='Student/Engineer/Doctor' style={styles.Input} multiline />
       </View>
       <View style={styles.NextButton}>
          <Button title='Next' color={"#A60A3D"} onPress={() =>
        navigation.navigate('Birth', { name: 'cancel' })
      }/>
       </View>
    </View>
  )
}

export default Profession



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
   
    
   },
   Input:{
     borderColor:'gray',
     borderWidth:2,
     marginTop:20,
     borderRadius:7,
     padding:10
   }
});