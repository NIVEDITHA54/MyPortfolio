import React from "react";
import styled from "styled-components";
import Burger from "./burger";

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 18px 20px;
  display: flex;
  justify-content: center;
`;

const Navigation = () => {
  return (
    <Nav>
      <div className="col-md-3 col-lg-5 col-xs-1 align-items-center">
        <h1 className="logo">
          <a href="/">Niveditha</a>
        </h1>
      </div>

      <div className="col-md-6 col-lg-4 col-xs-1 align-items-center">
        <Burger />
      </div>
    </Nav>
  );
};

export default Navigation;
