import React, { Component } from 'react';
import Jumbo from './jumbotron/JumbotronComponent';
import NavigationBar from './NavigationBarComponent';

const Home = () => {
    return(
        <div>
            <NavigationBar/>
            <Jumbo/>
            <div className="container">
            <h4>Lorem Ipsum Ni </h4>
            </div>
        </div>
        
    ); 
}

export default Home;