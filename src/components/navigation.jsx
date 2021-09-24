import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;

  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <h1 class="logo me-auto me-lg-0">
        <a href="index.html">Niveditha</a>
      </h1>
      <Burger />
    </Nav>
  );
};

export default Navigation;
