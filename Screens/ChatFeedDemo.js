import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const FindScreen = () => {
  return (
  <>
    <View style={{ display: 'flex', flexDirection: 'column' }}>
     
      <View style={styles.header}>
        <TouchableOpacity>
          <View style={{ width: 30, height: 30, borderColor: '#4D4D4D', borderWidth: 1, marginLeft: 20, marginTop: 5 }}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <Image style={{ width: 40, height: 40, marginLeft: 15, borderRadius: 40, }} source={{ uri: 'https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }} />
        <View style={{ paddingLeft: 8, paddingTop: 5 }}>
          <Text style={{ color: 'white', fontWeight: '500' }}>Katherine</Text>
        </View>


        <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 70, paddingTop: 10 }}>
          <Feather name="phone-call" size={22} color="white" />

          <View style={{ marginLeft: 15 }}>
            <Feather name="video" size={22} color="white" />
          </View>
          <View style={{ marginLeft: 15 }}>
            <AntDesign name="exclamationcircleo" size={22} color="white" />
          </View>

        </View>

      </View>
    
      <View style={styles.external}>
       <ScrollView>
       <View style={styles.internal}>
          <View style={styles.chatBody}>
            <Image style={{ width: 35, height: 35, marginLeft: 15, borderRadius: 40, marginTop: 10 }} source={{ uri: 'https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }} />
            <View style={styles.chatReciever}>
              <Text style={{ color: 'white' }}>heyyyaaa howwwwwwwwwwww are you doin?heyyyaaa how are you doin?heyyyaaa how are you doin?heyyyaaa how are you doin?heyyyaaa how are you doin?</Text>
            </View>
          </View>
          <View style={styles.chatBodySend}>
            <View style={styles.chatSender}>
              <Text style={{ color: 'white' }}>heyyyaaaaaaaaaaaaaaaaaaaaaa how are you doin?</Text>
            </View>
          </View>
          {/* <View style={styles.chatBodySend}>
            <View style={styles.chatSender}>
              <Text style={{ color: 'white' }}>heyyyaaa how are you doin?</Text>
            </View>
          </View>
          <View style={styles.chatBodySend}>
            <View style={styles.chatSender}>
              <Text style={{ color: 'white' }}>heyyyaaa how are you doin?</Text>
            </View>
          </View>
          <View style={styles.chatBodySend}>
            <View style={styles.chatSender}>
              <Text style={{ color: 'white' }}>heyyyaaa how are you doin?</Text>
            </View>
          </View>
          <View style={styles.chatBodySend}>
            <View style={styles.chatSender}>
              <Text style={{ color: 'white' }}>heyyyaaa how are you doin?</Text>
            </View>
          </View>
          <View style={styles.chatBodySend}>
            <View style={styles.chatSender}>
              <Text style={{ color: 'white' }}>heyyyaaa how are you doin?</Text>
            </View>
          </View>
          <View style={styles.chatBodySend}>
            <View style={styles.chatSender}>
              <Text style={{ color: 'white' }}>heyyyaaa how are you doin?</Text>
            </View>
          </View>
          <View style={styles.chatBodySend}>
            <View style={styles.chatSender}>
              <Text style={{ color: 'white' }}>heyyyaaa how are you doin?</Text>
            </View>
          </View>
          <View style={styles.chatBodySend}>
            <View style={styles.chatSender}>
              <Text style={{ color: 'white' }}>heyyyaaa how are you doin?</Text>
            </View>
          </View>
          <View style={styles.chatBodySend}>
            <View style={styles.chatSender}>
              <Text style={{ color: 'white' }}>heyyyaaa how are you doin?</Text>
            </View>
          </View> 
          <View style={styles.chatBodySend}>
            <View style={styles.chatSender}>
              <Text style={{ color: 'white' }}>heyyyaaa how are you doin?</Text>
            </View>
          </View>
          <View style={styles.chatBodySend}>
            <View style={styles.chatSender}>
              <Text style={{ color: 'white' }}>heyyyaaa how are you doin?</Text>
            </View>
          </View>
          <View style={styles.chatBodySend}>
            <View style={styles.chatSender}>
              <Text style={{ color: 'white' }}>heyyyaaa how are you doin?</Text>
            </View>
          </View> */}

        </View>
        
       </ScrollView>
      <View style={{display:'flex', flexDirection:"row" ,justifyContent:'space-between', paddingHorizontal:15, paddingVertical:10,  borderColor:"gray", borderWidth:1, paddingTop:10, borderRadius:50, marginBottom:40, marginHorizontal:15}}>
          <TextInput placeholder='Message' placeholderTextColor="gray"  style={{fontSize:20, paddingHorizontal:20, color:'white'}}         />
          <MaterialCommunityIcons name="send-outline"  size={27} color="white" />
      </View>
      </View>
    
      
     
    </View>
       </>
   
  )
}

export default FindScreen

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    height: 110,
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 50,

  },
  external: {
    height:"87%",
    backgroundColor: 'black',
  

  },
  internal: {
    backgroundColor: 'linear-gradient(360deg, #333333 0%, rgba(51, 51, 51, 0.3) 100%)',
    margin: 15,
    borderRadius: 20,
    paddingBottom:40,
    height:"80%"

  },
  chatBody: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth:280,
    
  },
  chatReciever: {
    backgroundColor: 'black',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    padding: 12,
    marginLeft: 10,
   
  },
  chatBodySend: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 12,
  
  },
  chatSender: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 12,
    backgroundColor: '#0088CC',
    maxWidth:280,
    
  }

})