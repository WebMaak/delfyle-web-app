"use client";

import React, { useEffect, useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PrivateLimitedCompanyBenefits: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const featureItemsRef = useRef<HTMLDivElement[]>([]);
  const circleGraphicRef = useRef<HTMLDivElement>(null);



  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.contentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <p className={styles.subHeading}>Why Choose Private Limited?</p>
          <h2 className={styles.mainHeading}>Benefits of a Private Limited Company</h2>
          <p className={styles.description}>
            Private limited companies offer numerous advantages that make them the preferred choice for businesses looking to establish a strong foundation in India.
          </p>

          <div ref={el => { if (el) featureItemsRef.current[0] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon}>🛡️</div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Limited Liability</h3>
              <p className={styles.featureDescription}>
                Protects personal assets from company debts. Shareholders are only liable to the extent of their shareholding.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[1] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon}>🏛️</div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Separate Legal Entity</h3>
              <p className={styles.featureDescription}>
                Independent identity from its owners. The company can own property, enter contracts, and sue or be sued in its own name.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[2] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon}>💰</div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Ease of Raising Funds</h3>
              <p className={styles.featureDescription}>
                Attracts investments from venture capitalists and angel investors. Better credibility for securing loans and funding.
              </p>
            </div>
          </div>
        </div>
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={circleGraphicRef} className={styles.circleGraphic}>
            <p className={styles.circleText}>Benefits</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateLimitedCompanyBenefits; 