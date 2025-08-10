"use client";

import React, { useEffect, useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import { AiOutlineIdcard, AiOutlineBank, AiOutlineFileText, AiOutlineBarChart } from 'react-icons/ai';
import { BsBook, BsGlobe2 } from 'react-icons/bs';
import { FiBriefcase, FiPieChart } from 'react-icons/fi';


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
        <p className={styles.subHeading}>ITR-3 Checklist</p>
        <h2 className={styles.mainHeading}>Documents Required for ITR-3 Filing</h2>
        <p className={styles.description}>
          Before starting the ITR-3 form filing process, make sure you have the following documents ready:
        </p>
  
        <div ref={el => { if (el) featureItemsRef.current[0] = el }} className={styles.featureItem}>
          <div className={styles.featureIcon} style={{color: '#B40068'}}><AiOutlineIdcard /></div>
          <div className={styles.featureTextContent}>
            <h3 className={styles.featureHeading}>PAN & Aadhaar Card</h3>
            <p className={styles.featureDescription}>
              Ensure your PAN and Aadhaar are linked and up to date for verification.
            </p>
          </div>
        </div>
  
        <div ref={el => { if (el) featureItemsRef.current[1] = el }} className={styles.featureItem}>
          <div className={styles.featureIcon} style={{color: '#B40068'}}><AiOutlineBank /></div>
          <div className={styles.featureTextContent}>
            <h3 className={styles.featureHeading}>Bank Account Details</h3>
            <p className={styles.featureDescription}>
              Keep your bank account number and IFSC code ready for refund or payment purposes.
            </p>
          </div>
        </div>
  
        <div ref={el => { if (el) featureItemsRef.current[2] = el }} className={styles.featureItem}>
          <div className={styles.featureIcon} style={{color: '#B40068'}}><AiOutlineFileText /></div>
          <div className={styles.featureTextContent}>
            <h3 className={styles.featureHeading}>Form 16 (if salaried)</h3>
            <p className={styles.featureDescription}>
              Required to report income from salary and tax deducted at source.
            </p>
          </div>
        </div>
  
        <div ref={el => { if (el) featureItemsRef.current[3] = el }} className={styles.featureItem}>
          <div className={styles.featureIcon} style={{color: '#B40068'}}><AiOutlineBarChart /></div>
          <div className={styles.featureTextContent}>
            <h3 className={styles.featureHeading}>Capital Gains Statements</h3>
            <p className={styles.featureDescription}>
              Include reports from brokers or mutual fund statements for capital gains.
            </p>
          </div>
        </div>
  
        <div ref={el => { if (el) featureItemsRef.current[4] = el }} className={styles.featureItem}>
          <div className={styles.featureIcon} style={{color: '#B40068'}}><BsBook /></div>
          <div className={styles.featureTextContent}>
            <h3 className={styles.featureHeading}>Business Income Details</h3>
            <p className={styles.featureDescription}>
              Include profit & loss statements and books of accounts if applicable.
            </p>
          </div>
        </div>
  
        <div ref={el => { if (el) featureItemsRef.current[5] = el }} className={styles.featureItem}>
          <div className={styles.featureIcon} style={{color: '#B40068'}}><BsGlobe2 /></div>
          <div className={styles.featureTextContent}>
            <h3 className={styles.featureHeading}>Foreign Asset Details</h3>
            <p className={styles.featureDescription}>
              Report any foreign income or assets if applicable under disclosure rules.
            </p>
          </div>
        </div>
  
        <div ref={el => { if (el) featureItemsRef.current[6] = el }} className={styles.featureItem}>
          <div className={styles.featureIcon} style={{color: '#B40068'}}><FiBriefcase /></div>
          <div className={styles.featureTextContent}>
            <h3 className={styles.featureHeading}>Investment & Deduction Proofs</h3>
            <p className={styles.featureDescription}>
              Submit documents for Section 80C, 80D, and other deductions claimed.
            </p>
          </div>
        </div>
  
        <div ref={el => { if (el) featureItemsRef.current[7] = el }} className={styles.featureItem}>
          <div className={styles.featureIcon} style={{color: '#B40068'}}><FiPieChart /></div>
          <div className={styles.featureTextContent}>
            <h3 className={styles.featureHeading}>TDS/TCS Details</h3>
            <p className={styles.featureDescription}>
              Verify Form 26AS, AIS, and TIS for taxes deducted or collected.
            </p>
          </div>
        </div>
      </div>
  
      <div ref={rightColumnRef} className={styles.rightColumn}>
          <p className={styles.subHeading} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-10%, -50%)', fontSize: '1.2rem'}}>ITR-3 Checklist</p>
          <div className={styles.contentStack}>
            <span className={`${styles.square} ${styles.squareTl}`} style={{left: '125%'}}></span>
            <span className={`${styles.square} ${styles.squareBr}`} style={{right: '125%'}}></span>
            <span className={`${styles.star} ${styles.star1}`}></span>
            <span className={`${styles.star} ${styles.star2}`}></span>
          </div>
        </div>
    </div>
  </section>

  
  );
};

export default PrivateLimitedCompanyDisadvantages; 