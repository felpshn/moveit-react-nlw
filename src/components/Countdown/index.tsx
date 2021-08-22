import { useState, useCallback, useEffect } from 'react';

import styles from './Countdown.module.scss';

export default function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const handleCountdownState = () => {
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const handleCountdown = useCallback(() => {
    if (isActive && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      setTime(25 * 60);
    }
  }, [isActive, time]);

  useEffect(() => {
    handleCountdown();
  }, [handleCountdown]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {!isActive ? (
        <button
          type="button"
          className={styles.countdownButtonStart}
          onClick={handleCountdownState}
        >
          Iniciar
        </button>
      ) : (
        <button
          type="button"
          className={styles.countdownButtonStop}
          onClick={handleCountdownState}
        >
          Parar
        </button>
      )}
    </div>
  );
}
