import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Login, Recipie } from './screens';
import Tabs from './navigations/tab';

const Stack = createNativeStackNavigator();

const App = () =>{
  <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{headerShown: false}} 
        initialRouteName={'Login'}>
          <Stack.Screen name='Home' component={Tabs} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Recipie' component={Recipie} />
        </Stack.Navigator>
  </NavigationContainer>
}

export default App;
