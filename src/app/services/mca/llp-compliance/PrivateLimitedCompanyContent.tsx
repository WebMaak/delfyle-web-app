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
    <a href="#" className={styles.topAnchorLink}>LLP Compliance</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Annual Compliance for Limited Liability Partnership (LLP) Made Easy with Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          Maintaining LLP compliance is essential for every Limited Liability Partnership in India. While LLPs enjoy fewer regulatory burdens compared to private limited companies, non-compliance can lead to hefty penalties—up to ₹5 lakhs. At Delfyle, we help you stay on top of your LLP’s annual compliance with expert guidance and timely support.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Let Delfyle simplify your LLP compliance. Avoid penalties and keep your business compliant—Get started today!
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Why LLP Annual Compliance Matters</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          An LLP is a separate legal entity, and its designated partners are responsible for ensuring it adheres to statutory compliance requirements. Proper annual compliance helps maintain your LLP’s legal standing, enhances credibility, and ensures smooth operation.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Key LLP Compliance Requirements:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Maintenance of books of accounts</li>
          <li><span className={styles.checkIcon}>•</span> Filing of Form 11 (Annual Return)</li>
          <li><span className={styles.checkIcon}>•</span> Filing of Form 8 (Statement of Accounts & Solvency)</li>
          <li><span className={styles.checkIcon}>•</span> Filing of Income Tax Return (ITR-5)</li>
          <li><span className={styles.checkIcon}>•</span> Filing of Tax Audit Report (if applicable)</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle simplifies your LLP compliance, helping you avoid penalties and keep your business running smoothly with expert guidance and timely support.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Ensure your LLP remains legally compliant, credible, and operational with our expert compliance solutions."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>LLP Annual Return Filing – Form 11</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          All LLPs must file an annual return using Form 11, which includes details of designated partners and partner contributions.
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> **Due Date:** May 30th each year.</li>
          <li><span className={styles.checkIcon}>•</span> **Penalty for Late Filing:** ₹100 per day from the due date.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 