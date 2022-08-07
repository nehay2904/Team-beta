import Navbar from "../components/Navbar";
import {View,Text} from 'react-native'

const HomeScreen = ({navigation}) => {
  return ( 
    <View>
      <Text>Home screen</Text>
      <Navbar navigation={navigation}/>
    </View>
   );
}
 
export default HomeScreen;