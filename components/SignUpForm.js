import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-8c130.cloudfunctions.net';

class SignUpForm extends Component {
  // equivalent to setting this.state.phone in the constructor
  // this is es2017/es7 syntax
  state = { phone: '' };

  // note: if you use an arrow function ( handleSubmit = () => { }) you don't
  //  have to bind(this).
  handleSubmit = async () => {
    const createUserUrl = `${ROOT_URL}/createUser`;
    const requestOneTimePassUrl = `${ROOT_URL}/requestOneTimePassword`;

    // async/await example:
    // let response = await axios.post(createUserUrl, { phone: this.state.phone });
    // console.log(response)
    try {
      await axios.post(createUserUrl, { phone: this.state.phone });
      await axios.post(requestOneTimePassUrl, { phone: this.state.phone });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={{ width: '100%' }}>
        <View style={{ marginBottom: 10 }}>
          <Input
            containerStyle={{ width: '100%' }}
            inputContainerStyle={{ width: '100%' }}
            label='Enter Phone Number'
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button
          onPress={this.handleSubmit.bind(this)}
          title="Submit"
        />
      </View>
    );
  }
}

export default SignUpForm;
