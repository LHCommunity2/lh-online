import React from "react";
import { Menu, Heart, Peace, Users, Location, Group, Gadget } from "./index";

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
    case "Location":
      return <Location />;
    case "Group":
      return <Group />;
    case "Gadget":
      return <Gadget />;
  }
};

export default Icons;