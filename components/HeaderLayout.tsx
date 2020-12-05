import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  margin: 0 0 100px;
  .header-background {
    width: 100%;
    max-width: 850px;
    background-size: 100% auto;
    color: var(--white);
    margin: 0 auto;

    .content {
      line-height: 28px;
      padding: 10rem;
      text-align: center;
      @media (max-width: 1080px) {
        background-size: cover;
      }

      @media (max-width: 780px) {
        height: 50vh;
      }

      h1 {
        font-size: 80px;
        color: var(--white);
        margin: 0 auto 10px;

        @media (max-width: 780px) {
          padding: 0;
          font-size: 65px;
        }

        @media (max-width: 495px) {
          padding: 0;
        }
      }
    }

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
    <StyledHeader style={{ backgroundImage: `url(${image})` }}>
      <div className="header-background">
        <div className="content">
          <h1>{children}</h1>
          <span>{paragraph}</span>
        </div>
      </div>
    </StyledHeader>
  );
};

export default AboutUs;
