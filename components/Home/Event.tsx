import React from "react";
import styled from "styled-components";
import { EventsMockData } from "../../utils/config";
import { EventCard } from "../index";

const StyledEvent = styled.section`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(4, 1fr);
`;

const StyledWrapper = styled.div`
  .title-heading {
    text-align: center;
    line-height: 30px;
    margin: 100px auto;
  }
`;

const Event: React.FC = () => {
  return (
    <StyledWrapper>
      <h1 className="title-heading">News Event</h1>
      <StyledEvent>
        {EventsMockData.map((info: any) => (
          <EventCard key={info.id} state={info} />
        ))}
      </StyledEvent>
    </StyledWrapper>
  );
};

export default Event;
