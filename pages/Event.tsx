import React, { useContext } from "react";
import { GlobalStateContext } from "../Context/GlobalState";
import { SubLayout, EventHeader, ListEvents } from "../components";
const Event: React.FC = () => {
  const { navbar, dispatch2 } = useContext(GlobalStateContext);
  const isDark = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.preventDefault();

    dispatch2({
      type: "isDark",
      payload: { isDark: !navbar },
    });
  };

  return (
    <SubLayout isDark={(event) => isDark(event)} state={navbar}>
      <EventHeader />
      <ListEvents />
    </SubLayout>
  );
};

export default Event;
