import { Theme } from '@emotion/react';

const white = '#fff';
const black = '#4A4A4A';
const grey = '#9B9B9B';

const palette = {
  common: {
    black,
    white,
    grey,
  },
  primary: {
    main: '#b197ff',
  },
};

const typography = {
  fontSizes: {
    xs: '0.694rem',
    sm: '0.833rem',
    base: '1rem',
    md: '1.2rem',
    lg: '1.44rem',
    xl: '1.728rem',
    xxl: '2.074rem',
  },
};

const border = {
  basic: '1px solid rgba(0, 0, 0, 0.04);',
};
const borderRadius = {
  subtle: '4px',
  round: '12px',
  circle: '9999px',
};

const boxShadow = {
  basic: '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);',
};

export const theme: Theme = {
  palette,
  typography,
  borderRadius,
  boxShadow,
  border,
};
