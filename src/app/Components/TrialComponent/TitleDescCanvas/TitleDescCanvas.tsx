"use client";

import React, { useRef } from "react";
import styles from "../ComponentEleven/ComponentEleven.module.css";

interface FeatureItem {
  icon: React.ReactNode; // You can pass any react-icon from props
  title: string;
  description: string;
}

interface TrademarkRegistrationProps {
  heading?: string;
  subHeading?: string;
  description?: string;
  features: FeatureItem[];
  rightColumnTranslate?: { x: number; y: number }; // Controls translate values
}

const TrademarkRegistration: React.FC<TrademarkRegistrationProps> = ({
  heading = "Types of Trademark Registrations in India",
  subHeading = "Trademark Registration Guide",
  description = "In India, various trademark registrations cater to different needs and purposes, enabling consumers to recognize products and services associated with specific providers.",
  features,
  rightColumnTranslate = { x: -20, y: -50 } // Default position
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.contentWrapper}>
        {/* Left Column */}
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <p className={styles.subHeading}>{subHeading}</p>
          <h2 className={styles.mainHeading}>{heading}</h2>
          <p className={styles.description}>{description}</p>

          {features.map((item, idx) => (
            <div key={idx} className={styles.featureItem}>
              <div className={styles.featureIcon} style={{ color: "#B40068" }}>
                {item.icon}
              </div>
              <div className={styles.featureTextContent}>
                <h3 className={styles.featureHeading}>{item.title}</h3>
                <p className={styles.featureDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <p
            className={styles.subHeading}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(${rightColumnTranslate.x}%, ${rightColumnTranslate.y}%)`,
              fontSize: "1.2rem"
            }}
          >
            {subHeading}
          </p>
          <div className={styles.contentStack}>
            <span
              className={`${styles.square} ${styles.squareTl}`}
              style={{ left: "150%" }}
            ></span>
            <span
              className={`${styles.square} ${styles.squareBr}`}
              style={{ right: "150%" }}
            ></span>
            <span className={`${styles.star} ${styles.star1}`}></span>
            <span className={`${styles.star} ${styles.star2}`}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrademarkRegistration;
