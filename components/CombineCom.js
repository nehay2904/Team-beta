import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React from 'react'
import Name from '../FirstTimeVisitPage/NameScreen'
import Bio from '../FirstTimeVisitPage/BioScreen'
import Birth from '../FirstTimeVisitPage/BirthdateScreen'
import Profession from '../FirstTimeVisitPage/ProfessionScreen'
import DateInput from './DateInput'
import GenderInput from './GenderInput'
import DatingType from '../FirstTimeVisitPage/DatingTypeScreen'

const CombineCom = ({navigation, route}) => {
  return (
    
    
      <View style={styles.container} >
        
        <Text style={{marginVertical:20, fontSize:25}}>Let Something About Yourself</Text>
        <Text style={{display:"none"}}>{route.params.name}</Text>
      <Name />
      
      <Text style={{fontSize:20, marginTop:20}}>When is your Birthday</Text>
      <DateInput />
    
      <GenderInput />
      <Bio />
      <Profession />
      
       <View style={{alignItems:"flex-end", marginVertical:20}}>
        <Button title='Next' color={"#990257"}  onPress={() =>
        navigation.navigate('DatingData', { name: 'cancel' })
      }/>
       </View>
      
    </View>
     
  
  
  )
}

export default CombineCom

const styles = StyleSheet.create({
    container:{
       margin:30,
       top:40,
       flex:1,
       height:"100%"
    }
})