import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, 
  Route,
  Switch,
  Redirect  
} from 'react-router-dom';
import Home from './components/HomeComponent';
import LoginPage from './components/auth/LoginComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Redirect to="/home"/>
        </Switch>
        
      </Router>      
    );
  }
}

export default App;