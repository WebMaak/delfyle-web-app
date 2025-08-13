"use client";

import React, { useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import { FaUserAlt, FaCalculator } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { RiScissors2Fill } from "react-icons/ri";


const ITR2EligibilitySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const featureItemsRef = useRef<HTMLDivElement[]>([]);
  const circleGraphicRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.container}>
  <div className={styles.contentWrapper}>
    <div className={styles.leftColumn}>
      <p className={styles.subHeading}>ITR-4 Filing Guide</p>
      <h2 className={styles.mainHeading}>ITR-4 Form Structure</h2>
      <p className={styles.description}>
        The ITR-4 form is structured to capture general info, declared income, deductions, and tax liability for taxpayers under the presumptive taxation scheme.
      </p>

      {/* 🔹 Part A */}
      <div className={styles.featureItem}>
      <div className={styles.featureHeadingContainer}>
        <div className={styles.featureIcon} style={{color: '#B40068'}}><FaUserAlt /></div>
          <h3 className={styles.featureHeading}>Part A: General Information</h3>
        </div>
        <div className={styles.featureTextContent}>
          <p className={styles.featureDescription}>
            Basic details like PAN, name, address, filing status, email, and mobile number.
          </p>
        </div>
      </div>

      {/* 🔹 Part B */}
      <div className={styles.featureItem}>
      <div className={styles.featureHeadingContainer}>
        <div className={styles.featureIcon} style={{color: '#B40068'}}><MdOutlineAccountBalanceWallet /></div>
          <h3 className={styles.featureHeading}>Part B: Gross Total Income</h3>
        </div>
        <div className={styles.featureTextContent}>
          <p className={styles.featureDescription}>
            Includes income from salary/pension, house property, other sources, and presumptive business/profession income.
          </p>
        </div>
      </div>

      {/* 🔹 Part C */}
      <div className={styles.featureItem}>
      <div className={styles.featureHeadingContainer}>
        <div className={styles.featureIcon} style={{color: '#B40068'}}><RiScissors2Fill /></div>
          <h3 className={styles.featureHeading}>Part C: Deductions & Total Taxable Income</h3>
        </div>
        <div className={styles.featureTextContent}>
          <p className={styles.featureDescription}>
            Declare deductions under Sections 80C to 80U to reduce your taxable income.
          </p>
        </div>
      </div>

      {/* 🔹 Part D */}
      <div className={styles.featureItem}>
      <div className={styles.featureHeadingContainer}>
        <div className={styles.featureIcon} style={{color: '#B40068'}} ><FaCalculator /></div>
          <h3 className={styles.featureHeading}>Part D: Tax Computation & Tax Status</h3>
        </div>
        <div className={styles.featureTextContent}>
          <p className={styles.featureDescription}>
            Details of tax payable, Section 87A rebate, advance/self-assessment tax, interest (u/s 234B/234C), cess, and refund status.
          </p>
        </div>
      </div>

      <p className={styles.description}>
        This structured form simplifies return filing under the presumptive scheme for small businesses and professionals.
      </p>
    </div>

    {/* Right Graphic */}
    <div className={styles.rightColumn}>
      <p className={styles.subHeading} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-10%, -50%)', fontSize: '1.2rem'}}>ITR-4 Filing Guide</p>
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

export default ITR2EligibilitySection;
