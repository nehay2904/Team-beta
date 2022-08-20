import { StyleSheet, Text, View } from 'react-native';
import BottomTab from './components/BootomTab';
import ProfilePage from './Screens/ProfilePage';
import ProfileUpdateScreen from './Screens/ProfileUpdateScreen';
import {NavigationContainer} from '@react-navigation/native'
import ProfileNavigation from './Navigation/ProfileNavigation';
import ComponentCon from './components/ComponentCon';
import MyStack from './Navigation/ProfileNavigation';
import LandingScreen from './Screens/LandingScreen';

export default function App() {
  
  return(
      //  <BottomTab />
  //  <ProfileUpdateScreen />
  // <ProfilePage />
  // <ComponentCon />
//  <MyStack />
<LandingScreen />
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});