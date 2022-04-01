import { useCallback, useMemo } from 'react';

import { useCountdown } from '@/hooks/useCountdown';

import {
  Countdown,
  CountdownCircle,
  CountdownCircleElapsed,
  CountdownCircleRemaining,
  CountdownRemaining,
  CountdownSVG,
} from './GameCountdown.styles';

type GameCountdownProps = React.ComponentPropsWithRef<'div'>;

const FULL_DASH_ARRAY = 283;
const TIME_LIMIT = 60;

export const GameCountdown: React.FC<GameCountdownProps> = () => {
  const countdown = useCountdown(60);

  const calculateTimeFraction = useCallback(() => {
    const rawTimeFraction = countdown / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }, [countdown]);

  const circleDasharray = useMemo(
    () => `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`,
    [calculateTimeFraction]
  );

  return (
    <Countdown>
      <CountdownSVG viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <CountdownCircle className="base-timer__circle">
          <CountdownCircleElapsed className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
          <CountdownCircleRemaining
            id="base-timer-path-remaining"
            strokeDasharray={circleDasharray}
            d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
          ></CountdownCircleRemaining>
        </CountdownCircle>
      </CountdownSVG>
      <CountdownRemaining variant="lg" weight="bold">
        {countdown}
      </CountdownRemaining>
    </Countdown>
  );
};
