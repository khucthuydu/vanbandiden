import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import {Config} from 'constants/ThemeColors';
import SidenavContent from './SidenavContent';
import UserInfo from 'components/UserInfo';
import {COLLAPSED_DRAWER, FIXED_DRAWER} from 'constants/ActionTypes';
import { logoutAction } from 'actions/login';


class SideNav extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            width: $(window).width()
        };
    }

    componentDidMount() {
        const {history} = this.props;
        const $body = $('#body');

        if (Config.autoCloseMobileNav) {
            history.listen((location) => {
                setTimeout(() => {
                    $body.removeClass('sidebar-mobile-open');
                }, 0);
            });
        }
        window.addEventListener('resize', () => {
            this.setState({width: $(window).width()})
        });
    }

    render() {
        const {navCollapsed, drawerType, logoutAction} = this.props;
        const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'd-xl-flex' : drawerType.includes(COLLAPSED_DRAWER) ? '' : 'd-flex';
        let type = 'permanent';
        if (drawerType.includes(COLLAPSED_DRAWER) || (drawerType.includes(FIXED_DRAWER) && this.state.width < 1200)) {
            type = 'temporary';
        }

        return (
            <div className={`app-sidebar d-none ${drawerStyle}`}>
                <Drawer className="app-sidebar-content"
                        variant={type}
                        open={type.includes('temporary') ? navCollapsed : true}
                        onClose={this.props.onToggleCollapsedNav}
                        classes={{
                            paper: 'side-nav',
                        }}
                >
                    <UserInfo logoutAction={ logoutAction }/>
                    <SidenavContent/>
                </Drawer>
            </div>
        );
    }
}

const mapStateToProps = ({settings}) => {
    const {navCollapsed, drawerType} = settings;
    return {navCollapsed, drawerType}
};
const mapDispatchToProps = (dispatch) => {
    return{
      dispatch,
      logoutAction: (val) => dispatch(logoutAction(val)),
    }
  } 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav));

