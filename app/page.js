'use client';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Neon color orbs */}
      <div className={styles.neonOrb} style={{ '--color': '#ff00ff', '--delay': '0s', '--duration': '6s' }}></div>
      <div className={styles.neonOrb} style={{ '--color': '#00ffff', '--delay': '1s', '--duration': '6s' }}></div>
      <div className={styles.neonOrb} style={{ '--color': '#ffff00', '--delay': '2s', '--duration': '6s' }}></div>
      <div className={styles.neonOrb} style={{ '--color': '#ff0080', '--delay': '3s', '--duration': '6s' }}></div>
      <div className={styles.neonOrb} style={{ '--color': '#00ff80', '--delay': '1.5s', '--duration': '6s' }}></div>
      <div className={styles.neonOrb} style={{ '--color': '#8000ff', '--delay': '2.5s', '--duration': '6s' }}></div>

      {/* Cat */}
      <div className={styles.cat}>
        <div className={styles.catBody}>
          {/* Head */}
          <div className={styles.catHead}>
            {/* Ears */}
            <div className={styles.earLeft}>
              <div className={styles.earInner}></div>
            </div>
            <div className={styles.earRight}>
              <div className={styles.earInner}></div>
            </div>

            {/* Face */}
            <div className={styles.face}>
              {/* Eyes */}
              <div className={styles.eyeLeft}>
                <div className={styles.pupil}></div>
                <div className={styles.shine}></div>
              </div>
              <div className={styles.eyeRight}>
                <div className={styles.pupil}></div>
                <div className={styles.shine}></div>
              </div>

              {/* Nose */}
              <div className={styles.nose}></div>

              {/* Mouth */}
              <div className={styles.mouthLeft}></div>
              <div className={styles.mouthRight}></div>

              {/* Whiskers */}
              <div className={styles.whiskerLeftTop}></div>
              <div className={styles.whiskerLeftBottom}></div>
              <div className={styles.whiskerRightTop}></div>
              <div className={styles.whiskerRightBottom}></div>
            </div>
          </div>

          {/* Body */}
          <div className={styles.torso}>
            {/* Chest fluff */}
            <div className={styles.chestFluff}></div>
          </div>

          {/* Tail */}
          <div className={styles.tail}></div>
        </div>
      </div>
    </div>
  );
}
