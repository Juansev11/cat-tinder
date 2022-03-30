import { css } from '@emotion/react';

import InterBoldFontWoff from '@/assets/fonts/Inter-Bold.woff';
import InterBoldFontWoff2 from '@/assets/fonts/Inter-Bold.woff2';
import InterLightFontWoff from '@/assets/fonts/Inter-Light.woff';
import InterLightFontWoff2 from '@/assets/fonts/Inter-Light.woff2';
import InterRegularFontWoff from '@/assets/fonts/Inter-Regular.woff';
import InterRegularFontWoff2 from '@/assets/fonts/Inter-Regular.woff2';

export default css`
  @font-face {
    font-family: 'Inter';
    src: url(${InterRegularFontWoff2}) format('woff2'), url(${InterRegularFontWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterLightFontWoff2}) format('woff2'), url(${InterLightFontWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterBoldFontWoff2}) format('woff2'), url(${InterBoldFontWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
`;
