import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, 
  Route
} from 'react-router-dom';

import Navigation from '../Navigation';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

import LandingPage from '../Landing';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import PasswordForgetPage from '../PasswordForget';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import HomePage from '../Home';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    }
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
        <Router>
        <Navigation authUser={this.state.authUser} />
          <div>
            
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
          </div>
        </Router> 
      </AuthUserContext.Provider>
           
    );
  }
}

export default withFirebase(App);