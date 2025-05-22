import React, { useState, useEffect } from 'react';
import styles from './GridScaleResponsivePortrait.module.css';
import RaceTrackIconSrc from '../../../assets/RaceTrackIcon.svg';
import MinMaxIcon from '../../../assets/MinMaxIcon.svg';

import BetBoardPortrait from './BetBoardPortrait';
import RaceTrackPortrait from './RaceTrackPortrait';

const calculatePortraitScale = (screenWidth: number) => {
  const baseWidth = 375;
  const baseDivWidth = 277;
  const maxWidth = 628;
  const maxDivWidth = 332.93;
  const minWidth = 320;
  const minDivWidth = 231.72;

  if (screenWidth >= maxWidth) return maxDivWidth / baseDivWidth;

  if (screenWidth >= baseWidth) {
    const scaleFactor = (maxDivWidth - baseDivWidth) / (maxWidth - baseWidth);
    const currentWidth = baseDivWidth + (screenWidth - baseWidth) * scaleFactor;
    return currentWidth / baseDivWidth;
  }

  if (screenWidth >= minWidth) {
    const scaleFactor = (baseDivWidth - minDivWidth) / (baseWidth - minWidth);
    const currentWidth = minDivWidth + (screenWidth - minWidth) * scaleFactor;
    return currentWidth / baseDivWidth;
  }

  return minDivWidth / baseDivWidth;
};

export default function GridScaleResponsivePortrait() {
  const [scale, setScale] = useState(1);
  const [isBetBoardVisible, setIsBetBoardVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const screenWidth = window.innerWidth;
      const newScale = calculatePortraitScale(screenWidth);
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (

    <div className={styles.gameUIResponsivePortrait}>
      <div
        className={styles.gameUIScalePortrait}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'bottom center',
        }}
      >
        <div
          className={`${styles.gameUIShuffleAnimation} ${isBetBoardVisible ? styles.betBoardViewSliderMove : styles.raceTrackViewSliderMove
            }`}
        >
          {isBetBoardVisible ? (
            <BetBoardPortrait className={isMinimized ? styles.isMinimized : ''} />
          ) : (
            <RaceTrackPortrait className={isMinimized ? styles.isMinimized : styles.raceTrackShuffleHeight} />
          )}
        </div>
      </div>

      <div className={styles.btnSection}>
        <div
          className={styles.RaceTrackIconBtn}
          onClick={() => setIsBetBoardVisible((prev) => !prev)}
        >
           <img src="/Images/RaceTrackIcon.svg" alt="Race Track Icon" />
        </div>
        <div
          className={styles.MinMaxIconBtn}
          onClick={() => setIsMinimized((prev) => !prev)}
        >
         <img src="/Images/MinMaxIcon.svg" alt="Race Track Icon" />
        </div>
      </div>
    </div>

  );
}
