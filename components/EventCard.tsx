import React, { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import { dark, light } from "../styles/Theme";
import { GlobalStateContext } from "../Context/GlobalState";
import { fromImageToUrl } from "./utils/imageToUrl";

//*get query parameters from events when clicking the card

const StyledCard = styled.div`
  max-width: 100%;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: var(--border-radius);
  transition: var(--transition);
  padding: 0 0 20px;
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
    object-fit: cover;
    height: 180px;
  }

  .card {
    padding: 10px 15px 0;
    font-size: var(--fz-xs);

    .paragraph {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
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
  const { navbar } = useContext(GlobalStateContext);

  return (
    <>
      <Link href={`/events?title=${state.name}&id=${state.id}`}>
        <StyledCard
          style={{ background: navbar ? dark.background : light.background }}
        >
          <div>
            <img src={fromImageToUrl(state.image)} alt="" />
            <div className="card">
              <h1>{state.name}</h1>
              <div
                className="paragraph"
                dangerouslySetInnerHTML={{
                  __html: state.description,
                }}
              />
              <div className="line" />
              <span>{state.date}</span>
            </div>
          </div>
        </StyledCard>
      </Link>
    </>
  );
};

export default EventCard;
