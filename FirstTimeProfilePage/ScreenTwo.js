import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const ScreenTwo = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>ScreenTwo</Text>
      <Text>{route.params.name}</Text>
      <Button title='Next' onPress={() =>
        navigation.navigate('ScreenThree', { name: 'cancel' })
      }/>
    </View>
  )
}

export default ScreenTwo




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});