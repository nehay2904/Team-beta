import { Image, StyleSheet, Text, TextInput, View , ScrollView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import ProfileLogo from '../Images/LogoTwo.png';
import Ionicons from '@expo/vector-icons/Ionicons'
import Stack from '../Screens/Demo';
import DemoOne from '../Inputs/DemoOne';
import DemoTwo from '../Inputs/DemoThree';
import DateInput from '../Inputs/DateInput';
import MonthInput from '../Inputs/Month';
import YearInput from '../Inputs/Year';
import axios from 'axios';
const AddInfoPage = ({ navigation, route }) => {

  

  const [date, setDate] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState("")
  const [datingType, setDatingType] = useState('')
  const [sexualPreference, setSexualPreference] = useState('')
  const [gender, setGender] = useState('')

  const OnSubmitHandler = (event) => {
    navigation.navigate('Interest', { name: 'cancel' })
    event.preventDefault();

    const user = {
      date:date,
      month:month,
      year:year,
      gender:gender,
      sexualPreference:sexualPreference,
      datingType:datingType
    };

    const data = JSON.stringify(user);

    axios.post(`https://dwibe-backend-dev.herokuapp.com/profile`, { data })
      
   


  
  }
  return (
   <ScrollView>     
     <View style={styles.container}>
      <View style={styles.subcontainer}>
        {/* <Text style={{ display: 'none' }}>{route.params.name}</Text> */}
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 60, marginBottom: 30 }} >
          <Image style={{ width: 45, height: 30, marginTop: 5, marginRight: 7 }} source={ProfileLogo} />
          <Text style={{ color: 'white', fontSize: 25, marginRight: 20 }} >Swipe</Text>
        </View>
        <Text style={{ color: "#E6E6E6", marginBottom: 40, fontSize: 30 }} >Lets Know More About You</Text>
        <Text style={styles.Texts}>DATE OF BIRTH</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }} >


         <DateInput />
         <MonthInput/>
         <YearInput />
        </View>
        <View>
          <Text style={styles.Texts}>BIO</Text>
          <TextInput style={styles.InputStyle} placeholder='Tell me something about yourself' placeholderTextColor='gray' />
        </View>
        <View>

          <View>
            <Text style={styles.Texts}>GENDER</Text>
             <Stack />
            {/* <TextInput style={styles.InputStyle} placeholder='Male/female/other' placeholderTextColor="#666666" value={gender} onChange={(e) => { setGender(e.target.value) }} /> */}
          </View>
          <View>
            <Text style={styles.Texts}>Dating Type</Text>
            <DemoOne/>
            {/* <TextInput style={styles.InputStyle} placeholder='casual/Short-term/Long-term' placeholderTextColor="#666666" value={datingType} onChange={(e) => { setDatingType(e.target.value) }} /> */}
          </View>
          <View>
            <Text style={styles.Texts}>Sexual Preference</Text>
            <DemoTwo />
            {/* <TextInput style={styles.InputStyle} placeholder='Male/female/both' placeholderTextColor="#666666" value={sexualPreference} onChange={(e) => { setSexualPreference(e.target.value) }} /> */}
          </View>

        </View>
        <View style={{ marginBottom: 50 }}>
          <Text style={styles.Texts}>LOCATION ACCESS</Text>
         <TouchableOpacity activeOpacity={0.6}>
         <View style={styles.InputStyleLocation}  >
            <Ionicons name='location-outline' color="white" size={20} style={{ marginTop: 7, marginLeft: 10 }} />
            <Text style={{color:'white' , marginTop:10, marginHorizontal:10}}>Add Current Location</Text>

          </View>
         </TouchableOpacity>
        </View>

      </View>
      <View style={{ padding: 10, paddingTop: 15, backgroundColor: '#CC0000', width: "100%", marginTop: 30 }} >
        <Text style={{ color: "#E6E6E6", textAlign: 'center', fontSize: 22 }} onPress={OnSubmitHandler} 

        >PROCEED</Text>
      </View>
    </View>
   </ScrollView>
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
  InputStyleDate: {
    borderColor: "#999999",
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "31%",
    borderRadius: 6,
    height: 42,
    color: 'white'
  },
  InputStyle: {

    borderColor: "#999999",
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    marginTop: 18,
    height: 42,
    color: 'white'
  },
  Texts: {
    color: '#E6E6E6',
    fontSize: 18,
    letterSpacing: 1.3,
    marginTop:20,
    
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
    marginTop:15

  }
})