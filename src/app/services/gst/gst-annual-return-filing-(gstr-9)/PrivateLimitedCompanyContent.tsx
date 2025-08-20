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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>GST Annual Return Filing (GSTR - 9)</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{marginBottom: '0'}}>
          GSTR-9 Filing Made Simple with Delfyle – GST Annual Return Filing Services
        </h2>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is GSTR-9?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          GSTR-9 is the annual return form under GST that all regular registered taxpayers must file if their aggregate turnover exceeds ₹2 crore in a financial year. It provides a consolidated view of the entire year’s transactions—sales, purchases, taxes paid, input tax credit claimed, and adjustments made—ensuring transparency and compliance.
        </p>
        <p className={styles.paragraphContent}>
          GSTR-9 filing is a mandatory annual compliance requirement for all regular taxpayers registered under the Goods and Services Tax (GST) regime. This return consolidates the taxpayer’s outward and inward supplies, input tax credit claimed, tax paid, and any adjustments made during the financial year. It covers transactions under CGST, SGST, IGST, and UTGST, serving as a summary of monthly or quarterly returns like GSTR-1, GSTR-2A, and GSTR-3B.
        </p>

        <h3 className={styles.subContentHeading}>Who Should File GSTR-9?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Regular GST-registered taxpayers</li>
          <li><span className={styles.checkIcon}>✔</span> SEZ units and developers</li>
          <li><span className={styles.checkIcon}>✔</span> Taxpayers who switched from the Composition Scheme to the Regular Scheme</li>
        </ul>

        <h3 className={styles.subContentHeading}>GSTR-9 Applicability & Exemptions</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Normal taxpayers with turnover above ₹2 crore</li>
          <li><span className={styles.checkIcon}>✔</span> SEZ Units/Developers</li>
          <li><span className={styles.checkIcon}>✔</span> Taxpayers transitioning from the Composition Scheme</li>
        </ul>
        <h3 className={styles.subContentHeading}>Exempt from Filing GSTR-9:</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Composition taxpayers (must file GSTR-9A instead)</li>
          <li><span className={styles.checkIcon}>✔</span> Casual and non-resident taxpayers</li>
          <li><span className={styles.checkIcon}>✔</span> Input Service Distributors (ISD)</li>
          <li><span className={styles.checkIcon}>✔</span> OIDAR service providers</li>
          <li><span className={styles.checkIcon}>✔</span> E-commerce operators under TCS and persons under TDS provisions</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle offers complete assistance for GST registration and return filing — from documentation and filing to approval and compliance management. Get your GSTIN hassle-free with expert guidance.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Talk to our GST experts and start your registration today with Delfyle."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Types of GST Annual Returns</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> GSTR-9: Regular taxpayers with turnover &gt; ₹2 crore</li>
          <li><span className={styles.checkIcon}>✔</span> GSTR-9A: Composition scheme taxpayers</li>
          <li><span className={styles.checkIcon}>✔</span> GSTR-9C: Taxpayers requiring annual audit (turnover &gt; ₹5 crore)</li>
        </ul>

        <h3 className={styles.subContentHeading}>What is GSTR-9C?</h3>
        <p className={styles.paragraphContent}>
          GSTR-9C is a reconciliation statement filed alongside GSTR-9 by taxpayers undergoing GST audit. It matches figures from GSTR-9 with the audited financial statements and must be certified by a Chartered Accountant or Cost Accountant.
        </p>

        <h3 className={styles.subContentHeading}>Turnover Limit for GSTR-9 Filing</h3>
        <p className={styles.paragraphContent}>
          Filing GSTR-9 is mandatory for businesses with an annual aggregate turnover of more than ₹2 crore. For businesses below this limit, filing is optional unless mandated otherwise by the government through notifications.
        </p>
        
        <h3 className={styles.subContentHeading}>Due Date for GSTR-9 Filing</h3>
        <p className={styles.paragraphContent}>
          The due date for filing GSTR-9 is 31st December following the end of the financial year, unless extended by the GST authorities. It's essential to file on time to avoid penalties.
        </p>
      </div>
    </div>
  </div>
</section>


  );
};

export default PrivateLimitedCompanyContent; 