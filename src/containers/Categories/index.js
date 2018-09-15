import React,{Component} from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import DocType from './DocType';

class Categories extends Component {
  render(){
    console.log(this.props.match)
    return(
      <Switch>
        <Route path={`${this.props.match.url}/doc-type`} component={DocType} />
      </Switch>        
    )
  }
}

export default withRouter(Categories);