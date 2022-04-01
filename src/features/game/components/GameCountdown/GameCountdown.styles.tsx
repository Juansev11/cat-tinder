import styled from '@emotion/styled';

export const Countdown = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
`;

export const CountdownCircle = styled.g`
  fill: none;
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
  stroke: currentColor;
`;

export const CountdownSVG = styled.svg`
  transform: scaleX(-1);
`;
