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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>GST Amendment</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{marginBottom: '0'}}>
          GST Amendment - Keeping Your Registration Compliant with Delfyle
        </h2>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is a GST Registration Amendment?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Once you have obtained GST registration, certain circumstances may require you to update the details provided during the registration process. This is referred to as a GST Amendment. GST amendments allow businesses to make necessary updates to their information, including business details, contact information, or other essential particulars.
        </p>
        <p className={styles.paragraphContent}>
          Keeping your GST registration up-to-date is vital for maintaining compliance with tax laws and avoiding any potential penalties.
        </p>

        <h3 className={styles.subContentHeading}>Types of GST Registration Amendments</h3>
        <p className={styles.paragraphContent}>
          There are two main categories of amendments under GST: Core Fields and Non-Core Fields. The type of amendment determines the process and whether approval from tax authorities is required.
        </p>
        
        <h3 className={styles.subContentHeading}>Core Field Amendments</h3>
        <p className={styles.paragraphContent}>
          Core field amendments include major changes that impact the business’s identity and legal standing. These changes require approval from the tax authorities and typically take up to 15 days for confirmation. Examples of core amendments include:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Business Name Change</li>
          <li><span className={styles.checkIcon}>✔</span> Business Address Change</li>
          <li><span className={styles.checkIcon}>✔</span> Changes to Authorized Signatories</li>
          <li><span className={styles.checkIcon}>✔</span> Changes to Key Stakeholders (e.g., promoters, partners, directors)</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          At Delfyle, our experts are here to guide you through the GST registration amendment process. We offer comprehensive support to ensure your amendments are filed correctly and efficiently, allowing your business to stay compliant with evolving regulations.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "At Delfyle, we ensure your GST registration remains accurate, reflecting any changes in your business to maintain full compliance."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Non-Core Field Amendments</h3>
        <p className={styles.paragraphContent}>
          Non-core field amendments involve minor updates that don’t require approval from tax officials. These amendments are processed automatically upon submission. Examples include:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Updates to Bank Account Information</li>
          <li><span className={styles.checkIcon}>✔</span> Modifications to Goods or Services Offered</li>
          <li><span className={styles.checkIcon}>✔</span> Changes in Contact Information (e.g., email or mobile number)</li>
          <li><span className={styles.checkIcon}>✔</span> Adjustments to Business Information or Authorized Signatories</li>
        </ul>
        <p className={styles.paragraphContent}>
          Since no official approval is needed for these amendments, the process is quick and straightforward.
        </p>
      </div>
    </div>
  </div>
</section>


  );
};

export default PrivateLimitedCompanyContent; 