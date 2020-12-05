import React from "react";
import Layout from "../components/Layout";
import { AboutHeader, ContentAbout } from "../components";

const Home: React.FC = () => {
  return (
    <Layout>
      <AboutHeader />
      <ContentAbout />
    </Layout>
  );
};

export default Home;
