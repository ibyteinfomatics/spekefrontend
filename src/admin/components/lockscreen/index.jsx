import React from 'react';
import { logo } from '../imagepath';
import { Link } from 'react-router-dom';
import config from "config"

const Lockscreen = () => {

	return (
		<div className="main-wrapper">
		<div className="header d-none">
		  {/* Header Menu */}
		  <ul className="nav nav-tabs user-menu">
			{/* Flag */}
			<li className="nav-item">
			  <Link to="#" id="dark-mode-toggle" className="dark-mode-toggle">
				<i className="feather-sun light-mode" />
				<i className="feather-moon dark-mode" />
			  </Link>
			</li>
			{/* /Flag */}
		  </ul>
		  {/* Header Menu */}
		</div>
		<div className="row">
		  {/* Login Banner */}
		  <div className="col-md-6 login-bg">
			<div className="login-banner" />
		  </div>
		  {/* /Login Banner */}
		  <div className="col-md-6 login-wrap-bg">
			{/* Restart Password */}
			<div className="login-wrapper">
			  <div className="loginbox">
				<div className="img-logo">
				  <img src={logo} className="img-fluid" alt="Logo" />
				</div>
				<h3>Hi, Rayan</h3>
				<p className="account-subtitle">
				  Enter your password to access the admin.
				</p>
				<form action={`${config.publicPath}admin`}>
				  <div className="form-group form-focus focused">
					<input
					  type="password"
					  className="form-control floating"
					  defaultValue="**********"
					/>
					<label className="focus-label">Password</label>
				  </div>
				  <div className="d-grid">
					<button className="btn btn-primary" type="submit">
					  Enter
					</button>
				  </div>
				  <div className="dont-have">
					Sign in as a different user? <Link to="/admin/login">Login</Link>
				  </div>
				</form>
			  </div>
			</div>
			{/* /Restart Password */}
		  </div>
		</div>
	  </div>
	);
}

export default Lockscreen;       