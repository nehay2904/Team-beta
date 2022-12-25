import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatFeedDemo from '../Screens/ChatFeedDemo';
import ChatScreen from '../Screens/ChatScreen';
const Stack = createNativeStackNavigator();

const ChatNav = () => {
  return (

      <Stack.Navigator>
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="ChatFeedDemo" component={ChatFeedDemo}
         options={{
          headerShown: false
        }} />
         
      </Stack.Navigator>
  
  );
};

export default ChatNav