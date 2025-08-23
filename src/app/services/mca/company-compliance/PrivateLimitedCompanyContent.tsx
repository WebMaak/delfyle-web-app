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
    <a href="#" className={styles.topAnchorLink}>Company Compliance</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Company Compliance: Expert Solutions for Private Limited Companies in India
        </h2>
        <p className={styles.paragraphContent}>
          Staying compliant with Indian corporate regulations can be a daunting task for private limited companies. The Companies Act, 2013 mandates strict compliance requirements related to director appointments, shareholder meetings, statutory filings, and more. Navigating these obligations is essential to avoid penalties and maintain your company’s legal status.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          That’s where Delfyle steps in. Our expert team simplifies corporate compliance with end-to-end support—right from company incorporation to ongoing ROC and tax-related filings. Whether you're a startup or a well-established business, Delfyle is your trusted compliance partner.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is Compliance for Private Limited Companies?</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Compliance refers to following statutory rules, regulations, and procedures defined under Indian laws. For private limited companies, compliance is governed primarily by the Companies Act, 2013, enforced by the Registrar of Companies (RoC).
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Compliance requirements include:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Holding board and shareholder meetings</li>
          <li><span className={styles.checkIcon}>✔</span> Filing financial statements and annual returns</li>
          <li><span className={styles.checkIcon}>✔</span> Maintaining statutory records</li>
          <li><span className={styles.checkIcon}>✔</span> Timely disclosure of changes in management, shareholding, or capital</li>
        </ul>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Compliance is mandatory regardless of the company’s turnover or capital investment.
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle simplifies corporate compliance with end-to-end support—right from company incorporation to ongoing ROC and tax-related filings.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Our expert team simplifies corporate compliance for private limited companies, helping you avoid penalties and maintain legal status."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Get Started with Delfyle</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          <span className={styles.checkIcon}>✔</span> Get started with Delfyle and experience seamless company compliance!
        </p>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 