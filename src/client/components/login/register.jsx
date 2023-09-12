import React, { useEffect } from 'react';
import EmailRegister from '../register/email-register.jsx'
import OptVerification from '../register/otp-verify.jsx'

const NewComponent = ()=> {
      return (
          <div className="onboard-wrapper">
            <div className="left-panel">
              <div className="onboarding-logo text-center">
                <a href="index.html"><img src="assets/img/onboard-img/onb-logo.png" className="img-fluid" alt="" /></a>
              </div>
              <div className="onboard-img">
                <img src="assets/images/onb-slide-img.png" className="img-fluid" alt="" />
              </div>
              <div className="onboarding-slider">
                <div id="onboard-slider" className="owl-carousel owl-theme onboard-slider slider">
                  <div className="onboard-item text-center">
                    <div className="onboard-content">
                      <h3>Welcome to Doccure</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                    </div>
                  </div>
                  <div className="onboard-item text-center">
                    <div className="onboard-content">
                      <h3>Welcome to Doccure</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                    </div>
                  </div>
                  <div className="onboard-item text-center">
                    <div className="onboard-content">
                      <h3>Welcome to Doccure</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-panel">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 p-0">
                    <div className="right-panel-title text-center">
                      <a href="index.html"> <img src="./assets/img/onboard-img/onb-logo.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="on-board-wizard">
                      <ul>
                        <li>
                          <a href="patient-email.html">
                            <div className="onboarding-progress active">
                              <span>1</span>
                            </div>
                            <div className="onboarding-list">
                              <h6>Registration</h6>
                              <p>Enter Details for Register </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="patient-Personalize.html">
                            <div className="onboarding-progress active">
                              <span>2</span>
                            </div>
                            <div className="onboarding-list">
                              <h6>Profile Picture</h6>
                              <p>Upload Profile picture</p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="patient-details.html">
                            <div className="onboarding-progress">
                              <span>3</span>
                            </div>
                            <div className="onboarding-list">
                              <h6>Personal Details</h6>
                              <p>Enter your Personal Details</p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="patient-family-details.html">
                            <div className="onboarding-progress">
                              <span>4</span>
                            </div>
                            <div className="onboarding-list">
                              <h6>Select Members</h6>
                              <p>Enter Details for Register </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="patient-dependant-details.html">
                            <div className="onboarding-progress">
                              <span>5</span>
                            </div>
                            <div className="onboarding-list">
                              <h6>Dependant details</h6>
                              <p>Dependants Profile</p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="patient-other-details.html">
                            <div className="onboarding-progress">
                              <span>6</span>
                            </div>
                            <div className="onboarding-list">
                              <h6>Other Detail</h6>
                              <p>More information</p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12">
                    {/* <EmailRegister /> */}
                    <OptVerification />
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    }

    export default NewComponent