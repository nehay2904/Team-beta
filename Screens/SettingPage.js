import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const SettingPage = ({navigation}) => {
  return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <View  style={{display:"flex",  flexDirection:"row", justifyContent:'space-between', marginBottom:50, marginTop:20}}>
                    <SimpleLineIcons name='arrow-left' style={{marginTop:9}} color={"white"} size={22} onPress={() =>
                navigation.navigate('ProfilePage', { name: 'cancel' })
              } />
                    <Text style={{color:"white", fontSize:30}} >Settings</Text>
                    <AntDesign style={{marginTop:5}} name="setting" size={30} color="white" />
                </View>
                <TouchableOpacity>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.Texts}>Social</Text>
                        <SimpleLineIcons name='arrow-right' color={"white"} size={15} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.Texts}>Notifications</Text>
                        <SimpleLineIcons name='arrow-right' color={"white"} size={15} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.Texts}>Chats</Text>
                        <SimpleLineIcons name='arrow-right' color={"white"} size={15} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.Texts}>Help Desk</Text>
                        <SimpleLineIcons name='arrow-right' color={"white"} size={15} />
                    </View>
                </TouchableOpacity>
                <View style={{marginTop:100}}>
               <View style={styles.bottomContainer}>
                  <FontAwesome5 name="user-alt" size={25} color="#2CA0F4" />
                  <Text style={styles.Bottomtexts}>Log Out</Text>
               </View>
               <View style={styles.bottomContainer}> 
               <FontAwesome5 name="plus" size={25} color="#2CA0F4" /> 
               <Text style={styles.Bottomtexts}>Add Another Account</Text>
               </View>
            </View>
            </View>
           
        </View>
    )
}

export default SettingPage


const styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: 'center',
      alignItems: "center",
      height: "100%",
      width: "100%",
      backgroundColor: 'black'
  
    },
    subcontainer: {
      display: "flex",
      height: "100%",
      width: "90%",
      backgroundColor: 'black',
      paddingTop: 50,
      paddingBottom: 50
    },
    Texts: {
      color: "white",
      fontSize: 20
    },
    sectionContainer: {
      padding: 25,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: "row"
    },
    bottomContainer: {
      paddingTop:25,
      paddingLeft: 22,
      display: 'flex',
      flexDirection: "row"
    },
    Bottomtexts: {
      color: "#2CA0F4",
      paddingLeft: 20,
      fontSize: 20
    },
    EndTexts: {
      color: "white",
      textAlign: "center",
      marginTop: 10
    },
  
  
  
  })