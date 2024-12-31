import React from 'react';

import Scanner from './screens/Scanner';
import Home from './screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

function App() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
      options={{
        headerStyle: {
          backgroundColor: '#313e50'
        },
        headerTitleStyle: {
          fontWeight:'bold'
        },
        headerTintColor: '#fff'
      }} />
      <Stack.Screen name="Scanner" component={Scanner}
      options={{
        headerStyle: {
          backgroundColor: '#313e50'
        },
        headerTitleStyle: {
          fontWeight:'bold'
        },
        headerTintColor: '#fff'
      }}/>
    </Stack.Navigator>
  );
}

export default () => {
  return(
    <NavigationContainer>
      <App/>
      <StatusBar style='light'/>
    </NavigationContainer>
  )
}