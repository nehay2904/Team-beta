import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet ,Text, ScrollView, SafeAreaView,FlatList, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { BASE_URL } from '../constants/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { manipulateAsync, FlipType } from 'expo-image-manipulator';
import * as FS from 'expo-file-system';
import { AntDesign } from '@expo/vector-icons';
import { borderBottomColor, borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Navbar from '../components/Navbar';
const ImageUploadScreen = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [jwt,setJwt] = useState();
  const [userProfile,setUserProfile] = useState();
  const [profileImages, setProfileImages] = useState();
  
  const init = () => {
    AsyncStorage.getItem("@user").then( res => {
      // console.log("localstorage = ",res)
      if (res && JSON.parse(res).jwt) {
        res = JSON.parse(res)
        setJwt(res.jwt)
        setUserProfile(res.user)
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
        setProfileImages(res.data.profile.image)
      }
    }).catch(err => console.log(err))
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64:true
    });
    if (!result.cancelled) {
      console.log("before compression " ,result.base64.length)
      let compressedImage = await manipulateAsync(result.uri,[],{compress:0.5})
      const compressedBase64 = await FS.readAsStringAsync(compressedImage.uri, {encoding: 'base64'})
      console.log("after compression ",compressedBase64.length)
      const payload = {
        "type":"image",
        "image":`data:image/jpg;base64,${compressedBase64}`
      }
      const options = {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      };
      axios.post(BASE_URL + '/profile',payload,options).then(res =>{
        if (res.status === 200 && res.data.status === 200) {
          console.log(res.data)
          setProfileImages(res.data.res.image)
        }
      }).catch(err => console.log(err))
    }
    
  };

  const clickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      base64:true,
      allowsEditing:true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality:1,
      aspect: [4, 3],
    })
    if (!result.cancelled) {
      console.log("before compression " ,result.base64.length)
      let compressedImage = await manipulateAsync(result.uri,[],{compress:0.5})
      const compressedBase64 = await FS.readAsStringAsync(compressedImage.uri, {encoding: 'base64'})
      console.log("after compression ",compressedBase64.length)
      const payload = {
        "type":"image",
        "image":`data:image/jpg;base64,${compressedBase64}`
      }
      const options = {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      };
      axios.post(BASE_URL + '/profile',payload,options).then(res =>{
        if (res.status === 200 && res.data.status === 200) {
          console.log(res.data)
          setProfileImages(res.data.res.image)
        }
      }).catch(err => console.log(err))
    }
    // const base64Image = `data:image/jpg;base64,${result.base64}`
    
    // if (!result.cancelled)  { 
    //   const fileName = result.uri.split('/').pop()
    //   const formData = new FormData()
    //   formData.append('file',{
    //     uri:result.uri,
    //     type:result.type,
    //     name:fileName
    //   })
    //   console.log("length = ",base64Image.length)
    //   // console.log("base64 - ", base64Image)
      // axios.post(BASE_URL + '/profile',payload,options).then(res => console.log(res))
      // .catch(err => console.log(err))
      
    // }
  };

  const deleteImage = (img) => {
    console.log(img.public_id)
    const options = {
      headers: {
        Authorization: `Bearer ${jwt}`,
        data:img.public_id
      },
    };
    axios.delete(BASE_URL + '/profile',options).then(res => {
      if(res.status === 200 && res.data.status === 200) {
        console.log(res.data)
        setProfileImages(res.data.res.image)
      } else {
        throw "Something went wrong"
      }
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(()=>{
    init()
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={profileImages}
        renderItem={({item}) => (
          <View
            style={styles.imageWrapper}
          >
            <Image
              style = {styles.profileImg}
              source={{
                uri:item.secure_url
              }}
            />
            <TouchableOpacity 
              // style={styles.deleteIcon}  
              onPress={() => deleteImage(item)}
            >
              <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
        numColumns={2}
        keyExtractor={(item,index) => index }
      />
      <Button title="Click an image" onPress={clickImage} />
      <Button title="Pick an image from camera roll" onPress={pickImage}/>
      <Navbar navigation={navigation} />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageWrapper:{
    flex: 1,
    flexDirection: 'column',
    margin: 1,
    borderStyle:"solid",
    borderColor:"#dddddd",
    borderWidth:5
  },
  profileImg:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  deleteIcon:{
    position:"absolute",
    top:10,
    backgroundColor:"#dddddd"
  }
})
export default ImageUploadScreen;