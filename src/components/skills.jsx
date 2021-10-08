import React, { Component } from "react";
import { myskills } from "../data.js";

export default class Skills extends Component {
  render() {
    return (
      <div id="skills" className="skills">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="row skills-content">
            {myskills.map((skill) => (
              <div className="col-6">
                <div key={skill} className="progress">
                  <span className="skill">
                    {skill.skill}
                    <i className="val">{skill.percentage}</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={60}
                      style={{ maxWidth: skill.percentage }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
