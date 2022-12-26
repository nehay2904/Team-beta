import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'

const AddPhotosScreen = ({navigation, route}) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }} >
            <ScrollView>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                    <View style={{ borderColor: 'red', borderWidth: 1, borderRadius: 20, width: 40, height: 40,  paddingBottom:10 }}>
                         {/* <Text style={{display:"none"}}>{route.params.name}</Text> */}
                        <Ionicons name='camera' size={28} color='white' style={{marginTop:5, marginLeft:5 }} />
                        <Text style={{display:"none"}}>{route.params.name}</Text>
                    </View>
                    <Text style={{ color: 'white', margin: 8 }}>------></Text>
                    <View style={{ borderColor: 'red', borderWidth: 1, borderRadius: 20, width: 40, height: 40 }}>
                        <Ionicons name='image' size={26} color='white' style={{ padding: 5 }} />
                    </View>
                </View>

                <Text style={{ color: 'white', marginLeft: 20, marginBottom: 30, marginTop: 10, fontSize: 38 }}>Add Pictures</Text>
                <View style={{ marginHorizontal: 20 }}>
                    <TouchableOpacity>

                        <View style={{ borderColor: 'white', borderStyle: 'dashed', width: 320, height: 150, borderRadius: 1, borderWidth: 2 }}>
                            <Ionicons name='add-circle' size={40} color='white' style={{ paddingTop: 50, paddingLeft: 140 }} />
                        </View>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', display: 'flex', marginTop: 10 }}>
                        <TouchableOpacity>
                            <View style={{ borderColor: 'white', borderStyle: 'dashed', width: 154, height: 140, borderRadius: 1, borderWidth: 2 }}>
                                <Ionicons name='add-circle' size={40} color='white' style={{ paddingTop: 50, paddingLeft: 60 }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ borderColor: 'white', borderStyle: 'dashed', width: 154, height: 140, borderRadius: 1, borderWidth: 2, marginLeft: 10 }}>
                                <Ionicons name='add-circle' size={40} color='white' style={{ paddingTop: 50, paddingLeft: 60 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <View style={{ borderColor: 'white', borderStyle: 'dashed', width: 320, height: 150, borderRadius: 1, borderWidth: 2, marginTop: 10 }}>
                            <Ionicons name='add-circle' size={40} color='white' style={{ paddingTop: 50, paddingLeft: 140 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', display: 'flex', marginTop: 10 }}>
                        <TouchableOpacity>
                            <View style={{ borderColor: 'white', borderStyle: 'dashed', width: 154, height: 140, borderRadius: 1, borderWidth: 2 }}>
                                <Ionicons name='add-circle' size={40} color='white' style={{ paddingTop: 50, paddingLeft: 60 }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ borderColor: 'white', borderStyle: 'dashed', width: 154, height: 140, borderRadius: 1, borderWidth: 2, marginLeft: 10 }}>
                                <Ionicons name='add-circle' size={40} color='white' style={{ paddingTop: 50, paddingLeft: 60 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                     navigation.navigate('Interest', { name: 'cancel' })
                }} >
                  <View style={{marginTop:10}} >
                    <Text style={{backgroundColor:'#660000',color:"#FFFFFF", fontSize:20, textAlign:'center', marginTop:50, paddingHorizontal:20, paddingVertical:12 , borderRadius:20}}>Next</Text>
                 </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddPhotosScreen
