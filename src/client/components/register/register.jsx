import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import loginBanner from "../../assets/images/login-banner.png";
import loginBanner from '../../assets/images/login-banner.png'
import config from "config";
import { registation } from "../../../../services/register/user.login.register";

const Register =()=>{
const history = useHistory();
const [mobile,setMobileNumber]= useState({mobile_number:"",mobile_country_code:"+91",role_id:1});
const [message,setMessage]= useState('');

useEffect(() => {
    document.body.classList.add("account-page");
 
    return () => document.body.classList.remove("account-page");
    }, []);
    
const submitMobileNumber=async()=>{
  if(mobile?.mobile_number !=='') {
   const registerResponse = await registation.registerPatient(mobile);
   if(registerResponse?.success){
     const {mobile_number,user_id} = registerResponse?.user;
     localStorage.setItem('mobile_number',mobile_number);
     localStorage.setItem('user_id',user_id);
     history.push("/verify-otp");
   }else{
    setMessage(registerResponse?.error?.mobile_number[0]??"");
   }
  }else{
    setMessage("Please enter your mobile number.");
  }
   setTimeout(() => {
    setMessage('');
  }, 3000);
}
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={loginBanner}
                      className="img-fluid"
                      alt="Doccure Register"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Patient Register{" "}
                        <Link to="/doctor/doctor-register">
                          Are you a Doctor?
                        </Link>
                      </h3>
                    </div>

                    <form onSubmit={(e) =>submitMobileNumber(e)}>
                    {message !== ''&&
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
												<h5>{message}</h5>
											</div>}
                      {/* <div className="form-group form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          id="name"
                        />
                        <label className="focus-label" htmlFor="name">
                          Name
                        </label>
                      </div> */}
                      <div className="form-group form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          id="mobile"
                          onChange={(e)=>setMobileNumber({...mobile,mobile_number :e.target.value})}
                          maxLength={10}
													onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                        />
                        <label className="focus-label" htmlFor="mobile">
                          Mobile Number*
                        </label>
                      </div>
                      {/* <div className="form-group form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                          id="password"
                        />
                        <label className="focus-label" htmlFor="password">
                          Create Password
                        </label>
                      </div>
                      <div className="terms-and-policy pt-2 pb-2">
                        <input
                          type="checkbox"
                          required
                          name="checkbox"
                          value="check"
                          id="agree"
                        />
                        <span className="agree">
                          I agree to these{" "}
                          <span className="terms">
                            <Link to="/pages/terms" target="_blank">
                              Terms of Use
                            </Link>{" "}
                            and{" "}
                            <Link to="/pages/privacy-policy" target="_blank">
                              Privacy Policy
                            </Link>
                          </span>
                        </span>
                      </div> */}
                      <div className="text-end">
                        <Link to="/login" className="forgot-link">
                          Already have an account?
                        </Link>
                      </div>
                      <Link to="#">
                      <button type="submit"
                        className="btn btn-primary btn-block btn-lg login-btn w-100"
                        onClick={(e) => submitMobileNumber(e)}
                      >
                        Signup
                      </button>
                      </Link>
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <a href="#0" className="btn btn-facebook btn-block w-100">
                            <i className="fab fa-facebook-f me-1"></i> Login
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="#0" className="btn btn-google btn-block w-100">
                            <i className="fab fa-google me-1"></i> Login
                          </a>
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


export default Register;
