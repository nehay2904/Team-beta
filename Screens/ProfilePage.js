import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import ProfilePicture from '../Images/PicFour.jpg'
import PostPictureOne from '../Images/ProfilePic.jpg'
import PostPictureTwo from '../Images/PicFive.jpg'
import PostPictureThree from '../Images/PicThree.jpg'
import Ionicons from '@expo/vector-icons/FontAwesome'


const ProfilePage = () => {


  return (
    <ScrollView>

      <View style={styles.maincontainer}>
        <View style={styles.container}>
          <View style={styles.header}>

            <Text style={styles.heading}>My Profile</Text>
            <Ionicons name='pencil' color={"white"} style={{ marginBottom: 20 }} size={35} />
          </View>
          <Image source={ProfilePicture} style={styles.ProfilePicture} />
          <Text style={styles.profilename}>Neha Yednurwar</Text>
          <Text style={styles.profilename}>21 years</Text>
          <Text style={styles.profilebio}>When  an account, or change your password, npm will check if the password you entered is considered weak according to datasets like HaveIBeenPwned. The password may be</Text>
          <View style={styles.ViewPicPost}>
            <Image style={styles.PicPost} source={PostPictureOne} />
            <Image style={styles.PicPost} source={PostPictureTwo} />
            <Image style={styles.PicPost} source={PostPictureThree} />
          </View>
        </View>
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'black',
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: 'center'

  },
  container: {
    width: "86%",
    height: "75%",
    // backgroundColor:"white"
  },
  heading: {
    fontSize: 50,
    color: "white",
    marginBottom: 20

  },
  header: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1
  },
  ProfilePicture: {
    width: "100%",
    height: 350,
    marginVertical: 20,
    borderTopLeftRadius: 100
  },
  profilename: {

    fontSize: 30,
    color: "#B0ACAC"

  },
  profilebio: {
    fontSize: 20,
    color: "#B0ACAC"
  },
  PicPost: {
    width: 130,
    height:104,
    marginHorizontal:7,
    resizeMode:'cover',
    borderRadius:5,
    
  },
  ViewPicPost: {
   display:'flex',
   flexDirection:"row",
   height:200,
   marginVertical:50
  }


});
export default ProfilePage



