import React from "react";
import { AboutHeader, ContentAbout, Layout } from "../components";

const Home: React.FC = () => {
  return (
    <Layout>
      <AboutHeader />
      <ContentAbout />
    </Layout>
  );
};

export default Home;
