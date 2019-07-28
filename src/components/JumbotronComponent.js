import React from "react";
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
    const bgImage = 'assets/jumbotron.png';

    const styles = {
        backgroundImage: `url(${bgImage})`
    } 
    return (
      <div>
        <Jumbotron style={styles}>
          <h1 className="display-3">Welcome to Hoolak </h1>
          <p className="lead">Solving the annoyance of not being able to send your Nepali fam a package to the door</p>
          <div class="container">
          <hr className="my-2" />
          <p>Sign up and create a package within minutes</p>
          </div>
          <p className="lead">
            <Button color="primary">Sign Up </Button>
          </p>
        </Jumbotron>
      </div>
    );
  };
  
  export default Jumbo;