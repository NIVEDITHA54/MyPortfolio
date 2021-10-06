import React, { Component } from "react";

import { portfolio } from "../data.js";

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>PROJECTS</h2>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-backend">Backend development</li>
                <li data-filter=".filter-frontend">Frontend development</li>
              </ul>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay={200}>
            {portfolio.map((item) => (
              <div key={item.id} className="col-sm-6">
                <div class="card border-light mb-5 rounded-3">
                  <h2
                    class="card-header p-4
                  "
                  >
                    {item.title}
                  </h2>
                  <div class="card-body">
                    <p class="card-subtitle mb-2 text-muted">
                      <strong>Company :</strong> {item.company}
                    </p>
                    <p class="card-subtitle mb-2 text-muted">
                      <strong>Technologies : </strong> {item.technologies}
                    </p>
                    <p class="card-subtitle mb-2 text-muted">
                      <strong>Project date : </strong>
                      {item.date}
                    </p>
                    <p class="card-text">{item.description}</p>
                    <a
                      href={item.url}
                      className="btn-about"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Project link
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
