import React, { Fragment } from "react";
import { LandingPage, Content, ShortcutLinks, Podcast } from "../components";

const Home: React.FC = () => {
  return (
    <Fragment>
      <LandingPage />
      <Content />
      <ShortcutLinks />
      <Podcast />
    </Fragment>
  );
};

export default Home;
