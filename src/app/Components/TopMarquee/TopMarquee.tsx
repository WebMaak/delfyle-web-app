import React, { useEffect, useState } from "react";
import styles from "./TopMarquee.module.css";

const TopMarquee: React.FC = () => {
  const [announcement, setAnnouncement] = useState<string>("");

  useEffect(() => {
    fetch('/api/announcement')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.announcement && data.announcement.text) {
          setAnnouncement(data.announcement.text);
        } else {
          setAnnouncement("");
        }
      });
  }, []);

  const marqueeText = announcement || "Welcome to Delfyle";

  return (
    <div className={styles.marqueeWrapper} aria-label="Scrolling announcement" onClick={() => {
      window.open('https://wa.me/+918697603824', '_blank');
    }}>
      <div className={styles.marquee}>
        <span className={styles.marqueeText}>{marqueeText}<span className={styles.dot} aria-hidden="true"></span></span>
        <span className={styles.marqueeText}>{marqueeText}<span className={styles.dot} aria-hidden="true"></span></span>
      </div>
    </div>
  );
};

export default TopMarquee;