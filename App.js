import { StyleSheet, Text, View } from 'react-native';
import BottomTab from './components/BootomTab';


export default function App() {
  
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