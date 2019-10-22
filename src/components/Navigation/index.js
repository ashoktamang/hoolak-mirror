import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, 
  MDBCollapse, MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBIcon,
  MDBDropdownMenu,
  MDBDropdownToggle
} from "mdbreact";

class Navigation extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  

  render() {
    console.log(this.props.authUser);
    const navStyle = { marginBottom: "4rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );

    return (
      // <>
      <div>
        <MDBNavbar
          color="default-color-dark"
          dark
          expand="lg"
          fixed="top"
          scrolling
          transparent
        >
          <MDBContainer>
            <MDBNavbarBrand>
              {/* <img src="assets/logo.png" height="50" width="auto" alt="hoolak"/> */}
              <strong className="white-text">Hoolak</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.handleTogglerClick} />
            <MDBCollapse isOpen={this.state.collapsed} navbar>
              <MDBNavbarNav className="text-uppercase font-weight-light" right>
                <MDBNavItem active>
                  <MDBNavLink to={ROUTES.LANDING} className="font-small">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!" className="font-small">Track</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!" className="font-small">Create</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!" className="font-small">Support</MDBNavLink>
                </MDBNavItem>
                
                <MDBDropdown className="ml-5">
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Sign Up</MDBDropdownItem>
                    {!this.props.authUser &&
                      <Link to="/">Sign In </Link>
                    }
                    {this.props.authUser &&
                      <SignOutButton/>
                    }
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarNav>
              
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {this.state.collapsed && overlay}
      </div>
      // </>
    )
  }
}

export default Navigation;