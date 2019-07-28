import React, {Component} from 'react';
import NavigationBar from './NavigationBarComponent';
import Home from './HomeComponent';
import Jumbo from './JumbotronComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {
    render() {
      return (
        <div>
          <NavigationBar/>
          <Jumbo/>
          <Switch>
            <Route path='/home' component={()=><Home/>}/>
            <Redirect to='/home'/>
          </Switch>
        </div>
      );
    }
}

export default Main;