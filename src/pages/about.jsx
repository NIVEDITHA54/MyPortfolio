import React, { Component } from "react";
import Skills from "../components/skills";
export default class About extends Component {
  render() {
    return (
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p>
              I am a Full Stack developer with a demonstrated history of working
              with frontend and backend technologies.I have more than 3 years of
              work experience in software development.Additionally,I have
              experience in application deployment,integration and performance
              optimisation. Being a technology focused person,I always invest my
              time in upskilling myself.Web development and database
              technologies are my area of focus.Acquiring new methods and skills
              has always been the driving force to enhance my knowledge.With my
              well developed analytical and research skills,I can work
              independently in a fast paced environment. Checkout my Github
              profile for a better overview of accomplishments so far.
            </p>
            <div className=" mt-2 social-links">
              <a
                href="https://github.com/NIVEDITHA54"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github icons"></i>
              </a>
            </div>
          </div>
        </div>
        <Skills />
      </section>
    );
  }
}
