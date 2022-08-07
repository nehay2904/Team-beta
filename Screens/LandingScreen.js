
import { Text, View , StyleSheet, Button, Image } from 'react-native';
import {useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../Images/logo.png';

function LandingScreen({ navigation }) {

  const init = () => {
    AsyncStorage.getItem("@user").then(user => {
      if(user) {
        navigation.navigate("ImageUpload")
      } else {
        console.log("user not found in async storage")
      }
    })
  }

  useEffect(()=>{
    init()
  },[])


  const gotoLogin = () => {
    navigation.navigate('Login')
  } 
  return (
    <View style={styles.container}>
      <Image source={Logo}/>
      <Text style={styles.welcomeText}>Swipe</Text>
      <Text style={styles.SubText}>Find your perfect choice</Text>
      <Button style={styles.button} title='Signup' onPress={gotoLogin} color="#87000B"></Button>
    </View> 
  );
  }

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'black',
     justifyContent:"center",
     alignItems:"center"
    },
    welcomeText: {
      color:'white',
      fontSize:50,
      textAlign:'center',
      paddingBottom:10,
      paddingTop:10
    },
    
    SubText:{
       marginBottom:110,
       color:"white",
       fontSize:22
    },
    LogoImage:{

    }
  });

  export default LandingScreen