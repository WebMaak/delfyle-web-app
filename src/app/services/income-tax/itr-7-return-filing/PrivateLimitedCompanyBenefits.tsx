"use client";

import React, { useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import { HiOutlineClipboardList } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { MdOutlineSummarize } from "react-icons/md";



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
          <p className={styles.subHeading}>ITR-7 Filing Guide</p>
          <h2 className={styles.mainHeading}>Structure of ITR-7 Form</h2>
          <p className={styles.description}>
            The ITR-7 form is divided into multiple parts and schedules to capture essential entity details, financial statements, income computation, and tax liability for trusts, NGOs, and institutions.
          </p>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><HiOutlineClipboardList /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Part A: General Information</h3>
              <p className={styles.featureDescription}>
                Captures entity details like name, PAN, registration number, address, date of establishment, and other identifiers.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><MdOutlineSummarize /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Part B: Total Income & Tax Computation</h3>
              <p className={styles.featureDescription}>
                Calculates taxable income and tax payable after applying deductions, exemptions, and applicable reliefs.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><TbReportAnalytics /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>19+ Schedules</h3>
              <p className={styles.featureDescription}>
                Detailed schedules report different heads of income, donations, exemptions, and compliance requirements for varied entities like trusts and institutions.
              </p>
            </div>
          </div>

          <p className={styles.description}>
            The ITR-7 form is structured to ensure comprehensive tax compliance for entities such as charitable trusts, political parties, and research institutions. It includes general details, tax computation, and a range of schedules tailored to specific reporting requirements.
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
