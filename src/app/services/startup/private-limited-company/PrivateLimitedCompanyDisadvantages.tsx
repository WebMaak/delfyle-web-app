"use client";

import React, { useEffect, useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFile } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';

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
          <p className={styles.subHeading}>Considerations</p>
          <h2 className={styles.mainHeading}>Disadvantages of a Private Limited Company</h2>
          <p className={styles.description}>
            While private limited companies offer many benefits, it's important to understand the potential drawbacks and compliance requirements before making a decision.
          </p>

          <div ref={el => { if (el) featureItemsRef.current[0] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaFile /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Regulatory Compliance</h3>
              <p className={styles.featureDescription}>
                Requires strict adherence to corporate regulations, including annual filings, board meetings, and statutory compliance with MCA.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[1] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaMoneyBill /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Higher Setup Costs</h3>
              <p className={styles.featureDescription}>
                More expensive than proprietorship or partnership firms. Includes registration fees, compliance costs, and professional services.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[2] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaChartLine /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Public Disclosure</h3>
              <p className={styles.featureDescription}>
                Financial statements are publicly accessible through MCA portal. Limited privacy compared to other business structures.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.subHeading} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-10%, -50%)', fontSize: '1.2rem'}}>Considerations</p>
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

export default PrivateLimitedCompanyDisadvantages; 