"use client";

import React, { useEffect, useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaShieldAlt } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';

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
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaShieldAlt /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Limited Liability</h3>
              <p className={styles.featureDescription}>
                Protects personal assets from company debts. Shareholders are only liable to the extent of their shareholding.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[1] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaBuilding /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Separate Legal Entity</h3>
              <p className={styles.featureDescription}>
                Independent identity from its owners. The company can own property, enter contracts, and sue or be sued in its own name.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[2] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaMoneyBill /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Ease of Raising Funds</h3>
              <p className={styles.featureDescription}>
                Attracts investments from venture capitalists and angel investors. Better credibility for securing loans and funding.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.subHeading} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-10%, -50%)', fontSize: '1.2rem'}}>ITR-6 Filing Guide</p>
          <div className={styles.contentStack}>
            <span className={`${styles.square} ${styles.squareTl}`} style={{left: '115%'}}></span>
            <span className={`${styles.square} ${styles.squareBr}`} style={{right: '115%'}}></span>
            <span className={`${styles.star} ${styles.star1}`}></span>
            <span className={`${styles.star} ${styles.star2}`}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateLimitedCompanyBenefits; 