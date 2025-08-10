"use client";

import React, { useEffect, useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFile } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaCalculator } from 'react-icons/fa';
import { FaMapMarker } from 'react-icons/fa';
import { FaFolder } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';

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
          <p className={styles.subHeading}>ITR-1 Overview</p>
          <h2 className={styles.mainHeading}>Structure of the ITR-1 Form</h2>
          <p className={styles.description}>
            The ITR-1 Form is systematically organized into five key parts and two schedules. Each section captures important details to ensure accurate tax filing for salaried individuals.
          </p>
    
          <div ref={el => { if (el) featureItemsRef.current[0] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaFile /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Part A: Personal Details</h3>
              <p className={styles.featureDescription}>
                Includes PAN, Aadhaar number, name, address, and contact information of the taxpayer.
              </p>
            </div>
          </div>
    
          <div ref={el => { if (el) featureItemsRef.current[1] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaBriefcase /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Part B: Income Details</h3>
              <p className={styles.featureDescription}>
                Discloses income from salary, one house property, and income from other sources (like interest).
              </p>
            </div>
          </div>
    
          <div ref={el => { if (el) featureItemsRef.current[2] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaChartLine /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Part C: Deductions</h3>
              <p className={styles.featureDescription}>
                Captures deductions under Section 80C to 80U, including investments and eligible expenses.
              </p>
            </div>
          </div>
    
          <div ref={el => { if (el) featureItemsRef.current[3] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaCalculator /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Part D: Tax & Refund</h3>
              <p className={styles.featureDescription}>
                Contains total tax liability, refund computation, and bank account details for credit.
              </p>
            </div>
          </div>
    
          <div ref={el => { if (el) featureItemsRef.current[4] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaMapMarker /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Part E: Additional Disclosures</h3>
              <p className={styles.featureDescription}>
                Requires any other relevant disclosures not covered in the previous parts.
              </p>
            </div>
          </div>
    
          <div ref={el => { if (el) featureItemsRef.current[5] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaFolder /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Schedule IT</h3>
              <p className={styles.featureDescription}>
                Records details of advance tax and self-assessment tax payments made during the year.
              </p>
            </div>
          </div>
    
          <div ref={el => { if (el) featureItemsRef.current[6] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaDownload /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Schedule TDS/TCS</h3>
              <p className={styles.featureDescription}>
                Provides information on taxes deducted or collected at source by employers or institutions.
              </p>
            </div>
          </div>
        </div>
    
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <p className={styles.subHeading} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-10%, -50%)', fontSize: '1.2rem'}}>ITR-1 Overview</p>
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