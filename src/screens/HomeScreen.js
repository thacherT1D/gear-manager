import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Container, Content, Text } from 'native-base';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import AppHeader from '../components/AppHeader';
import LoginForm from '../components/LoginForm';
import reducers from '../reducers';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
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
    const {navigate} = this.props.navigation;

    return (

      <Container>
        <AppHeader />
        <Content padder>
          <Provider store={store}>
            <View style={styles.title}>
              <Text style={styles.text}>Hello there gear junkie!</Text>
              <Button
              title="Go to Jane's profile"
              onPress={() => navigate('Profile', { name: 'Jane' })}>
              </Button>
            </View>
            <LoginForm />
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

export default HomeScreen;
