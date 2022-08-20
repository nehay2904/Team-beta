import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import ChatScreen from '../Screens/ChatScreen';
import FindScreen from '../Screens/FindScreen';
import SwipeScreen from '../Screens/Swiper';
import { NavigationContainer } from '@react-navigation/native';
import Swiper from '../Screens/Swiper';
import Main from '../src/Main';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProfilePage from '../Screens/ProfilePage';
import ComponentCon from './ComponentCon';
import MyStack from '../Navigation/ProfileNavigation';

const Tab = createMaterialBottomTabNavigator();



const BottomTab = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator initialRouteName='Profie'  barStyle={{ backgroundColor: '#0F0F0F', height: 70, paddingTop: 10}} shifting={true} screenOptions={{ style: { position: 'absolute',backgroundColor: 'black', height: 90,} }}>

            <Tab.Screen name="My Profile" component={MyStack} options={{ 
                
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="md-person-outline"
                            size={24}
                            
                            color={tabInfo.focused ? "#E94D4D" : "grey"}
                             />)
                }
            }
            } />
            <Tab.Screen name="Find" component={FindScreen} options={{
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="md-compass"
                            size={25}
                            color={tabInfo.focused ? "#E94D4D" : "grey"} />)
                }
            }}
            />
            <Tab.Screen name="Swipe" component={Main} options={{
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="md-home"
                            size={24}
                            color={tabInfo.focused ? "#E94D4D" : "grey"} />)
                }
            }
            } />
            <Tab.Screen name="Chat" component={ChatScreen} options={{
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="md-chatbubbles-outline"
                            size={24}
                            color={tabInfo.focused ? "#E94D4D" : "grey"} />)
                }
            }
            } />
        </Tab.Navigator>
        </NavigationContainer>
    )
}




export default BottomTab