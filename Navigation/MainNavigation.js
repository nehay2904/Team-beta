import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Interest from '../FirstTimeVisitPage/Interest';
import AddInfoPage from '../FirstTimeVisitPage/AddInfoPage';
import LandingScreen from '../Screens/LandingScreen';
import ComNav from './ComNav';
import AddPhotosScreen from '../FirstTimeVisitPage/AddPhotosScreen';
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (

      <Stack.Navigator>
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{
            headerShown: false,
            
          }}
        />
       
      
        <Stack.Screen 
        name="addinfo" 
        component={AddInfoPage}
         options={{
          headerShown: false
        }} />
           <Stack.Screen 
        name="AddPhtotsScreen" 
        component={AddPhotosScreen}
         options={{
          headerShown: false
        }} />
         <Stack.Screen
          name="Interest"
          component={Interest}
          options={{
            headerShown: false
          }}
        />
         <Stack.Screen
          name="ComNav"
          component={ComNav}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
  
  );
};

export default MainNavigation