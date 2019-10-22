import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const styles = {
  backgroundImage: "url('assets/Moss.jpg')"
}
const FooterPage = () => {
  
  return (
    <MDBFooter style={styles} className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left w-75">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Hoolak</h5>
            <p className="w-responsive">
              Specialized Courier Delivery Service primarily for Nepalese people living in U.S.
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Quick Links</h5>
            <ul className="pl-0">
              <li className="list-unstyled">
                <a href="#!">SiteMap</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Pricing</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Payment Methods</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Support</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
          <h5 className="title">Our Socials</h5>
            
              <MDBIcon fab icon="facebook-f" className="mr-2" size="2x"/>
              
              
              <MDBIcon fab icon="instagram" className="mx-2" size="2x"/>
              <MDBIcon fab icon="linkedin" className="mx-2" size="2x"/>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.hoolak.com"> Hoolak.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;