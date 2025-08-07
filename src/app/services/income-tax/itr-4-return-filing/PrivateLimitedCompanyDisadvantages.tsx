"use client";

import React, { useEffect, useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PrivateLimitedCompanyDisadvantages: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const featureItemsRef = useRef<HTMLDivElement[]>([]);
  const circleGraphicRef = useRef<HTMLDivElement>(null);



  return (
    <section ref={sectionRef} className={styles.container}>
  <div className={styles.contentWrapper}>
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <p className={styles.subHeading}>ITR-3 Instructions</p>
      <h2 className={styles.mainHeading}>Instructions for Filling ITR-3 Form</h2>
      <p className={styles.description}>
        Follow these key instructions carefully to ensure your ITR-3 filing is accurate and compliant:
      </p>

      <div ref={el => { if (el) featureItemsRef.current[0] = el }} className={styles.featureItem}>
        <div className={styles.featureIcon}>📝</div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Fill sections in order</h3>
          <p className={styles.featureDescription}>
            Complete the form sequentially: Part A → Schedules → Part B-TI → Part B-TTI → Verification.
          </p>
        </div>
      </div>

      <div ref={el => { if (el) featureItemsRef.current[1] = el }} className={styles.featureItem}>
        <div className={styles.featureIcon}>❌</div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Use ‘NA’ where applicable</h3>
          <p className={styles.featureDescription}>
            Mention ‘NA’ (Not Applicable) clearly in fields that do not apply to your situation.
          </p>
        </div>
      </div>

      <div ref={el => { if (el) featureItemsRef.current[2] = el }} className={styles.featureItem}>
        <div className={styles.featureIcon}>🔢</div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Rounding off values</h3>
          <p className={styles.featureDescription}>
            Round off figures to the nearest rupee. Round total income and tax liability to the nearest ₹10.
          </p>
        </div>
      </div>

      <div ref={el => { if (el) featureItemsRef.current[3] = el }} className={styles.featureItem}>
        <div className={styles.featureIcon}>🏢</div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Select employer type accurately</h3>
          <p className={styles.featureDescription}>
            Government employees must select “Government” or “PSU” appropriately under the employer type.
          </p>
        </div>
      </div>

      <div ref={el => { if (el) featureItemsRef.current[4] = el }} className={styles.featureItem}>
        <div className={styles.featureIcon}>🌍</div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Restriction for Double Taxation Relief</h3>
          <p className={styles.featureDescription}>
            If claiming relief under Double Taxation Avoidance Agreement (DTAA), avoid using ITR-3. Use ITR forms applicable to such cases.
          </p>
        </div>
      </div>

      <div ref={el => { if (el) featureItemsRef.current[5] = el }} className={styles.featureItem}>
        <div className={styles.featureIcon}>📆</div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Filing previous years’ returns</h3>
          <p className={styles.featureDescription}>
            You can file returns for the past 2 years only under conditions defined in Section 139(4) or 139(5).
          </p>
        </div>
      </div>
    </div>

    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={circleGraphicRef} className={styles.circleGraphic}>
        <p className={styles.circleText}>Filing Tips</p>
      </div>
    </div>
  </div>
</section>

  
  );
};

export default PrivateLimitedCompanyDisadvantages; 