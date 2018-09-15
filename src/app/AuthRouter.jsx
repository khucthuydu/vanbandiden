import React from 'react';
import {connect} from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom';
import { PublicRoutes, PrivateRoutes } from './';

class AuthRoute extends React.Component{
	render(){

		let { login } = this.props;
		return (
				 (!!login.id)
					? (<PrivateRoutes/>)
					:	<PublicRoutes/>       
			)
	} 
}


export default connect( ({login}) => ({login}) )(AuthRoute);