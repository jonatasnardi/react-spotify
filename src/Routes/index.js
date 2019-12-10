import React from 'react';
import { isAuthenticated } from './auth';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Album from '../Pages/Album/Album';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
    )
  )} />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/" component={() => <Login />} />
      <PrivateRoute exact path="/home" component={() => <Home />} />
      <Route exact path="/login" component={() => <Login />} />
      <PrivateRoute path="/album/:id" component={() => <Album /> } />
    </Switch>
  </BrowserRouter>
);

export default Routes;