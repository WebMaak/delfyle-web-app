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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>ITR-4 Filing</a>
  </div>
  <div className={styles.mainContentWrapper}>
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          ITR-4 Sugam Filing Made Simple with Delfyle | Fast | Compliant | Expert-Assisted | Affordable
        </h2>
      </div>
      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
          What is ITR-4 Sugam Form and how does Delfyle simplify the filing process?
        </h3>
        <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
          ITR-4, also known as Sugam, is for taxpayers under the Presumptive Taxation Scheme (Sections 44AD, 44ADA, and 44AE).
          It simplifies tax filing for small businesses, professionals, and transport operators. With Delfyle, the process becomes even easier—fast, accurate, and fully compliant with expert guidance.
        </p>

        <h3 ref={el => { if (el) leftBottomContentRef.current[2] = el }} className={styles.subContentHeading}>
          Who can file ITR-4 with Delfyle’s assistance?
        </h3>
        <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
          Delfyle helps individuals, HUFs, and firms (except LLPs) file ITR-4 if they:
          <br />– Have income up to ₹50 lakhs
          <br />– Earn from salary/pension, one house property, and other sources (like interest or family pension)
          <br />– Opt for presumptive taxation under Sections 44AD, 44ADA, or 44AE
        </p>

        <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>
          Quick Eligibility Summary
        </h3>
        <div ref={el => { if (el) leftBottomContentRef.current[5] = el }} className={styles.productsGrid}>
          <ul className={styles.productsList}>
            <li><span className={styles.checkIcon}>✔</span> Individual, HUF, or Firm (excluding LLPs)</li>
            <li><span className={styles.checkIcon}>✔</span> Income up to ₹50 Lakhs</li>
            <li><span className={styles.checkIcon}>✔</span> Salary or Pension + One House Property</li>
          </ul>
          <ul className={styles.productsList}>
            <li><span className={styles.checkIcon}>✔</span> Income from other sources like interest</li>
            <li><span className={styles.checkIcon}>✔</span> Business/profession under 44AD, 44ADA, 44AE</li>
          </ul>
        </div>

        <h3 className={styles.subContentHeading}>
          What is Presumptive Taxation Scheme?
        </h3>
        <p className={styles.paragraphContent}>
          Presumptive taxation is designed to ease compliance for small taxpayers by estimating income at a fixed rate,
          eliminating the need to maintain books of accounts.
          <br /><br />
          <strong>Section 44AD:</strong> For small businesses with turnover ≤ ₹2 Cr<br />
          <strong>Section 44ADA:</strong> For professionals with gross receipts ≤ ₹50 Lakhs<br />
          <strong>Section 44AE:</strong> For transport businesses with up to 10 vehicles<br /><br />
          <strong>Note:</strong> If turnover exceeds ₹2 Cr, ITR-3 must be filed instead.
        </p>
      </div>
    </div>

    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle offers expert-assisted filing for those opting for presumptive taxation under the ITR-4 Sugam scheme.
          Whether you're a freelancer, small business owner, or transporter, we make the process quick, compliant, and stress-free.
        </p>
      </div>
      <div ref={el => { if (el) rightColumnContentRef.current[1] = el }} className={styles.rightBottomContainer}>
        <Image 
          src="/delfyle-logo/delfyle-logo.png" 
          alt="Delfyle Logo" 
          width={180} 
          height={50} 
          objectFit="contain"
          className={styles.companyLogo}
        />
        <p className={styles.bottomQuote}>
          "Our expert team simplifies ITR-4 filing by managing your income, deductions, and eligibility accurately. Let Delfyle handle your taxes while you focus on your profession or business."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
    </div>
  </div>
</section>


  
  );
};

export default PrivateLimitedCompanyContent; 