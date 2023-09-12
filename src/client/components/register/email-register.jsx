import React from 'react'
const EmailRegister =()=> {
      return (
        <div className="onboarding-content-box content-wrap">
          <div className="onborad-set">
            <div className="onboarding-title">
              <h2>Whats your Primary email?<span>*</span></h2>
              <h6>We will only use it to advise you for any important changes.</h6>
            </div>
            <div className="onboarding-content">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <div className="input-placeholder form-focus passcode-wrap mail-box">
                      <label className="focus-label">Legal name<span>*</span></label>
                      <input type="text" className="form-control floating" required />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <div className="input-placeholder form-focus passcode-wrap mail-box">
                      <label className="focus-label">Email Address<span>*</span></label>
                      <input type="text" className="form-control floating" required />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="onboarding-btn">
            <a href="patient-email-otp.html">Continue</a>
          </div>
        </div>
      );
    }

    export default EmailRegister