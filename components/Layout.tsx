import React, { useContext } from "react";
import { Sidebar, Event, SubLayout, DarkTheme } from "../components";
import { GlobalStateContext } from "../Context/GlobalState";
import styled from "styled-components";
import Head from "next/head";
import "aos/dist/aos.css";

interface PropTypes {
  children: React.ReactNode;
}

const StyledLayout = styled.div``;

const Layout: React.FC<PropTypes> = ({ children }) => {
  const { toggleSide, navbar, dispatch1, dispatch2 } = useContext(
    GlobalStateContext
  );

  const toggle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();

    dispatch1({
      type: "toggleSidebar",
      payload: { toggleSidebar: !toggleSide },
    });
  };

  const isDark = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.preventDefault();

    dispatch2({
      type: "isDark",
      payload: { isDark: !navbar },
    });
  };

  return (
    <StyledLayout>
      <Head>
        <title>LH Global Community</title>
      </Head>
      <DarkTheme />
      <SubLayout isDark={(event) => isDark(event)} state={navbar}>
        <Sidebar toggleSidebar={toggleSide} close={(event) => toggle(event)} />
        {children}
        <Event />
      </SubLayout>
    </StyledLayout>
  );
};

export default Layout;
