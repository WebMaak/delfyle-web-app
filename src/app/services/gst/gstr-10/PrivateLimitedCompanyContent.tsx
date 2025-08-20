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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>GSTR-10</a>
  </div>

  <div className={styles.mainContentWrapper}>

    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>

      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{marginBottom: '0'}}>
          GSTR-10 Filing – Final GST Return for Cancelled Registrations
        </h2>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          When a business decides to cancel its GST registration or has it cancelled by tax authorities, it is mandatory to file a final return using GSTR-10. This return ensures that all pending liabilities are cleared and the taxpayer formally exits the GST system in compliance with the law.
        </p>
        <p className={styles.paragraphContent}>
          GSTR-10 is a crucial part of the GST compliance process, designed to capture the details of stock held, input tax credit (ITC) to be reversed, and any pending dues at the time of cancellation. Filing this return on time helps prevent penalties, legal issues, and future tax complications.
        </p>

        <h3 className={styles.subContentHeading}>What is GSTR-10?</h3>
        <p className={styles.paragraphContent}style={{marginBottom: '0'}}>
          GSTR-10 is a final return to be filed by taxpayers whose GST registration has been cancelled or voluntarily surrendered. It is not a regular monthly or quarterly return but a one-time filing requirement to legally close the GST account of the business.
        </p>
        <p className={styles.paragraphContent}>
          <strong>Due Date:</strong> GSTR-10 must be filed within 90 days from the date of cancellation or the date of the cancellation order—whichever is later.
        </p>

        <h3 className={styles.subContentHeading}>Who Should File GSTR-10?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Who has voluntarily surrendered their GST registration</li>
          <li><span className={styles.checkIcon}>✔</span> Whose registration has been cancelled by GST authorities due to non-compliance or other reasons</li>
        </ul>
        <p className={styles.paragraphContent}>
          <strong>Note:</strong> GSTR-10 is not applicable to input service distributors (ISDs), non-resident taxable persons, persons liable to collect TCS, or deduct TDS under GST.
        </p>

      </div>

    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>

      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Filing GSTR-10 ensures that all pending liabilities are cleared and the business formally exits the GST system in compliance with the law. Delfyle’s experts guide you through every step to ensure timely and accurate submission.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Delfyle helps businesses file GSTR-10 efficiently, ensuring full compliance and smooth closure of GST registration."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
      <h3 className={styles.subContentHeading}>Key Details Included in GSTR-10</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> GSTIN and legal name of the taxpayer</li>
          <li><span className={styles.checkIcon}>✔</span> Effective date of registration cancellation</li>
          <li><span className={styles.checkIcon}>✔</span> Reason for cancellation</li>
          <li><span className={styles.checkIcon}>✔</span> Closing stock details: including inputs, semi-finished goods, finished goods</li>
          <li><span className={styles.checkIcon}>✔</span> ITC involved in closing stock (to be reversed or paid)</li>
          <li><span className={styles.checkIcon}>✔</span> Tax payment challans (if any dues exist)</li>
          <li><span className={styles.checkIcon}>✔</span> ARN (Acknowledgment Reference Number) of the cancellation request</li>
          <li><span className={styles.checkIcon}>✔</span> Authorized signatory's details and declaration</li>
        </ul>
        </div>
    </div>

  </div>
</section>

  );
};

export default PrivateLimitedCompanyContent; 