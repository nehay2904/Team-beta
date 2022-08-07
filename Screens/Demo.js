import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import Backgroundimage from '../Images/PicTwo.jpg'


const Demo = () => {
  return (
    //phle ek view bna
    <View style={{width:"100%"}}>
        <View style={{width:"80%", borderRadius:8}}>
            <ImageBackground source={Backgroundimage}/>
            <Text></Text>
        </View>
    </View>
  )
}

export default Demo

const styles = StyleSheet.create({})