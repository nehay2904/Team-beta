import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from '../Screens/LandingScreen';
import Name from '../FirstTimeVisitPage/NameScreen';
import Bio from '../FirstTimeVisitPage/BioScreen';
import Profession from '../FirstTimeVisitPage/ProfessionScreen';
import Birth from '../FirstTimeVisitPage/BirthdateScreen';
import Gender from '../FirstTimeVisitPage/GenderScreen';
import InterestScreen from '../FirstTimeVisitPage/InterestScreen';
import DatingType from '../FirstTimeVisitPage/DatingTypeScreen';
import SexualPreference from '../FirstTimeVisitPage/SexualPreferenceScreen';
import NavComponent from '../components/NavComponent';
import ImageUpload from '../FirstTimeVisitPage/ImageUpload';
import CombineCom from '../components/CombineCom';
import DatingData from '../components/DatingData';
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (

      <Stack.Navigator>
        
        <Stack.Screen 
          name="LandingScreen" 
          component={LandingScreen}
          options={{
          headerShown: false
        }} />
          <Stack.Screen 
          name="CombineCom" 
          component={CombineCom}
          options={{
          headerShown: false
        }} />
        <Stack.Screen 
          name="DatingData" 
          component={DatingData}
          options={{
          headerShown: false
        }} />
         <Stack.Screen 
          name="InterestScreen" 
          component={InterestScreen}
          options={{
          headerShown: false
        }} />
          <Stack.Screen 
          name="ImageUpload" 
          component={ImageUpload}
          options={{
          headerShown: false
        }} />
          <Stack.Screen 
          name="NavComponent" 
          component={NavComponent}
          options={{
          headerShown: false
        }} />
       
         
          
      </Stack.Navigator>
  
  );
};

export default MainNavigation