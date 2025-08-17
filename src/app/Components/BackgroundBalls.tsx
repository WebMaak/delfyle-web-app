"use client";
import styles from "./FeaturesSection/FeaturesSection.module.css";

export default function BackgroundBalls() {
  return (
    <>
      {/* Background Elements */}
      {/* <div className={styles.background} style={{position: 'relative'}} > */}
        <div className={`${styles.blob} ${styles.blobBlue}`}></div>
        <div className={`${styles.blob} ${styles.blobPurple}`}></div>
        <div className={`${styles.blob} ${styles.blobPink}`}></div>
      {/* </div> */}
    </>
  );
}
