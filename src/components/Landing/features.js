import React from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBAnimation } from "mdbreact";
import { Link } from 'react-router-dom';

const FeaturesPage = () => {
  return (
    <section className="my-5">
      <MDBAnimation reveal type="fadeInUp">
      <h2 className="h1-responsive font-weight-light text-center my-5 black-text text-uppercase">
        About Us
      </h2>
      <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        We aim to provide hassle-free shipping services from U.S. to Nepal. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
      </p>
      </MDBAnimation>
      
      <MDBAnimation reveal type="fadeInUp">
      <MDBRow>
        
        <MDBCol md="4" className="md-0 mb-5">
          <MDBRow>
            <MDBCol lg="2" md="3" size="2">
              <MDBIcon icon="bullhorn" size="2x" className="teal-text" />
            </MDBCol>
            <MDBCol lg="10" md="9" size="10">
              <h4 className="h4-responsive font-weight-bold">Instant Quote</h4>
              <p className="grey-text lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
              <MDBAnimation reveal type="pulse" duration="3s">
              <Link className="teal-text" size="sm" to="#!">
                Learn more
              </Link>
              </MDBAnimation>
              
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="4" className="md-0 mb-5">
          <MDBRow>
            <MDBCol lg="2" md="3" size="2">
              <MDBIcon icon="cogs" size="2x" className="teal-text" />
            </MDBCol>
            <MDBCol lg="10" md="9" size="10">
              <h4 className="h4-responsive font-weight-bold">Real-time Tracking</h4>
              <p className="grey-text lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
              <MDBAnimation reveal type="pulse" duration="3s">
              <Link className="teal-text" size="sm" to="#!">
                Learn more
              </Link>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="4" className="md-0 mb-5">
          <MDBRow>
            <MDBCol lg="2" md="3" size="2">
              <MDBIcon icon="tachometer-alt" size="2x" className="teal-text" />
            </MDBCol>
            <MDBCol lg="10" md="9" size="10">
              <h4 className="h4-responsive font-weight-bold">Secured Service</h4>
              <p className="grey-text lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
              <MDBAnimation reveal type="pulse" duration="3s">
              <Link className="teal-text" size="sm" to="#!">
                Learn more
              </Link>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
      </MDBAnimation>
    </section>
  );
}

export default FeaturesPage;