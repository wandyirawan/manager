import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDA-TsyqeuEXK8Oc_nWAWzKnA9EVjXDfl0",
      authDomain: "manager-cfaa8.firebaseapp.com",
      databaseURL: "https://manager-cfaa8.firebaseio.com",
      projectId: "manager-cfaa8",
      storageBucket: "manager-cfaa8.appspot.com",
      messagingSenderId: "662251509580"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello !!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
