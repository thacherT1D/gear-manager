import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Text } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

class App extends Component {
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
