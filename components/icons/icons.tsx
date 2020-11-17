import React from "react";
import { Menu } from "./index";

interface PropTypes {
  name: string;
}

const Icons: React.FC<PropTypes> = ({ name }) => {
  switch (name) {
    case "Menu":
      return <Menu />;
  }
};

export default Icons;
