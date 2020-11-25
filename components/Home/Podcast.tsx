import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import Icons from "../icons/icons";
import { dark, light } from "../../styles/Theme";
import { GlobalStateContext } from "../../Context/GlobalState";

const StyleWrapper = styled.div`
  background: var(--semi-white);
  padding: 0;

  .dark {
    background: ${dark.background};
  }

  .light {
    background: ${light.background};
  }
`;

const StyledPodcast = styled.section`
  height: 350px;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;

  @media (max-width: 1080px) {
    padding: 0 150px 90px;
  }

  @media (max-width: 768px) {
    padding: 0 25px 60px;
  }

  @media (max-width: 480px) {
    padding: 0 20px 25px;
  }

  div {
    h1 {
      font-size: 28px;
    }

    ul {
      padding: 0 15px;
      width: 150px;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        fill: var(--semi-black);

        &:hover,
        &:focus {
          fill: var(--dirty-white);
        }
      }
    }
  }

  .podcast {
    width: 70%;
    height: 150px;

    @media (max-width: 1080px) {
      width: 100%;
      height: 100px;
    }

    iframe {
      padding: 0 0 5px;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
    }

    a {
      cursor: pointer;
      font-weight: bold;
      font-size: var(--fz-sm);
      text-decoration: none;

      .dark {
        color: ${light.color};
      }
    }
  }
`;

const Podcast: React.FC = () => {
  const { navbar } = useContext(GlobalStateContext);
  const socialIcons = ["Youtube", "Twitter", "Facebook"];

  return (
    <StyleWrapper>
      <div className={`${navbar ? "dark" : "light"}`}>
        <StyledPodcast>
          <div>
            <h5 className="child-heading">WEEKLY PODCAST</h5>
            <h1 className="title-heading">Self-Gratification</h1>
            <h6>Subscribe :</h6>
            <ul>
              {socialIcons.map((icons: any, index: number) => (
                <li key={index}>
                  <Link href="">
                    <a>
                      <Icons name={icons} />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="podcast">
            <iframe
              src="https://anchor.fm/lh-global-community/embed/episodes/Self-Gratification-ek6tnp/a-a57pl5"
              frameBorder="0"
              scrolling="no"
            />
            <div>
              <Link href="https://anchor.fm/lh-global-community?fbclid=IwAR2ksADWod8ohhgzlNXGMiqTU_Y5mR42x8OpA6dio7mPwQ1S-Mdjz9NH46Y">
                <a
                  className={`${
                    navbar ? "dark line-animation" : "child-heading"
                  }`}
                >
                  View webiste
                </a>
              </Link>
            </div>
          </div>
        </StyledPodcast>
      </div>
    </StyleWrapper>
  );
};

export default Podcast;
