import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import './Header.css';

class NavigationBar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <MDBNavbar color="indigo" dark expand="lg">
        <div className="container">
      <MDBNavbarBrand className="mr-auto" href="/"><img src="assets/logo.png" height="100" width="100" alt="hoolak"/></MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink className="nav-link-right" to="/home">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="nav-link-right" to="#!">Create</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="nav-link-right" to="#!">Track</MDBNavLink>
          </MDBNavItem>
        
        </MDBNavbarNav>
        <MDBNavbarNav right>
          
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="/">Sign Up</MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBNavLink to="/login">Login</MDBNavLink>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
      </div>
    </MDBNavbar>
    );
  }
}

export default NavigationBar;