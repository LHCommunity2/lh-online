import styled from "styled-components";

const StyledEvent = styled.div`
  transition: var(--transition);
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  .noEvents {
    text-align: center;
    color: var(--dirty-white);
  }
`;

const StyledWrapper = styled.div`
  .header-text {
    transition: var(--transition);
    margin: 100px auto;
    .title-heading {
      margin: 0 auto;
      text-align: center;
      line-height: 30px;

      @media (max-width: 480px) {
        font-size: 30px;
        margin: 70px auto;
      }
    }

    p {
      transition: var(--transition);
      margin: 25px auto;
      max-width: 850px;
      font-weight: lighter;
      line-height: 28px;
      text-align: center;
    }
  }

  a {
    display: flex;
    text-decoration: none;
    outline-style: none;
    justify-content: center;
    align-items: center;
    margin: 50px auto 0;
    border: none;
    cursor: pointer;
    max-width: 200px;
    padding: 10px 0px;
    font-size: var(--fz-sm);
    border-radius: var(--border-radius);
    background: var(--blue);
    color: var(--white);
    transition: (--transition);
    box-shadow: 0 5px 10px var(--dark-blue);

    &:hover {
      background: var(--light-blue);
    }

    svg {
      margin-left: 8px;
      fill: var(--white);
    }
  }
`;

export { StyledEvent, StyledWrapper };
