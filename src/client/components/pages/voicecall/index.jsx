import React, {useEffect} from 'react';
import {IMG01, IMG02,} from './img';
import { Link } from "react-router-dom";
import {Tooltip, OverlayTrigger}from 'react-bootstrap';

const VoiceCall=()=>{
    useEffect(() => {
        document.body.classList.add("call-page");
      
        return () => document.body.classList.remove("call-page");
        }, []);
    

        return(
            <div className="content">
            <div className="container">
            
                <div className="call-wrapper">
                    <div className="call-main-row">
                        <div className="call-main-wrapper">
                            <div className="call-view">
                                <div className="call-window">
                                
                                    <div className="fixed-header">
                                        <div className="navbar">
                                            <div className="user-details me-auto">
                                                <div className="float-start user-img">
                                                    <Link className="avatar avatar-sm me-2" to="/doctor/patient-profile" title="Charlene Reed">
                                                        <img src={IMG01} alt="User " className="rounded-circle" />
                                                        <span className="status online"></span>
                                                   </Link>
                                                </div>
                                                <div className="user-info float-start">
                                                    <Link to="/doctor/patient-profile"><span>Bernice Hood</span></Link>
                                                    <span className="last-seen">Online</span>
                                                </div>
                                            </div>
                                            <ul className="nav float-end custom-menu">
                                                <li className="nav-item dropdown dropdown-action">
                                                    <Link to="#0" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-cog"></i></Link>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <Link to="#0" className="dropdown-item">Settings</Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                 
                                    <div className="call-contents">
                                        <div className="call-content-wrap">
                                            <div className="voice-call-avatar">
                                                <img src={IMG02} alt="User " className="call-avatar" />
                                                <span className="username">Dr. Eric Buckles</span>
                                                <span className="call-timing-count">00:59</span>
                                            </div>
                                            <div className="call-users">
                                                <ul>
                                                    <li>
                                                        <Link to="#0">
                                                            <img src={IMG01} className="img-fluid" alt="User " />
                                                            <span className="call-mute"><i className="fa fa-microphone-slash"></i></span>
                                                       </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                           
                                    <div className="call-footer">
                                        <div className="call-icons">
                                         <ul className="call-items"> 
                                                <li className="call-item">
 
                                                <OverlayTrigger overlay={<Tooltip id="tooltip1">Enable video</Tooltip>}>
                                                        <span className="d-inline-block">
                                                       <Link to="#0"> <i className="fas fa-video camera"></i></Link>
                                                        </span>
                                                </OverlayTrigger>
                                                          
                                                </li>
                                                <li className="call-item">
                                                <OverlayTrigger overlay={<Tooltip id="tooltip2">Mute</Tooltip>}>
                                                        <span className="d-inline-block">
                                                       <Link to="#0"> <i className="fa fa-microphone microphone"></i></Link>
                                                        </span>
                                                </OverlayTrigger>
                                                </li>
                                                <li className="call-item">
                                                <OverlayTrigger overlay={<Tooltip id="tooltip2">Add User</Tooltip>}>
                                                        <span className="d-inline-block">
                                                       <Link to="#0"> <i className="fa fa-user-plus"></i></Link>
                                                        </span>
                                                </OverlayTrigger>
                                               
                                                </li>
                                            </ul>
                                            <div className="end-call">
                                                <Link to="#0">
                                                <i className="fas fa-phone-alt"></i>
                                               </Link>
                                            </div>
                                        </div>
                                    </div>
                                
                                
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            
                
            </div>

        </div>
        );
    }


export default VoiceCall;