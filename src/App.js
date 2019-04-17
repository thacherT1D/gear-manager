import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Text } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import SignInForm from './components/SignInForm';
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
            <View style={styles.title}>
              <Text style={styles.text}>Hello there gear junkie!</Text>
            </View>
            <SignInForm />
          </Provider>
        </Content>
      </Container>
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
