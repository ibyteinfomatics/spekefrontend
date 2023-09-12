import React from "react";
import testimonial from "../../../assets/images/testimonial-img.png";

const Testimonial =()=> {

    return (
        <section className="our-customer-says">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={testimonial} className="img-fluid" alt="Testimonial"/>
                </div>
                <div className="col-md-6">
                    <div>
                        <h2 className="section-title">What Our Customers Say</h2>
                    </div>
                    <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
                    <h5>Lesley Turner <span>- Timber Oak Drive</span></h5>
                </div>
            </div>
        </div>
    </section>
    );
  }

export default Testimonial;
