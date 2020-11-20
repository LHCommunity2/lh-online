import React from "react";
import { Menu, Heart, Peace, Users } from "./index";

interface PropTypes {
  name: string;
}

const Icons: React.FC<PropTypes> = ({ name }) => {
  switch (name) {
    case "Menu":
      return <Menu />;
    case "Heart":
      return <Heart />;
    case "Peace":
      return <Peace />;
    case "Users":
      return <Users />;
  }
};

export default Icons;
