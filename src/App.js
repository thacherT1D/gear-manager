import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Text } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

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
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Gear Manager</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Provider store={createStore(reducers)}>
            <Text>Hello there gear junkie!</Text>
          </Provider>
        </Content>
      </Container>
    );
  }
}

export default App;
