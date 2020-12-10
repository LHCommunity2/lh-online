import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { EventCard } from "../index";
import Icons from "../icons/icons";
import AosInit from "../utils/aos";
import { EventsContext } from "../../Context/EventsProvider";

const StyledSection = styled.section``;

const StyledEvent = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  .noEvents {
    text-align: center;
    color: var(--dirty-white);
  }
`;

const StyledWrapper = styled.div`
  .title-heading {
    text-align: center;
    line-height: 30px;
    margin: 100px auto;

    @media (max-width: 480px) {
      font-size: 30px;
      margin: 70px auto;
    }
  }

  button {
    display: flex;
    outline-style: none;
    justify-content: center;
    align-items: center;
    margin: 50px auto 0;
    border: none;
    cursor: pointer;
    max-width: 200px;
    padding: 10px 40px;
    font-size: var(--fz-sm);
    border-radius: var(--border-radius);
    background: var(--blue);
    color: var(--white);
    transition: (--transition);
    box-shadow: 0 5px 10px var(--dark-blue);

    &:hover {
      background: var(--light-blue);
    }

    svg {
      margin-left: 8px;
      fill: var(--white);
    }
  }
`;

const Event: React.FC = () => {
  const { events } = useContext(EventsContext);
  useEffect(AosInit, []);

  console.log(events);

  return (
    <StyledWrapper>
      <h1 className="title-heading">News Event</h1>
      <StyledSection>
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
        {events.length > 0 && (
          <button data-aos="fade-up">
            view more <Icons name="Arrow" />
          </button>
        )}
      </StyledSection>
    </StyledWrapper>
  );
};

export default Event;
