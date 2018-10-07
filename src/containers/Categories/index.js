import React,{Component} from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import DocType from './DocType';
import Organization from './Organization';

class Categories extends Component {
  render(){
    console.log(this.props.match)
    return(
      <Switch>
        <Route path={`${this.props.match.url}/doc-type`} component={DocType} />
        <Route path={`${this.props.match.url}/organization`} component={Organization} />
      </Switch>        
    )
  }
}

export default withRouter(Categories);