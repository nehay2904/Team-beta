import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import Ionicons from '@expo/vector-icons/AntDesign'
import axios from 'axios';


const Interest= ({navigation, route}) => {

  const [interest, setInterest] = useState([])

  const SubmitHandler = (event) => {
    event.preventDefault();
    navigation.navigate('ComNav', { name: 'cancel' })

    const user = {
     interest:interest
    };

    const data = JSON.stringify(user);

    axios.post(`https://dwibe-backend-dev.herokuapp.com/profile`, { data })
  
  }

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
      
         <Text style={styles.Title} >Pick Your Interest </Text>
         <Text style={styles.Subtitle}>* You can choose only 6</Text>
         <View style={styles.InterestInput} value={interest} onChange={(e) => { setInterest(e.target.value) }} >
         <View style={styles.selectedoptions}>
             <Text >Cooking</Text>
             <TouchableOpacity >
             <Ionicons name="closecircle" size={20} color="black" style={{marginLeft:5}} />
             </TouchableOpacity>
          </View>
         </View>
         <View  >
           <View style={{display:'flex' , flexDirection:'row' , justifyContent:'space-between', marginVertical:10, marginHorizontal:20}}>
          
           <View style={styles.optionsDown}>
             <Text >Sports</Text>
             <TouchableOpacity style={styles.hidden} >
             <Ionicons name='pluscircle' size={20} color="black" style={{marginLeft:5}} />
             </TouchableOpacity>
             </View>
             <View style={styles.optionsDown}>
             <Text >Movies</Text>
             <TouchableOpacity>
             <Ionicons name='pluscircle' size={20} color="black" style={{marginLeft:5}} />
             </TouchableOpacity>
             </View>
           
             
           </View>
           <View style={{display:'flex' , flexDirection:'row' , justifyContent:'space-between', marginVertical:10}}>
         
             <View style={styles.options}>
             <Text >Music</Text>
             <TouchableOpacity>
             <Ionicons name='pluscircle' size={20} color="black" style={{marginLeft:5}} />
             </TouchableOpacity>
             </View>
             <View style={styles.options}>
             <Text >Dance</Text>
             <TouchableOpacity>
             <Ionicons name='pluscircle' size={20} color="black" style={{marginLeft:5}} />
             </TouchableOpacity>
             </View>
             <View style={styles.options}>
             <Text >Cooking</Text>
             <TouchableOpacity>
             <Ionicons name='pluscircle' size={20} color="black" style={{marginLeft:5}} />
             </TouchableOpacity>
             </View>
           </View>
           <View style={{display:'flex' , flexDirection:'row', justifyContent:'space-between', marginVertical:10, marginHorizontal:20}}>
           <View style={styles.optionsDown}>
             <Text >Gym</Text>
             <TouchableOpacity>
             <Ionicons name='pluscircle' size={20} color="black" style={{marginLeft:5}} />
             </TouchableOpacity>
             </View>
             <View style={styles.optionsDown}>
             <Text >Yoga</Text>
             <TouchableOpacity>
             <Ionicons name='pluscircle' size={20} color="black" style={{marginLeft:5}} />
             </TouchableOpacity>
             </View>
          
           </View>
           <View style={{display:'flex' , flexDirection:'row' , justifyContent:'space-between', marginVertical:20}}>
         
         <View style={styles.options}>
         <Text >Photography</Text>
         <TouchableOpacity>
         <Ionicons name='pluscircle' size={20} color="black" style={{marginLeft:5}} />
         </TouchableOpacity>
         </View>
         <View style={styles.options}>
         <Text >Coding</Text>
         <TouchableOpacity>
         <Ionicons name='pluscircle' size={20} color="black" style={{marginLeft:5}} />
         </TouchableOpacity>
         </View>
         <View style={styles.options}>
         <Text >Travelling</Text>
         <TouchableOpacity>
         <Ionicons name='pluscircle' size={20} color="black" style={{marginLeft:5}} />
         </TouchableOpacity>
         </View>
       </View>
         </View>
        <View style={{display:'flex', justifyContent:'center' , alignItems:'center', flexDirection:'row' }}>
          <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.SubmitBtn}  onPress={SubmitHandler} >
                Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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