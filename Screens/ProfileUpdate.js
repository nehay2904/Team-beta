// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { SafeAreaProvider } from 'react-native-safe-area-context'
// import { MaterialIcons } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// const ProfileUpdateScreen = () => {
//   return (
//     <SafeAreaProvider>

//     <View style={{display:'flex',flexDirection:'column'}}>
//       <View style={styles.header}>
//         <Text style={{color:'white',fontSize:24,marginTop:62,marginLeft:20,fontWeight:'600'}}>Edit Profile</Text>
//         <TouchableOpacity>
//           <View style={styles.donebox}>
//             <Text style={{color:'#33BBFF',paddingLeft:7,fontWeight:'bold'}}>Done</Text>
//           </View>
//         </TouchableOpacity>

//       </View>
//       <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1 }}></View>
//       <View style={styles.section}>
//         <Text style={{color:'white',marginLeft:130,marginTop:15,fontSize:18}}>Profile Photo</Text>
//         <TouchableOpacity>
//           <View style={styles.profilepic}>
//           <MaterialIcons name="add-circle" size={44} color="white" style={{marginLeft:140,marginTop:140}}/>

//           </View>
//         </TouchableOpacity>
//        <View style={{width:"50%", justifyContent:'center', display:'flex', marginHorizontal:30, marginVertical:20, flexDirection:'row'}}>
//          <FontAwesome name="camera" size={20} color="white" />
//          <Text style={{color:'#33BBFF', paddingBottom:18, fontSize:16, marginLeft:20}}>Change your profile photo</Text>
//        </View>
//       </View>
//     </View>
//     </SafeAreaProvider>
//   )
// }

// export default ProfileUpdateScreen
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import SwitchSelector from "react-native-switch-selector";
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import ProfilePage from './ProfilePage';
import ProfilePic from '../Images/PicFour.jpg'
const ProfileUpdateScreen = ({route}) => {



  const [state, setState] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <ScrollView>
      <Text>{route.params.name}</Text>
        <View style={{ display:"flex", flexDirection:'row', justifyContent:'space-between' , marginHorizontal:50, marginVertical:30}}>
          <TouchableOpacity><Text style={{ color: 'white'}}>Cancel</Text></TouchableOpacity>
          <TouchableOpacity><Text style={{ color: 'white' }}>Edit</Text></TouchableOpacity>
           </View>
        <View style={{ marginTop: 10 }}>
          <Image style={{ width: '82%', height: 250, marginHorizontal: 30, borderTopLeftRadius: 90, resizeMode:'contain' }} source={require('../Images/PicThree.jpg')} />
          <TouchableOpacity style={{ position: 'absolute' }} >
            <Ionicons name='camera' size={40} color='#4d4c4b' style={{ position: 'absolute', left: 275, top: 200 }} />
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#8f8c89', marginLeft: 40, fontSize: 18, marginTop: 35 }}>My Name</Text>
        <TextInput placeholder='Enter your name..' style={{ backgroundColor: '#4d4c4b', color: 'white', marginHorizontal: 30, borderRadius: 20, height: 48, marginTop: 8, paddingHorizontal: 10 }} />

        <Text style={{ color: '#8f8c89', marginLeft: 40, marginTop: 15, fontSize: 18 }}>Select Gender</Text>
        <View style={{ width: '85%', marginHorizontal: 28, marginTop: 8 }}>

          <SwitchSelector
            initial={0}
            onPress={value => setState({ gender: value })}
            textColor='white'
            selectedColor='white'
            height={50}
            backgroundColor='#4d4c4b'
            borderRadius={20}
            selectedTextStyle={{ fontWeight: 'bold', fontSize: 18 }}
            borderColor='black'
            buttonColor='#302f2e'
            hasPadding
            options={[
              { label: "Female", value: "f", },
              { label: "Male", value: "m", }
            ]}
            testID="gender-switch-selector"
            accessibilityLabel="gender-switch-selector"
          />
        </View>
        <Text style={{ color: '#8f8c89', marginLeft: 40, marginTop: 20, fontSize: 18 }}>Add Bio </Text>
        <TextInput style={{ backgroundColor: '#4d4c4b', color: 'white', marginHorizontal: 30, borderRadius: 20, height: 100,paddingTop:15, marginTop: 8, paddingHorizontal: 10, textAlignVertical: 'top' }} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileUpdateScreen

// const styles = StyleSheet.create({
//   header:{
//     backgroundColor:'black',
//     borderBottomRadius:1,
//     borderBottomColor:'gray',
//     height:110,
//     display:'flex',
//     flexDirection:'row'

//   },

//   section:{
//     backgroundColor:'black',
//     height:'100%',
  
//   }
//   ,

//   donebox:{
//     width:47,
//     height:22,
//     borderColor:'gray',
//     borderWidth:1,
//     borderRadius:3,
//     marginTop:70,
//     marginLeft:140
//   },

//   profilepic:{
//     height:314,
//     border:'gray',
//     borderRadius:30,
//     backgroundColor:'gray',
//     marginHorizontal:20,
//     marginTop:15
    




//   }


// })
