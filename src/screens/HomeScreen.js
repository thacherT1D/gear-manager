import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Text, Button } from 'native-base';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

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
    const { navigate } = this.props.navigation;

    return (

      <Container>
        <Content padder>
          <Provider store={store}>
            <View style={styles.title}>
              <Text style={styles.text}>Hello there gear junkie!</Text>
            </View>
            <LoginForm />
            <Button
              block
              warning
              style={styles.button}
              onPress={() => navigate('GearList')}>
              <Text>Go to Gear List</Text>
            </Button>
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
