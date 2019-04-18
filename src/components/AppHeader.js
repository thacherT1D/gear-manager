import React, { Component } from 'react';
import { Header, Left, Body, Right, Title } from 'native-base';

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Left />
        <Body>
          <Title>Gear Manager</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default AppHeader;
