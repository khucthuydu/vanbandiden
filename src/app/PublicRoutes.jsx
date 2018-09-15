import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
const PublicRoute = ({
  component: Component,
  login,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (!!login.id ) 
        return <Redirect to={'/'} />
      else 
        return <Component {...props} /> 
    }}
  />
)

export default connect( ({login}) => ({login}) )(PublicRoute);