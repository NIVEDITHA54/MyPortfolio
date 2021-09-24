import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {portfolio.map((item) => (
              <div
                key={item.id}
                className="col-lg-3 col-md-6 portfolio-item filter-{item.type}"
              >
                <div className="portfolio-wrap">
                  <img src={item.imgUrl} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <div className="portfolio-links">
                      <Link
                        to="/portfolio-details"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details"
                      >
                        {item.id}
                        <i className="bx bx-link" />
                      </Link>
                    </div>
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
