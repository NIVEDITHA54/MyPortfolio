import React, { Component } from "react";
import { myskills } from "../data.js";

export default class Skills extends Component {
  render() {
    return (
      <section id="skills" className="skills">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="row skills-content">
            <div className="col">
              {myskills.map((skill) => (
                <div key={skill} className="progress">
                  <span className="skill">
                    {skill}
                    <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
