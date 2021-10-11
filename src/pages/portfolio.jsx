import React, { useState } from "react";
import { portfolio } from "../data.js";

export default function Portfolio() {
  const [filterParam, setFilterParam] = useState("All");

  function search(items) {
    if (filterParam === "All") return items;
    else return items.filter((item) => item.type === filterParam);
  }

  return (
    <section id="portfolio" className="portfolio mb-5">
      <div className="container" data-aos="fade-up">
        <div className="section-title mt-5">
          <h2>PROJECTS</h2>
        </div>
        <div className="col-sm-4 offset-sm-4">
          <select
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option value="All">All</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>
          <span className="focus"></span>
        </div>

        <div className="row mt-5" data-aos="fade-up" data-aos-delay={200}>
          {search(portfolio).map((item) => (
            <div key={item.id} className="col-sm-6">
              <div className="card border-light mb-5 rounded-3 shadow bg-body">
                <h2
                  className="card-header p-4
                  "
                >
                  {item.title}
                </h2>
                <div className="card-body">
                  <p className="card-subtitle mb-2 text-muted">
                    <strong>Company :</strong> {item.company}
                  </p>
                  <p className="card-subtitle mb-2 text-muted">
                    <strong>Technologies : </strong> {item.technologies}
                  </p>
                  <p className="card-subtitle mb-2 text-muted">
                    <strong>Project date : </strong>
                    {item.date}
                  </p>
                  <p className="card-text">{item.description}</p>

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
