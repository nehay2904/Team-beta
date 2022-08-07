import {View,Text} from 'react-native'
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navbar from '../components/Navbar';
import axios from 'axios'
import { BASE_URL } from '../constants/constant';

const ProfileUpdateScreen = ({navigation}) => {

  const [jwt,setJwt] = useState();
  const [userInfo,setUserInfo] = useState();
  const [profile,setProfile] = useState();
  const [profileFound,setProfileFound] = useState(false)

  const init = () => {
    AsyncStorage.getItem("@user").then( res => {
      // console.log("localstorage = ",res)
      if (res && JSON.parse(res).jwt) {
        res = JSON.parse(res)
        setJwt(res.jwt)
        setUserInfo(res.user)
        fetchProfile(res.jwt)
      } else {
        navigation.navigate("Landing")
      }
    })
  }

  const fetchProfile = (jwt) => {
    const options = {
      headers: {
        Authorization: `Bearer ${jwt}`
      },
    };
    axios.get(BASE_URL + "/profile",options).then(res => {
      if(res.status === 200 && res.data.status === 200) {
        setProfileFound(true)
        setProfile(res.data.profile)
      } else if (res.data.status === 404) {
        setProfileFound(false)
      }
    }).catch(err => console.log(err))
  }

  useEffect(()=>{
    init()
  },[])
  if (profileFound) {
    return (
      <View>
        <Text>Profile found</Text>
        <Navbar navigation={navigation}/>
      </View>
    )
  } else {
    return (
      <View>
        <Text>no profile</Text>
        <Navbar/>
      </View>
    )
  }
}
 
export default ProfileUpdateScreen;