import React from "react";
import Layout from "../components/Layout";
import { LocationHeader, Map } from "../components";

const Home: React.FC = () => {
  return (
    <Layout>
      <LocationHeader />
      <Map />
    </Layout>
  );
};

export default Home;
