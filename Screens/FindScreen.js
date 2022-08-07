import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FindScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FindScreen</Text>
    </View>
  )
}

export default FindScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});