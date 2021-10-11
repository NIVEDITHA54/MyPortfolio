import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container d-flex flex-column align-items-center"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <h1>Niveditha Ramu</h1>
          <h2>I'm a Full Stack developer</h2>
          <div className="header-social-links">
            <a
              href="https://github.com/NIVEDITHA54"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github icons"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/niveditha-ramu"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin icons"></i>
            </a>
          </div>
          <a href="/portfolio-app/about" className="btn-about">
            About Me
          </a>
        </div>
      </section>
    );
  }
}
