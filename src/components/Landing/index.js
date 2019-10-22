import React, { Component } from "react";
import { MDBMask, 
    MDBRow, 
    MDBCol,  
    MDBBtn, 
    MDBView,
    MDBContainer 
} from "mdbreact";
import FeaturesPage from './features';
import ContactPage from './contact';
import FooterPage from '../Footer';
import QuotePage from '../Quote';

class LandingPage extends Component {
  
  styles = {
    customMargin: {
      marginTop: "10rem"
    },
    bgGradient: {
      backgroundImage: "url('assets/Moss.jpg')"
    }
    
  }

  render() {
    
    return (
      <>
        <MDBView src={`assets/bg1.jpg`} fixed>
          <MDBMask className="rgba-white-light align-items-center">
            <MDBContainer style={this.styles.customMargin}>
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h1 className="h1-responsive display-3 mb-0 pt-md-5 pt-5 white-text font-weight-light" > Welcome 
                    <span className=" font-weight-light"> to </span>
                    <span className=" font-weight-bold">HOOLAK </span>
                  </h1>
                  <hr className="hr-light my-4" />
                  <h3 className="h3-responsive pb-md-5 pb-sm-3 pb-5">
                    Solving the annoyance of not being able to send your Nepali fam a package to the door.
                    </h3>
                  <MDBBtn color="teal" round size="lg" >Get Started</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        <main>
          <MDBContainer>
            <FeaturesPage />
            <hr className="hr-teal my-5 w-25" />
            <QuotePage />
            <hr className="hr-teal my-5 w-25" />
            <ContactPage />
          </MDBContainer>
          <FooterPage />
        </main>
      </>
    );
  }
}

export default LandingPage;