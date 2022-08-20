import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../Screens/LandingScreen';
import ScreenOne from '../FirstTimeProfilePage/ScreenOne';
import ScreenThree from '../FirstTimeProfilePage/ScreenThree';
import ScreenTwo from '../FirstTimeProfilePage/ScreenTwo';
import BottomTab from '../components/BootomTab';
import NavComponent from '../components/NavComponent';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (

      <Stack.Navigator>
        
        <Stack.Screen name="LandingScreen" component={LandingScreen}
         options={{
          headerShown: false
        }} />
          <Stack.Screen name="ScreenOne" component={ScreenOne}
         options={{
          headerShown: false
        }} />
          <Stack.Screen name="ScreenTwo" component={ScreenTwo}
         options={{
          headerShown: false
        }} />
          <Stack.Screen name="ScreenThree" component={ScreenThree}
         options={{
          headerShown: false
        }} />
          <Stack.Screen name="NavComponent" component={NavComponent}
         options={{
          headerShown: false
        }} />
      </Stack.Navigator>
  
  );
};

export default MainNavigation