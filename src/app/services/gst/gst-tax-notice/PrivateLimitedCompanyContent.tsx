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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>GST Tax Notice</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{marginBottom: '0'}}>
          Handling GST Notices: A Comprehensive Guide for Taxpayers
        </h2>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is a GST Notice?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          A GST notice is an official communication from the GST authorities. It can serve multiple purposes, such as reminding taxpayers of defaults in GST compliance, requesting additional information, or correcting errors in tax filings. These notices are vital to ensure tax compliance and maintain the smooth functioning of the GST system.
        </p>
        <p className={styles.paragraphContent}>
          There are various reasons why a taxpayer might receive a GST notice, including late GST registration, failure to file GST returns on time, discrepancies in Input Tax Credit (ITC) claims, or incorrect reporting of transactions. When you receive a GST notice, it is crucial to respond promptly to avoid any penalties or legal consequences.
        </p>

        <h3 className={styles.subContentHeading}>Types of GST Notices</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Show Cause Notice (SCN): Issued when the authorities suspect a violation of GST laws. The taxpayer is required to explain or justify the issue within a specified period.</li>
          <li><span className={styles.checkIcon}>✔</span> Demand Notice: This notice outlines the tax liability due from the taxpayer, including any penalties and interest.</li>
          <li><span className={styles.checkIcon}>✔</span> Scrutiny Notice: Sent when the authorities scrutinize a taxpayer’s GST returns or documents to ensure proper compliance.</li>
          <li><span className={styles.checkIcon}>✔</span> Assessment Notice: Issued after the authorities assess the taxpayer’s GST liability based on submitted returns.</li>
          <li><span className={styles.checkIcon}>✔</span> Recovery Notice: Sent when the taxpayer fails to pay the tax due as per the demand notice. It initiates steps for recovery, including asset attachment.</li>
          <li><span className={styles.checkIcon}>✔</span> Notice for Personal Hearing: In cases where the authorities require a personal appearance by the taxpayer to discuss discrepancies.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          GST notices are official communications from tax authorities. Timely and accurate responses are crucial to avoid penalties. Delfyle helps you handle these notices effectively and with confidence.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Our experts guide you in preparing a precise response, ensuring compliance and a smooth resolution to your GST notice."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>


      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Responding to a GST Notice</h3>
        <p className={styles.paragraphContent}>
          The process of responding to a GST notice is critical and requires careful attention to detail. Delfyle provides a streamlined process to help you handle your notice effectively.
        </p>
        <h3 className={styles.subContentHeading}>Documents Required for Response</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Copy of the GST Notice received</li>
          <li><span className={styles.checkIcon}>✔</span> Details of the issue mentioned in the notice</li>
          <li><span className={styles.checkIcon}>✔</span> Relevant business records, invoices, and ledgers</li>
          <li><span className={styles.checkIcon}>✔</span> GSTR-1 and GSTR-3B filings for the relevant period</li>
          <li><span className={styles.checkIcon}>✔</span> Any other supporting documents requested by the authority</li>
        </ul>
      </div>
    </div>
  </div>
</section>


  );
};

export default PrivateLimitedCompanyContent; 