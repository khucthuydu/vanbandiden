import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import 'jquery-slimscroll/jquery.slimscroll.min';

class SideNavContent extends Component {
    componentDidMount() {
        const {history} = this.props;
        const $nav = $(this.nav);
        const slideDuration = 250;

        $nav.slimscroll({
            height: '100%'
        });

        const pathname = `#${history.location.pathname}`;// get current path

        $('ul.nav-menu > li.menu').click(function () {
            const menuLi = this;
            $('ul.nav-menu > li.menu').not(menuLi).removeClass('open');
            $('ul.nav-menu > li.menu ul').not($('ul', menuLi)).slideUp(slideDuration);
            $('> ul', menuLi).slideToggle(slideDuration);
            $(menuLi).toggleClass('open');
        });

        $('ul.sub-menu li').click(function (e) {
            let superSubMenu = $(this).parent();
            if (superSubMenu.parent().hasClass('active')) {
                $('li', superSubMenu).not($(this)).removeClass('active');
            }
            else {
                $('ul.sub-menu li').not($(this)).removeClass('active');
            }

            $(this).toggleClass('active');
            e.stopPropagation();
        });

        const activeLi = $('a[to="' + pathname + '"]');// select current a element
        const activeNav = activeLi.closest('ul'); // select closest ul
        if (activeNav.hasClass('sub-menu')) {
            activeNav.slideDown(slideDuration);
            activeNav.parent().addClass('open');
            activeLi.parent().addClass('active');
        } else {
            activeLi.parent().addClass('open');
        }
    }


    render() {
        return (
            <ul className="nav-menu" ref={(c) => {
                this.nav = c;
            }}>

                <li className="nav-header">Main</li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"/>
                        <span className="nav-text">Dashboard</span>
                    </Button>
                    <ul className="sub-menu">
                        <li>
                            <Link className="prepend-icon" to="/app/dashboard/default">
                                <span className="nav-text">Default</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/dashboard/eCommerce">
                                <span className="nav-text text-transform-none">eCommerce</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/dashboard/news">
                                <span className="nav-text">News</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/dashboard/intranet">
                                <span className="nav-text">Intranet</span>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    }
}

export default withRouter(SideNavContent);
