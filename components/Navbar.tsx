import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SideBarLinks } from "../utils/config";
import Theme from "../styles/CssVariables";
import Link from "next/link";

import Icons from "./icons/icons";

interface StyleTypes {
  isScroll: boolean;
  dark: boolean;
}

interface PropTypes {
  state: boolean;
  isDark: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const NavbarStyled = styled.div<StyleTypes>`
  box-shadow: 0 1px 2px
    ${({ isScroll, dark }) =>
      isScroll ? (dark ? "transparent" : "#eee9e9") : "transparent"};
  font-family: var(--font-sans);
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: ${({ isScroll }) => (isScroll ? "3px 60px" : "15px 60px")};
  transition: var(--transition);
  background: ${({ isScroll, dark }) =>
    isScroll ? (dark ? "#362525" : "#fff") : "transparent"};
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
          border: solid 1px ${({ isScroll }) => (isScroll ? "#362525" : "#fff")};
          color: ${({ dark }) => (dark ? "#fff" : "#362525")};
        }
      }

      a {
        font-weight: bold;
        text-decoration: none;
        color: ${({ isScroll }) => (isScroll ? "#d1c6c6" : "#fff")};

        &:hover,
        &:focus {
          color: ${({ dark }) => (dark ? "#fff" : "#362525")};
        }
      }

      svg {
        width: 22px;
        height: 22px;
        color: ${(dark) => dark && "#d1c6c6"};

        &:hover {
          color: ${({ isScroll, dark }) =>
            isScroll ? (dark ? "#fff" : "#362525") : "#fff"};
        }
      }

      @media (max-width: 875px) {
        font-size: var(--fz-xs);
        margin: 0 8px;
      }
    }
  }
`;

const Navbar: React.FC<PropTypes> = ({ isDark, state }) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const onScroll = () => {
    const isDown = window.scrollY > 50;

    if (isDown) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <NavbarStyled isScroll={isScroll} dark={state}>
      <ul>
        {SideBarLinks.map((links: any) => (
          <li key={links.id}>
            <Link href={links.link}>
              <a>{links.name}</a>
            </Link>
          </li>
        ))}
        <li onClick={isDark}>
          <Icons name={state ? "Sun" : "Moon"} onDark={state} />
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
