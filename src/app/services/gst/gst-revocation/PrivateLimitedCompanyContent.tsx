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
<section ref={sectionRef} className={styles.container}>

  <div className={styles.topAnchorContainer}>
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>GST Revocation</a>
  </div>

  <div className={styles.mainContentWrapper}>

    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>

      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{marginBottom: '0'}}>
          GST Revocation - Restore Your GST Registration with Delfyle
        </h2>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is GST Revocation?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          GST revocation refers to the process of reinstating a cancelled GST registration. Whether the cancellation was voluntary or enforced by tax authorities, revocation allows businesses to resume GST-compliant operations, issue invoices, collect GST, and claim Input Tax Credit (ITC).
        </p>
        <p className={styles.paragraphContent}>
          At Delfyle, we simplify the process, providing expert guidance to ensure smooth restoration of your GST registration while meeting all regulatory requirements.
        </p>

        <h3 className={styles.subContentHeading}>Rule 23 - Revocation of Cancellation</h3>
        <p className={styles.paragraphContent}>
          Rule 23 of the Central Goods and Services Tax Rules, 2017, outlines the procedure and conditions for revoking a cancelled GST registration. Filing an application under this rule enables businesses to regain GST registration and resume operations.
        </p>

        <h3 className={styles.subContentHeading}>Why Does GST Cancellation Occur?</h3>
        <p className={styles.paragraphContent}>
          GST registration may be cancelled voluntarily by the taxpayer or enforced by authorities due to non-compliance, business closure, or other reasons.
        </p>

        <h4 className={styles.subContentHeading}>Cancellation Initiated by the Taxpayer</h4>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Business Closure or Discontinuation</li>
          <li><span className={styles.checkIcon}>✔</span> Business Transfer or Merger</li>
          <li><span className={styles.checkIcon}>✔</span> Change in Business Structure</li>
          <li><span className={styles.checkIcon}>✔</span> Turnover Below Threshold</li>
          <li><span className={styles.checkIcon}>✔</span> Voluntary Cancellation for operational reasons</li>
        </ul>

        <h4 className={styles.subContentHeading}>Cancellation Enforced by GST Authorities</h4>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Non-Compliance (failure to file returns)</li>
          <li><span className={styles.checkIcon}>✔</span> Fraudulent Activities or Misrepresentation</li>
          <li><span className={styles.checkIcon}>✔</span> Repeated GST Violations</li>
          <li><span className={styles.checkIcon}>✔</span> Engaging in Unlawful Activities (fraudulent invoices, wrong ITC claims)</li>
        </ul>
      </div>

    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>

      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Our experts at Delfyle assist you throughout the GST revocation process, ensuring that your registration is restored efficiently and in full compliance with GST laws.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Delfyle helps businesses restore GST registration seamlessly, ensuring uninterrupted compliance and operations."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

    </div>

  </div>
</section>



  );
};

export default PrivateLimitedCompanyContent; 