import React from "react";
import styled from "styled-components";
import Icons from "../components/icons/icons";

const HomeStyled = styled.div`
  padding: 50px 70px 0 100px;
  font-family: var(--font-sans);
  display: flex;

  h1 {
    max-width: 100px;
    font-size: var(--fz-heading);
    color: #fff;
  }

  p {
    transition: var(--transition);
    margin: 150px 0 0 0;
    max-width: 430px;
    line-height: 32px;
    font-weight: 200px;
    font-size: var(--fz-xxl);
    color: #fff;
  }

  button {
    cursor: pointer;
    margin: 50px 0;
    background: transparent;
    border-radius: var(--border-radius);
    text-decoration: none;
    transition: var(--transition);
    border: solid 1px #fff;
    color: #fff;
    padding: 15px 30px;

    &:hover,
    &:focus {
      background-color: var(--green-tint);
    }
  }
`;

const Home: React.FC = () => {
  return (
    <div className="background">
      <HomeStyled>
        <section>
          <h1>
            LIFE <span className="line">CHANGE</span>
          </h1>

          <p>
            Now to him who is able to do immeasurably more than all we ask or
            imagine, according to His power that is at work within us Ephesians
            3:20
          </p>

          <button>NEWS EVENT</button>
        </section>
        <div>
          <Icons name="Menu" />
        </div>
      </HomeStyled>
    </div>
  );
};

export default Home;
