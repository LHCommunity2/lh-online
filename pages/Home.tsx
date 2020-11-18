import React, { useContext } from "react";
import styled from "styled-components";
import Icons from "../components/icons/icons";
import Theme from "../styles/CssVariables";
import { GlobalStateContext } from "../Context/GlobalState";

const HomeStyled = styled.div`
  padding: 50px 120px 0;
  ${Theme.boxShadow}

  @media (max-width: 1080px) {
    padding: 50px 100px 0;
  }

  @media (max-width: 768px) {
    padding: 35px 30px 0;
  }

  @media (max-width: 492px) {
    padding: 30px 20px;
  }

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
  const { toggleSidebar, dispatch } = useContext(GlobalStateContext);

  const toggle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    dispatch({
      type: "toggleSidebar",
      payload: { toggleSidebar: !toggleSidebar.status },
    });
  };

  return (
    <>
      <div className="background main">
        <HomeStyled>
          <div className="menu" onClick={(event) => toggle(event)}>
            <Icons name="Menu" />
          </div>
          <section>
            <h1>
              LIFE <span className="line">CHANGE</span>
            </h1>

            <p>
              Now to him who is able to do immeasurably more than all we ask or
              imagine, according to His power that is at work within us
              Ephesians 3:20
            </p>

            <button>NEWS EVENT</button>
          </section>
        </HomeStyled>
      </div>
    </>
  );
};

export default Home;
