import React from "react";
import { StyleSheet, Text, View } from "react-native";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}

export default ProfileScreen;
