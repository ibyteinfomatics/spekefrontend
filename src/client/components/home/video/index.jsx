import React, { useState } from "react";
import Video from "../../../assets/images/video-img.jpg";
import YouTube from "react-youtube";

const VideoSection =()=> {
  const [state, setState] = useState({
    myRef: React.createRef(),
    play: 0,
  })
     
    const  handlePlayVideo = () => {
        setState({...state, play: 1 });
      };


    const opts = {
        playerVars: {
          autoplay: state.play,
        },
      };
    return (
        <section className="watch-video">
        <div className="video-title">
            <h2 className="section-title">Watch Our Videos</h2>
            <p>We are ready to build your dream future Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, beatae. Lorem ipsum dolor sit amet, </p>
        </div>
        <div className="video-main">
            <div className="container">

                <div className="video-bg-img video-sec text-center" data-video-id="JZ6DejA9lmc" data-video-format="youtube">
                    {state.play === 1 ? (
                  <YouTube
                    videoId="JZ6DejA9lmc"
                    opts={opts}
                    // onPlay={onPlay}
                    ref={state.myRef}
                  />
                ) : null}
                {state.play === 0 ? (
                  <>
                    <img src={Video} alt=".." className="img-fluid" />
                    <span className="play-btn">
                      <i className="fas fa-play"></i>
                    </span>
                  </>
                ) : null}
                 {state.play === 0 ? (    <span className="play-btn" onClick={() => handlePlayVideo()}>
                        <i className="fas fa-play"></i>
                    </span>) : null}
                </div>
                
                
                <div className="row counts">
                    <div className="col-sm-6 col-md-3">
                        <h3>25000</h3>
                        <h4>Happy Patients</h4>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <h3>180</h3>
                        <h4>Experienced Doctors</h4>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <h3>1500</h3>
                        <h4>Successful Operations</h4>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <h3>2800</h3>
                        <h4>Number of Beds</h4>
                    </div>
                </div>
            </div>
        </div>				
    </section>
    );
  }

export default VideoSection;
