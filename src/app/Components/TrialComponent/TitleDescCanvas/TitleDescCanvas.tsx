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
}

const TrademarkRegistration: React.FC<TrademarkRegistrationProps> = ({
  heading = "Types of Trademark Registrations in India",
  subHeading = "Trademark Registration Guide",
  description = "In India, various trademark registrations cater to different needs and purposes, enabling consumers to recognize products and services associated with specific providers.",
  features,
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
              <div className={styles.featureHeadingContainer}>
                <div className={styles.featureIcon} style={{ color: "#B40068" }}>
                  {item.icon}
                </div>
                <h3 className={styles.featureHeading}>{item.title}</h3>
              </div>
              <div className={styles.featureTextContent}>
                <p className={styles.featureDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrademarkRegistration;
