import React, { useState, useEffect } from 'react';
// import RaceTrackIconLandscape from 'public\Images\RaceTrackIcon.svg';
// import MinMaxIconLandscape from 'public\Images\MinMaxIcon.svg';
import BetBoardLandscape from './BetBoardLandscape';
import RaceTrackLandscape from './RaceTrackLandscape';
import styles from './GridScaleResponsiveLandscape.module.css';

const calculateLandscapeScale = (screenWidth: number) => {
    const maxScreenWidth = 667;
    const minScreenWidth = 568;
    const maxDivWidth = 508;
    const minDivWidth = 472;

    if (screenWidth >= maxScreenWidth) return 1;
    if (screenWidth <= minScreenWidth) return minDivWidth / maxDivWidth;

    const scaleFactor = (maxDivWidth - minDivWidth) / (maxScreenWidth - minScreenWidth);
    const currentWidth = minDivWidth + (screenWidth - minScreenWidth) * scaleFactor;
    return currentWidth / maxDivWidth;
};

export default function GridScaleResponsiveLandscape() {
    const [scale, setScale] = useState(1);
    const [isBetBoardVisible, setIsBetBoardVisible] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);

    useEffect(() => {
        const updateScale = () => {
            const screenWidth = window.innerWidth;
            const newScale = calculateLandscapeScale(screenWidth);
            setScale(newScale);
        };

        updateScale(); // Initial scale
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    const betBoardClass = isMinimized ? styles.isMinimized : '';
    // const raceTrackClass = isMinimized ? styles.isMinimized : styles.raceTrackShuffleHeight;
    const raceTrackClass = isMinimized ? styles.isRaceTrackisMinimized : '';


    return (
        <div className={styles.gameUIResponsiveLandscape}>
            <div
                className={styles.gameUIScaleLandscape}
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'bottom center',
                }}
            >
                {isBetBoardVisible ? (
                    <BetBoardLandscape className={betBoardClass} />
                ) : (
                    <RaceTrackLandscape className={raceTrackClass} />
                )}
            </div>

            <div className={styles.btnSection}>
                <div
                    className={styles.RaceTrackIconBtn}
                    onClick={() => setIsBetBoardVisible(prev => !prev)}
                >
                     <img src="/Images/RaceTrackIcon.svg" alt="Race Track Icon" />
                </div>
                <div
                    className={styles.MinMaxIconBtn}
                    onClick={() => setIsMinimized(prev => !prev)}
                >
                     <img src="/Images/MinMaxIcon.svg" alt="Race Track Icon" />
                </div>
            </div>
        </div>
    );
}
