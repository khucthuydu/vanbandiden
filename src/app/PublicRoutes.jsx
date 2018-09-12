import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Login from 'containers/Login'
class PublicRouter extends Component {

  render(){
    return(
      <Switch>
        <Route path="/" component={ Login } />
      </Switch>       
    )
  }
}
export default withRouter(PublicRouter)