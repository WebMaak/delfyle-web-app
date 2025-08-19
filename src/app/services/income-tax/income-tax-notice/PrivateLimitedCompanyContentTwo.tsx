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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Income Tax Notices</a>
  </div>
  <div className={styles.mainContentWrapper}>
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          How Delfyle Can Help?
        </h2>
        <p style={{marginBottom: '0'}}>
          Timely Compliance: Ensure accurate and on-time responses to avoid penalties.
        </p>
        <p style={{marginBottom: '0'}}>
          Expert Support: Assistance in preparing and submitting the required documents.
        </p>
        <p>
          End-to-End Guidance: From reviewing the notice to representing your case, Delfyle helps you stay compliant with tax laws. With Delfyle, you can handle Income Tax notices with confidence and peace of mind.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Intimation Under Section 143(1) of the Income Tax Act</h3>
        <p style={{marginBottom: '0'}}>
          Once you file your Income Tax Return (ITR), it is electronically processed by the Central Processing Centre (CPC). During this process, your return is cross-checked and recalculated after making certain automatic adjustments, such as:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Correction of arithmetical errors</li>
          <li><span className={styles.checkIcon}>✔</span> Disallowance of incorrect or ineligible claims</li>
          <li><span className={styles.checkIcon}>✔</span> Rejection of losses or expenses wrongly claimed</li>
          <li><span className={styles.checkIcon}>✔</span> Addition of income not reported in the return</li>
        </ul>

        <p style={{marginBottom: '0'}}>
          After processing, the CPC issues an Intimation under Section 143(1) in any of the following scenarios:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Tax Payable: When additional tax is found to be due.</li>
          <li><span className={styles.checkIcon}>✔</span> Refund Due: When excess tax has been paid and a refund is owed.</li>
          <li><span className={styles.checkIcon}>✔</span> Loss Adjustment: No tax or refund, but there is a change in the loss carried forward.</li>
        </ul>

        <p style={{marginBottom: '0'}}>
          The intimation must be issued within 9 months from the end of the financial year in which the ITR was filed.
        </p>
        <p>
          Example: If you filed your return for AY 2024–25 on 27 July 2024, the intimation could be issued up to 31 December 2025. <br />
          Note: Processing under Section 143(1) has been mandatory since AY 2017–18.
        </p>

        
      </div>
    </div>

    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Key Takeaways</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Timely compliance avoids penalties.</li>
          <li><span className={styles.checkIcon}>✔</span> Expert assistance ensures accurate submissions.</li>
          <li><span className={styles.checkIcon}>✔</span> End-to-end guidance keeps you confident in handling notices.</li>
        </ul>

        <h3 className={styles.subContentHeading}>How to Analyse an Intimation u/s 143(1)</h3>
        <p style={{marginBottom: '0'}}>
          Review the comparison between figures in your ITR filed and the recalculated figures by CPC. Check for mismatches in:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Income</li>
          <li><span className={styles.checkIcon}>✔</span> Deductions</li>
          <li><span className={styles.checkIcon}>✔</span> TDS or prepaid taxes</li>
        </ul>
        <p style={{marginBottom: '0'}}>
          If mismatch/demand is due to an error on your side: You can file a rectification request under Section 154 within 4 years from the end of the relevant assessment year.
        </p>
        <p>
          If the demand is correct: Pay the outstanding tax using the payment link provided in the intimation.
        </p>
      </div>
    </div>
  </div>
</section>

  
  );
};

export default PrivateLimitedCompanyContentTwo; 