import '@emotion/react';

type ColorPalette = {
  main: string;
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
    };
    typography: {
      fontSizes: {
        [key in TextFontVariants]: string;
      };
    };
    borderRadius: {
      subtle: string;
      round: string;
      circle: string;
    };
    boxShadow: {
      basic: string;
    };
    border: {
      basic: string;
    };
  }
}
