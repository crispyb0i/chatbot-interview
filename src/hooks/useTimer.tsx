import { useState, useEffect } from 'react';

export const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: number | undefined;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, seconds]);

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resumeTimer = () => {
    setIsActive(true);
  };

  return {
    seconds,
    isActive,
    resetTimer,
    pauseTimer,
    resumeTimer
  };
};