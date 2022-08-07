
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Entypo, MaterialIcons } from "@expo/vector-icons"
import Logo from '../Images/logo.png'


export default function App() {

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [gender, setGender] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [profession, setProfession] = useState("")
  const [bio, setBio] = useState("")
  const [interest, setInterest] = useState("")
  const [sexualPrefrence, setSexualPrefrence] = useState("")
  const [datingType, setDatingType] = useState("")

  const sendData = (event) => {
    event.preventDefault();

    const user = {
      email: email,
      username: username,
      gender: gender,
      dateOfBirth: dateOfBirth,
      profession: profession,
      bio: bio,
      interest: interest,
      sexualPrefrence: sexualPrefrence,
      datingType: datingType


    }
    const data = JSON.stringify(user);


    console.log(data)
  };



  return (
    <ScrollView style={styles.MainContainer}>
      <View style={styles.container}>
        <View style={styles.Header}>
          <Image style={styles.Logo} source={Logo} />
          <Text style={styles.HeaderText}>Swipe</Text>

        </View>
        <View style={styles.header}>
          <View style={styles.heading}>
            <Entypo name="cross" size={34} color="black" />
            <Text style={styles.MainHeading}>Lets know more about you</Text>
          </View>
          <View>
            <MaterialIcons name="done" size={24} color="black" />
          </View>
        </View>
        
            <View style={styles.ImageSection}>
            
              <Text style={styles.Texts}>EMAIL ID</Text>
              <TextInput style={styles.Input} value={email} onChange={(e) => {
                setEmail(e.target.value)
              }} />
             
              <Text style={styles.Texts}>USERNAME</Text>
              <TextInput style={styles.Input} value={username} onChange={(e) => {
                setUsername(e.target.value)
              }} />
              <Text style={styles.Texts}>GENDER</Text>
              <TextInput style={styles.Input} value={gender} onChange={(e) => {
                setGender(e.target.value)
              }} />
              <Text style={styles.Texts}>PROFESSION</Text>
              <TextInput style={styles.Input} value={profession} onChange={(e) => {
                setProfession(e.target.value)
              }} />
              <Text style={styles.Texts}>BIO</Text>
              <TextInput style={styles.InputBio} value={bio} onChange={(e) => {
                setBio(e.target.value)
              }} />
              <Text style={styles.Texts}>INTEREST</Text>
              <TextInput style={styles.Input} value={interest} onChange={(e) => {
                setInterest(e.target.value)
              }} />
              <Text style={styles.Texts}>SEXUAL PREFERENCE</Text>
              <TextInput style={styles.Input} value={sexualPrefrence} onChange={(e) => {
                setSexualPrefrence(e.target.value)
              }} />
              <Text style={styles.Texts}>DATING TYPE</Text>
              <TextInput style={styles.Input} value={datingType} onChange={(e) => {
                setDatingType(e.target.value)
              }} />

            </View>


          </View>

          <TouchableOpacity>
            <View style={styles.ProceedButtonView}>
              <Text style={styles.ProceedButton} onPress={sendData}>Proceed
              </Text>
            </View>
          </TouchableOpacity>


        </ScrollView>
        );
}

        const styles = StyleSheet.create({
          container: {
          marginTop: 20,
        padding: 20,
        // backgroundColor: "black",

    // backgroundColor: "pink"

  },
        header: {
          marginTop: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // color: "white",
  },
        ImageSection: {
          marginTop: 40
  },
        heading: {
          display: "flex",
        flexDirection: "row",
        color: "white"
  },
        Input: {
          borderColor: "gray",
        borderWidth: 1,
        color: "white",
        height: 35,
        paddingLeft: 10,
        fontSize: 19,
        borderRadius: 6
  },
        InputBio: {
          borderColor: "gray",
        borderWidth: 1,
        color: "white",
        height: 35

  }
        ,
        ProfileImageSection: {
          display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        textAlign: "center"

  },

        ProfileImage: {
          width: 90,
        height: 90,
        borderRadius: 150,
        marginBottom: 15
  },
        ChangeProfileImageText: {
          fontSize: 15
  },
        Texts: {
          color: "white",
        marginTop: 20,
        marginBottom: 10,
        fontSize: 22
  },
        MainHeading: {
          color: "white",
        textAlign: "center",
        alignItems: "center",
        fontSize: 26
  },
        Header: {
          height: 50,
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row"
  },
        HeaderText: {
          color: "white",
        textAlign: "center",
        fontSize: 30,
        marginLeft: 10,
      
  },
        Logo: {
          width: 45,
        height: 35
  },
        ProceedButtonView: {
          backgroundColor: "red",
        marginTop: 20

  },
        ProceedButton: {
          textAlign: "center",
        fontSize: 20,
        padding: 10,
        color: "white"
  },
        MainContainer: {
          // backgroundColor: "black"
  }
});
