import React from 'react'
import Login from "./components/login/Login.component";
import App from "./components/App";
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/login' component={Login}/>
    </Switch>
  </Router>
)

export default Routes;