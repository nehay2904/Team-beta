import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LocationScreen = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={{ display: 'none' }}>{route.params.name}</Text>
      <Text style={{fontSize:26}}>Location</Text>
    </View>
  )
}

export default LocationScreen

const styles = StyleSheet.create({
    container:{
         top:60,
         marginHorizontal:30
    }
})