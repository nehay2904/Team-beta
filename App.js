
import MainNavigation from './Navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import Gender from './FirstTimeVisitPage/GenderScreen';


export default function App() {
  
  return(
   
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
    // <Gender />
    
    
  );
  
}
