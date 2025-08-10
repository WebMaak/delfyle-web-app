"use client";

import React, { useEffect, useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBuilding } from 'react-icons/fa';
import { FaShieldAlt } from 'react-icons/fa';
import { FaBalanceScale } from 'react-icons/fa';

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
          <p className={styles.subHeading}>Company Registration Guide</p>
          <h2 className={styles.mainHeading}>Types of Private Limited Companies</h2>
          <p className={styles.description}>
            Understanding the different types of private limited companies and their requirements is crucial for making the right choice for your business structure in India.
          </p>

          <div ref={el => { if (el) featureItemsRef.current[0] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaBuilding /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Company Limited by Shares</h3>
              <p className={styles.featureDescription}>
                Shareholders' liability is limited to their shareholding. This is the most common type of private limited company structure.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[1] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaShieldAlt /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Company Limited by Guarantee</h3>
              <p className={styles.featureDescription}>
                Members provide a financial guarantee in case of winding up. Often used by non-profit organizations and professional associations.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[2] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaBalanceScale /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Unlimited Company</h3>
              <p className={styles.featureDescription}>
                No limit on members' liability, but the entity remains legally distinct. Rarely used due to unlimited liability exposure.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.subHeading} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-20%, -50%)', fontSize: '1.2rem'}}>Company Registration Guide</p>
          <div className={styles.contentStack}>
            <span className={`${styles.square} ${styles.squareTl}`} style={{left: '100%'}}></span>
            <span className={`${styles.square} ${styles.squareBr}`} style={{right: '100%'}}></span>
            <span className={`${styles.star} ${styles.star1}`}></span>
            <span className={`${styles.star} ${styles.star2}`}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateLimitedCompanyTypes; 