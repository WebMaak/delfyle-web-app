"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../../Components/TrialComponent/ComponentTwelve/ComponentTwelve.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

const PrivateLimitedCompanyContentTwo: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const topAnchorRef = useRef<HTMLAnchorElement>(null);
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const leftBottomContentRef = useRef<(HTMLHeadingElement | HTMLParagraphElement | HTMLDivElement)[]>([]);
  const rightColumnContentRef = useRef<HTMLDivElement[]>([]);
  const leftBottomContainerRef = useRef<HTMLDivElement>(null);



  return (
    <>
<section ref={sectionRef} className={styles.container}>
  <div className={styles.topAnchorContainer}>
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>IEC Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Get Your Importer Exporter Code (IEC) with Delfyle
        </h2>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Enter the global market confidently! Delfyle simplifies IEC registration, guiding you through DGFT compliance, documentation, and approvals to ensure seamless international trade.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is IEC?</h3>
        <p className={styles.paragraphContent}>
          The Importer Exporter Code (IEC) is a unique 10-digit code issued by DGFT to businesses involved in cross-border trade. It is mandatory for importing/exporting goods in India and enables customs clearance and international payments.
        </p>

        <h3 className={styles.subContentHeading}>Why IEC is Important</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Global Market Access: Legally export/import products and services.</li>
          <li><span className={styles.checkIcon}>•</span> Easy Online Registration: Minimal documentation required via DGFT portal.</li>
          <li><span className={styles.checkIcon}>•</span> Lifetime Validity: IEC is permanent with no renewal required.</li>
          <li><span className={styles.checkIcon}>•</span> Reduced Compliance Burden: No annual filings or recurring renewals.</li>
          <li><span className={styles.checkIcon}>•</span> Authenticity & Security: Ensures only genuine businesses are registered.</li>
          <li><span className={styles.checkIcon}>•</span> Government Incentives: Eligible for schemes, GST exemptions (LUT filing), and duty refunds.</li>
        </ul>

        <h3 className={styles.subContentHeading}>Validity of IEC</h3>
        <p className={styles.paragraphContent}>
          IEC registration is permanent and valid for the life of the business, unless voluntarily surrendered.
        </p>

       
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
         <h3 className={styles.subContentHeading}>Who Can Apply</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Proprietorship Firms</li>
          <li><span className={styles.checkIcon}>•</span> Partnership Firms</li>
          <li><span className={styles.checkIcon}>•</span> LLPs</li>
          <li><span className={styles.checkIcon}>•</span> Private & Public Limited Companies</li>
          <li><span className={styles.checkIcon}>•</span> Trusts and Societies</li>
          <li><span className={styles.checkIcon}>•</span> Hindu Undivided Families (HUF)</li>
        </ul>

        <h3 className={styles.subContentHeading}>Prerequisites for IEC Registration</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Registered DGFT portal account</li>
          <li><span className={styles.checkIcon}>•</span> Active PAN linked to the firm</li>
          <li><span className={styles.checkIcon}>•</span> Valid business details (name, incorporation date, address)</li>
          <li><span className={styles.checkIcon}>•</span> Active bank account in the firm’s name</li>
          <li><span className={styles.checkIcon}>•</span> Aadhaar or Digital Signature Certificate (DSC) for verification</li>
        </ul>
        <h3 className={styles.subContentHeading}>Let Delfyle Handle Your IEC Registration</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> End-to-end documentation verification</li>
          <li><span className={styles.checkIcon}>•</span> DGFT portal registration support</li>
          <li><span className={styles.checkIcon}>•</span> Application submission and follow-up</li>
          <li><span className={styles.checkIcon}>•</span> Guidance on IEC usage for imports/exports</li>
        </ul>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Delfyle ensures a smooth, error-free IEC registration so you can start trading internationally without delays.
        </p>
      </div>
    </div>
  </div>
</section>



    </>
  );
};

export default PrivateLimitedCompanyContentTwo; 