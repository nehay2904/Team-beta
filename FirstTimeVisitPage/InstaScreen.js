import { StyleSheet, Text, View, Button  } from 'react-native'
import React from 'react'

const Insta = ({navigation, route}) => {
  return (
    <View  style={styles.container}>
      <Text>Birth</Text>
      <Text>{route.params.name}</Text>
      <Button title='Next' onPress={() =>
        navigation.navigate('ScreenTwo', { name: 'cancel' })
      }/>
    </View>
  )
}

export default Insta



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});