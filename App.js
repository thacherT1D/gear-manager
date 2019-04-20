// import { AppRegistry } from 'react-native';
//
// import App from './src/App';
//
// AppRegistry.registerComponent('gear-manager', () => App);
//
// export default App;
//

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content } from 'native-base';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import GearListScreen from './src/screens/GearListScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  GearList: {screen: GearListScreen}
});

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
