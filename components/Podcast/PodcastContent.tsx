import React, { useContext, useEffect } from "react";
import Link from "next/link";
import Podcast from "../utils/Podcast.json";
import { dark } from "../../styles/Theme";
import AosInit from "../utils/aos";
import { GlobalStateContext } from "../../Context/GlobalState";
import { StyledContent, StyledImage } from "../../styles/StyledContent";
import styled from "styled-components";
import Image from "next/image";

const StyledPodcastContent = styled.div`
  position: relative;
  padding: 180px 0 80px;

  svg {
    position: absolute;
    top: 0;
    width: 100%;
  }

  .podcast-section {
    z-index: 1;
    text-align: center;
    margin: 0 auto;
    max-width: 600px;

    h1 {
      font-size: 40px;
    }

    span {
      color: var(--dirty-white);
      line-height: 28px;
    }

    .specific-podcast-ep {
      margin: 50px auto;
    }

    .podcast-playlist {
      margin: 50px auto;
    }

    .title {
      margin: 100px auto 60px;
    }
  }
`;

const PodcastContent: React.FC = () => {
  const { navbar } = useContext(GlobalStateContext);

  useEffect(AosInit, []);

  return (
    <>
      <StyledContent data-aos="fade-right">
        <div className="project-content">
          <div className="content">
            <h1 className="title-heading">Lh Global Community Radio</h1>
            <div
              className="paragraph"
              dangerouslySetInnerHTML={{
                __html:
                  "Enjoy these podcasts made especially for the holidays to listen to along with family at home or virtually with friends! Feel free to listen to new ones or re-listen to the great ones throughout the week for an extra dose of inspiration.",
              }}
            />

            <div className="learnMore">
              <Link href="https://open.spotify.com/show/49m3buxtd8UrQKa5lSMJFs">
                <span>Listen Podcast</span>
              </Link>
            </div>
          </div>
        </div>
        <StyledImage>
          <div className="wrapper">
            {/* <Image
                src={`/image/Content/${info.image}`}
                alt="Sample Image"
                width={500}
                height={500}
              /> */}
            <Image width={400} height={400} src={`/image/gadget.jpg`} alt="" />
          </div>
        </StyledImage>
      </StyledContent>
      <StyledPodcastContent
        style={{ background: navbar ? dark.background : "#e8eef5" }}
      >
        <svg
          viewBox="0 0 1348 134"
          fill={navbar ? "#181A1B" : "#fff"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 108.5V0H1348V133.5C1229.33 102.667 911.8 51.8 591 95C270.2 138.2 63.6667 122 0.5 108.5Z"
            fill={navbar ? "#181A1B" : "#fff"}
          />
        </svg>

        <div className="podcast-section">
          <h1>Podcast Episodes</h1>
          <span>
            Checkout this page every sunday morning to hear on of our LH Podcast
            episode. We bring Gods word closer to you
          </span>
          {Podcast.map((podcast: any, index: number) => (
            <div className="specific-podcast-ep">
              <iframe
                key={index}
                src={podcast.link}
                width="100%"
                height="232"
                frameBorder="0"
                allowTransparency={true}
                allow="encrypted-media"
              ></iframe>
            </div>
          ))}

          <div className="podcast-playlist">
            <h1 className="title">Podcast Archives</h1>
            <iframe
              src="https://open.spotify.com/embed/playlist/4EhxuVtmOQRpHxrIsifHyG"
              width="100%"
              height="600"
              frameBorder="0"
              allowTransparency={true}
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </StyledPodcastContent>
    </>
  );
};

export default PodcastContent;
