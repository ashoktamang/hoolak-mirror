import React, {Component} from 'react';
import NavigationBar from './NavigationBarComponent';
import Home from './HomeComponent';
import Jumbo from './jumbotron/JumbotronComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './auth/LoginComponent';

const Main = () => {
    return (
      <div>
        <NavigationBar/>
        <Jumbo/>
      </div>
    );
}

export default Main;