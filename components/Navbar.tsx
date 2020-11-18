import React from "react";
import styled from "styled-components";

const NavbarStyled = styled.div``;

const Navbar: React.FC = () => {
  return (
    <NavbarStyled>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Location</li>
        <li>Leaders & Members</li>
        <li>News & Events</li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
