import React from "react";
import styled from "styled-components";
import { ShortCutLinks } from "../../utils/config";
import Icons from "../icons/icons";

interface StyledTypes {
  image: any;
}

const StyledImage = styled.div<StyledTypes>`
  background: ${({ image }) => `url(/image/Content/${image})`} no-repeat;
  object-fit: cover;
  background-size: cover;
  border-radius: var(--border-radius);
  cursor: pointer;
  max-width: 200px;
  line-height: 30px;
  padding: 9rem 20px 20px;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    transition: height 0.5s ease-out;
  }

  &:hover,
  &:focus {
    transform: translateY(-10px);
    transition: var(--transition);
    /* filter: grayscale(0%); */
  }

  @media (max-width: 1080px) {
    max-width: 500px;
    padding: 9rem 15px 20px;
  }

  @media (max-width: 780px) {
    padding: 9rem 21px 20px;
  }

  div {
    svg {
      margin: 0 0 25px;
      width: 30px;
      height: 30px;

      @media (max-width: 780px) {
        margin: 0 0 10px;
      }
    }

    span {
      font-size: 25px;
      color: var(--white);
      font-weight: bold;
    }
  }
`;

const StyledShorcutLinks = styled.section`
  .title-heading {
    text-align: center;
    line-height: 30px;
    margin: 0 auto 100px;

    @media (max-width: 495px) {
      font-size: var(--fz-xxl);
      margin: 0 auto 50px;
    }
  }

  .items {
    font-family: var(--font-sans);
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;

const ShortcutLinks: React.FC = () => {
  return (
    <>
      <StyledShorcutLinks>
        <h1 className="title-heading">Discover friends, family, and purpose</h1>
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
          <div className="square" />
        </div>
      </StyledShorcutLinks>
    </>
  );
};

export default ShortcutLinks;
