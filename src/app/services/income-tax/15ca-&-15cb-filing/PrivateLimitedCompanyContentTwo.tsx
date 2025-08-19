"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../../Components/TrialComponent/ComponentTwelve/ComponentTwelve.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    <section ref={sectionRef} className={styles.container}>
  <div className={styles.topAnchorContainer}>
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Form 15CA & 15CB</a>
  </div>
  <div className={styles.mainContentWrapper}>
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Structure & Filing of Form 15CA & 15CB
        </h2>
        <p style={{marginBottom: '0'}}>
          Form 15CA is divided into four parts depending on transaction value and taxability.  
          Form 15CB is a certification issued by a Chartered Accountant in cases where taxability needs validation.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Procedure for Filing with Delfyle</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> PAN Verification – Ensure PAN validity of remitter & beneficiary</li>
          <li><span className={styles.checkIcon}>✔</span> Determine Applicability – Check if Form 15CB is required</li>
          <li><span className={styles.checkIcon}>✔</span> Fill Form 15CA – Upload details on IT e-filing portal</li>
          <li><span className={styles.checkIcon}>✔</span> CA Certification – Obtain Form 15CB where applicable</li>
          <li><span className={styles.checkIcon}>✔</span> Submit Forms Online – Upload on IT portal</li>
          <li><span className={styles.checkIcon}>✔</span> Acknowledgment Receipt – Receive acknowledgment for compliance proof</li>
        </ul>
        
        <h3 className={styles.subContentHeading}>Penalty for Non-Compliance</h3>
        <p>
          Failure to file Form 15CA/15CB, or incorrect filing, attracts a penalty of ₹10,000 per instance under the Income Tax Act.
        </p>
      </div>
    </div>

    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        
        <h3 className={styles.subContentHeading}>Structure of Form 15CA</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Part A – Taxable remittances up to ₹5 lakh</li>
          <li><span className={styles.checkIcon}>✔</span> Part B – Taxable remittances above ₹5 lakh with AO’s certificate</li>
          <li><span className={styles.checkIcon}>✔</span> Part C – Taxable remittances above ₹5 lakh requiring Form 15CB</li>
          <li><span className={styles.checkIcon}>✔</span> Part D – Remittances not chargeable to tax</li>
        </ul>

        <h3 className={styles.subContentHeading}>Details Required for Filing</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> PAN of remitter & beneficiary</li>
          <li><span className={styles.checkIcon}>✔</span> Amount & purpose of remittance</li>
          <li><span className={styles.checkIcon}>✔</span> Bank details (account no., branch, IFSC, SWIFT, etc.)</li>
          <li><span className={styles.checkIcon}>✔</span> DTAA details (if applicable)</li>
          <li><span className={styles.checkIcon}>✔</span> CA certificate (Form 15CB, where required)</li>
        </ul>
      </div>
    </div>
  </div>
</section>

  );
};

export default PrivateLimitedCompanyContentTwo; 