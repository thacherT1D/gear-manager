import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import GearListScreen from './src/screens/GearListScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  GearList: { screen: GearListScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
