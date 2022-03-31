import { css } from '@emotion/react';

import NunitoBoldFont from '@/assets/fonts/Nunito-Bold.ttf';
import NunitoLightFont from '@/assets/fonts/Nunito-Light.ttf';
import NunitoRegularFont from '@/assets/fonts/Nunito-Regular.ttf';

export default css`
  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoRegularFont}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoLightFont}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoBoldFont}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`;
