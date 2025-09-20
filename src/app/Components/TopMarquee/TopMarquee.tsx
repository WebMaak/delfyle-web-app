import React, { useEffect, useState, useRef } from "react";
import styles from "./TopMarquee.module.css";

const TopMarquee: React.FC = () => {
  const [announcement, setAnnouncement] = useState<string>("");
  const [repeatCount, setRepeatCount] = useState<number>(2);

  const marqueeText = announcement || "Welcome to Delfyle";
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  // Fetch announcement
  useEffect(() => {
    fetch("/api/announcement")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.announcement?.text) {
          setAnnouncement(data.announcement.text);
        } else {
          setAnnouncement("");
        }
      });
  }, []);

  // Calculate how many times to repeat text to fill screen
  useEffect(() => {
    const calculateRepeatCount = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const textWidth = textRef.current?.offsetWidth || 1; // avoid div by 0
      const minWidthToFill = containerWidth * 2; // we scroll to -50%, so need double
      const count = Math.ceil(minWidthToFill / textWidth);
      setRepeatCount(Math.max(2, count));
    };

    calculateRepeatCount();
    window.addEventListener("resize", calculateRepeatCount);
    return () => window.removeEventListener("resize", calculateRepeatCount);
  }, [announcement]);

  return (
    <div
      className={styles.marqueeWrapper}
      aria-label="Scrolling announcement"
      onClick={() => window.open("https://wa.me/+918697603824", "_blank")}
      ref={containerRef}
    >
      <div className={styles.marquee}>
        {Array.from({ length: repeatCount }).map((_, i) => (
          <span key={i} className={styles.marqueeText} ref={i === 0 ? textRef : null}>
            {marqueeText}
            <span className={styles.dot} aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopMarquee;

