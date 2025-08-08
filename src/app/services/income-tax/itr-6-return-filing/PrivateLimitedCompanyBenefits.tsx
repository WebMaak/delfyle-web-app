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
          <p className={styles.subHeading}>ITR-6 Filing Guide</p>
          <h2 className={styles.mainHeading}>Structure of ITR-6 Form</h2>
          <p className={styles.description}>
            The ITR-6 form is divided into multiple parts and schedules to capture essential entity details, financial statements, income computation, and tax liability for companies (excluding those claiming exemption under section 11).
          </p>

          {/* 🔷 Part A – Entity Details & Financials */}
          <div className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><AiOutlineInfoCircle /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Part A: Entity Details & Financials</h3>
              <p className={styles.featureDescription}>
                Contains general information such as Name, PAN, CIN, incorporation details, and contact info. Includes financial reports like Balance Sheet, Profit & Loss Account, and Manufacturing Account.
              </p>
            </div>
          </div>

          {/* 🔷 Balance Sheet */}
          <div className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><BsBarChartFill /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Balance Sheet</h3>
              <p className={styles.featureDescription}>
                Reports assets, liabilities, share capital, reserves, and other figures as of the financial year-end.
              </p>
            </div>
          </div>

          {/* 🔷 Trading & Profit and Loss */}
          <div className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><HiOutlineClipboardList /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Trading & Profit and Loss Account</h3>
              <p className={styles.featureDescription}>
                Reflects income, expenditures, and resulting profit or loss during the year.
              </p>
            </div>
          </div>

          {/* 🔷 Manufacturing Account */}
          <div className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><TbReportAnalytics /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Manufacturing Account</h3>
              <p className={styles.featureDescription}>
                Includes data related to inventory, production cost, and movement of raw materials and finished goods.
              </p>
            </div>
          </div>

          {/* 🔷 Part B-TI – Computation of Total Income */}
          <div className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><MdOutlineSummarize /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Part B-TI: Total Income</h3>
              <p className={styles.featureDescription}>
                Calculates total taxable income from various heads of income.
              </p>
            </div>
          </div>

          {/* 🔷 Part B-TTI – Computation of Tax Liability */}
          <div className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaBalanceScale /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Part B-TTI: Tax Liability</h3>
              <p className={styles.featureDescription}>
                Determines total tax payable after adjustments for surcharge, rebate, interest, and eligible refunds.
              </p>
            </div>
          </div>

          <p className={styles.description}>
            The ITR-6 form is comprehensive—designed to ensure accurate filing by companies, covering everything from basic identification to detailed financials and final tax computation.
          </p>
        </div>

        {/* Right Graphic */}
        <div className={styles.rightColumn}>
          <div className={styles.circleGraphic}>
            <p className={styles.circleText}>Form Structure</p>
          </div>
        </div>
      </div>
    </section>


  );
};

export default ITR2EligibilitySection;
