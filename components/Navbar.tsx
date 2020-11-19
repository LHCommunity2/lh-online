import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SideBarLinks } from "../utils/config";
import Link from "next/link";

interface StyleTypes {
  isScroll: boolean;
}

const NavbarStyled = styled.div<StyleTypes>`
  font-family: var(--font-sans);
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: ${({ isScroll }) => (isScroll ? "3px 60px" : "15px 60px")};
  transition: var(--transition);
  background: ${({ isScroll }) => (isScroll ? "#362525" : "transparent")};
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
  /* background: rgba(12, 10, 27, 0.7); */

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: var(--fz-sm);

    li {
      cursor: pointer;
      margin: 0 15px;
      transition: var(--transition);

      &:nth-child(1) {
        border-radius: var(--border-radius);
        border: solid 1px #d1c6c6;
        padding: 10px 15px;
        content: "";

        &:hover,
        &:focus {
          color: #fff;
        }
      }

      a {
        font-weight: bold;
        text-decoration: none;
        color: #d1c6c6;

        &:hover,
        &:focus {
          color: #fff;
        }
      }

      @media (max-width: 875px) {
        font-size: var(--fz-xs);
        margin: 0 8px;
      }
    }
  }
`;

const Navbar: React.FC = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const onScroll = () => {
    const isDown = window.scrollY > 50;

    if (isDown) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  console.log(isScroll);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <NavbarStyled isScroll={isScroll}>
      <ul>
        {SideBarLinks.map((links: any) => (
          <li key={links.id}>
            <Link href={links.link}>
              <a>{links.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
