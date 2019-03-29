import React, { Component } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-8c130.cloudfunctions.net';

class SignInForm extends Component {
  // equivalent to setting this.state.phone in the constructor
  // this is es2017/es7 syntax
  state = { code: '', phone: '' };

  // note: if you use an arrow function ( handleSubmit = () => { }) you don't
  //  have to bind(this).
  handleSubmit = async () => {
    const { phone, code } = this.state;
    const verifyOneTimePassUrl = `${ROOT_URL}/verifyOneTimePassword`;

    try {
      // verify password
      let response = await axios.post(verifyOneTimePassUrl, { phone, code });
      console.log(response);
      // log in with json web token if pass is correct
      firebase.auth().signInWithCustomToken(response.data.token);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={{ width: '100%' }}>
        <View style={{ marginBottom: 10 }}>
          <Input
            style={{ width: '100%' }}
            label='Enter Phone Number'
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
          <Input
            style={{ width: '100%' }}
            label='Enter Code'
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
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

export default SignInForm;
