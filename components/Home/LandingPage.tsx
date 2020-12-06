import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { GlobalStateContext } from "../../Context/GlobalState";

const HomeStyled = styled.div`
  top: 0;

  @media (max-width: 1080px) {
    padding: 80px 100px;
  }

  @media (max-width: 768px) {
    padding: 35px 30px 0;
  }

  @media (max-width: 492px) {
    padding: 30px 20px;
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
`;

const Home: React.FC = () => {
  const { toggleSide, dispatch1 } = useContext(GlobalStateContext);

  const toggle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    dispatch1({
      type: "toggleSidebar",
      payload: { toggleSidebar: !toggleSide },
    });
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <main>
      <video id="video" autoPlay muted loop poster="video/background.png">
        <source src="video/blessing.mp4" type="video/mp4" />
      </video>
      <div className="background main">
        <HomeStyled>
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
