import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn
} from "mdbreact";
import NavigationBar from "../NavigationBarComponent";
// Import FirebaseAuth and firebase.
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

class LoginPage extends Component {
  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <NavigationBar />
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6" className="offset-md-3">
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardHeader className="form-header warm-flame-gradient rounded">
                      <h3 className="my-3">
                        <MDBIcon icon="lock" /> Login:
                      </h3>
                    </MDBCardHeader>
                    <label
                      htmlFor="defaultFormEmailEx"
                      className="grey-text font-weight-light"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="defaultFormEmailEx"
                      className="form-control"
                    />
      
                    <label
                      htmlFor="defaultFormPasswordEx"
                      className="grey-text font-weight-light"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      id="defaultFormPasswordEx"
                      className="form-control"
                    />
      
                    <div className="text-center mt-4">
                      <MDBBtn color="deep-orange" className="mb-3" type="submit">
                        Login
                      </MDBBtn>
                    </div>
      
                    <MDBModalFooter>
                      <div className="font-weight-light">
                        <p>Not a member? Sign Up</p>
                        <p>Forgot Password?</p>
                      </div>
                    </MDBModalFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>
        <h1>My App</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <a href="!#" onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
    );
  }

};

export default LoginPage;