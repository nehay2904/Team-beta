import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MultiSelectInput from '../components/MultiInputSelect'

const Interest = () => {
  return (
    <View>
      
      <MultiSelectInput />
    </View>
  )
}

export default Interest


const styles = StyleSheet.create({
  container:{
      flex:1,
    backgroundColor: 'black',
   justifyContent:"center",
   alignItems:"center"
  },
  subcontainer:{
    width:"85%"
  },
  Title:{
      color:'#CFC5C5',
      letterSpacing:2.5,
      fontSize:40,
      textAlign:'center'
  },
  Subtitle:{
     color:"#FF3333",
     fontSize:15,
     letterSpacing:1,
     textAlign:'center',
     marginVertical:19
  },
  options:{
      color:'#660000',
      backgroundColor:'white',
      paddingVertical:8,
      paddingHorizontal:15,
      borderRadius:50,
      marginHorizontal:5,
      display:'flex',
      flexDirection:"row",
      marginVertical:0
  },
  optionsDown:{
      color:'#660000',
      backgroundColor:'white',
      paddingVertical:8,
      paddingHorizontal:15,
      borderRadius:50,
      marginHorizontal:5,
      display:'flex',
      flexDirection:"row",
      width:"40%",
      justifyContent:'space-between'
  },
  SubmitBtn:{
      color:'#33BBFF', 
      textAlign:'center',
      marginTop:20,
      fontSize:31.49,
      padding:10,
      borderWidth:2,
      borderColor:'#4D4D4D',
      borderRadius:8.4902

  },
  InterestInput:{
     width:"100%",
     height:170,
     borderWidth:3,
     borderColor:"#999997",
     marginTop:10,
     marginBottom:40,
     borderRadius:20
  },
  selectedoptions:{
    color:'#660000',
    backgroundColor:'white',
    paddingVertical:8,
    paddingHorizontal:15,
    borderRadius:50,
    marginHorizontal:5,
    display:'flex',
    flexDirection:"row",
    marginVertical:0,
    marginTop:8,
    width:100
  },
 

})