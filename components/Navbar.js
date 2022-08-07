import {View,Button, StyleSheet} from 'react-native'
const Navbar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button title='Profile' onPress={() => navigation.navigate("ProfilePage")}/>
      <Button title='Home' onPress={()=> navigation.navigate("Home")} />
      <Button title='Image' onPress={()=> navigation.navigate("ImageUpload")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    // flex: 2,
    // flexDirection: 'column',
  }
})
export default Navbar;