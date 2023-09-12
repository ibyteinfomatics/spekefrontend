import React , {useEffect} from 'react'
import {Link} from "react-router-dom";
import {general1,general2,general3,general4,vect1,vect2,vect3,feature1,feature2,feature3,feature6,feature4,feature5,patient1,patient2,patient3,patient4} from '../aboutus/img'
import Slider from "react-slick";

const Aboutus =(props)=> {

  useEffect(() => {
    document.body.classList.add("about-page");
 
    return () => document.body.classList.remove("about-page");
    }, []);


  const settings = {
      arrows: false,
      dots: true,
			autoplay:false,
			infinite: true,
			prevArrow: false,
			nextArrow: false,
			rtl: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
  };   
     
  const generalslide = {
    dots: false,
    autoplay:false,
    infinite: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 992,
        settings: {
          slidesToShow: 3
          }
    },
    {
      breakpoint: 776,
        settings: {
          slidesToShow: 2
          }
    },
    {
      breakpoint: 567,
        settings: {
          slidesToShow: 1
        }
    }]
};   
        return(
            <>
			
  {/* Breadcrumb */}
  <div className="breadcrumb-bar">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-12 col-12">
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
          <h2 className="breadcrumb-title">About Us</h2>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  {/* Page Content */}
  <section className="about-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <a href="#" className="about-titile mb-4">
            About Doccure
          </a>
          <h3 className="mb-4">Company Profile</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta
            luctus est interdum pretium. Fusce id tortor fringilla, suscipit
            turpis ac, varius ex. Cras vel metus ligula. Nam enim ligula,
            bibendum a iaculis ut, cursus id augue. Proin vitae purus id tortor
            vehicula scelerisque non in libero.
          </p>
          <p className="mb-0">
            Nulla non turpis sit amet purus pharetra sollicitudin. Proin rutrum
            urna ut suscipit ullamcorper. Proin sapien felis, dignissim non
            finibus eget, luctus vel purus. Pellentesque efficitur congue orci
            ornare accumsan. Nullam ultrices libero vel imperdiet scelerisque.
            Donec vel mauris eros.
          </p>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  </section>
  {/* Category Section */}
  <section className="select-category">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 category-col d-flex">
          <div className="category-subox pb-0 d-flex flex-wrap w-100">
            <h4>Visit a Doctor</h4>
            <p>
              We hire the best specialists to deliver top-notch diagnostic
              services for you.
            </p>
            <div className="subox-img">
              <div className="subox-circle">
                <img src={vect1} alt="" width={42} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 category-col d-flex">
          <div className="category-subox pb-0 d-flex flex-wrap w-100">
            <h4>Find a Pharmacy</h4>
            <p>
              We provide the a wide range of medical services, so every person
              could have the opportunity.
            </p>
            <div className="subox-img">
              <div className="subox-circle">
                <img src={vect2} alt="" width={42} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 category-col d-flex">
          <div className="category-subox pb-0 d-flex flex-wrap w-100">
            <h4>Find a Lab</h4>
            <p>
              We use the first-class medical equipment for timely diagnostics of
              various diseases.
            </p>
            <div className="subox-img">
              <div className="subox-circle">
                <img src={vect3} alt="" width={42} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Category Section */}
  <section className="section section-featurebox">
    <div className="container">
      <div className="section-header text-center">
        <h2>Available Features in Our Clinic</h2>
        <p className="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="feature-col-list">
          <div className="feature-col">
            <div className="feature-subox d-flex flex-wrap justify-content-center">
              <img
                src={feature1}
                className="img-fluid"
                alt="Features"
              />
              <h4>Operation</h4>
            </div>
          </div>
          <div className="feature-col">
            <div className="feature-subox d-flex flex-wrap justify-content-center">
              <img
                src={feature2}
                className="img-fluid"
                alt="Features"
              />
              <h4>Medical</h4>
            </div>
          </div>
          <div className="feature-col">
            <div className="feature-subox d-flex flex-wrap justify-content-center">
              <img
                src={feature3}
                className="img-fluid"
                alt="Features"
              />
              <h4>Patient Ward</h4>
            </div>
          </div>
          <div className="feature-col">
            <div className="feature-subox d-flex flex-wrap justify-content-center">
              <img
                src={feature4}
                className="img-fluid"
                alt="Features"
              />
              <h4>Test Room</h4>
            </div>
          </div>
          <div className="feature-col">
            <div className="feature-subox d-flex flex-wrap justify-content-center">
              <img
                src={feature5}
                className="img-fluid"
                alt="Features"
              />
              <h4>ICU</h4>
            </div>
          </div>
          <div className="feature-col">
            <div className="feature-subox d-flex flex-wrap justify-content-center">
              <img
                src={feature6}
                className="img-fluid"
                alt="Features"
              />
              <h4>Laboratory</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <>
  {/* Clinic and Specialities */}
  <section className="section section-specialities">
    <div className="container">
      <div className="section-header text-center">
        <h2>Clinic and Specialities</h2>
        <p className="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12">
          {/* Slider */}
        
          <div className="general-slider slider mt-4">
          <Slider {...generalslide}>
            <div>
              <div className="service-img">
                <img src={general1} alt="General Services" />
              </div>
              <div className="service-name">
                <a href="#">
                  Cataract Surgery <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
            <div>
              <div className="service-img">
                <img src={general2} alt="General Services" />
              </div>
              <div className="service-name">
                <a href="#">
                  Cesarean section <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
            <div>
              <div className="service-img">
                <img src={general3} alt="General Services" />
              </div>
              <div className="service-name">
                <a href="#">
                  Cholecystectomy <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
            <div>
              <div className="service-img">
                <img src={general4} alt="General Services" />
              </div>
              <div className="service-name">
                <a href="#">
                  Partial colectomy <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
            </Slider>
          </div>
        
          {/* /Slider */}
        </div>
      </div>
    </div>
  </section>
  {/* Clinic and Specialities */}
</>


  {/* Testimonial Section */}
  <section className="section section-testimonial">
    <div className="container">
      <div className="section-header text-center mb-4">
        <h2>Testimonials</h2>
        <p className="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          {/* Slider */}
          
          <div className="testimonial-slider slider">
            {/* Slider Item */}
            <Slider {...settings}>
            <div className="testimonial-item text-center">
              <div className="testimonial-img">
                <img
                  src={patient1}
                  className="img-fluid"
                  alt="Speciality"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="user-name">- Jennifer Robinson</p>
                <p className="user-location mb-0">Leland, USA</p>
              </div>
            </div>
            {/* /Slider Item */}
            {/* Slider Item */}
            <div className="testimonial-item text-center">
              <div className="testimonial-img">
                <img
                  src={patient2}
                  className="img-fluid"
                  alt="Speciality"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="user-name">- Denise Stevens</p>
                <p className="user-location mb-0">Abington, USA</p>
              </div>
            </div>
            {/* /Slider Item */}
            {/* Slider Item */}
            <div className="testimonial-item text-center">
              <div className="testimonial-img">
                <img
                  src={patient3}
                  className="img-fluid"
                  alt="Speciality"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="user-name">- Charles Ortega</p>
                <p className="user-location mb-0">El Paso, USA</p>
              </div>
            </div>
            {/* /Slider Item */}
            {/* Slider Item */}
            <div className="testimonial-item text-center">
              <div className="testimonial-img">
                <img
                  src={patient4}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="user-name">- Jennifer Robinson</p>
                <p className="user-location mb-0">Leland, USA</p>
              </div>
            </div>
            </Slider>
            {/* /Slider Item */}
          </div>
          
          {/* /Slider */}
        </div>
      </div>
    </div>
  </section>
  {/* Testimonial Section */}

</>

        )
    }


export default Aboutus;