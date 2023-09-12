import React, {useEffect, useState} from 'react';
import loginBanner from '../../../assets/images/login-banner.png';
import { Link ,useHistory} from 'react-router-dom';
import { registation } from '../../../../../services/register/user.login.register';


const DoctorRegister =()=> {
	const history = useHistory();
	const [registerForm,setRegisterFrom]= useState({mobile_country_code:"+91",role_id:2,email:""});
	const [formErrors,setFormErrors]= useState([]);

		useEffect(() => {
		document.body.classList.add("account-page");
		return () => document.body.classList.remove("account-page");
		}, []);
		
		// Handle form input fields.
		const handleRegisterForm =(event)=>{
			const {name,value} =event.target;
			value?.trim()?.length >0 &&setRegisterFrom({...registerForm,[name]:value});
		}

		// submit form data on server.
		const handleSubmitForm=async(e)=>{
		e.preventDefault();
		if(registerForm?.first_name&&registerForm?.last_name&&registerForm?.email&&registerForm?.mobile_number&&registerForm?.password&&registerForm?.confirm_password){
		const formApiResponse= await registation.registerDoctorAndPatient(registerForm);
			if(!formApiResponse?.success){
				let errors =[]
				for(let key in formApiResponse?.error){
					errors.push({type:key,message:formApiResponse?.error[key]})
				}
				setFormErrors(errors);
				}else{
					const {mobile_number,user_id,email} = formApiResponse.user;
					localStorage.setItem("email",email);
					localStorage.setItem("mobile_number",mobile_number);
					localStorage.setItem("user_id",user_id);
					history.push("/verify-otp");
				}
			}else{
				setFormErrors([{type:"first_name",message:["All fields are required."]}]);
			}

			setTimeout(()=>{
				setFormErrors([]);
			},[4000]);
		}

		// filter errors from server errors.
		let filterErrors =(type)=>{
			if(formErrors?.length>0){
			const errors= formErrors?.filter((error)=> error.type == type);
			return {type,message:errors[0]?.message[0]}
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
										<img src={loginBanner} className="img-fluid" alt="Login Banner" />	
									</div>
									<div className="col-md-12 col-lg-6 login-right">
										<div className="login-header">
											<h3>Doctor Register <Link to="/register">Not a Doctor?</Link></h3>
										</div>
									
										<form onSubmit={(e)=>handleSubmitForm(e)} >
											{formErrors?.length>0&&filterErrors('first_name')?.message !== undefined&&<div className="alert alert-danger alert-dismissible fade show" role="alert">
												<h5>{filterErrors('first_name')?.message}</h5>
											</div>}
											<div className="form-group form-focus">
												<input type="text" className="form-control floating" name={"first_name"} onChange={(e)=>handleRegisterForm(e)}/>
												<label className="focus-label">First Name*</label>
											</div>
											{formErrors?.length>0&&filterErrors('last_name')?.message !== undefined&&<div className="alert alert-danger alert-dismissible fade show" role="alert">
												<h5>{filterErrors('last_name')?.message}</h5>
											</div>}
											<div className="form-group form-focus">
												<input type="text" className="form-control floating" name={"last_name"} onChange={(e)=>handleRegisterForm(e)}/>
												<label className="focus-label">Last Name*</label>
											</div>
											{formErrors?.length>0&&filterErrors('email')?.message !== undefined&&<div className="alert alert-danger alert-dismissible fade show" role="alert">
												<h5>{filterErrors('email')?.message}</h5>
											</div>}
											<div className="form-group form-focus">
												<input type="email" className="form-control floating" name={"email"} onChange={(e)=>handleRegisterForm(e)}/>
												<label className="focus-label">e-mail*</label>
											</div>
											{formErrors?.length>0&&filterErrors('mobile_number')?.message !== undefined&&<div className="alert alert-danger alert-dismissible fade show" role="alert">
												<h5>{filterErrors('mobile_number')?.message}</h5>
											</div>}
											<div className="form-group form-focus">
												<input type="text" className="form-control floating" name={"mobile_number"} onChange={(e)=>handleRegisterForm(e)}  
													maxLength={10}
													onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
												/>
												<label className="focus-label">Mobile Number*</label>
											</div>
											{formErrors?.length>0&&filterErrors('password')?.message !== undefined&&<div className="alert alert-danger alert-dismissible fade show" role="alert">
												<h5>{filterErrors('password')?.message}</h5>
											</div>}
											<div className="form-group form-focus">
												<input type="password" className="form-control floating" name={"password"} onChange={(e)=>handleRegisterForm(e)}/>
												<label className="focus-label">Password*</label>
											</div>
											{formErrors?.length>0&&filterErrors('confirm_password')?.message !== undefined&&<div className="alert alert-danger alert-dismissible fade show" role="alert">
												<h5>{filterErrors('confirm_password')?.message}</h5>
											</div>}
											<div className="form-group form-focus">
												<input type="password" className="form-control floating" name={"confirm_password"} onChange={(e)=>handleRegisterForm(e)}/>
												<label className="focus-label">Confirm Password*</label>
											</div>
											<div className="text-end">
												<Link to="/login" className="forgot-link">Already have an account?</Link>
											</div>
											<Link to="#">
												<button className="btn btn-primary btn-block w-100 btn-lg login-btn" type='submit' onClick={(e)=>handleSubmitForm(e)}>Signup</button>
											</Link>
											<div className="login-or">
												<span className="or-line"></span>
												<span className="span-or">or</span>
											</div>
											<div className="row form-row social-login">
												<div className="col-6">
													<a href="#0" className="btn btn-facebook btn-block w-100"><i className="fab fa-facebook-f me-1"></i> Login</a>
												</div>
												<div className="col-6">
													<a href="#0" className="btn btn-google btn-block w-100"><i className="fab fa-google me-1"></i> Login</a>
												</div>
											</div>
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


export default DoctorRegister;