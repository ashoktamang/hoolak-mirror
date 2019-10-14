import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, 
  Route,
  Switch,
  Redirect  
} from 'react-router-dom';
import Home from './components/HomeComponent';
import LoginPage from './components/auth/LoginComponent';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Redirect to="/home"/>
        </Switch>
        
      </Router>      
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);