import React,{Component} from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Page404 from '../NotFound';
import Home from '../Home';
import Categories from '../../containers/Categories';

class Content extends Component {
  render(){
    console.log(this.props.match)
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/categories" component={Categories} />
        <Route component={Page404} />
      </Switch>        
    )
  }
}

export default withRouter(Content);