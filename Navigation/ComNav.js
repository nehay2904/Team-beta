import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTab from '../components/BootomTab'

const ComNav = ({ route}) => {
  return (
    <>
       <Text style={{display:'none'}}>{route.params.name}</Text>
       <BottomTab />
    </>
  )
}

export default ComNav

const styles = StyleSheet.create({})