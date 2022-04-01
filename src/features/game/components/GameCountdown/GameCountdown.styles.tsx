import styled from '@emotion/styled';

import { Text } from '@/components/Elements';

export const Countdown = styled.div`
  position: relative;
  height: 4rem;
  width: 4rem;
`;

export const CountdownCircle = styled.g`
  fill: ${(props) => props.theme.palette.common.white};
  stroke: none;
`;

export const CountdownCircleElapsed = styled.circle`
  stroke-width: 7px;
  stroke: grey;
`;

export const CountdownCircleRemaining = styled.path`
  /* Just as thick as the original ring */
  stroke-width: 7px;

  /* Rounds the line endings to create a seamless circle */
  stroke-linecap: round;

  /* Makes sure the animation starts at the top of the circle */
  transform: rotate(90deg);
  transform-origin: center;

  /* One second aligns with the speed of the countdown timer */
  transition: 1s linear all;

  /* Allows the ring to change color when the color value updates */
  stroke: ${(props) => props.theme.palette.primary.main};
`;

export const CountdownSVG = styled.svg`
  transform: scaleX(-1);
`;

export const CountdownRemaining = styled(Text)`
  color: ${(props) => props.theme.palette.primary.main};
  line-height: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
