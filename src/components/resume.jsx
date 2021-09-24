import React, { Component } from "react";
import { resume } from "../data.js";

export default class Resume extends Component {
  render() {
    return (
      <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Resume</h2>

            <div className="text-center">
              <a
                className="btn-about"
                type="submit"
                href="img/p2c-logo.docx"
                download="p2c-logo.docx"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h3 className="resume-title">Professional Experience</h3>

              {resume.map((item) => (
                <div key={item.id} className="resume-item">
                  <h4>{item.profile}</h4>
                  <h5>{item.company}</h5>
                  <p>
                    <em>{item.duration}</em>
                  </p>

                  <ul>
                    <li>
                      Lead in the design, development, and implementation of the
                      graphic, layout, and production communication materials
                    </li>
                    <li>
                      Delegate tasks to the 7 members of the design team and
                      provide counsel on all aspects of the project.{" "}
                    </li>
                  </ul>
                  <p />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>BE in Computer Science &amp; Engineering</h4>
              <h5>2014 - 2018</h5>
              <p>
                <em>
                  National Institute of Engineering,Mysore,Karnataka,India
                </em>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
