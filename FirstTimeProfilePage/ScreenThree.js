import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenThree = ({navigation, route}) => {
  return (
    <View  style={styles.container}>
      <Text>ScreenThree</Text>
      <Text>{route.params.name}</Text>
      <Button title='Next' onPress={() =>
        navigation.navigate('NavComponent', { name: 'cancel' })
      }/>
    </View>
  )
}

export default ScreenThree



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});