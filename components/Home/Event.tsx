import React from "react";
import styled from "styled-components";
import { EventsMockData } from "../../utils/config";
import { EventCard } from "../index";
import Icons from "../icons/icons";

//*Note : Event Responsive

const StyledSection = styled.section``;

const StyledEvent = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  return (
    <StyledWrapper>
      <h1 className="title-heading">News Event</h1>
      <StyledSection>
        <StyledEvent>
          {EventsMockData.map((info: any) => (
            <EventCard key={info.id} state={info} />
          ))}
        </StyledEvent>
        <button>
          view more <Icons name="Arrow" />
        </button>
      </StyledSection>
    </StyledWrapper>
  );
};

export default Event;
