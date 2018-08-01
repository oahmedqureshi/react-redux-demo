import React from 'react'
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

// components
import Login from "./components/login/Login.component";
import App from "./components/App";
import NotFound from "./components/NotFound"

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/login' component={Login}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
)

export default Routes;