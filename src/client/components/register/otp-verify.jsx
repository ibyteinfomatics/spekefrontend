import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { registation } from '../../../../services/register/user.login.register';

const OptVerification=()=> {
  const history = useHistory();
  const [mobileNumber] =useState(localStorage.getItem('mobile_number'));
  const [successMsg,setSuccessMsg] =useState({success :false,message:""});
  

  // submit opt on server
  const submitOtpData =async(e)=>{
    e.preventDefault()
  let user_id =  localStorage.getItem('user_id')
          let otpDetails ={
            user_id,
            otp:1234,
            type:"mobile"
          }
          const responseOfOtp = await registation.verifyOTP(otpDetails);
          if(responseOfOtp?.success){
            localStorage.setItem('token',responseOfOtp?.user?.user?.token)
            localStorage.setItem('role_id',responseOfOtp?.user?.user?.role_id)
            localStorage.setItem('user-details',JSON.stringify(responseOfOtp?.user));
            responseOfOtp?.user?.user?.role_id === 2 ? history.push('/doctor/profile-setting') : history.push("/patient/profile")
          }
  }


  // Resent otp on mobile.
  const handleResentOtp=async()=>{
    let user_id =  localStorage.getItem('user_id')
    let resentOtpDetails ={
      user_id,
      type:"mobile"
    }
    const responseOfOtp = await registation.resentOTP(resentOtpDetails);
    if(responseOfOtp?.success){
      setSuccessMsg({success:true,message : responseOfOtp?.message})
    }else{
      setSuccessMsg({success:true,message : responseOfOtp?.message})
    }
    setTimeout(()=>{
      setSuccessMsg({success:false,message : ''})
    },3000);

  }

  const inputfocus = (elmnt) => {
    if (!/[0-9]/.test(elmnt.key)){ 
      elmnt.preventDefault(); 
      return
    }
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus()
      }
    }
    else {
        const next = elmnt.target.tabIndex;
        console.log(elmnt.target.form.elements[next],'next');
        console.log(next,'next');
        if (next < 4) {
          elmnt.target.form.elements[next].focus()
        }
    }

  }

  return (
    <div className="onboarding-content-box content-wrap">
        <div className="onboard-set">
          <div className="onboarding-title">
            <h2>Enter 4-digit code sent to your mobile number.</h2>
            <h6>We’ve sent it to {mobileNumber?.slice(0, 2) + mobileNumber?.slice(2).replace(/.(?=...)/g, '*')}.</h6>
          </div>
          {successMsg?.success&&<div className="alert alert-success alert-dismissible fade show" role="alert">
										<strong>Success!</strong> Your <a href="#" className="alert-link">OTP</a> has been sent successfully.
										<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
									</div>}
          <div className="onboarding-content passcode-wrap">
            <form onSubmit={(e) =>submitOtpData(e)}>
              <div className="d-flex digit-group">
                <input type="text" id="digit-1" name="digit-1" data-next="digit-2" maxLength={1} tabIndex="1" onKeyUp={e => inputfocus(e)} onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}/>
                <input type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" maxLength={1} tabIndex="2" onKeyUp={e => inputfocus(e)} onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}/>
                <input type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" maxLength={1} tabIndex="3" onKeyUp={e => inputfocus(e)} onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}/>
                <input type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" maxLength={1} tabIndex="4" onKeyUp={e => inputfocus(e)} onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}/>
              </div>
            </form>
          </div>
          <div className="opt-resend" onClick={()=> handleResentOtp()}>
            <button className="text-danger">Resend OTP</button>
          </div>
        </div>
        <div className="onboarding-btn" onClick={()=> submitOtpData()}>
          <a href="#">Continue</a>
        </div>
      </div>
  )
}

export default OptVerification 
