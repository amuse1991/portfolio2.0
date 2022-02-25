import { css } from "styled-components";

// reffered from material design typo system;

export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 600
};

const typo = {
  headline1: css`
    font-size: 6rem;
    font-weight: ${fontWeight.bold};
  `,
  headline2: css`
    font-size: 3.75rem;
    font-weight: ${fontWeight.bold};
  `,
  headline3: css`
    font-size: 3rem;
  `,
  headline4: css`
    font-size: 2.125rem;
  `,
  headline5: css`
    font-size: 1.5rem;
  `,
  haedline6: css`
    font-size: 1.25rem;
    font-weight: ${fontWeight.medium};
  `,
  body1: css`
    font-size: 1rem;
  `,
  body2: css`
    font-size: 0.875rem;
  `,
  subtitle1: css`
    font-size: 1rem;
    font-weight: ${fontWeight.medium};
  `,
  subtitle2: css`
    font-size: 0.875rem;
  `,
  overline: css`
    font-size: 0.625rem;
  `,
  caption: css`
    font-size: 0.75rem;
  `
};

export default typo;
