import React, { useContext } from "react";
import EventCard from "../EventCard";
import { StyledEvent, StyledWrapper } from "../../styles/StyledEvent";
import { EventsContext } from "../../Context/EventsProvider";

const ListEvents: React.FC = () => {
  const { events } = useContext(EventsContext);

  return (
    <StyledWrapper
      style={{ marginBottom: events.length <= 0 ? "150px" : "0px" }}
    >
      <div className="header-text ">
        <h1 className="title-heading">Check our upcoming events</h1>
        <p>
          If you have questions about any of our events, please contact us and
          we’d be happy to fill you in or get you connected.
        </p>
      </div>
      <section>
        <StyledEvent>
          {events.length <= 0 ? (
            <div className="noEvents">No Events</div>
          ) : (
            <>
              {events.map((cont: any) => (
                <div data-aos="fade-up" key={cont.id}>
                  <EventCard state={cont} />
                </div>
              ))}
            </>
          )}
        </StyledEvent>
      </section>
    </StyledWrapper>
  );
};

export default ListEvents;
