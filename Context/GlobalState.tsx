import React, { createContext, useState, useReducer } from "react";

interface IContext {
  toggleSide: any;
  navbar: any;
  dispatch1: any;
  dispatch2: any;
}

interface PropTypes {
  children: React.ReactNode;
}

interface ObjectTypes {
  toggleSidebar: string;
  isDark: string;
}

const ACTION: ObjectTypes = {
  toggleSidebar: "toggleSidebar",
  isDark: "isDark",
};

const GlobalStateContext = createContext({} as IContext);

const toggleState = false;
const navbarState = false;

const GlobalStateProvider: React.FC<PropTypes> = ({ children }) => {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case ACTION.toggleSidebar:
        return toggle(state, action);
      case ACTION.isDark:
        return isDark(state, action);
    }
  };

  const isDark = (navbarState: boolean, action: any) => {
    if (action.payload.isDark) return (navbarState = true);
    if (!action.payload.isDark) return (navbarState = false);
  };

  const toggle = (isToggle: boolean, action: any) => {
    if (action.payload.toggleSidebar) return (isToggle = true);
    if (!action.payload.toggleSidebar) return (isToggle = false);
  };

  const [toggleSide, dispatch1] = useReducer<any>(reducer, toggleState);
  const [navbar, dispatch2] = useReducer<any>(reducer, navbarState);

  return (
    <GlobalStateContext.Provider
      value={{ toggleSide, navbar, dispatch1, dispatch2 }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateProvider, GlobalStateContext };
