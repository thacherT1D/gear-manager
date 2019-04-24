import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Picker,
  Icon
} from 'native-base';

import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';


class EmployeeCreate extends Component {
  render() {
    return (
      <View>
        <Form>
          <Item>
            <Label>Name</Label>
            <Input
              placeholder="Juan Hausbender"
              value={this.props.name}
              onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
             />
          </Item>
          <Item>
            <Label>Phone Number</Label>
            <Input
              placeholder="555-555-5555"
              value={this.props.phone}
              onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
             />
          </Item>
          <Item>
            <Label>Shift</Label>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Select Shifts"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              selectedValue={this.props.shift}
              onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
              >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </Item>
        </Form>
        <Button
          info block
          style={[styles.button]}
        >
          <Text>Create Employee</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
  }
});

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
