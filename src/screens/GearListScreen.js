import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import AppHeader from '../components/AppHeader';

class GearListScreen extends React.Component {
  static navigationOptions = {
    title: 'Gear List'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Boots</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>Backpack</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default GearListScreen;
