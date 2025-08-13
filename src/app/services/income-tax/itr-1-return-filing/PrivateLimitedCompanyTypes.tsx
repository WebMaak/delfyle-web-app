"use client";

import React, { useEffect, useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaUser } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PrivateLimitedCompanyTypes: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const featureItemsRef = useRef<HTMLDivElement[]>([]);
  const circleGraphicRef = useRef<HTMLDivElement>(null);



  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.contentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <p className={styles.subHeading}>ITR-1 Filing Guide</p>
          <h2 className={styles.mainHeading}>Who is Eligible to File ITR-1?</h2>
          <p className={styles.description}>
            You can file ITR-1 Sahaj Form if you are a resident individual (not an HUF or company) earning income from specific sources listed below.
          </p>

          <div ref={el => { if (el) featureItemsRef.current[0] = el }} className={styles.featureItem}>
          <div className={styles.featureHeadingContainer}>
              <div className={styles.featureIcon} style={{ color: "#B40068" }}>
            <FaUser />
              </div>
              <h3 className={styles.featureHeading}>Resident Individual</h3>
            </div>
            <div className={styles.featureTextContent}>
              <p className={styles.featureDescription}>
                You must be a resident individual. HUFs and companies are not eligible to file ITR-1.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[1] = el }} className={styles.featureItem}>
            <div className={styles.featureHeadingContainer}>
              <div className={styles.featureIcon} style={{ color: "#B40068" }}>
                <FaMoneyBill />
              </div>
              <h3 className={styles.featureHeading}>Income Up to ₹50 Lakhs</h3>
            </div>
            <div className={styles.featureTextContent}>
              <p className={styles.featureDescription}>
                Your total income must not exceed ₹50 lakhs from salary, one house property, family pension, or interest income.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[2] = el }} className={styles.featureItem}>
            <div className={styles.featureHeadingContainer}>
              <div className={styles.featureIcon} style={{ color: "#B40068" }}>
                <FaBuilding />
              </div>
              <h3 className={styles.featureHeading}>Other Conditions</h3>
            </div>
            <div className={styles.featureTextContent}>
              <p className={styles.featureDescription}>
                Agricultural income should not exceed ₹5,000. Clubbing allowed only if the clubbed income also meets these criteria.
              </p>
            </div>
          </div>
        </div>
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={circleGraphicRef} className={styles.circleGraphic}>
            <p className={styles.circleText}>ITR-1 Eligibility</p>
          </div>
          {/* Placeholder for lines and other small icons */}
        </div>
      </div>
    </section>


  );
};

export default PrivateLimitedCompanyTypes; 