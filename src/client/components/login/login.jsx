import React, { useEffect, useState } from 'react';
import loginBanner from '../../assets/images/login-banner.png';
import config from "config";
//icon
import { Link, useHistory } from 'react-router-dom';
import { registation } from '../../../../services/register/user.login.register';

const LoginContainer =()=> {  
const history = useHistory();
const [username,setUserName] = useState('')
const [password,setPassword] = useState('')
	useEffect(() => {
		document.body.classList.add("account-page");
		return () => document.body.classList.remove("account-page");
		}, []);
	
const loginUser=async(e)=>{
	e.preventDefault();
	if(username ===''||password ==='') return
	const isLogin = await registation?.loginUser(username,password);
	if(isLogin?.success){
		history.replace('/doctor/my-patients')
	}
}

	return(
		     <div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-8 offset-md-2">
							<div className="account-content">
								<div className="row align-items-center justify-content-center">
									<div className="col-md-7 col-lg-6 login-left">
										<img src={loginBanner} className="img-fluid" alt="Doccure Login" />	
									</div>
									<div className="col-md-12 col-lg-6 login-right">
										<div className="login-header">
											<h3>Login <span>Doccure</span></h3>
										</div>
										<form onSubmit={(e)=>loginUser(e)}>
											<div className="form-group form-focus">
												<input type="email" className="form-control floating" onChange={(e)=>setUserName(e.target.value)}/>
												<label className="focus-label">Email</label>
											</div>
											<div className="form-group form-focus">
												<input type="password" className="form-control floating" onChange={(e)=>setPassword(e.target.value)}/>
												<label className="focus-label">Password</label>
											</div>
											<div className="text-end">
												<Link to="/forgot-password" className="forgot-link">Forgot Password ?</Link>
											</div>
											{/* <Link to="/doctor/doctor-dashboard">	 */}
											<button type="button" className="btn btn-primary btn-block w-100 btn-lg login-btn" onClick={(e)=>loginUser(e)}>Login</button>
											{/* </Link> */}
											<div className="login-or">
												<span className="or-line"></span>
												<span className="span-or">or</span>
											</div>
											<div className="row form-row social-login">
												
												<div className="col-6">
													<a href="#0" className="btn btn-facebook btn-block w-100">
													<i className="fab fa-facebook-f me-1"></i>Login</a>
												</div>
												<div className="col-6">
													<a href="#0" className="btn btn-google btn-block w-100">
													<i className="fab fa-google me-1"></i>Login</a>
												</div>
											</div>
											<div className="text-center dont-have">Don’t have an account?<Link to= "/register"> Register</Link></div>
										
										</form>
									</div>
								</div>
							</div>
							
								
						</div>
					</div>

				</div>

			</div>

	);
  }



export default LoginContainer;