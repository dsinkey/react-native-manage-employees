import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCBb-wUSrFwUDuNMDrqsnASgPR46R1jdM8',
      authDomain: 'employee-manager-65f1c.firebaseapp.com',
      databaseURL: 'https://employee-manager-65f1c.firebaseio.com',
      projectId: 'employee-manager-65f1c',
      storageBucket: 'employee-manager-65f1c.appspot.com',
      messagingSenderId: '351134516910'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
        <Provider store={createStore(reducers)}>
          <LoginForm />
        </Provider>
    );
  }
}

export default App;
