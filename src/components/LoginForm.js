import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Spinner
} from 'native-base';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button info block
        style={[styles.button]}
        onPress={this.onButtonPress.bind(this)}>
        <Text>Sign In</Text>
      </Button>
    );
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

        {this.renderError()}

        {this.renderButton()}

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
  },
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
