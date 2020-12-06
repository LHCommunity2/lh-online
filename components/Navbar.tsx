import React, { useEffect, useState, useContext } from "react";
import { GlobalStateContext } from "../Context/GlobalState";
import styled from "styled-components";
import { SideBarLinks } from "./utils/config";
import Link from "next/link";
import Icons from "./icons/icons";

interface StyleTypes {
  isScroll: boolean;
  dark?: boolean;
}

interface PropTypes {
  state: boolean;
  isDark: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const NavWrapper = styled.div<StyleTypes>`
  .menu {
    box-shadow: 0 1px 2px
      ${({ isScroll }) => (isScroll ? "#eee9e9" : "transparent")};
    position: fixed;
    top: 0px;
    right: 0;
    z-index: 1;
    display: none;
    text-align: right;
    width: 100%;
    background: ${({ isScroll }) => (isScroll ? "#fff" : "#transparent")};

    svg {
      cursor: pointer;
      transition: var(--transition);
      padding: ${({ isScroll }) => (isScroll ? "10px 0" : "20px 0")};
      width: 40px;
      height: 40px;
      fill: ${({ isScroll }) => (isScroll ? "#c4baba" : "#fff")};
    }

    @media (max-width: 768px) {
      transition: var(--transition);
      padding: 0 25px 0;
      display: block;
    }

    @media (max-width: 480px) {
      right: 5px;
    }
  }
`;

const NavbarStyled = styled.div<StyleTypes>`
  box-shadow: 0 1px 2px
    ${({ isScroll, dark }) =>
      isScroll ? (dark ? "transparent" : "#eee9e9") : "transparent"};
  font-family: var(--font-sans);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 92%;
  padding: ${({ isScroll }) => (isScroll ? "3px 60px" : "3px 60px")};
  transition: var(--transition);
  background: ${({ isScroll, dark }) =>
    isScroll ? (dark ? "#362525" : "#fff") : "transparent"};
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

  .logo {
    display: flex;
    align-items: center;

    .logo1 {
      width: 45px;
      height: 45px;
    }

    span {
      font-weight: bold;
      color: #eee9e9;
      margin: 0 10px;
      /* display: ${({ isScroll, dark }) =>
        isScroll ? dark && "block" : "none"}; */
    }
  }

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
          border: solid 1px #eee9e9;
          color: ${({ dark }) => (dark ? "#fff" : "#362525")};
        }
      }

      a {
        font-weight: bold;
        text-decoration: none;
        color: ${({ isScroll }) => (isScroll ? "#d1c6c6" : "#fff")};

        &:hover,
        &:focus {
          color: #eee9e9;
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
  const { dispatch1, toggleSide } = useContext(GlobalStateContext);

  const onScroll = () => {
    const isDown = window.scrollY > 50;

    if (isDown) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  const toggle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();

    dispatch1({
      type: "toggleSidebar",
      payload: { toggleSidebar: !toggleSide },
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <NavWrapper isScroll={isScroll}>
      <div className="menu" onClick={(event) => toggle(event)}>
        <Icons name="Menu" />
      </div>
      <NavbarStyled isScroll={isScroll} dark={state}>
        <div className="logo">
          <img
            src={`${isScroll ? "/image/Logo2.svg" : "/image/Logo.svg"}`}
            className="logo1"
            alt=""
          />
          <span>LH Global Community</span>
        </div>
        <ul>
          {SideBarLinks.map((links: any) => (
            <li key={links.id}>
              <Link href={links.link}>
                <a>{links.name}</a>
              </Link>
            </li>
          ))}
          <li onClick={isDark}>
            <Icons name={state ? "Sun" : "Moon"} />
          </li>
        </ul>
      </NavbarStyled>
    </NavWrapper>
  );
};

export default Navbar;
