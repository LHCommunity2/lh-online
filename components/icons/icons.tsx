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
  Arrow,
  Curve,
  LinkedIn,
  Dart,
  Person,
  Pin,
} from "./index";
import { Sun, Moon } from "react-feather";

interface PropTypes {
  name: string;
  style?: string;
}

const Icons: React.FC<PropTypes> = ({ name, style }) => {
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
    case "Arrow":
      return <Arrow />;
    case "LinkedIn":
      return <LinkedIn />;
    case "Curve":
      return <Curve style={style} />;
    case "Dart":
      return <Dart />;
    case "Person":
      return <Person />;
    case "Pin":
      return <Pin />;
  }
};

export default Icons;
