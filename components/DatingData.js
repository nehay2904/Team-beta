import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React from 'react'
import Name from '../FirstTimeVisitPage/NameScreen'
import Bio from '../FirstTimeVisitPage/BioScreen'
import Birth from '../FirstTimeVisitPage/BirthdateScreen'
import Profession from '../FirstTimeVisitPage/ProfessionScreen'
import DateInput from './DateInput'
import GenderInput from './GenderInput'
import DatingType from '../FirstTimeVisitPage/DatingTypeScreen'
import SexualPreference from '../FirstTimeVisitPage/SexualPreferenceScreen'
import Insta from '../FirstTimeVisitPage/InstaScreen'

const DatingData = ({navigation, route}) => {
  return (
    
    <ScrollView>
      
      <View style={styles.container} >
        
        <Text style={{marginVertical:20, fontSize:25}}>Let Something more about yourself</Text>
        <DatingType />
        <SexualPreference />
       <Insta />
         <View style={{alignItems:"flex-end", marginVertical:20}}>
        <Button title='Next' color={"#990257"}  onPress={() =>
        navigation.navigate('InterestScreen', { name: 'cancel' })
      }/>
       </View>
      
    </View>
     
    </ScrollView>
  
  )
}

export default DatingData

const styles = StyleSheet.create({
    container:{
       margin:30,
       top:40,
       flex:1,
       height:"100%"
    }
})