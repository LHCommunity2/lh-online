import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  max-width: 20rem;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: var(--border-radius);
  transition: var(--transition);
  padding: 0 0 15px;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: var(--transform);
    transition: var(--transition);
  }

  img {
    overflow: hidden;
    border-radius: 4px 4px 0 0;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .card {
    padding: 10px 15px 0;
    font-size: var(--fz-xs);

    .paragraph {
      padding: 0 0 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.5rem;
      font-size: 1rem;
    }

    span {
      color: var(--dirty-white);
    }
  }
`;

interface PropTypes {
  state: any;
}

const EventCard: React.FC<PropTypes> = ({ state }) => {
  return (
    <>
      <StyledCard>
        <div>
          <img src={`/image/Content/${state.image}`} alt="" />
          <div className="card">
            <h1>{state.title}</h1>
            <div
              className="paragraph"
              dangerouslySetInnerHTML={{
                __html: state.paragraph,
              }}
            />
            <span>July 12, 2020</span>
          </div>
        </div>
      </StyledCard>
    </>
  );
};

export default EventCard;
