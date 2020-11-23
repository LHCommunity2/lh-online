import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Navbar } from "../index";
import Icons from "../icons/icons";
import Theme from "../../styles/CssVariables";
import { GlobalStateContext } from "../../Context/GlobalState";

const HomeStyled = styled.div`
  top: 0;

  ${Theme.boxShadow}

  @media (max-width: 1080px) {
    padding: 80px 100px;
  }

  @media (max-width: 768px) {
    padding: 35px 30px 0;
  }

  @media (max-width: 492px) {
    padding: 30px 20px;
  }

  .menu {
    display: none;
    text-align: right;

    svg {
      cursor: pointer;
      width: 40px;
      height: 40px;
    }

    @media (max-width: 768px) {
      transition: var(--transition);
      padding: 0 25px 0;
      display: block;
    }
  }

  .section {
    display: none;

    h1 {
      font-family: var(--font-sans);
      max-width: 100px;
      font-size: var(--fz-heading);
      color: var(--white);

      @media (max-width: 492px) {
        font-size: 80px;
      }
    }

    p {
      transition: var(--transition);
      margin: 150px 0 0 0;
      max-width: 500px;
      line-height: 32px;
      font-size: clamp(20px, 5vw, var(--fz-xxl));
      color: var(--white);
      font-weight: lighter;

      @media (max-width: 768px) {
        margin: 145px 0 0 0;
        font-size: var(--fz-xl);
      }

      @media (max-width: 492px) {
        margin: 130px 0 0 0;
      }
    }

    @media (max-width: 768px) {
      display: block;
    }
  }

  button {
    cursor: pointer;
    margin: 50px 0;
    background: transparent;
    border-radius: var(--border-radius);
    text-decoration: none;
    transition: var(--transition);
    border: solid 1px var(--white);
    color: var(--white);
    letter-spacing: 1px;
    padding: 15px 30px;

    &:hover,
    &:focus {
      background-color: var(--green-tint);
    }
  }
`;

const Home: React.FC = () => {
  const { state, dispatch } = useContext(GlobalStateContext);

  const toggle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    dispatch({
      type: "toggleSidebar",
      payload: { toggleSidebar: !state },
    });
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <main>
      <video id="video" autoPlay muted loop poster="video/Background.png">
        <source src="video/blessing.mp4" type="video/mp4" />
      </video>
      <Navbar />
      <div className="background main">
        <HomeStyled>
          <div className="menu" onClick={(event) => toggle(event)}>
            <Icons name="Menu" />
          </div>
          <div className="section">
            <h1>
              LIFE <span className="line-big">CHANGE</span>
            </h1>

            <p>
              Now to him who is able to do immeasurably more than all we ask or
              imagine, according to His power that is at work within us
              Ephesians 3:20
            </p>

            <button>NEWS EVENT</button>
          </div>
        </HomeStyled>
      </div>
    </main>
  );
};

export default Home;
