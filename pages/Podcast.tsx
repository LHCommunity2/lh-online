import React from "react";
import { PodcastHeader, PodcastContent, Layout } from "../components";

const Home: React.FC = () => {
  return (
    <Layout>
      <PodcastHeader />
      <PodcastContent />
    </Layout>
  );
};

export default Home;
