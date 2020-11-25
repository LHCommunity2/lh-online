import React from "react";
import {
  Menu,
  Heart,
  Peace,
  Users,
  Location,
  Group,
  Gadget,
  Facebook,
  Youtube,
  Twitter,
} from "./index";
import { Sun, Moon } from "react-feather";

interface PropTypes {
  name: string;
  onDark?: boolean;
}

const Icons: React.FC<PropTypes> = ({ name, onDark }) => {
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
    case "Facebook":
      return <Facebook />;
    case "Youtube":
      return <Youtube />;
    case "Twitter":
      return <Twitter />;
    case "Sun":
      return <Sun />;
    case "Moon":
      return <Moon />;
  }
};

export default Icons;
