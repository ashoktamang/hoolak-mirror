import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBJumbotron,
  MDBRow,
  MDBCol
} from "mdbreact";
import "./jumbotron.css";

const Jumbo = (props) => {
    const bgImage = 'assets/jumbotron.png';

    const styles = {
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat'
    } 
    return (
      <MDBContainer className="text-center" >
        <MDBRow>
          <MDBCol>
            <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-black text-center py-5 px-4 my-5" style={styles}>
              <MDBCol className="py-5">
              <h2 className="h1 display-3">Welcome to Hoolak</h2>
                <p className="lead">
                  Solving the annoyance of not being able to send your Nepali fam a package to the door
                </p>
                <hr className="my-2" />
                <p>
                  Sign up and create a package within minutes
                </p>
                <p className="lead">
                  <MDBBtn color="primary">Sign Up</MDBBtn>
                </p>
              </MDBCol>
              
              </MDBCol>
              
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };
  
  export default Jumbo;