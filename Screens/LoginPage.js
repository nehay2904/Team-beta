import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Image, Button, ImageBackground } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import Unslapsh from '.././Images/unsplash.jpg'
WebBrowser.maybeCompleteAuthSession();

export default function LoginPage({navigation, route}) {
  const [accessToken, setAccessToken] = React.useState();
  const [userInfo, setUserInfo] = React.useState();
  const [message, setMessage] = React.useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "739241521842-8fv9cdlq5n6h9tnjmo55titbnmami8t8.apps.googleusercontent.com",
    iosClientId: "694235095257-qnub27n3o6s0e3lo1sneio03o6ka5k9m.apps.googleusercontent.com",
    expoClientId:""

  });

  React.useEffect(() => {
    setMessage(JSON.stringify(response));
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  async function getUserData() {
    let userInfoResponse = await fetch("https://dwibe-backend-dev.herokuapp.com/profile", {
      headers: { Authorization: `Bearer ${accessToken}`}
    });

    userInfoResponse.json().then(data => {
      setUserInfo(data);
    });
  }

  function showUserInfo() {
    if (userInfo) {
      return (
        <View style={styles.userInfo}>
        
          <Image source={{uri: userInfo.picture}} style={styles.profilePic} />
          <Text>Welcome {userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={Unslapsh} style={styles.backgroundimg} blurRadius={4}  >
        <Text style={{ display: "none" }}>{route.params.name}</Text>
        {showUserInfo()}
        <Text
          style={{ color: "#FFFFFF", fontSize: 25, textAlign: 'center', marginVertical: 50, backgroundColor: "#660000", borderRadius: 50, paddingVertical: 13, marginHorizontal: 20 , paddingHorizontal:20}}
          title={accessToken ? "Get User Data" : "Login"}
          onPress={accessToken ? getUserData : () => {
            promptAsync({ useProxy: false, showInRecents: true }),
            navigation.navigate('addinfo', { name: 'cancel' })
          }}
        >Login with Google</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
    backgroundColor:"black",
    justifyContent:"center",
    height:"100%",

  },
  
  backgroundimg:{
    width:"100%",
    resizeMode:'cover',
    height:"100%",
    display:"flex",
    justifyContent:"flex-end"
   
   
    
},
  userInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: 50,
    height: 50
  }
});