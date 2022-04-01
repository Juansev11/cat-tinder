import { useCallback, useMemo, useEffect } from 'react';

import { ConfigScreens } from '@/features/config/types/Config';
import { useCountdown } from '@/hooks/useCountdown';
import useStore, { StoreState } from '@/store/useStore';

import {
  Countdown,
  CountdownCircle,
  CountdownCircleElapsed,
  CountdownCircleRemaining,
  CountdownRemaining,
  CountdownSVG,
} from './GameCountdown.styles';

type GameCountdownProps = React.ComponentPropsWithoutRef<'div'>;

const selectedSecondsSelector = (state: StoreState) => state.selectedSeconds;
const setCurrentScreenSelector = (state: StoreState) => state.setCurrentScreen;

export const GameCountdown: React.FC<GameCountdownProps> = () => {
  const selectedSeconds = useStore(selectedSecondsSelector);
  const setCurrentScreen = useStore(setCurrentScreenSelector);
  const countdown = useCountdown(selectedSeconds);

  const calculateTimeFraction = useCallback(() => {
    const rawTimeFraction = countdown / selectedSeconds;
    return rawTimeFraction - (1 / selectedSeconds) * (1 - rawTimeFraction);
  }, [countdown, selectedSeconds]);

  const circleDasharray = useMemo(
    () => `${(calculateTimeFraction() * 283).toFixed(0)} 283`,
    [calculateTimeFraction]
  );

  useEffect(() => {
    if (countdown === 0) {
      setCurrentScreen(ConfigScreens.RESULTS);
    }
  }, [countdown, setCurrentScreen]);

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
