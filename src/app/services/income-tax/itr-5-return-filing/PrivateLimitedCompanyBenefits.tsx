"use client";

import React, { useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { MdOutlineSummarize } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";



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
          <p className={styles.subHeading}>ITR-5 Filing Guide</p>
          <h2 className={styles.mainHeading}>ITR-5 Form Structure</h2>
          <p className={styles.description}>
            The ITR-5 form is structured to capture general info, declared income, deductions, and tax liability for taxpayers under the presumptive taxation scheme.
          </p>

          {/* 🔷 Part A – General Information */}
          <div className={styles.featureItem}>
            <div className={styles.featureHeadingContainer}>
              <div className={styles.featureIcon} style={{color: '#B40068'}}><AiOutlineInfoCircle /></div>
              <h3 className={styles.featureHeading}>Part A: General Information</h3>
            </div>
            <div className={styles.featureTextContent}>
              <p className={styles.featureDescription}>
                Includes PAN, firm name, contact details, constitution status, and filing status of the entity.
              </p>
            </div>
          </div>

          {/* 🔷 Part A-BS – Balance Sheet */}
          <div className={styles.featureItem}>
            <div className={styles.featureHeadingContainer}>
              <div className={styles.featureIcon} style={{color: '#B40068'}}><BsBarChartFill /></div>
              <h3 className={styles.featureHeading}>Part A-BS: Balance Sheet</h3>
            </div>
            <div className={styles.featureTextContent}>
              <p className={styles.featureDescription}>
                Reports assets, liabilities, capital, and other balance sheet information as of year-end.
              </p>
            </div>
          </div>

          {/* 🔷 Part A – Manufacturing, Trading, and P&L Accounts */}
          <div className={styles.featureItem}>
            <div className={styles.featureHeadingContainer}>
              <div className={styles.featureIcon} style={{color: '#B40068'}}><HiOutlineClipboardList /></div>
              <h3 className={styles.featureHeading}>Part A: Manufacturing, Trading & Profit and Loss</h3>
            </div>
            <div className={styles.featureTextContent}>
              <p className={styles.featureDescription}>
                Covers manufacturing, trading details, and the profit and loss statement for the financial year.
              </p>
            </div>
          </div>

          {/* 🔷 Part A-OI & A-QD */}
          <div className={styles.featureItem}>
            <div className={styles.featureHeadingContainer}>
              <div className={styles.featureIcon} style={{color: '#B40068'}}><TbReportAnalytics /></div>
              <h3 className={styles.featureHeading}>Part A-OI & Part A-QD</h3>
            </div>
            <div className={styles.featureTextContent}>
              <p className={styles.featureDescription}>
                Captures other financial data and quantitative business details including inventory.
              </p>
            </div>
          </div>

          {/* 🔷 Part B-TI – Total Income */}
          <div className={styles.featureItem}>
            <div className={styles.featureHeadingContainer}>
              <div className={styles.featureIcon} style={{color: '#B40068'}}><MdOutlineSummarize /></div>
              <h3 className={styles.featureHeading}>Part B-TI: Total Income</h3>
            </div>
            <div className={styles.featureTextContent}>
              <p className={styles.featureDescription}>
                Summarizes total taxable income computed from all income heads including business, capital gains, etc.
              </p>
            </div>
          </div>

          {/* 🔷 Part B-TTI – Tax Liability */}
          <div className={styles.featureItem}>
            <div className={styles.featureHeadingContainer}>
              <div className={styles.featureIcon} style={{color: '#B40068'}}><FaBalanceScale /></div>
              <h3 className={styles.featureHeading}>Part B-TTI: Tax Liability</h3>
            </div>
            <div className={styles.featureTextContent}>
              <p className={styles.featureDescription}>
                Final tax payable including surcharge, rebate, interest (234B/234C), and eligible refund.
              </p>
            </div>
          </div>

          <p className={styles.description}>
            The ITR-5 form is structured to capture detailed financial and tax data for firms, LLPs, AOPs, BOIs, and other eligible entities—ensuring complete and compliant reporting.
          </p>

        </div>
        
        {/* Right Graphic */}
        <div className={styles.rightColumn}>
          <p className={styles.subHeading} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-10%, -50%)', fontSize: '1.2rem'}}>ITR-5 Filing Guide</p>
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
