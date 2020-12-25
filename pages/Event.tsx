import React, { useContext } from "react";
import { GlobalStateContext } from "../Context/GlobalState";
import { SubLayout, EventHeader, ListEvents, Sidebar } from "../components";
const Event: React.FC = () => {
  const { navbar, dispatch2, dispatch1, toggleSide } = useContext(
    GlobalStateContext
  );

  const toggle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();

    dispatch1({
      type: "toggleSidebar",
      payload: { toggleSidebar: !toggleSide },
    });
  };

  const isDark = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.preventDefault();

    dispatch2({
      type: "isDark",
      payload: { isDark: !navbar },
    });
  };

  console.log(navbar);

  return (
    <SubLayout isDark={(event) => isDark(event)} state={navbar}>
      <Sidebar toggleSidebar={toggleSide} close={(event) => toggle(event)} />
      <EventHeader />
      <ListEvents />
    </SubLayout>
  );
};

export default Event;
