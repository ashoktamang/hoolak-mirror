import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBAnimation } from 'mdbreact';

const styles = {
  backgroundImage: "url('assets/Earthly.jpg')"
};
const QuotePage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol className="d-flex align-content-center flex-wrap">
          <MDBAnimation reveal type="fadeInLeft" duration="1500ms">
          <img className="m-md-5 img-fluid" src="assets/jumbotron.jpg" alt="blah"/>

          </MDBAnimation>
        </MDBCol>
        <MDBCol md="6">
        <MDBCol>
          <MDBAnimation reveal type="fadeInUp">
          <h2 className="h2-responsive font-weight-light mt-5 mb-2 text-uppercase">
            Calculate your cost
          </h2>
          </MDBAnimation>
          <MDBAnimation reveal type="fadeInUp">
            <p className="mb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit nonummy nibh 
            euismod tincidunt ut laoreet.</p>
          </MDBAnimation>
        </MDBCol>

        <MDBCol>
          <form className="mt-5">
            <div className="form-group row">
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text col-sm-3 col-form-label text-uppercase">
                height (cm)
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                />
              </div> 
            </div>
          
            <div className="form-group row">
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text col-sm-3 col-form-label text-uppercase">
                width (cm)
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                />
              </div> 
            </div>

            <div className="form-group row">
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text col-sm-3 col-form-label text-uppercase">
                depth (cm)
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                />
              </div> 
            </div>

            <div className="form-group row">
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text col-sm-3 col-form-label text-uppercase">
                weight (kg)
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                />
              </div> 
            </div>

            <div className="form-group row">
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text col-sm-3 mt-3 col-form-label text-uppercase">
                location
              </label>
              <div className="col-sm-9">
                <div className="col-sm-12 my-2 p-0">
                  <input
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    placeholder="FROM"
                  />
                </div>
                <div className="col-sm-12 my-2 p-0">
                  <input
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    placeholder="TO"
                  />
                </div>
              </div> 
            </div>

            <div className="form-group row">
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text col-sm-3 col-form-label text-uppercase">
                package
              </label>
              <div className="col-sm-9">
              <select className="custom-select" title="Choose your delivery">
                <option disabled>Choose your package</option>
                <option value="1">Regular Delivery</option>
                <option value="2">Fastest Delivery: +25%</option>
                <option value="3">Discount Delviery: -10%</option>
              </select>
              </div> 
            </div>
            
            <MDBBtn size="lg" block className="m-0" style={styles}>
            <MDBRow>
              <MDBCol className="text-left">Total Cost</MDBCol>
              <MDBCol>$ 0 </MDBCol>
            </MDBRow>
            </MDBBtn>
              
         
          </form>
         
        </MDBCol>
        </MDBCol>
        
        
      </MDBRow>
    </MDBContainer>
  );
};

export default QuotePage;