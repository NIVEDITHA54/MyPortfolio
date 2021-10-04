import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data.js";

export default function Project() {
  const params = useParams();
  const project = projects.get(params.id);

  return (
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-8">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="img/portfolio/portfolio-1.jpg"
                    class="d-block w-100"
                    alt="testing"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/portfolio/portfolio-1.jpg"
                    class="d-block w-100"
                    alt="testing"
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li>
                  <strong>Company</strong>: {project.company}
                </li>
                <li>
                  <strong>Project date</strong>: {project.date}
                </li>
                <li>
                  <strong>Project URL</strong>:{" "}
                  <a href="https://localhost:3030">www.example.com</a>
                </li>
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
