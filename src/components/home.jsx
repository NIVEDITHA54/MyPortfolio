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
          <h2>I'm a professional illustrator from San Francisco</h2>
          <a href="/about" className="btn-about">
            About Me
          </a>
        </div>
      </section>
    );
  }
}
