import React from "react";
import styles from "./TopMarquee.module.css";

type TopMarqueeProps = {
  text?: string;
};

const defaultText =
  "ITR Filing for AY 2025–26 is Now Open! File your Income Tax Return on time and stay compliant. Our experts ensure accurate, hassle-free filing with personalized support. Get Started Today → ";

const TopMarquee: React.FC<TopMarqueeProps> = ({ text = defaultText }) => {
  return (
    <div className={styles.marqueeWrapper} aria-label="Scrolling announcement" onClick={() => {
      window.open('https://wa.me/+918697603824', '_blank');
    }}>
      <div className={styles.marquee}>
        <span className={styles.marqueeText}>{text}<span className={styles.dot} aria-hidden="true"></span></span>
        <span className={styles.marqueeText}>{text}<span className={styles.dot} aria-hidden="true"></span></span>
      </div>
    </div>
  );
};

export default TopMarquee; 