import React, { useContext } from "react";
import { GlobalStateContext } from "../Context/GlobalState";
import Helmet from "react-helmet";

const DarkTheme: React.FC = () => {
  const { navbar } = useContext(GlobalStateContext);
  return (
    <Helmet>
      <body className={`${navbar ? `dark` : ``}`} />
    </Helmet>
  );
};

export default DarkTheme;
