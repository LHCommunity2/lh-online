import React from "react";
import { GlobalStyle } from "../styles";

interface PropTypes {
  children: React.ReactNode;
}

const Layout: React.FC<PropTypes> = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      {children}
    </div>
  );
};

export default Layout;
