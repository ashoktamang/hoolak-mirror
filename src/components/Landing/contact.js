import React from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput, MDBAnimation } from "mdbreact";

const ContactPage = () => {
  return (
    <MDBContainer>
      
      <MDBRow>
          {/* <form>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-name" label="Your name" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="contact-email"
                    label="Your email"
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" label="Subject" />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="contact-message"
                    label="Your message"
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </form>
          <div className="text-center text-md-left">
            <MDBBtn color="primary" size="md">
              Send
            </MDBBtn>
          </div> */}
          
          <MDBCol md="4">
          <MDBAnimation reveal type="fadeInRight">
          <MDBRow>
            <h2 className="h2-responsive font-weight-light mt-5 mb-2 text-uppercase">
                Contact us
            </h2>
            <p className="w-responsive pb-5">
              Get in touch with us easily.
            </p>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol md="6">
              <span className="text-uppercase font-weight-bold grey-text">Phone Number: </span>
            </MDBCol>
            <MDBCol md="6">
              <p> +1 (202) 999-5252</p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol md="6">
              <span className="text-uppercase font-weight-bold grey-text">Email Address: </span>
            </MDBCol>
            <MDBCol md="6">
              <p className="mb-1"> info@hoolak.com</p>
              <p className="mb-1"> h00lak.ayo@gmail.com</p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6">
              <span className="text-uppercase font-weight-bold grey-text">For Postcards: </span>
            </MDBCol>
            <MDBCol md="6">
              <p className="mb-1">
                4613 9th Street NW #Basement
                Washington DC
                20011
              </p>
            </MDBCol>
          </MDBRow>
          </MDBAnimation>
        </MDBCol>
         
        
      </MDBRow>
    </MDBContainer>
  );
}

export default ContactPage;