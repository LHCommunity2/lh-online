import React from "react";
import styled from "styled-components";
import { ContentInformation } from "../../utils/config";
import Icons from "../icons/icons";
import Image from "next/image";

const StyledImage = styled.div`
  position: relative;
  max-width: 300px;
  border-radius: 40px;

  @media (max-width: 768px) {
    margin: 50px auto 0px;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);

    -webkit-filter: var(--webkit-filter); /* Safari 6.0 - 9.0 */
    filter: var(--filter);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      -webkit-filter: var(--webkit-filter-colored); /* Safari 6.0 - 9.0 */
      filter: var(--filter-colored);

      &:after {
        top: 15px;
        left: 15px;
      }

      Image {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    Image {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--light-blue);
      top: 20px;
      left: 20px;
      bottom: -50px;
      z-index: -1;
    }
  }
`;

const StyledContent = styled.section`
  /* display: grid; */

  .project-content {
    position: relative;
    line-height: 1;
    font-family: var(--font-sans);

    /* grid-column: 1 / 7;
    grid-row: 1 / -1; */
    svg {
      margin: 20px 0;
      border-radius: 50%;
      background: var(--blue);
      padding: 15px 15px;
      width: 30px;
      height: 30px;
      box-shadow: 0 5px 10px var(--dark-blue);
    }

    .title {
      margin: 20px 0;
      max-width: 500px;
      color: #22343f;
    }

    .paragraph {
      max-width: 570px;
      line-height: 24px;
      font-size: var(--fz-lg);
      color: var(--dirty-white);
    }
  }
`;

const Content: React.FC = () => {
  return (
    <StyledContent>
      {ContentInformation.map((info: any) => (
        <div key={info.id}>
          <div className="project-content">
            <div className="icons">
              <Icons name={info.icon} />
            </div>
            <h1 className="title">{info.title}</h1>

            <div
              className="paragraph"
              dangerouslySetInnerHTML={{ __html: info.paragraph }}
            />
          </div>
          <StyledImage>
            <div className="wrapper">
              <Image
                src={`/image/Content/${info.image}`}
                alt="Sample Image"
                width={500}
                height={500}
              />
            </div>
          </StyledImage>
        </div>
      ))}
    </StyledContent>
  );
};

export default Content;
