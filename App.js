

import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import BottomTab from './components/BootomTab';
import AddInfoPage from './FirstTimeVisitPage/AddInfoPage';
import Loginpage from './Loginpage';
import LocationAcess from './Navigation/LocationAccess';
import MainNavigation from './Navigation/MainNavigation';
import Stack from './Screens/Demo';
import Interest from './Screens/Interest';
import LandingScreen from './Screens/LandingScreen';
import LocationScreen from './Screens/LocationScreen';

export default function App() {
  
  return(
    // <AddInfoPage />  
    // <LandingScreen />
    // <Interest />
    // <NavigationContainer>
    //   <MainNavigation />
    // </NavigationContainer>
    // <LocationScreen />
    // <Stack />
    // <LocationAcess />
    <Loginpage />
  );
  
}
