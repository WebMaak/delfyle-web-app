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
    <a href="#" className={styles.topAnchorLink}>DPT-3 Filing</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Form DPT-3 Return Filing – Simplified Compliance with Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          Every company (excluding government entities) is required to file Form DPT-3 annually with the Ministry of Corporate Affairs (MCA) by June 30th. This form captures details of deposits, outstanding loans, and amounts received that do not qualify as deposits as of March 31st of the financial year.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          DPT-3 filing must be audited by the company’s statutory auditor to ensure compliance with the Companies Act, 2013. Delfyle simplifies this process with expert-led DPT-3 filing services—ensuring accuracy, efficiency, and on-time submission.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is Form DPT-3?</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          To promote transparency and safeguard stakeholders’ interests, the Ministry of Corporate Affairs (in consultation with the RBI) introduced Form DPT-3 under the Companies (Acceptance of Deposits) Amendment Rules, 2019.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          As per Rule 16A(3) of the Companies (Acceptance of Deposits) Rules, 2014, every company (except government companies) is required to:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> File a one-time return of all outstanding receipts of money or loans not considered deposits (from April 1, 2014, to March 31, 2019).</li>
          <li><span className={styles.checkIcon}>✔</span> File annual returns of such transactions as of every March 31st, by June 30th each year.</li>
        </ul>

        <h3 className={styles.subContentHeading}>Exempted Entities from DPT-3 Filing</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Government Companies – Owned and controlled by the Central or State Government.</li>
          <li><span className={styles.checkIcon}>✔</span> Banking Companies – Regulated by the RBI.</li>
          <li><span className={styles.checkIcon}>✔</span> NBFCs – Registered under the RBI framework.</li>
          <li><span className={styles.checkIcon}>✔</span> Housing Finance Companies – Registered with the National Housing Bank (NHB).</li>
          <li><span className={styles.checkIcon}>✔</span> Other Notified Companies – Specifically exempted by MCA under Section 73(1) of the Companies Act.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle simplifies this process with expert-led DPT-3 filing services—ensuring accuracy, efficiency, and on-time submission.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Delfyle simplifies this process with expert-led DPT-3 filing services—ensuring accuracy, efficiency, and on-time submission."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Applicability of Form DPT-3</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Form DPT-3 must be filed by the following types of companies:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Private Limited Companies</li>
          <li><span className={styles.checkIcon}>✔</span> Public Limited Companies</li>
          <li><span className={styles.checkIcon}>✔</span> One Person Companies (OPC)</li>
          <li><span className={styles.checkIcon}>✔</span> Small and Non-Small Companies</li>
        </ul>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Even if a company has only received loans (not deposits), filing is mandatory in these cases:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> From Holding Company</li>
          <li><span className={styles.checkIcon}>✔</span> From Subsidiary Company</li>
          <li><span className={styles.checkIcon}>✔</span> From Associate Company</li>
        </ul>

        
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 