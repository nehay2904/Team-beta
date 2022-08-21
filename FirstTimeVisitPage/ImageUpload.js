import { StyleSheet, Text, View, Button, TextInput , Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const ImageUpload = ({route, navigation}) => {
  return (
    <View style={styles.container}>
       <View style={styles.info}>
       <Text style={{display:"none"}}>{route.params.name}</Text>
         <Text style={{fontSize:25 , textAlign:'center'}}>Add Your Profile Picture</Text>
         <View style={{ marginTop: 40 }}>
          <Image style={{ width: '82%', height: 250, marginHorizontal: 30, borderTopLeftRadius: 90, resizeMode:'contain' }} source={require('../Images/ProfileIcon.png')} />
          <TouchableOpacity style={{ position: 'absolute' }} >
            <Ionicons name='camera' size={40} color='#4d4c4b' style={{ position: 'absolute', left: 260, top: 210 }} />
          </TouchableOpacity>
        </View>
       </View>
       <View style={styles.NextButton}>
          <Button title='Next' color={"#990257"} onPress={() =>
        navigation.navigate('NavComponent', { name: 'cancel' })
      }/>
       </View>
    </View>
  )
}

export default ImageUpload



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