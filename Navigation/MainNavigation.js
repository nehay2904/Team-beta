import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Interest from '../Screens/Interest';
import AddInfoPage from '../FirstTimeVisitPage/AddInfoPage';
import BottomTab from '../components/BootomTab';
import LandingScreen from '../Screens/LandingScreen';
import ComNav from '../components/ComNav';
import LocationAcess from './LocationAccess';
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