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
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>ITR-7 Filing</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading}>
            Procedure for ITR-7 Filing
            </h2>
          </div>

          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
            Filing ITR-7 can be done online via the Income Tax Portal in two ways:
            </h3>
            <div className={styles.productsGrid} style={{ display: 'flex', flexDirection: 'column' }}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>✔</span> E-filing with Digital Signature Certificate (DSC)</li>
                <li><span className={styles.checkIcon}>✔</span> Upload XML with verification via ITR-V</li>
              </ul>
            </div>

            <h3 className={styles.subContentHeading}>After filing:</h3>
            <div className={styles.productsGrid} style={{ display: 'flex', flexDirection: 'column' }}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>✔</span> Print ITR-V (Acknowledgment)</li>
                <li><span className={styles.checkIcon}>✔</span> Send ITR-V (if not e-verified) to: Centralized Processing Centre, Income Tax Department, Bengaluru – 560100</li>
              </ul>
            </div>

            <h3 className={styles.subContentHeading}>Verification & Compliance:</h3>
            <div className={styles.productsGrid} style={{ display: 'flex', flexDirection: 'column' }}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>⛉</span> Digital Signature is mandatory for most entities</li>
                <li><span className={styles.checkIcon}>⛉</span> Verifier must declare their designation/capacity</li>
                <li><span className={styles.checkIcon}>⛉</span> Misreporting can lead to penalties and prosecution</li>
              </ul>
            </div>

            
          </div>
        </div>

        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
          <h3 className={styles.subContentHeading}>Audit Report Submission (if applicable):</h3>
            <p className={styles.paragraphContent}>
            If your entity is liable for audit under Section 44AB, details of the audit report, including Form 10B and date of furnishing, must be mentioned under Audit Information in the ITR-7 form.
            </p>

            <h3 className={styles.subContentHeading}>No Document Upload Required:</h3>
            <div className={styles.productsGrid} style={{ display: 'flex', flexDirection: 'column' }}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>⛉</span> No annexures or supporting documents need to be attached.</li>
                <li><span className={styles.checkIcon}>⛉</span> Reconcile all TDS/TCS details with Form 26AS before submission.</li>
              </ul>
            </div>
            
            <h3 className={styles.subContentHeading}>Important Instructions for Filing ITR-7</h3>
            <div className={styles.productsGrid} style={{ display: 'flex', flexDirection: 'column' }}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>ⓘ</span> Fill all fields clearly; incomplete returns are treated as defective</li>
                <li><span className={styles.checkIcon}>ⓘ</span> Round off income and tax figures to the nearest ten rupees</li>
                <li><span className={styles.checkIcon}>ⓘ</span> Write “Nil” where applicable, “NA” for not applicable fields</li>
                <li><span className={styles.checkIcon}>ⓘ</span> Negative figures should be prefixed with “-”</li>
              </ul>
            </div>
            </div>
        </div>
      </div>
    </section>


  
  );
};

export default PrivateLimitedCompanyContentTwo; 