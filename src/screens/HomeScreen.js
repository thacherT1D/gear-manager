import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Content
} from 'native-base';
import AppHeader from '../components/AppHeader';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <AppHeader />

        <Content padder>
        </Content>
      </Container>
    );
  }
}
