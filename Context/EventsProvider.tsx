import React, { createContext, useState, useEffect } from "react";
import { API_URL } from "../components/utils/imageToUrl";

interface IContext {
  events: Object[];
}

interface PropTypes {
  children: React.ReactNode;
}

const EventsContext = createContext({} as IContext);

const EventProvider: React.FC<PropTypes> = ({ children }) => {
  const [events, setEvents] = useState([]);

  const fetchContent = () => {
    (async () => {
      await fetch(`${API_URL}/events`)
        .then((response: any) => {
          if (response.status === 404) {
            console.log("404 error");
          }

          if (response.status === 403) {
            console.log("403 forbidden");
          }

          return response.json();
        })
        .then((data: any) => {
          setEvents(data);
        })
        .catch((error: any) => {
          console.log(error.message);
        });
    })();
  };

  useEffect(fetchContent, []);

  return (
    <EventsContext.Provider value={{ events }}>
      {children}
    </EventsContext.Provider>
  );
};

export { EventProvider, EventsContext };
