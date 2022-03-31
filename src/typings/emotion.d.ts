import '@emotion/react';

type ColorPalette = {
  main: string;
  light: string;
  contrastText: string;
};

type ColorRange = {
  100: string;
  200: string;
  300: string;
  400: string;
};

type TextWeightVariants = 'light' | 'normal' | 'bold';
type TextFontVariants = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'xxl';

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      common: {
        black: string;
        white: string;
        grey: string;
      };
      primary: ColorPalette;
      error: ColorPalette;
    };
    typography: {
      fontSizes: {
        [key in TextFontVariants]: string;
      };
    };
    borderRadius: {
      round: string;
      circle: string;
    };
    boxShadow: {
      cards: string;
    };
    border: {
      card: string;
    };
  }
}
