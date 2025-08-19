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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>TAN Registration</a>
  </div>
  <div className={styles.mainContentWrapper}>
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Importance of TAN Registration
        </h2>
        <p style={{marginBottom: '0'}}>
          As per Section 203A of the Income Tax Act, 1961, every person or entity deducting or collecting tax at source must obtain TAN. It is compulsory to quote TAN in the following documents:
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> TDS/TCS returns and statements</li>
          <li><span className={styles.checkIcon}>✔</span> TDS/TCS challans</li>
          <li><span className={styles.checkIcon}>✔</span> TDS/TCS certificates issued to deductees</li>
          <li><span className={styles.checkIcon}>✔</span> Other income-tax related forms</li>
        </ul>
        <p>Without a valid TAN, the Income Tax Department may levy penalties, and banks may refuse to accept TDS payments.</p>

        <h3 className={styles.subContentHeading}>Features of TAN Registration</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Lifetime Validity – Once issued, TAN remains valid for life.</li>
          <li><span className={styles.checkIcon}>✔</span> Mandatory for TDS/TCS – Banks will not accept TDS challans without TAN.</li>
          <li><span className={styles.checkIcon}>✔</span> Applies to Proprietors – Even small businesses must apply if liable for TDS.</li>
          <li><span className={styles.checkIcon}>✔</span> Unique Identifier – A distinct code for tracking all tax deductions and collections.</li>
        </ul>

        <h3 className={styles.subContentHeading}>Advantages of Obtaining a TAN Number</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Ensures Legal Compliance – Avoid penalties and legal repercussions.</li>
          <li><span className={styles.checkIcon}>✔</span> Smooth Tax Operations – Simplifies TDS deductions and submissions.</li>
          <li><span className={styles.checkIcon}>✔</span> Easy Monitoring – Helps reconcile TDS/TCS transactions efficiently.</li>
          <li><span className={styles.checkIcon}>✔</span> Credibility for Businesses – Enhances business compliance status.</li>
        </ul>
      </div>
    </div>

    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Documents Required for TAN Application</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> PAN Card of the business/individual</li>
          <li><span className={styles.checkIcon}>✔</span> Proof of identity & address</li>
          <li><span className={styles.checkIcon}>✔</span> Passport-size photograph (in some cases)</li>
          <li><span className={styles.checkIcon}>✔</span> Registered office address proof</li>
          <li><span className={styles.checkIcon}>✔</span> Form 49B – Application for TAN allotment</li>
        </ul>

        <h3 className={styles.subContentHeading}>TAN Registration Process in India</h3>
        <p style={{marginBottom: '0'}}>You can apply for a TAN number either online or offline:</p>

        <h4 className={styles.subContentHeading}>1. Online TAN Application</h4>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Visit the NSDL portal for TAN application.</li>
          <li><span className={styles.checkIcon}>✔</span> Fill out Form 49B carefully with all required details.</li>
          <li><span className={styles.checkIcon}>✔</span> Submit the form online with the prescribed fee.</li>
          <li><span className={styles.checkIcon}>✔</span> Receive acknowledgment and TAN allotment.</li>
        </ul>

        <h4 className={styles.subContentHeading}>2. Offline TAN Application</h4>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Download Form 49B and fill it manually.</li>
          <li><span className={styles.checkIcon}>✔</span> Submit it at a TIN-Facilitation Center (TIN-FC) with fees.</li>
          <li><span className={styles.checkIcon}>✔</span> TAN will be allotted after verification.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  
  );
};

export default PrivateLimitedCompanyContentTwo; 