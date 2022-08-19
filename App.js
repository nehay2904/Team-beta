import { StyleSheet, Text, View } from 'react-native';
import BottomTab from './components/BootomTab';
import ProfileUpdateScreen from './Screens/ProfileUpdateScreen';


export default function App() {
  
  return(
      //  <BottomTab />
   <ProfileUpdateScreen />
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