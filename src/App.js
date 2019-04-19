import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Container, Content, Text, Button } from 'native-base';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import {
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions,
  AppNavigator
} from 'react-navigation';

import AppHeader from './components/AppHeader';
import LoginForm from './components/LoginForm';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA2UZSQAq1kxUlr4Q7WNIJYGZl5G2HBnug',
      authDomain: 'gear-manager-25100.firebaseapp.com',
      databaseURL: 'https://gear-manager-25100.firebaseio.com',
      projectId: 'gear-manager-25100',
      storageBucket: 'gear-manager-25100.appspot.com',
      messagingSenderId: '355491663632'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20
  },
  title: {
    alignSelf: 'center'
  },
  text: {
    fontSize: 20
  }
});

export default App;
