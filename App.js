
import MainNavigation from './Navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import Gender from './FirstTimeVisitPage/GenderScreen';
import CombineCom from './components/CombineCom';
import { ScrollView } from 'react-native';
import DatingData from './components/DatingData';

export default function App() {
  
  return(
   
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
    // <Gender />
    
        //  <CombineCom />
  
    // <DatingData />
 
    
    
  );
  
}
