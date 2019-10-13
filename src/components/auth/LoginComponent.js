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

class LoginPage extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <NavigationBar/>
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
            </div>
             );       
    }
  
};

export default LoginPage;