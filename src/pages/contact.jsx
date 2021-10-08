import React, { Component } from "react";
import ContactForm from "../components/contactForm";

export default class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <h5>Have a question or want to work together?</h5>
          </div>
          <div>
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.3598434944834!2d4.459888051102601!3d52.16415067019296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c71dc830257f%3A0xee750bda37da3000!2sVerbeekstraat%2012%2C%202332%20CA%20Leiden!5e0!3m2!1sen!2snl!4v1632473156504!5m2!1sen!2snl"
              style={{ border: 0, width: "100%", height: 270 }}
              allowfullscreen=""
              frameBorder={0}
            />
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <a
                    href="https://goo.gl/maps/cfF9gyjHXqoisesTA"
                    targer="_blank"
                  >
                    <i className="bi bi-geo-alt" />
                  </a>
                  <h4>Location:</h4>
                  <p>
                    Verbeekstraat-12B,2332 CA, Leiden, South Holland,
                    Netherlands
                  </p>
                </div>
                <div className="email">
                  <a href="mailto:niveditharamu.54@gmail.com">
                    <i className="bi bi-envelope" />
                  </a>
                  <h4>Email:</h4>
                  <p>niveditharamu.54@gmail.com</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    );
  }
}
