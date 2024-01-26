import React from "react";
import Header from "./Header";
import "./ContactUs.css";
function ContactUs() {
  return (
    <div className="bcolor">
      <Header />
      <section className="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <div className="container">
            <div className="contactInfo">
              <div className="box">
                <div className="icon">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <div className="txt">
                    
                  <p>House No:138</p>
                  <p>Street Name:Parkinson</p>
                  <p>London</p>
                  <p>2345678</p>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="text2">
                  <h3>Phone</h3>
                  <p className="txt">0142-89765323</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </div>
                <div className="text2">
                  <h3>Email</h3>
                  <p className="txt">furrytales@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
