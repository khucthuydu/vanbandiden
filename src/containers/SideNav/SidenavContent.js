import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MenuContent from './MenuContent';
import 'jquery-slimscroll/jquery.slimscroll.min';

class SideNavContent extends Component {

	state = {
		mainMenu: -1
	}
	changeState = (key) => {
		let { mainMenu } = this.state;
		console.log(key);
		this.setState({mainMenu: key !== mainMenu ? key : -1})
	}
	render() {
		let { mainMenu } = this.state;
		return (

			<ul className="nav-menu">
				{ MenuContent.map((e, key) => 
					<React.Fragment  key={ key }>
					<li className="nav-header">{!!e.icon ? <i className={e.icon}></i> : null } { e.title }</li>
					{ e.mainMenu.map((eMain, keyMain) => 
							<li className={ "menu " + ( (key+ '-'+keyMain) === mainMenu ? "open" : null) } key={ "Main" + keyMain }>
								<Button href="javascript:void(0)" onClick={ () => this.changeState(key+ '-'+keyMain) }>
									{ !!eMain.icon ? <i className={ eMain.icon }></i> : null }
									<span className="nav-text">{ eMain.title }</span>
								</Button>
								<ul className="sub-menu">
									{ eMain.subMenu.map((eSub, keySub) => 
										<li key={ 'Sub'+ keySub }>
											<NavLink activeClassName="active" className="prepend-icon" to={ eSub.link }>
												<span className="nav-text">{ eSub.title }</span>
											</NavLink>
										</li>
									)}
								</ul>
							</li>
						)}
					</React.Fragment>
				)}
			</ul>
		)
	}
}

export default withRouter(SideNavContent);
