import { css } from "styled-components";

const Theme = {
  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--green-shadow);
    }
  `,
};

export default Theme;
