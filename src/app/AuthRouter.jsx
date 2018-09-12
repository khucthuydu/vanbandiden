import React from 'react';
import {connect} from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom';
import { AuthRouter, PublicRoutes, PriviteRoutes } from './';
class AuthRoute extends React.Component{
	render(){

		let { login } = this.props;
	console.log(login);

		return (
				 (login.id !== "")
					? (<PriviteRoutes/>)
					:	<PublicRoutes/>       
			)
	} 
}


export default connect( ({login}) => ({login}) )(AuthRoute);