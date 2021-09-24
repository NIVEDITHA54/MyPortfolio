import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="container-fluid d-flex justify-content-between align-items-center">
      <h1 className="logo me-auto me-lg-0">
        <Link class="navbar-brand" to="/">
          Niveditha
        </Link>
      </h1>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li
            class={`nav-item  ${
              props.location.pathname === "/" ? "active" : ""
            }`}
          >
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
          <li
            class={`nav-item  ${
              props.location.pathname === "/about" ? "active" : ""
            }`}
          >
            <Link class="nav-link" to="/about">
              About
            </Link>
          </li>
          <li
            class={`nav-item  ${
              props.location.pathname === "/resume" ? "active" : ""
            }`}
          >
            <Link class="nav-link" to="/resume">
              Resume
            </Link>
          </li>
          <li
            class={`nav-item  ${
              props.location.pathname === "/portfolio" ? "active" : ""
            }`}
          >
            <Link class="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li
            class={`nav-item  ${
              props.location.pathname === "/contact" ? "active" : ""
            }`}
          >
            <Link class="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      <div className="header-social-links">
        <a
          href="https://github.com/NIVEDITHA54"
          className="github"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/niveditha-ramu"
          className="linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin" />
        </a>
      </div>
    </div>
  );
}

export default withRouter(Navigation);
