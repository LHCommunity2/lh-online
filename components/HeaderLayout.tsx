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
    max-width: 500px;
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

  span {
    font-weight: lighter;
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
      <img src={image} alt="photo" />
      <div className="content">
        <h1>{children}</h1>
        <span>{paragraph}</span>
      </div>
    </StyledHeader>
  );
};

export default AboutUs;
