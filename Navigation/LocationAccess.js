import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LocationScreen from '../Screens/LocationScreen';
import AddInfoPage from '../FirstTimeVisitPage/AddInfoPage';

const Stack = createNativeStackNavigator();

const LocationAcess = () => {
  return (

   
      <Stack.Navigator>
        <Stack.Screen
          name="AddInfoPage"
          component={AddInfoPage}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="LocationScreen"
         component={LocationScreen}
         options={{
          headerShown: false
        }} />
      </Stack.Navigator>
   
  
  );
};

export default LocationAcess