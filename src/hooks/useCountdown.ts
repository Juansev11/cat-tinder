import { useEffect, useState } from 'react';

const useCountdown = (targetSeconds: number) => {
  const [remainingSeconds, setRemainingSeconds] = useState(targetSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds((lastValue) => lastValue - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetSeconds]);

  return remainingSeconds;
};

export { useCountdown };
