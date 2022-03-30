import { spacing } from './units';

const white = '#fff';
const black = '#111';

const palette = {
  common: {
    black,
    white,
  },
  primary: {
    main: '#0070F3',
    light: '#146DD6',
    contrastText: white,
  },
  error: {
    main: '#A51C30',
    light: '#A7333F',
    contrastText: white,
  },
  grey: {
    100: '#EAEAEA',
    200: '#C9C5C5',
    300: '#888',
    400: '#666',
  },
};

const typography = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
};

export const theme = {
  palette,
  typography
};
