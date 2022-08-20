import { StyleSheet, Text, View, Button  } from 'react-native'
import React from 'react'

const Facebook = ({navigation, route}) => {
  return (
    <View  style={styles.container}>
      <Text>Facebook</Text>
      <Text>{route.params.name}</Text>
      <Button title='Next' onPress={() =>
        navigation.navigate('ScreenTwo', { name: 'cancel' })
      }/>
    </View>
  )
}

export default Facebook



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

})