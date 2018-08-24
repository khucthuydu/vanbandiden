import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { Home, PageGo } from './router';
import { isIOS, isMobile } from 'react-device-detect';

import Sidebar from 'containers/SideNav';

import Header from 'components/Header';
import Footer from 'components/Footer';


import {toggleCollapsedNav} from 'actions/Setting';

import {COLLAPSED_DRAWER, FIXED_DRAWER} from 'constants/ActionTypes';

import 'styles/bootstrap.scss'
import 'styles/app.scss';

class RouterMain extends Component {

  onToggleCollapsedNav = () => {
    const val = !this.props.navCollapsed;
    this.props.toggleCollapsedNav(val);
  };

  render() {
    const {match, drawerType} = this.props;
    const drawerStyle = drawerType.includes(FIXED_DRAWER) ? "fixed-drawer" : drawerType.includes(COLLAPSED_DRAWER) ? "collapsible-drawer" : "mini-drawer";
    if (isIOS && isMobile) {
      $('#body').addClass('ios-mobile-view-height')
    }
    else if ($('#body').hasClass('ios-mobile-view-height')) {
      $('#body').removeClass('ios-mobile-view-height')
    }

    return (   
      <div className={`app-container ${drawerStyle}`}>
        <Sidebar onToggleCollapsedNav={this.onToggleCollapsedNav}/>

        <div className="app-main-container">
          <div className="app-header">
            <Header drawerType={drawerType} onToggleCollapsedNav={this.onToggleCollapsedNav}/>
          </div>

          <main className="app-main-content-wrapper">
            <div className="app-main-content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/pagego" component={PageGo} />
              </Switch>           
            </div>
            <Footer/>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({settings}) => {
  let { navCollapsed, drawerType } = settings;
  return { navCollapsed, drawerType }
};

const mapDispatchToProps = (dispatch) => {
  return{
    dispatch,
    toggleCollapsedNav: (val) => dispatch(toggleCollapsedNav(val)),
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouterMain));
