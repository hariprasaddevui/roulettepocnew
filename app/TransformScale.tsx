import React, { useState, useEffect, CSSProperties } from "react";
import './TransformScale.css';
import styles from './GameContent.module.css';
import GridScaleResponsiveLandscape from './gridScaleResponsiveLandscape'
import GridScaleResponsivePortrait from './gridScaleResponsivePortrait'

export default function TransformScale() {
  const [scale, setScale] = useState<number>(1);

  // Function to calculate the scale dynamically
  const calculateScale = (screenWidth: number): number => {
    const baseDivWidth = 672;

    if (screenWidth >= 1800) return 802.77 / baseDivWidth;
    if (screenWidth >= 1512) {
      // 1512–1800
      const start = 1512, end = 1800;
      const startWidth = 672, endWidth = 802.77;
      const currentWidth = startWidth + ((screenWidth - start) * (endWidth - startWidth)) / (end - start);
      return currentWidth / baseDivWidth;
    }

    if (screenWidth >= 1366) {
      // 1366–1512
      const start = 1366, end = 1512;
      const startWidth = 609.34, endWidth = 672;
      const currentWidth = startWidth + ((screenWidth - start) * (endWidth - startWidth)) / (end - start);
      return currentWidth / baseDivWidth;
    }

    if (screenWidth >= 1024) {
      // 1024–1366
      const start = 1024, end = 1366;
      const startWidth = 454.05, endWidth = 609.34;
      const currentWidth = startWidth + ((screenWidth - start) * (endWidth - startWidth)) / (end - start);
      return currentWidth / baseDivWidth;
    }

    return 454.05 / baseDivWidth;
  };

  useEffect(() => {
    const updateScale = (): void => {
      const screenWidth = window.innerWidth;
      setScale(calculateScale(screenWidth));
    };

    // Initial scale calculation
    updateScale();

    // Add resize event listener
    window.addEventListener("resize", updateScale);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  // Tooltip updater
  useEffect(() => {
    const updateTooltip = () => {
      const elements = document.querySelectorAll('.roads, .betBoard');

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const tooltipText = `W: ${Math.round(rect.width)}px, H: ${Math.round(rect.height)}px`;
        el.setAttribute('title', tooltipText);
      });
    };

    updateTooltip();
    window.addEventListener('resize', updateTooltip);

    return () => {
      window.removeEventListener('resize', updateTooltip);
    };
  }, []);

  const divStyle: CSSProperties = {
    transform: `scale(${scale})`,
    transformOrigin: "center bottom",
    position: 'absolute',
  };

  return (
    <>
      <div className="title">Transform Scale</div>
      {/* <div className="master desktopView">
        <div style={divStyle} className="scaleLogic">
          <div className="mainNew">
            <div className="wrapper">
              <div className="roads"></div>
              <div className="betBoard"></div>
              <div className="roads rightRoads"></div>
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.gameGridContent}>
        <GridScaleResponsivePortrait />
        <GridScaleResponsiveLandscape />

      </div>


    </>
  );
}
