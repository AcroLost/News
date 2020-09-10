/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './src/navigation/BottomTabNavigator.js';



const App = () => {
  return (

    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>

  );
};

export default App;
