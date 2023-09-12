import React from "react";
import surgeon1 from "../../../assets/images/our-surgeon-01.jpg";
import surgeon2 from "../../../assets/images/our-surgeon-02.jpg";
import surgeon3 from "../../../assets/images/our-surgeon-03.jpg";
import surgeon4 from "../../../assets/images/our-surgeon-04.jpg";
import Slider from "react-slick";

const Oursurgeon =()=> {

    const settings = {
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerPadding: "10px",

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
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
      ],
    };
    return (
      <section className="our-surgeon">
        <div className="container">
          <div>
            <h2 className="section-title">Our Surgeons</h2>
          </div>
          <div className="surgeon-slider slider mt-4">
            <Slider {...settings}>
              <div className="card">
                <img className="card-img-top" src={surgeon1} alt="Our Surgeon" />
                <div className="card-body">
                  <h5 className="card-title">Michelle Johnson</h5>
                  <h6>Surgeon</h6>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                  <a href="#0" className="btn btn-primary">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div>
                <div className="card">
                  <img className="card-img-top" src={surgeon2} alt="Our Surgeon" />
                  <div className="card-body">
                    <h5 className="card-title">Michelle Johnson</h5>
                    <h6>Surgeon</h6>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, onsectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    <a href="#0" className="btn btn-primary">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <img className="card-img-top" src={surgeon3} alt="Our Surgeon" />
                  <div className="card-body">
                    <h5 className="card-title">Davis John</h5>
                    <h6>Surgeon</h6>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, onsectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    <a href="#0" className="btn btn-primary">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <img className="card-img-top" src={surgeon4} alt="Our Surgeon" />
                  <div className="card-body">
                    <h5 className="card-title">Ruth Burns</h5>
                    <h6>Surgeon</h6>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, onsectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    <a href="#0" className="btn btn-primary">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <img className="card-img-top" src={surgeon2} alt="Our Surgeon" />
                  <div className="card-body">
                    <h5 className="card-title">Villareal</h5>
                    <h6>Surgeon</h6>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, onsectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    <a href="#0" className="btn btn-primary">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <img className="card-img-top" src={surgeon3} alt="Our Surgeon" />
                  <div className="card-body">
                    <h5 className="card-title">Davis John</h5>
                    <h6>Surgeon</h6>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, onsectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    <a href="#0" className="btn btn-primary">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }

export default Oursurgeon;
