import { StyleSheet, Text, View, Button  } from 'react-native'
import React from 'react'

const ScreenOne = ({navigation, route}) => {
  return (
    <View  style={styles.container}>
      <Text>ScreenOne</Text>
      <Text>{route.params.name}</Text>
      <Button title='Next' onPress={() =>
        navigation.navigate('ScreenTwo', { name: 'cancel' })
      }/>
    </View>
  )
}

export default ScreenOne



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});