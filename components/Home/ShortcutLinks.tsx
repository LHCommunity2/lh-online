import React from "react";
import styled from "styled-components";
import { ShortCutLinks } from "../../utils/config";
import Icons from "../icons/icons";

interface StyledTypes {
  image: any;
}

const StyledImage = styled.div<StyledTypes>`
  background: ${({ image }) => `url(/image/Content/${image})`} no-repeat;
  border-radius: var(--border-radius);
  filter: grayscale(100%);
  cursor: pointer;
  line-height: 30px;
  object-fit: cover;
  padding: 9rem 20px 20px;

  &:hover,
  &:focus {
    transform: translateY(-5px);
    transition: var(--transition);
    filter: grayscale(0%);
  }

  div {
    max-width: 600px;
    svg {
      margin: 0 0 25px;
      width: 30px;
      height: 30px;
    }

    span {
      font-size: 25px;
      color: var(--white);
      font-weight: bold;
      grid-column: 1 / 2;

      @media (max-width: 1080px) {
      }
    }
  }
`;

const StyledShorcutLinks = styled.section`
  .title-heading {
    text-align: center;
    margin: 0 auto 100px;
  }

  .items {
    width: 100%;
    font-family: var(--font-sans);
    display: grid;
    grid-gap: 15px;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1080px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 780px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const ShortcutLinks: React.FC = () => {
  return (
    <>
      <StyledShorcutLinks>
        <h1 className="title-heading">
          <span>Discover</span> friends, family, and purpose
        </h1>
        <div className="items">
          {ShortCutLinks.map((item: any) => (
            <StyledImage key={item.id} image={item.image}>
              <div>
                <div className="icon">
                  <Icons name={item.icon} />
                </div>

                <span>{item.title}</span>
              </div>
            </StyledImage>
          ))}
        </div>
      </StyledShorcutLinks>
    </>
  );
};

export default ShortcutLinks;
