import React from "react";
import { Layout, MemberHeader, MemberContent } from "../components";

const Members: React.FC = () => {
  return (
    <Layout>
      <MemberHeader />
      <MemberContent />
    </Layout>
  );
};

export default Members;
