import React, { useContext } from "react";
import { GlobalStyle } from "../styles";
import { Sidebar } from "../components";
import styled from "styled-components";
import { GlobalStateContext } from "../Context/GlobalState";

interface PropTypes {
  children: React.ReactNode;
}

const LayoutStyled = styled.div`
  .menu {
    display: none;
    text-align: right;

    svg {
      cursor: pointer;
      width: 40px;
      height: 40px;
    }

    @media (max-width: 768px) {
      transition: var(--transition);
      padding: 0 25px 0;
      display: block;
    }
  }
`;

const Layout: React.FC<PropTypes> = ({ children }) => {
  const { toggleSidebar, dispatch } = useContext(GlobalStateContext);

  const toggle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();

    dispatch({
      type: "toggleSidebar",
      payload: { toggleSidebar: !toggleSidebar.status },
    });
  };

  return (
    <LayoutStyled>
      <Sidebar
        toggleSidebar={toggleSidebar.status}
        close={(event) => toggle(event)}
      />
      <GlobalStyle />
      {children}
    </LayoutStyled>
  );
};

export default Layout;
