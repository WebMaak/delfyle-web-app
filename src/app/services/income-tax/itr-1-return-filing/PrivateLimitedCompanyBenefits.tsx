"use client";

import React, { useEffect, useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGlobe } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { FaDice } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';

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
      <p className={styles.subHeading}>ITR-1 Filing Guide</p>
      <h2 className={styles.mainHeading}>Who Cannot File ITR-1?</h2>
      <p className={styles.description}>
        You are not eligible to file ITR-1 if you have complex income sources or certain financial involvements. The form is intended for individuals with simple income profiles, and the following conditions disqualify you from using it:
      </p>

      <div ref={el => { if (el) featureItemsRef.current[0] = el }} className={styles.featureItem}>
        <div className={styles.featureHeadingContainer}>
          <div className={styles.featureIcon} style={{ color: "#B40068" }}>
            <FaGlobe />
          </div>
          <h3 className={styles.featureHeading}>Are an NRI or RNOR</h3>
        </div>
        <div className={styles.featureTextContent}>
          <p className={styles.featureDescription}>
            Individuals who are Non-Resident Indians (NRIs) or Resident but Not Ordinarily Resident (RNOR) cannot use ITR-1 for filing their taxes.
          </p>
        </div>
      </div>

      <div ref={el => { if (el) featureItemsRef.current[1] = el }} className={styles.featureItem}>
        <div className={styles.featureHeadingContainer}>
          <div className={styles.featureIcon} style={{ color: "#B40068" }}>
            <FaMoneyBill />
          </div>
          <h3 className={styles.featureHeading}>Have total income exceeding ₹50 lakhs</h3>
        </div>
        <div className={styles.featureTextContent}>
          <p className={styles.featureDescription}>
            If your annual income exceeds ₹50 lakhs, you are required to file a different ITR form that can accommodate higher income disclosures.
          </p>
        </div>
      </div>

      <div ref={el => { if (el) featureItemsRef.current[2] = el }} className={styles.featureItem}>
        <div className={styles.featureHeadingContainer}>
          <div className={styles.featureIcon} style={{ color: "#B40068" }}>
            <FaChartLine />
          </div>
          <h3 className={styles.featureHeading}>Have capital gains</h3>
        </div>
        <div className={styles.featureTextContent}>
          <p className={styles.featureDescription}>
            Taxpayers earning short-term or long-term capital gains from selling assets like property, stocks, or mutual funds cannot file ITR-1.
          </p>
        </div>
      </div>

      <div ref={el => { if (el) featureItemsRef.current[3] = el }} className={styles.featureItem}>
        <div className={styles.featureHeadingContainer}>
          <div className={styles.featureIcon} style={{ color: "#B40068" }}>
            <FaBuilding />
          </div>
          <h3 className={styles.featureHeading}>Own more than one house property</h3>
        </div>
        <div className={styles.featureTextContent}>
          <p className={styles.featureDescription}>
            If you own multiple residential properties, ITR-1 is not suitable. Use other ITR forms that allow detailed property disclosures.
          </p>
        </div>
      </div>

      <div ref={el => { if (el) featureItemsRef.current[4] = el }} className={styles.featureItem}>
        <div className={styles.featureHeadingContainer}>
          <div className={styles.featureIcon} style={{ color: "#B40068" }}>
            <FaBriefcase />
          </div>
          <h3 className={styles.featureHeading}>Earn income from business or profession</h3>
        </div>
        <div className={styles.featureTextContent}>
          <p className={styles.featureDescription}>
            Business owners, freelancers, and professionals with non-salary income must file a different ITR form designed for such income types.
          </p>
        </div>
      </div>

      <div ref={el => { if (el) featureItemsRef.current[5] = el }} className={styles.featureItem}>
        <div className={styles.featureHeadingContainer}>
          <div className={styles.featureIcon} style={{ color: "#B40068" }}>
            <FaBuilding />
          </div>
          <h3 className={styles.featureHeading}>Are a director in a company</h3>
        </div>
        <div className={styles.featureTextContent}>
          <p className={styles.featureDescription}>
            Individuals serving as directors in companies are required to report additional disclosures and cannot use ITR-1 for filing.
          </p>
        </div>
      </div>

      <div ref={el => { if (el) featureItemsRef.current[6] = el }} className={styles.featureItem}>
        <div className={styles.featureHeadingContainer}>
          <div className={styles.featureIcon} style={{ color: "#B40068" }}>
            <FaChartBar />
          </div>
          <h3 className={styles.featureHeading}>Have invested in unlisted shares</h3>
        </div>
        <div className={styles.featureTextContent}>
          <p className={styles.featureDescription}>
            If you have held or traded unlisted equity shares during the financial year, ITR-1 is not applicable for your case.
          </p>
        </div>
      </div>

      <div ref={el => { if (el) featureItemsRef.current[7] = el }} className={styles.featureItem}>
        <div className={styles.featureHeadingContainer}>
          <div className={styles.featureIcon} style={{ color: "#B40068" }}>
            <FaDice />
          </div>
          <h3 className={styles.featureHeading}>Have income from lottery, gambling, racehorses</h3>
        </div>
        <div className={styles.featureTextContent}>
          <p className={styles.featureDescription}>
            Income from sources like lottery winnings, betting, or horse racing is not permitted under ITR-1 and requires alternate reporting.
          </p>
        </div>
      </div>

      <div ref={el => { if (el) featureItemsRef.current[8] = el }} className={styles.featureItem}>
        <div className={styles.featureHeadingContainer}>
          <div className={styles.featureIcon} style={{ color: "#B40068" }}>
            <FaCalendar />
          </div>
          <h3 className={styles.featureHeading}>Have deferred tax on ESOPs from start-ups</h3>
        </div>
        <div className={styles.featureTextContent}>
          <p className={styles.featureDescription}>
            Employees who have opted for deferred taxation on ESOPs from eligible start-ups are disqualified from using ITR-1.
          </p>
        </div>
      </div>

      <div ref={el => { if (el) featureItemsRef.current[9] = el }} className={styles.featureItem}>
        <div className={styles.featureHeadingContainer}>
          <div className={styles.featureIcon} style={{ color: "#B40068" }}>
            <FaBuilding />
          </div>
          <h3 className={styles.featureHeading}>Claim deduction under section 194N</h3>
        </div>
        <div className={styles.featureTextContent}>
          <p className={styles.featureDescription}>
            If you are claiming deductions under section 194N related to cash withdrawals, ITR-1 is not the correct form to use.
          </p>
        </div>
      </div>

      {/* ITR Due Date Section */}
      <h2 className={styles.mainHeading} style={{ fontSize: '2rem' }}>
        ITR-1 Due Date for FY 2024-25
      </h2>
      <p className={styles.description}>
        The standard due date to file ITR-1 for the Assessment Year 2025-26 is July 31, 2025. File early to avoid late fees, interest charges, and ensure smoother processing.
      </p>

    </div>

    <div ref={rightColumnRef} className={styles.rightColumn}>
          <p className={styles.subHeading} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-10%, -50%)', fontSize: '1.2rem'}}>ITR-1 Filing Guide</p>
          <div className={styles.contentStack}>
            <span className={`${styles.square} ${styles.squareTl}`} style={{left: '180%'}}></span>
            <span className={`${styles.square} ${styles.squareBr}`} style={{right: '180%'}}></span>
            <span className={`${styles.star} ${styles.star1}`}></span>
            <span className={`${styles.star} ${styles.star2}`}></span>
          </div>
        </div>
  </div>
</section>


  );
};

export default PrivateLimitedCompanyBenefits; 