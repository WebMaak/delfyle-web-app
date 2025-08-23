"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../../Components/TrialComponent/ComponentTwelve/ComponentTwelve.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrivateLimitedCompanyContent: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const topAnchorRef = useRef<HTMLAnchorElement>(null);
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const leftBottomContentRef = useRef<(HTMLHeadingElement | HTMLParagraphElement | HTMLDivElement)[]>([]);
  const rightColumnContentRef = useRef<HTMLDivElement[]>([]);
  const leftBottomContainerRef = useRef<HTMLDivElement>(null);



  return (
<section className={styles.container}>
  <div className={styles.topAnchorContainer}>
    <a href="#" className={styles.topAnchorLink}>Appointment of Auditor</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          ADT-1 Form Filing for Appointment of First Auditor – A Complete Guide
        </h2>
        <p className={styles.paragraphContent}>
          Form ADT-1 is a statutory form under the Companies Act, 2013, used by companies to notify the Registrar of Companies (ROC) about the appointment of their first auditor. As per Section 139(6) of the Companies Act, every newly incorporated company in India must appoint its first auditor within 30 days of incorporation.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Once the board appoints the first auditor, it is mandatory to file Form ADT-1 within 15 days of the auditor’s appointment to ensure regulatory compliance and avoid penalties.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What Is Form ADT-1?</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Form ADT-1 is filed with the Ministry of Corporate Affairs (MCA) to officially inform the ROC about the appointment of an auditor. It must also be filed annually after each Annual General Meeting (AGM) under Section 139(1), where an auditor is either appointed or reappointed by shareholders.
        </p>
        <p className={styles.paragraphContent}>
          Failure to appoint an auditor or delay in filing ADT-1 may result in legal consequences, fines, and penalties. Delfyle offers expert support to help companies fulfill this essential compliance smoothly.
        </p>

        <h3 className={styles.subContentHeading}>First Auditor Appointment: Key Compliance Requirement</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> The first auditor appointed by the company’s Board of Directors holds office until the conclusion of the first AGM.</li>
          <li><span className={styles.checkIcon}>✔</span> This AGM must be held within nine months from the end of the financial year in which the company was incorporated.</li>
          <li><span className={styles.checkIcon}>✔</span> At the AGM, shareholders may confirm the existing auditor or appoint a new one.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          The first auditor appointed by the company’s Board of Directors holds office until the conclusion of the first AGM. This AGM must be held within nine months from the end of the financial year in which the company was incorporated.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Delfyle offers expert support to help companies fulfill this essential compliance smoothly."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>When to File Form ADT-1</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span>Newly Incorporated Companies:  Must appoint the first auditor within 30 days of incorporation, and file Form ADT-1 within 15 days of this appointment.</li>
          <li><span className={styles.checkIcon}>✔</span> Existing Companies: Must file Form ADT-1 within 15 days after the AGM where the auditor is appointed or reappointed.</li>
        </ul>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Example: If your AGM was held on September 30, 2024, you must file ADT-1 by October 14, 2024.
        </p>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 