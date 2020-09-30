import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screen/Login'
import Home from './src/screen/Home'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Login" component={Login} options={{ title: '' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;