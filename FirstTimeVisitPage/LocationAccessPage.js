import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react' 
import { Permission } from 'react-native'
import Permissions from 'expo'
import { RevokeTokenRequest } from 'expo-auth-session'
import { ActivityIndicator } from 'react-native-web'
const LocationAccessPage = () => {


    const [pickedLocation, setPickedLocation] = useState('')
     const [fetching, setFetching] = useState('')
    const verifyPermission = async () =>{
        if(result.status !== "granted"){
            Alert.alert(
                'permission denied',
                [{text:"okay"}]
            );
            return false;
        }

        return true;
    }

  const  getLocationHandler = async() =>{
      const hasPermission = await verifyPermission();
      if(!hasPermission){
        return;
      }
     try {
        setFetching(true)
       const location = await Location.getCurrentPositionAsync({timeout:5000})
       console.log(location);
       setPickedLocation(null)
    } catch (error) {
        Alert.alert('could not fetch location', [{text:"okay"}])
        setFetching(false)
    }
    }
  return (
    <View style={{margin: 40}}>
      {fetching ? (<ActivityIndicator size="large"  />) :  ( <Text>LocationAccessPage</Text> )}
      <Button title='Add Location' onPress={getLocationHandler } />
    </View>
  )
}

export default LocationAccessPage

const styles = StyleSheet.create({})