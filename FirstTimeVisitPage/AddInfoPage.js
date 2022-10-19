import { Image, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ProfileLogo from '../Images/LogoTwo.png';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import SelectBox from 'react-native-multi-selectbox'


const G_OPTIONS = [
  {
    item: 'male',
    id: 'male',
  },
  {
    item: 'female',
    id: 'female',
  },
  {
    item: 'other',
    id: 'other',
  }
]
const S_OPTIONS = [
  {
    item: 'male',
    id: 'male',
  },
  {
    item: 'female',
    id: 'female',
  },
  {
    item: 'other',
    id: 'other',
  }
]
const D_OPTIONS = [
  {
    item: 'Casual',
    id: 'Casual',
  },
  {
    item: 'Short-term',
    id: 'Short-term',
  },
  {
    item: 'long-term',
    id: 'long-term',
  }
]



const AddInfoPage = () => {

  const [bio, setBio] = useState('')
  const [profession, setProfession] = useState('')
  const [gender, setGender] = useState('')
  const [datingPrefrence, setDatingPrefrence] = useState('')
  const [sexualPreference, setSexualPreference] = useState('')


  const [userdata, setuserdata] = useState(second)
  const onChangeG = () => {
    return (val) => setGender(val)
  }
  const onChangeD = () => {
    return (val) => setDatingPrefrence(val)
  }

  const onChangeS = () => {
    return (val) => setSexualPreference(val)
  }

  const createUser = (event) => {

    event.preventDefault()

    axios.post('https://dwibe-backend-dev.herokuapp.com/profile', {
        bio,
        profession,
        gender,
        datingPrefrence,
        sexualPreference
    }).then((response) => {

        setuserdata([...userdata, {
          bio,
          profession,
          gender,
          datingPrefrence,
          sexualPreference
        }])
    })
}

  return (

    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 60, marginBottom: 30 }} >
          <Image style={{ width: 45, height: 30, marginTop: 5, marginRight: 7 }} source={ProfileLogo} />
          <Text style={{ color: 'white', fontSize: 25, marginRight: 20 }} >Swipe</Text>
        </View>
        <Text style={{ color: "#E6E6E6", marginBottom: 40, fontSize: 30 }} >Lets Know More About You</Text>

        <View>
          <Text style={styles.TextsBio} >BIO</Text>
          <TextInput style={styles.InputStyle} multiline placeholder='Tell me something about yourself' placeholderTextColor='gray' value={bio} onChange={(e) => {
            setBio(e.target.value)
          }} />
        </View>
        <View>
          <Text style={styles.TextsBio}>PROFESSION</Text>
          <TextInput style={styles.InputStyle} placeholder='profession' placeholderTextColor='gray' value={profession} onChange={(e) => {
            setProfession(e.target.value)
          }} />
        </View>
        <View>
          <Text style={styles.Texts}>GENDER</Text>
          <SelectBox
            options={G_OPTIONS}
            value={gender}
            onChange={onChangeG()}
            label={false}
            hideInputFilter={true}
            arrowIconColor='white'
            containerStyle={styles.InputStyle}
            optionsLabelStyle={styles.styleinput}
            selectedItemStyle={styles.styleinput}
          />

          <Text style={styles.Texts}>Dating Type</Text>
          <SelectBox
            options={D_OPTIONS}
            value={datingPrefrence}
            onChange={onChangeD()}
            label={false}
            hideInputFilter={true}
            arrowIconColor='white'
            containerStyle={styles.InputStyle}
            optionsLabelStyle={styles.styleinput}
            selectedItemStyle={styles.styleinput}
          />

          <Text style={styles.Texts}>Sexual Preference</Text>
          <SelectBox
            options={S_OPTIONS}
            value={sexualPreference}
            onChange={onChangeS()}
            label={false}
            hideInputFilter={true}
            arrowIconColor='white'
            containerStyle={styles.InputStyle}
            optionsLabelStyle={styles.styleinput}
            selectedItemStyle={styles.styleinput}
          />


        </View>
        <View style={{ marginBottom: 50 }}>
          <Text style={styles.Texts}>LOCATION ACCESS</Text>
          <TouchableOpacity activeOpacity={0.6}>
            <View style={styles.InputStyleLocation}  >
              <Ionicons name='location-outline' color="white" size={20} style={{ marginTop: 7, marginLeft: 10 }} />
              <Text style={{ color: 'white', marginTop: 10, marginHorizontal: 10 }}>Add Current Location</Text>

            </View>
          </TouchableOpacity>
        </View>



      </View>
      
      <View style={{ padding: 10, paddingTop: 15, backgroundColor: '#CC0000', width: "100%", marginTop: 30 }} >
       <TouchableOpacity activeOpacity={0.5} onPress={createUser}>
       <Text style={{ color: "#E6E6E6", textAlign: 'center', fontSize: 22 }} >PROCEED</Text>
       </TouchableOpacity>
      </View>
      
    </View>




  )
}

export default AddInfoPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: "center",
    alignItems: "center"
  },
  subcontainer: {
    width: "85%"
  },

  InputStyle: {

    borderColor: "#999999",
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingTop: 12,
    borderRadius: 6,
    height: 42,
    color: 'white',
    marginBottom: 12,
    paddingBottom: 10
  },
  Texts: {
    color: '#E6E6E6',
    fontSize: 18,
    letterSpacing: 1.3,
    marginTop: 20

  },
  TextsBio: {
    color: '#E6E6E6',
    fontSize: 18,
    letterSpacing: 1.3,
    marginBottom: 8,
    marginTop: 20

  },
  InputStyleLocation: {

    borderColor: "#FF6666",
    borderWidth: 2,
    borderRadius: 6,
    height: 42,
    width: "70%",
    display: 'flex',
    flexDirection: "row",
    color: 'white',
    marginTop: 15

  },
  styleinput: {
    color: 'white',

  }
})