import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Form, Item, Input, Button, Text } from 'native-base';

class SignInForm extends Component {
  render() {
    return (
      <Content>
        <Form>
          <Item>
            <Input placeholder="Email" />
          </Item>
          <Item last>
            <Input placeholder="Password" />
          </Item>
        </Form>
        <Button block style={[styles.button]}>
          <Text>Sign In</Text>
        </Button>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
  title: {
    justifyContent: 'center'
  }
});

export default SignInForm;
