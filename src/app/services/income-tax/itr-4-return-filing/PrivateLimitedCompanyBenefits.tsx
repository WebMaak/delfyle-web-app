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
        <div className={styles.featureIcon} style={{color: '#B40068'}}><FaUserAlt /></div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Part A: General Information</h3>
          <p className={styles.featureDescription}>
            Basic details like PAN, name, address, filing status, email, and mobile number.
          </p>
        </div>
      </div>

      {/* 🔹 Part B */}
      <div className={styles.featureItem}>
        <div className={styles.featureIcon} style={{color: '#B40068'}}><MdOutlineAccountBalanceWallet /></div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Part B: Gross Total Income</h3>
          <p className={styles.featureDescription}>
            Includes income from salary/pension, house property, other sources, and presumptive business/profession income.
          </p>
        </div>
      </div>

      {/* 🔹 Part C */}
      <div className={styles.featureItem}>
        <div className={styles.featureIcon} style={{color: '#B40068'}}><RiScissors2Fill /></div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Part C: Deductions & Total Taxable Income</h3>
          <p className={styles.featureDescription}>
            Declare deductions under Sections 80C to 80U to reduce your taxable income.
          </p>
        </div>
      </div>

      {/* 🔹 Part D */}
      <div className={styles.featureItem}>
        <div className={styles.featureIcon} style={{color: '#B40068'}} ><FaCalculator /></div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Part D: Tax Computation & Tax Status</h3>
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
      <div className={styles.circleGraphic}>
        <p className={styles.circleText}>ITR-4</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default ITR2EligibilitySection;
