import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BgImage from '../Images/backgroundImage.jpg'


const FindScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground blurRadius={10} source={BgImage} style={styles.backgroundimg}  >
        <View style={styles.Subcontainer}>
           <View style={styles.MainContainer}>
              <Text style={{color:"#FFFFFF", fontSize:25, textAlign:'center'}}>Upgrade the premium section to see who liked you.</Text>
               <Text style={{color:"#FFFFFF", fontSize:25, textAlign:'center', marginTop:20}}>Get Spotlight for more  likes</Text>
                <View >
                    <Text style={{backgroundColor:'#660000',color:"#FFFFFF", fontSize:20, textAlign:'center', marginTop:50, paddingHorizontal:20, paddingVertical:12 , borderRadius:20}}>Get Spotlight</Text>
                </View>
           </View>
        </View>
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
  },
  Subcontainer:{
      display:'flex',
      flex:1,
      justifyContent:'flex-end',
      alignItems:'center',
      

  },
  MainContainer:{
     height:300,
     width:"100%",
     borderTopRightRadius:40,
     borderTopLeftRadius:40,
     paddingHorizontal:30,
     paddingTop:45,
     backgroundColor: 'black',
     opacity: 0.7,
     zIndex:0,
     alignItems:'center',
  }
});