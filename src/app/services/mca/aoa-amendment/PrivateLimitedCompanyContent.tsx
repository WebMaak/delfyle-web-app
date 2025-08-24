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
    <a href="#" className={styles.topAnchorLink}>AOA Amendment</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Articles of Association (AOA) Amendment – Seamless & Compliant with Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          The Articles of Association (AOA) form the backbone of a company's internal governance. This essential legal document outlines the rights, responsibilities, and powers of directors, shareholders, and other officers, providing a clear framework for day-to-day operations and decision-making. Filed at the time of incorporation, the AOA can be amended later to accommodate the evolving needs and structure of the company.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          At Delfyle, we simplify the AOA Amendment process, helping businesses adapt their internal rules to stay compliant and efficient. From drafting resolutions to filing Form MGT-14 with the Ministry of Corporate Affairs (MCA), our experts handle everything with precision.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is the Articles of Association (AOA)?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          The Articles of Association is a foundational document that governs how a company operates internally. It defines:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Roles of Directors – Appointment, removal, and powers.</li>
          <li><span className={styles.checkIcon}>✔</span> Shareholder Rights – Voting, dividends, share transfer.</li>
          <li><span className={styles.checkIcon}>✔</span> Meeting Procedures – For both Board and General Meetings.</li>
          <li><span className={styles.checkIcon}>✔</span> Profit Allocation – Distribution rules for company profits.</li>
          <li><span className={styles.checkIcon}>✔</span> Borrowing Powers – Guidelines for company loans.</li>
          <li><span className={styles.checkIcon}>✔</span> Amendment Process – How changes can be made to the AOA.</li>
          <li><span className={styles.checkIcon}>✔</span> Winding Up – Rules for closure and asset distribution.</li>
          <li><span className={styles.checkIcon}>✔</span> Use of Company Seal – Procedures for official stamping.</li>
        </ul>
        <p className={styles.paragraphContent}>
          The AOA is a dynamic document that can be altered through a formal legal process as per the Companies Act, 2013.
        </p>

        <h3 className={styles.subContentHeading}>What is an AOA Amendment?</h3>
        <p className={styles.rightDescription} style={{marginBottom: '0'}}>
          An AOA Amendment refers to legally modifying the Articles of Association to reflect changes in business strategy, regulatory compliance, or internal structure. Companies amend the AOA to:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Comply with new regulations.</li>
          <li><span className={styles.checkIcon}>✔</span> Reflect changes in ownership or capital.</li>
          <li><span className={styles.checkIcon}>✔</span> Update governance structures.</li>
          <li><span className={styles.checkIcon}>✔</span> Realign with evolving business objectives.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          The Articles of Association serve as a flexible framework for a company’s operations. Our amendment services help you update your AOA to reflect strategic changes, ensuring your internal rules always align with your business goals.
        </p>
        
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Adapt your company’s internal rules to new realities with our expert AOA amendment services, ensuring legal compliance and efficiency."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading} style={{marginBottom: '0'}}>When Can a Company Amend Its AOA?</h3>
        <p className={styles.paragraphContent}>
          AOA modifications are commonly required under scenarios such as:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Conversion of Company Type: Private to Public Company or vice versa.</li>
          <li><span className={styles.checkIcon}>✔</span> Change in Business Operations: New activities or changes in share capital.</li>
          <li><span className={styles.checkIcon}>✔</span> Organizational Changes: Name change, share class alteration, or board restructuring.</li>
          <li><span className={styles.checkIcon}>✔</span> Legal or Strategic Requirements: Adapting to new laws or including special provisions.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 