import React, { Component } from 'react';
import { View, Textd } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class SignUpForm extends Component {
  render() {
    return (
      <View>
        <FormLabel>Enter Phone Number</FormLabel>
        <FormInput />
        <Button>Submit</Button>
      </View>
    );
  }

}

export default SignUpForm;
