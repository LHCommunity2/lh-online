import React from "react";
import styled from "styled-components";
import { ContentInformation } from "../../utils/config";
import Icons from "../icons/icons";
//import Image from "next/image";

const StyledImage = styled.div`
  position: relative;
  max-width: 300px;
  border-radius: 40px;
  margin: 0 auto;

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);

    -webkit-filter: var(--webkit-filter);
    filter: var(--filter);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      -webkit-filter: var(--webkit-filter-colored);
      filter: var(--filter-colored);

      /* &:after {
        top: 15px;
        left: 15px;
      } */
    }

    img {
      position: relative;
      border-radius: var(--border-radius);
      transition: var(--transition);

      @media (max-width: 1080px) {
        width: 280px;
        margin: 50px auto 0;
      }
    }
    /* 
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 400px;
      height: 400px;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      bottom: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--light-blue);
      left: 50px;
      bottom: 50px;
      z-index: -1;
    } */
  }
`;

const StyledContent = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  position: relative;
  line-height: 1;
  align-items: center;
  font-family: var(--font-segoe);

  @media (max-width: 1080px) {
    display: block;
  }

  @media (max-width: 768px) {
    margin-bottom: 70px;
  }

  @media (max-width: 480px) {
    margin-bottom: 30px;
  }

  .learnMore {
    font-size: var(--fz-lg);
    font-weight: bold;
    color: var(--blue);
    display: flex;
    align-items: center;
    margin: 45px auto;
    cursor: pointer;

    @media (max-width: 780px) {
      font-size: var(--fz-sm);
    }

    &:hover,
    &:focus {
      transition: var(--transition);
      transform: translateX(5px);
    }

    &:before {
      margin: 0 13px 0 0;
      content: "";
      height: 1px;
      width: 5%;
      background-color: var(--blue);
      display: block;

      @media (max-width: 1080px) {
        width: 6%;
      }

      @media (max-width: 780px) {
        margin: 0 7px 0 0;
        width: 8%;
      }
    }
  }

  svg {
    margin: 0 0 20px;
    border-radius: 50%;
    background: var(--blue);
    padding: 15px 15px;
    width: 30px;
    height: 30px;
    box-shadow: 0 5px 10px var(--dark-blue);
  }

  &:nth-of-type(even) {
    .project-content {
      grid-column: 7 / -1;
      grid-row: 1 / 1;
      text-align: left;

      .content {
        float: right;
      }

      @media (max-width: 1080px) {
        grid-column: 5 / 1;
        float: left;
      }

      @media (max-width: 768px) {
        grid-column: 1 / 1;
      }
    }
  }
`;

const Content: React.FC = () => {
  return (
    <>
      {ContentInformation.map((info: any) => (
        <StyledContent key={info.id}>
          <div className="project-content">
            <div className="content">
              <div className="icons">
                <Icons name={info.icon} />
              </div>
              <h1 className="title-heading">{info.title}</h1>

              <div
                className="paragraph"
                dangerouslySetInnerHTML={{ __html: info.paragraph }}
              />

              <div className="learnMore">
                <span>Learn More</span>
              </div>
            </div>
          </div>
          <StyledImage>
            <div className={info.className}>
              {/* <Image
                src={`/image/Content/${info.image}`}
                alt="Sample Image"
                width={500}
                height={500}
              /> */}
              <img src={`/image/Content/${info.image}`} alt="" />
            </div>
          </StyledImage>
        </StyledContent>
      ))}
    </>
  );
};

export default Content;
