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
    <a href="#" className={styles.topAnchorLink}>Remove Director</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Director Removal from a Company – Procedure & Compliance with Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          Company directors play a pivotal role in overseeing the operations and governance of a business, while the ownership lies with its shareholders. There may be situations where shareholders seek to remove a director due to non-performance, misconduct, or compliance issues. Alternatively, a director may decide to resign voluntarily.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Director removal is a significant legal and corporate action that must be carried out in accordance with the Companies Act, 2013, and other applicable rules. Whether it's through shareholder resolution, board resolution, or a legal directive, the process must be conducted fairly and lawfully.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Why a Director May Be Removed</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          As per the Companies Act, 2013, a Private Limited Company must appoint a minimum of two directors. Shareholders have the authority to remove a director by passing an ordinary resolution during a general meeting—except in the case of government-nominated directors.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          A director may be removed under the following conditions:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Disqualification under the Companies Act, 2013.</li>
          <li><span className={styles.checkIcon}>✔</span> Absence from Board meetings for more than 12 months.</li>
          <li><span className={styles.checkIcon}>✔</span> Engagement in prohibited transactions violating Section 184.</li>
          <li><span className={styles.checkIcon}>✔</span> Conviction by a court for an offence involving imprisonment of 6 months or more.</li>
          <li><span className={styles.checkIcon}>✔</span> Disqualification due to a court or tribunal order.</li>
          <li><span className={styles.checkIcon}>✔</span> Failure to comply with statutory duties.</li>
          <li><span className={styles.checkIcon}>✔</span> Voluntary resignation from the Board.</li>
        </ul>

        <h3 className={styles.subContentHeading}>Legal Framework Governing Director Removal</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Section 169:</span> Outlines the procedure for removing directors.</li>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Section 115:</span> Governs special notices related to the removal process.</li>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Section 163:</span> Ensures fair representation in director appointments/removals.</li>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Rule 23</span>  of the Companies (Management and Administration) Rules, 2014: Provides procedural guidelines for director removal.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle provides expert assistance for both voluntary resignation and removal of directors, ensuring that your company remains fully compliant with legal standards. Our team handles all documentation and filings with precision so you can focus on running your business.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Delfyle provides expert assistance for both voluntary resignation and removal of directors, ensuring that your company remains fully compliant with legal standards."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Methods for Removing a Director</h3>
        <p className={styles.paragraphContent}  style={{ marginBottom: '0' }}>
          A director may cease to hold office through one of the following ways:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Voluntary Resignation</li>
          <li><span className={styles.checkIcon}>✔</span> Absence from Board Meetings for 12 Months</li>
          <li><span className={styles.checkIcon}>✔</span> Shareholder-Initiated Removal via Ordinary Resolution</li>
        </ul>
        
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 