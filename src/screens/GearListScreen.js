import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button, Text } from 'native-base';

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
          <Button
            block
            info
            style={styles.button}
            onPress={() => navigate('Home')}>
            <Text>Home</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20
  }
});

export default GearListScreen;
