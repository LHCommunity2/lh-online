import React, { useContext, useEffect } from "react";
import { GlobalStyle } from "../styles";
import { Sidebar } from "../components";
import styled from "styled-components";
import { GlobalStateContext } from "../Context/GlobalState";

interface PropTypes {
  children: React.ReactNode;
}

const LayoutStyled = styled.div``;

const Layout: React.FC<PropTypes> = ({ children }) => {
  const { state, dispatch } = useContext(GlobalStateContext);

  const toggle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();

    dispatch({
      type: "toggleSidebar",
      payload: { toggleSidebar: !state },
    });
  };

  return (
    <LayoutStyled>
      <Sidebar toggleSidebar={state} close={(event) => toggle(event)} />
      <GlobalStyle />
      {children}
    </LayoutStyled>
  );
};

export default Layout;
