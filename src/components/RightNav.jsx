import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  a {
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #888888;
    white-space: nowrap;
    transition: 0.3s;
  }
  li {
    padding: 18px 10px;
  }

  a:hover,
  li:hover > a {
    color: #34b7a7;
  }

  icons {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #34b7a7;
    position: fixed;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 150px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: white;
    }
    a:hover,
    li:hover > a {
      color: #444444;
    }
  }
`;

const RightNav = ({ open, parentCallback }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/MyPortfolio">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <a
          href="https://github.com/NIVEDITHA54"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-github icons"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/niveditha-ramu"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin icons"></i>
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;
