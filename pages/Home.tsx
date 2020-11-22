import React, { Fragment } from "react";
import { LandingPage, Content, ShortcutLinks } from "../components";
const Home: React.FC = () => {
  return (
    <Fragment>
      <LandingPage />
      <Content />
      <ShortcutLinks />
    </Fragment>
  );
};

export default Home;
