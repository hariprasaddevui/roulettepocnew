
import React from 'react'
import StaticModalsSrc from '../../../assets/CommonDesktopStats.svg';

import styles from './GridScaleResponsiveDesktop.module.css';


export default function StaticModals() {
  return (
    <div className={`${styles.staticModalsWidget}`}>
      <img src={StaticModalsSrc} />;
    </div>

  )
}
