import React, { Component } from 'react';
import Jumbo from './jumbotron/JumbotronComponent';
import NavigationBar from './NavigationBarComponent';
import { MDBContainer,
    MDBModal,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn
} from 'mdbreact';
import LoginPage from './auth/LoginComponent';

class Home extends Component {

    modalCallback = () => {
        this.toggle();
    }
    state = {
        modal: false
      }
      
      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }

    render() {
        return(
            <div>
                <NavigationBar parentCallback={this.modalCallback} />
                <MDBContainer>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                        <MDBModalHeader toggle={this.toggle}>Hoolak Login</MDBModalHeader>
                        <MDBModalBody>
                            <LoginPage/>
                        </MDBModalBody>
                        {/* <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                        </MDBModalFooter> */}
                    </MDBModal>
                </MDBContainer>
                
                <Jumbo/>
                <div className="container">
                <h4>Lorem Ipsum Ni </h4>
                </div>
            </div>
            
        ); 
    }
    
}

export default Home;