import React from 'react';
import styles from './TransformScale';


import StaticBetBoardSrc from 'Images/CommonDesktopBetBoard.svg';
import StaticChipSrc from '../../../assets/StaticChip.svg';
import StaticResultRingSrc from '../../../assets/StaticResultRing.svg';
import BetSpotHoverSrc from '../../../assets/BetSpotHover.svg';
import StaticDevelopedBB from './StaticDevelopedBB'

export default function StaticBetBoard() {
  return (
    <>
      <div style={{ display: "none" }}>
      <StaticDevelopedBB />
      </div>
      <section>
        <div className={styles.betBoardWidget}>
          <img src={StaticBetBoardSrc} />

          <div className={styles.chipWrapper}>
            <div className={styles.StacticChip} style={{ left: '60px', top: '60px' }}>
              <img src={StaticChipSrc} />
            </div>
            <div className={styles.StacticChip} style={{ left: '108px', top: '11px' }}>
              <img src={StaticChipSrc} />
            </div>
            <div className={styles.StacticChip} style={{ left: '204px', top: '108px' }}>
              <img src={StaticChipSrc} />
            </div>
            <div className={styles.StacticChip} style={{ left: '380px', top: '44px' }}>
              <img src={StaticResultRingSrc} />
            </div>
            <div className={styles.StacticChip} style={{ left: '432px', top: '96px' }}>
              <img src={BetSpotHoverSrc} />
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
