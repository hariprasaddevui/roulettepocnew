import React from 'react'
import styles from './BetBoard.module.css';

export default function StaticDevelopedBB() {
    return (
        <div className={styles.betSpotGrid}>
        <div className={`${styles.betSpotItem} ${styles.betSpotzero} ${styles.btl} ${styles.bd}`}>0</div>
        
        <div className={styles.mainBets}>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>3</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>6</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>9</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>12</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>15</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>18</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>21</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>24</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>27</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>30</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>33</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>36</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>2</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>5</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>8</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>11</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>14</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>17</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>20</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>23</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>26</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>29</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>32</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>35</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>1</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>4</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>7</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>10</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>13</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>16</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>19</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>22</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>25</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>28</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>31</div>
          <div className={`${styles.betSpotItem} ${styles.btl}`}>34</div>
        </div>
      
        <div className={styles.twoToOne}>
          <div className={`${styles.betSpotItem} ${styles.btl} ${styles.br}`}>2to1</div>
          <div className={`${styles.betSpotItem} ${styles.btl} ${styles.br}`}>2to1</div>
          <div className={`${styles.betSpotItem} ${styles.btl} ${styles.br} ${styles.bd}`}>2to1</div>
        </div>
      
        <div className={styles.bottom}>
          <div className={`${styles.betSpotItem} ${styles.cell1} ${styles.cell} ${styles.btl}`}>1st 12</div>
          <div className={`${styles.betSpotItem} ${styles.cell2} ${styles.cell} ${styles.btl}`}>2nd 12</div>
          <div className={`${styles.betSpotItem} ${styles.cell3} ${styles.cell} ${styles.btl} ${styles.br}`}>3rd 12</div>
          <div className={`${styles.betSpotItem} ${styles.cell} ${styles.btl} ${styles.bd} ${styles.borderBLB}`}>1-18</div>
          <div className={`${styles.betSpotItem} ${styles.cell} ${styles.btl} ${styles.bd}`}>EVEN</div>
          <div className={`${styles.betSpotItem} ${styles.cell} ${styles.red} ${styles.btl} ${styles.bd}`}></div>
          <div className={`${styles.betSpotItem} ${styles.cell} ${styles.black} ${styles.btl} ${styles.bd}`}></div>
          <div className={`${styles.betSpotItem} ${styles.cell} ${styles.btl} ${styles.bd}`}>ODD</div>
          <div className={`${styles.betSpotItem} ${styles.cell} ${styles.btl} ${styles.bd} ${styles.br} ${styles.borderBRB}`}>19-36</div>
        </div>
      </div>
      
    )
}
 