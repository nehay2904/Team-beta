import { Text, View , StyleSheet, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';
import axios from 'axios';
import { BASE_URL, ANDROID_CLIENT_ID, IOS_CLIENT_ID } from '../constants/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen({ navigation }) {
	// states

	// functions

	const googleLogin = () => {
		const config = {
      iosClientId: IOS_CLIENT_ID,
      androidClientId: ANDROID_CLIENT_ID,
      scopes: ['profile','email']
    }
		Google.logInAsync(config).then(res => {
			// console.log(res)
			const {type,user} = res;
			if(type === 'success') {
				const payload = {
					"email":user.email,
					"id":user.id,
					"displayName":user.name,
					"photoUrl":user.photoUrl
				}
				axios.post(BASE_URL + "/googleauth",payload).then(res => {
					// console.log(res)
					if (res.status === 200 && res.data.status === 200) {
						const jwt = res.data.jwt
						const user = res.data.res
						const profile = {
							"jwt":jwt,
							"user":user
						}
						console.log("profile = ",profile)
						AsyncStorage.setItem("@user",JSON.stringify(profile), () => {
							navigation.navigate("ImageUpload")
						})
					}
				}).catch(err => console.log(err))
			} else {
				throw "error while logging in using google"
			}
		}).catch(err=>console.error(err))
	}

	// hooks
	return (
		<View>
			<Text>
				Login with google
			</Text>
			<Button 
				title = "Login with Google"
				onPress={googleLogin}
			/>
		</View>	
	)
}

export default LoginScreen