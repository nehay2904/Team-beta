import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilePage from '../Screens/ProfilePage';
import ProfileUpdateScreen from '../Screens/ProfileUpdate';
import SettingPage from '../Screens/SettingPage';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (

      <Stack.Navigator>
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="ProfileUpdateScreen" component={ProfileUpdateScreen}
         options={{
          headerShown: false
        }} />
         <Stack.Screen name="SettingPage"  component={SettingPage}
          options={{
            headerShown: false
          }} 
         />
      </Stack.Navigator>
  
  );
};

export default MyStack