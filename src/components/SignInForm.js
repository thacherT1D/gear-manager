import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from 'native-base';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';

class SignInForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <View>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
              />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
             />
          </Item>
        </Form>
        <Button info block style={[styles.button]}>
          <Text>Sign In</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
  },
  title: {
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(SignInForm);
