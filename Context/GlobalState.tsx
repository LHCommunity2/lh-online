import React, { createContext, useState, useReducer } from "react";

interface IContext {
  state: any;
  dispatch: any;
  toggleSidebar: any;
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

const GlobalStateProvider: React.FC<PropTypes> = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState({ status: false });

  const reducer = (state: any, action: any) => {
    console.log(state);
    switch (action.type) {
      case ACTION.toggleSidebar:
        if (action.payload.toggleSidebar)
          return setToggleSidebar({ status: true });
        if (!action.payload.toggleSidebar)
          return setToggleSidebar({ status: false });
    }
  };

  const [state, dispatch] = useReducer<any>(reducer, toggleSidebar);

  return (
    <GlobalStateContext.Provider value={{ toggleSidebar, state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateProvider, GlobalStateContext };
