import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { IMG01, IMG02 } from "./img";
import { Tooltip, OverlayTrigger } from "react-bootstrap";


const VideoCall=()=>{

  useEffect(() => {
    document.body.classList.add("call-page");
  
    return () => document.body.classList.remove("call-page");
    }, []);

    return (
      <>
        <div className="content">
          <div className="container-fluid">
            <div className="call-wrapper">
              <div className="call-main-row">
                <div className="call-main-wrapper">
                  <div className="call-view">
                    <div className="call-window">
                      <div className="fixed-header">
                        <div className="navbar">
                          <div className="user-details">
                            <div className="float-start user-img">
                           <Link
                                className="avatar avatar-sm me-2"
                                to="/doctor/patient-profile"
                                title="Charlene Reed"
                              >
                                <img
                                  src={IMG02}
                                  alt="User"
                                  className="rounded-circle"
                                />
                                <span className="status online"></span>
                            </Link>
                            </div>
                            <div className="user-info float-start">
                              <Link to="/doctor/patient-profile">
                                <span>Bernice Hood</span>
                              </Link>
                              <span className="last-seen">Online</span>
                            </div>
                          </div>
                          <ul className="nav float-end custom-menu">
                            <li className="nav-item dropdown dropdown-action">
                            <span className="call-duration float-end">00:59</span>
                              <div className="dropdown-menu dropdown-menu-right">
                             <Link to="#0" className="dropdown-item">
                                  Settings
                              </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="call-contents">
                        <div className="call-content-wrap">
                          <div className="user-video">
                            <img src={IMG01} alt="User" />
                          </div>
                          <div className="my-video">
                            <ul>
                              <li>
                                <img
                                  src={IMG02}
                                  className="img-fluid"
                                  alt="User"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="call-footer">
                        <div className="call-icons">
                          <div className="toggle-voice-video">
                            <label className="switch"><input type="checkbox" id="togBtn"/><div className="slider round"></div></label>
                          </div>
                          <ul className="call-items">

                            <li className="call-item">
                              <OverlayTrigger
                                overlay={<Tooltip id="tooltip2">Mute</Tooltip>}
                              >
                                <span className="d-inline-block">
                               <Link to="#0">
                                    {" "}
                                    <i className="fa fa-microphone microphone"></i>
                                </Link>
                                </span>
                              </OverlayTrigger>
                            </li>
                            <li className="end-call-new">
                           <Link to="#0">
                                <i className="material-icons">call_end</i>
                            </Link>
                          </li>
                          </ul>                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


export default VideoCall;
