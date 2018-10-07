import React from 'react';
import {connect} from 'react-redux'
import { Route, Redirect } from 'react-router-dom';
import { PublicRoutes, PrivateRoutes } from '.';

const AuthRoutes = ({
	component: ViewComponent,
	login,
	location,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (!!login.id ) {
        return <ViewComponent {...props} />
      }
      if (!location.pathname.startsWith('/login')) {
        return <Redirect to={'/login'} />
      }
      return null
    }}
  />
)



export default connect( ({login}) => ({login}) )(AuthRoutes);