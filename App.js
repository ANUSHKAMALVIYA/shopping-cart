import React from 'react';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen';
import Cart from './screens/Cart';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component = {HomeScreen}/>
        <Stack.Screen name = 'Product' component = {ProductScreen}/>
        <Stack.Screen name = 'Cart' component = {Cart}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


