import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Icons from "./icons/icons";
import Link from "next/link";
import { SideBarLinks } from "./utils/config";
import { Facebook, Youtube, GitHub } from "react-feather";
import { dark, light } from "../styles/Theme";
import { GlobalStateContext } from "../Context/GlobalState";
import AosInit from "./utils/aos";

const FooterWrapper = styled.div`
  width: 100%;
  position: relative;
  font-family: var(--font-sans);
  color: var(--white);
  transition: var(--transition);

  @media (max-width: 1080px) {
    background: var(--blue);
  }

  .curve {
    display: block;
    svg {
      z-index: -5;
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      object-fit: cover;
      fill: ${light.color};
    }

    @media (max-width: 1080px) {
      display: none;
    }
  }

  .copyright {
    text-align: center;
    padding: 20px 0;

    .line {
      border-bottom: 1px solid #aaaeb9;
    }

    span {
      font-size: var(--fz-sm);
    }
  }
`;

interface StyledType {
  isDark: boolean;
}

const StyledFooter = styled.div<StyledType>`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transition: var(--transition);

  div {
    margin: 0 20px 0 0;
  }

  img {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 1080px) {
    img {
      display: none;
    }
  }

  @media (max-width: 780px) {
    div {
      margin: 0 5px 0 0;
    }
  }

  @media (max-width: 480px) {
    div {
      margin: 15px 5px 0 0;
    }
  }

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding-top: 50px;

    ul {
      li {
        font-size: 16px;
      }

      @media (max-width: 480px) {
        font-size: 13px;
      }
    }

    @media (max-width: 1080px) {
      margin: 0 auto;
    }

    @media (max-width: 780px) {
      justify-content: flex-start;
      padding: 50px 30px;
    }

    @media (max-width: 480px) {
      padding: 50px 20px;
    }

    .Location {
      max-width: 230px;
      p {
        font-size: 16px;
        line-height: 25px;
      }

      button {
        margin: 5px 0;
        padding: 8px 20px;
      }

      .social-links {
        display: flex;
        align-items: center;

        li {
          margin-right: 30px;

          svg {
            color: #fff;
          }
        }
      }
    }

    ul {
      list-style: none;
      padding: 0;
      li {
        font-size: var(--fz-lg);
        margin: 0 0 12px;
      }
    }
  }
`;

const Footer: React.FC = () => {
  const { navbar } = useContext(GlobalStateContext);

  useEffect(AosInit, []);

  const socialIcons = [
    <Facebook size="22" />,
    <Youtube size="22" />,
    <GitHub size="22" />,
  ];
  return (
    <FooterWrapper>
      <div className="curve">
        <Icons name="Curve" style={navbar ? dark.fill : "var(--blue)"} />
      </div>
      <StyledFooter isDark={navbar} data-aos="fade-up">
        <div>
          <img src="/image/Logo2.svg" alt="" />
        </div>
        <div className="footer-content">
          <div className="Location">
            <h3>Location</h3>
            <p>
              Taft Street, Zone IV, Santa barbara, Iloilo, 5002 Santa Barbara,
              Philippines
            </p>

            <button>Location</button>

            <ul className="social-links">
              {socialIcons.map((icon: any, index: number) => (
                <li key={index}>
                  <Link href="">
                    <a>{icon}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="Menu">
            <h3>Menu</h3>
            <ul>
              {SideBarLinks.map((links: any, index: number) => (
                <li key={index}>{links.name}</li>
              ))}
            </ul>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <ul>
              <li>lhevansjuvybendayon@gmail.com</li>
              <li>+639092652902</li>
            </ul>
          </div>
        </div>
      </StyledFooter>
      <div className="copyright">
        <div className="line" />
        <span>&copy; 2020 LH Global Community Sta. Barbara, Iloilo</span>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
