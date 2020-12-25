import React, { useEffect } from "react";
import styled from "styled-components";
import aboutData from "../utils/mockDataAbout";
import Icons from "../icons/icons";
import AosInit from "../utils/aos";
import Image from "next/image";

const StyledImage = styled.div`
  position: relative;
  border-radius: 40px;
  margin: 0 auto;

  .wrapper {
    display: block;
    position: relative;
    max-width: 1000px;
    text-align: center;
    border-radius: var(--border-radius);

    -webkit-filter: var(--webkit-filter);
    filter: var(--filter);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      -webkit-filter: var(--webkit-filter-colored);
      filter: var(--filter-colored);
    }

    img {
      position: relative;
      object-fit: cover;
      width: 450px;
      height: 420px;
      border-radius: var(--border-radius);
      transition: var(--transition);

      @media (max-width: 768px) {
        width: 250px;
        height: 250px;
      }

      &:hover,
      &:focus {
        transform: scale(1.1);
        transition: transform 0.2s;
      }
    }
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

  .paragraph {
    font-size: var(--fz-lg);
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
  useEffect(AosInit, []);

  return (
    <>
      {aboutData.map((info: any) => (
        <StyledContent key={info.id} data-aos="fade-right">
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
                <span>{info.learnMore}</span>
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
              <Image
                width={450}
                height={420}
                src={`/image/Content/${info.image}`}
                alt="about us image"
              />
            </div>
          </StyledImage>
        </StyledContent>
      ))}
    </>
  );
};

export default Content;
