

import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import BottomTab from './components/BootomTab';
import AddInfoPage from './FirstTimeVisitPage/AddInfoPage';
import DropDown from './FirstTimeVisitPage/Dropdown';;
import LocationAcess from './Navigation/LocationAccess';
import MainNavigation from './Navigation/MainNavigation';
import Stack from './Screens/Demo';
import Interest from './Screens/Interest';
import LandingScreen from './Screens/LandingScreen';
import LocationScreen from './Screens/LocationScreen';
import LocationAccessPage from './FirstTimeVisitPage/LocationAccessPage';
import LocationPage from './FirstTimeVisitPage/LocationPage'
export default function App() {
  
  return(
    // <ScrollView>
      // <AddInfoPage />  
    // </ScrollView>
    // <LandingScreen />
    // <Interest />
    // <NavigationContainer>
    //   <MainNavigation />
    // </NavigationContainer>
    // <LocationScreen />
    // <Stack />
    // <LocationAcess />
    // <DropDown />
    // <LocationAccessPage />
    <LocationPage />
  
  );
  
}
