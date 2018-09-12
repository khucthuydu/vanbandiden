import React, { Component} from 'react';

class Login extends Component {

	state = {
		email:"chauminhthien0212@gmail.com",
		password:"chauminhthien"
	}
	onLogin = () => {
		this.props.loginAction(this.state);
	}
	render(){
		console.log(this.props)
		let { email, password } = this.state;
		return (
			<div style={{ height: "100vh" }}>
				<div
					className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
					<div className="login-content">
						<div className="login-header">
							<a className="app-logo" href="#/" title="Jambo">
								<img src="http://via.placeholder.com/220x80" alt="jambo" title="jambo" />
							</a>
						</div>

						<div className="login-form">
							<div className="form-group">
								<input name="email" id="email" className="form-control form-control-lg"
									placeholder="Email" type="email" value={email} onChange={ e => this.setState({ email: e.target.value })}/>
							</div>
							<div className="form-group">
								<input name="password" id="password" className="form-control form-control-lg"
									placeholder="Password" type="password" value={password} onChange={ e => this.setState({ password: e.target.value })}/>
							</div>
							<div className="form-group d-flex justify-content-between align-items-center">
								<label className="custom-control custom-checkbox float-left">
									<input type="checkbox" className="custom-control-input" />
									<span className="custom-control-indicator" />
									<span className="custom-control-description">Remember me</span>
								</label>

								<div>
									<a className="text-primary" href="#/app/app-module/forgot-password-1"
										title="Reset Password">Forgot your password</a>
								</div>
							</div>

							<button onClick={this.onLogin} className="btn jr-btn-rounded btn-primary btn-rounded">Sign In</button>
						</div>
					</div>
				</div>
			</div>
	)}
};

export default Login;
