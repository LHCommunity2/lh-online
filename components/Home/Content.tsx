import React, { useEffect } from "react";
import { StyledContent, StyledImage } from "../../styles/StyledContent";
import { ContentInformation } from "../utils/config";
import Icons from "../icons/icons";
import AosInit from "../utils/aos";

const Content: React.FC = () => {
  useEffect(AosInit, []);

  return (
    <>
      {ContentInformation.map((info: any) => (
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
