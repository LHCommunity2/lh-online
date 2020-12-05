import React, { useContext, Fragment } from "react";
import { GlobalStyle } from "../styles";
import { Sidebar, Navbar, Footer, Event } from "../components";
import { GlobalStateContext } from "../Context/GlobalState";
import Head from "next/head";
import Helmet from "react-helmet";
import "aos/dist/aos.css";

interface PropTypes {
  children: React.ReactNode;
}

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
    <Fragment>
      <Head>
        <title>LH Global Community</title>
      </Head>
      <Helmet>
        <body className={`${navbar ? `dark` : ``}`} />
      </Helmet>
      <Navbar isDark={(event) => isDark(event)} state={navbar} />
      <Sidebar toggleSidebar={toggleSide} close={(event) => toggle(event)} />
      <GlobalStyle isDark={navbar} />
      {children}
      <Event />
      <Footer />
    </Fragment>
  );
};

export default Layout;
