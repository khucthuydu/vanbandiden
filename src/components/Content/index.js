import React,{Component} from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import Home from '../Home'
class Content extends Component {
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/pagego" component={PageGo} /> */}
      </Switch>        
    )
  }
}

export default withRouter(Content);