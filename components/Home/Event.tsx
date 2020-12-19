import React, { useEffect, useContext } from "react";
import { StyledEvent, StyledWrapper } from "../../styles/StyledEvent";
import { EventCard } from "../index";
import Icons from "../icons/icons";
import AosInit from "../utils/aos";
import Link from "next/link";
import { EventsContext } from "../../Context/EventsProvider";

const Event: React.FC = () => {
  const { events } = useContext(EventsContext);
  useEffect(AosInit, []);

  console.log(events);

  const GRID_LIMIT = 8;
  const eventSlice = events.slice(0, GRID_LIMIT);

  return (
    <StyledWrapper>
      <div className="header-text ">
        <h1 className="title-heading">News Event</h1>
      </div>
      <section>
        <StyledEvent>
          {eventSlice.length <= 0 ? (
            <div className="noEvents">No Events</div>
          ) : (
            <>
              {eventSlice.map((cont: any) => (
                <div data-aos="fade-up" key={cont.id}>
                  <EventCard state={cont} />
                </div>
              ))}
            </>
          )}
        </StyledEvent>
        {events.length > 0 && (
          <Link href="/Event" data-aos="fade-up">
            <a>
              view more <Icons name="Arrow" />
            </a>
          </Link>
        )}
      </section>
    </StyledWrapper>
  );
};

export default Event;
