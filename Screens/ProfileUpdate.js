import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons';

const ProfileUpdateScreen = () => {
  return (
    <SafeAreaProvider>

    <View style={{display:'flex',flexDirection:'column'}}>
      <View style={styles.header}>
        <Text style={{color:'white',fontSize:24,marginTop:62,marginLeft:20,fontWeight:'600'}}>Edit Profile</Text>
        <TouchableOpacity>
          <View style={styles.donebox}>
            <Text style={{color:'#33BBFF',paddingLeft:7,fontWeight:'bold'}}>Done</Text>
          </View>
        </TouchableOpacity>

      </View>
      <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
      <View style={styles.section}>
        <Text style={{color:'white',marginLeft:130,marginTop:15,fontSize:18}}>Profile Photo</Text>
        <TouchableOpacity>
          <View style={styles.profilepic}>
          <MaterialIcons name="add-circle" size={44} color="white" style={{marginLeft:140,marginTop:140}}/>

          </View>
        </TouchableOpacity>

      </View>
      
    </View>
    </SafeAreaProvider>
  )
}

export default ProfileUpdateScreen

const styles = StyleSheet.create({
  header:{
    backgroundColor:'black',
    borderBottomRadius:1,
    borderBottomColor:'gray',
    height:110,
    display:'flex',
    flexDirection:'row'

  },

  section:{
    backgroundColor:'black',
    height:'100%'
  }
  ,

  donebox:{
    width:47,
    height:22,
    borderColor:'gray',
    borderWidth:1,
    borderRadius:3,
    marginTop:70,
    marginLeft:140
  },

  profilepic:{
    height:314,
    border:'gray',
    borderRadius:30,
    backgroundColor:'gray',
    marginHorizontal:20,
    marginTop:15
    




  }


})
