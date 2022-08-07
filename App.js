import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './components/BootomTab';





export default function App() {
  const Stack = createNativeStackNavigator();
  
  return(
       <BottomTab />
   
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