import React, { createContext, useState, useReducer } from "react";

interface IContext {
  state: any;
  dispatch: any;
}

interface PropTypes {
  children: React.ReactNode;
}

interface ObjectTypes {
  toggleSidebar: string;
}

const ACTION: ObjectTypes = {
  toggleSidebar: "toggleSidebar",
};

const GlobalStateContext = createContext({} as IContext);

const initialState = false;

const GlobalStateProvider: React.FC<PropTypes> = ({ children }) => {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case ACTION.toggleSidebar:
        return toggle(state, action);
    }
  };

  const toggle = (isToggle: boolean, action: any) => {
    if (action.payload.toggleSidebar) return (isToggle = true);
    if (!action.payload.toggleSidebar) return (isToggle = false);
  };

  const [state, dispatch] = useReducer<any>(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateProvider, GlobalStateContext };
