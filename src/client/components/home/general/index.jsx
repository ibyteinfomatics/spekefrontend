import React from "react";
import surgeon1 from "../../../assets/images/general-01.jpg";
import surgeon2 from "../../../assets/images/general-02.jpg";
import surgeon3 from "../../../assets/images/general-03.jpg";
import surgeon4 from "../../../assets/images/general-04.jpg";
import Slider from "react-slick";

const General =()=> {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerPadding: "10px",
      arrows: true,

      responsive: [
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          },
        },
      ],
    };
    return (
      <section className="general-section">
        <div className="container">
          <h2 className="section-title">General Services</h2>
          <div className="general-slider slider mt-4">
            <Slider {...settings}>
              <div>
                <div className="service-img">
                  <img src={surgeon1} alt="General Services" />
                </div>
                <div className="service-name">
                  <a href="#0">
                    Cesarean section <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
              <div>
                <div className="service-img">
                  <img src={surgeon2} alt="General Services" />
                </div>
                <div className="service-name">
                  <a href="#0">
                    Cholecystectomy <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
              <div>
                <div className="service-img">
                  <img src={surgeon3} alt="General Services" />
                </div>
                <div className="service-name">
                  <a href="#0">
                    Cholecystectomy <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
              <div>
                <div className="service-img">
                  <img src={surgeon4} alt="General Services" />
                </div>
                <div className="service-name">
                  <a href="#0">
                    Partial colectomy <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
              <div>
                <div className="service-img">
                  <img src={surgeon1} alt="General Services" />
                </div>
                <div className="service-name">
                  <a href="#0">
                    Cesarean section <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
              <div>
                <div className="service-img">
                  <img src={surgeon3} alt="General Services" />
                </div>
                <div className="service-name">
                  <a href="#0">
                    Cholecystectomy <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
  
            </Slider>
          </div>
        </div>
      </section>
    );
  }

export default General;
