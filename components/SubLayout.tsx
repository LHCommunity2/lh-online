import React from "react";
import { Navbar, Footer } from "../components";

interface PropTypes {
  children: React.ReactNode;
  isDark: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  state: any;
}

const SubLayout: React.FC<PropTypes> = ({ children, isDark, state }) => {
  return (
    <>
      <Navbar isDark={isDark} state={state} />
      {children}
      <Footer />
    </>
  );
};

export default SubLayout;
