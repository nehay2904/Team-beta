import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Searchbar } from 'react-native-paper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'SATURN',
    imgurl: 'https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    msg: 'heyaaa',
    time: '5:30'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'CRYSTA',
    imgurl: 'https://images.unsplash.com/photo-1532170579297-281918c8ae72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80',
    msg: 'Hi!!!!',
    time: '10:17'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'HARLEY',
    imgurl: 'https://images.unsplash.com/photo-1529230815964-592d9b61876f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
    msg: "How's you?",
    time: '9:45'
  },
];



const ChatScreen = () => {



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>

        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, padding: 20 }}>My Chats</Text>
        <View
          style={{
            borderBottomColor: 'grey',
            borderWidth: 0.5,
            marginHorizontal: 10

          }}
        />
        <View style={{}}>
          <Searchbar
            placeholder="Search"
            style={{ color: 'black', borderRadius: 22, marginHorizontal: 14, marginTop: 20 }}
            iconColor='black'
          />
        </View>

        <FlatList data={DATA} renderItem={(element) => {
          return (
            <TouchableOpacity>
              <View style={{ backgroundColor: 'grey', marginTop: 20, height: 60, marginHorizontal: 20, borderRadius: 15, flexDirection: 'row' }}>
                <Image style={{ width: 50, height: 50, borderRadius: 40, marginTop: 4, marginLeft: 10 }} source={{ uri: element.item.imgurl }} />
                <View>
                  <Text style={{ color: 'black', marginLeft: 40, fontSize: 18, marginTop: 5, fontWeight: 'bold' }}>{element.item.name}</Text>
                  <Text style={{ marginLeft: 40 }}>{element.item.msg}</Text>
                </View>
                <Text style={{ marginLeft: 90, marginTop: 10, fontWeight: 'bold' }}>{element.item.time}</Text>
              </View>
            </TouchableOpacity>
          )

        }} />

      
    </SafeAreaView>
  )

}




export default ChatScreen