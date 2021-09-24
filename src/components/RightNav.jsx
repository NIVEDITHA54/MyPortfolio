import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
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
    color: white;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link className="text-white" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-white" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="text-white" to="/resume">
          Resume
        </Link>
      </li>
      <li>
        <Link className="text-white" to="/portfolio">
          Portfolio
        </Link>
      </li>
      <li>
        <Link className="text-white" to="/contact">
          Contact
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
