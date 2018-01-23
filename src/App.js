import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAUPseCfPFMIyrkUqaQ9DgFoIJIedqPJwA",
      authDomain: "manager-8cd8d.firebaseapp.com",
      databaseURL: "https://manager-8cd8d.firebaseio.com",
      projectId: "manager-8cd8d",
      storageBucket: "",
      messagingSenderId: "174719067778"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers,{}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      <Router />
      </Provider>
    );
  }
}

export default App;
