// firebase functions (google cloud functions - one_time_password app)
// async/await
import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyAemXmtpvQ3VtFKHsXmyY1ZxFEI1ECGArk',
      authDomain: 'one-time-password-8c130.firebaseapp.com',
      databaseURL: 'https://one-time-password-8c130.firebaseio.com',
      projectId: 'one-time-password-8c130',
      storageBucket: 'one-time-password-8c130.appspot.com',
      messagingSenderId: '381025117092'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',

    width: '100%',
    borderWidth: 1,
    borderColor: 'green'
  },
});
