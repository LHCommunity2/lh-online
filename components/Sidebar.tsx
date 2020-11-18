import React from "react";
import styled from "styled-components";
import { SideBarLinks } from "../utils/config";
import { X } from "react-feather";
import { Helmet } from "react-helmet";

interface StyleTypes {
  toggleSidebar: boolean;
}

interface PropTypes {
  toggleSidebar: boolean;
  close: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Wrapper = styled.div<StyleTypes>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  transform: ${({ toggleSidebar }) =>
    toggleSidebar ? `translateX(0)` : `translateX(100%)`};

  transition: transform 0.3s ease-in-out;
`;

const SidebarStyled = styled.div`
  background-color: #2b2d31;
  height: 100vh;
  border: 0;
  line-height: 50px;
  width: min(65vw, 380px);
  font-family: var(--font-segoe);
  font-weight: bold;

  @media (max-width: 492px) {
    width: min(75vw, 380px);
  }

  div {
    text-align: right;
    svg {
      padding: 20px 30px;
      cursor: pointer;
    }
  }

  ul {
    width: 100%;
    list-style: none;
    z-index: 1;

    li {
      position: relative;

      a {
        cursor: pointer;
        font-size: clamp(20px, 5vw, 25px);
        color: #fff;
        text-decoration: none;

        &:hover,
        &:focus {
          transition: var(--transition);
          border-radius: var(--border-radius);
          padding: 2px 10px;
          background: #414349;
        }
      }
    }
  }
`;

const Sidebar: React.FC<PropTypes> = ({ toggleSidebar, close }) => {
  return (
    <>
      <Helmet>
        <body className={`${toggleSidebar ? `blur` : ``}`} />
      </Helmet>
      <Wrapper toggleSidebar={toggleSidebar}>
        <SidebarStyled>
          <div onClick={close}>
            <X color="#fff" size="30" />
          </div>

          <ul>
            {SideBarLinks.map((links: any) => (
              <li key={links.id}>
                <a href={links.link}>{links.name}</a>
              </li>
            ))}
          </ul>
        </SidebarStyled>
      </Wrapper>
    </>
  );
};

export default Sidebar;
