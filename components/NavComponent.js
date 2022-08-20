import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTab from './BootomTab'

const NavComponent = ({navigation, route}) => {
  return (
   <>
   
      <Text style={{display:"none"}} >{route.params.name}</Text>
       <BottomTab />
   </>
   
  )
}

export default NavComponent

const styles = StyleSheet.create({})