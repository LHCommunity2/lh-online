import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  margin: 0 0 100px;
  position: relative;

  img {
    width: 100%;
    height: 430px;
    filter: brightness(0.5);
    object-fit: cover;
  }

  .content {
    transition: var(--transition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--white);
    line-height: 28px;
    text-align: center;

    h1 {
      font-size: 80px;
      color: var(--white);

      @media (max-width: 780px) {
        padding: 0;
        font-size: 50px;
      }

      @media (max-width: 495px) {
        padding: 0;
        font-size: 65px;
      }
    }
  }

  .header-paragraph {
    margin: 0 auto;
    max-width: 500px;
    span {
      font-weight: lighter;
    }
  }
`;

interface PropTypes {
  children: React.ReactNode;
  image: string;
  paragraph: string;
}

const AboutUs: React.FC<PropTypes> = ({ children, image, paragraph }) => {
  return (
    <StyledHeader>
      <picture>
        <img src={image} alt="photo" />
      </picture>
      <div className="content">
        <h1>{children}</h1>
        <div className="header-paragraph">
          <span>{paragraph}</span>
        </div>
      </div>
    </StyledHeader>
  );
};

export default AboutUs;
