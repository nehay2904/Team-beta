import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BgImage from '../Images/backgroundImage.jpg'
import { LinearGradient } from 'expo-linear-gradient'
const FindScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground blurRadius={10} source={BgImage} style={styles.backgroundimg}  >
        <Text style={{color:'black'}}>hettttttt</Text>
      </ImageBackground>
    </View>
  )
}

export default FindScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"black"
  },
  backgroundimg:{
      width:"100%",
      minHeight:"100%",
      resizeMode:'cover'
  }
});