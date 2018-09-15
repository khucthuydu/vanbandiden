import React, { Component } from 'react';

import { AuthRouter } from './';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PublicRoutes, PrivateRoutes, AuthRoutes } from './'

import Login from 'containers/Login'

class App extends Component {

  render() {
    return (
      <Switch>
        <PublicRoutes path="/login" component={Login} />
        <AuthRoutes
          path="/"
          component={PrivateRoutes}
        />
      </Switch>
    );
  }
}

export default App;
