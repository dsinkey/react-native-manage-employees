import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
        <Provider store={store}>
          <LoginForm />
        </Provider>
    );
  }
}

export default App;
