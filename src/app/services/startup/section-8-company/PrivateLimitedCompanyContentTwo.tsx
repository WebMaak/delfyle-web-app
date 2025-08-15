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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Section 8 Company Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Section 8 Company Incorporation in India with Delfyle
        </h2>
        <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Incorporating a Section 8 Company is ideal for organizations aiming to operate on a non-profit basis while enjoying a separate legal identity. Section 8 companies allow you to pursue charitable objectives, social welfare, and other not-for-profit activities with credibility and legal recognition. Delfyle simplifies the registration process from documentation to approval.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Eligibility & Mandatory Requirements</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Specific eligibility criteria and legal requirements must be met before incorporation. An Indian national or Hindu Undivided Family (HUF) can incorporate a Section 8 company. At least one director is required, and objectives must relate to art, science, sports, charitable activities, education, or providing financial assistance to individuals from lower-income groups. Private limited companies require at least two directors, and public limited companies require three. Membership limits, capital requirements, and non-profit objectives must comply with MoA and AoA provisions.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Section 8 Company Incorporation Process</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Obtain Digital Signature Certificate (DSC) for all directors</li>
          <li><span className={styles.checkIcon}>•</span> Acquire Director Identification Number (DIN) from MCA</li>
          <li><span className={styles.checkIcon}>•</span> Reserve the company name and get MCA approval</li>
          <li><span className={styles.checkIcon}>•</span> File the incorporation application (Form INC-32) with MoA & AoA</li>
          <li><span className={styles.checkIcon}>•</span> Apply for Section 8 license (Form INC-12)</li>
          <li><span className={styles.checkIcon}>•</span> Obtain Certificate of Incorporation (Form INC-16) from ROC</li>
        </ul>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Donations & Funding</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Foreign Contributions: Requires FCRA registration if accepting foreign donations</li>
          <li><span className={styles.checkIcon}>•</span> Equity Funding: Can issue new equity shares at a premium</li>
          <li><span className={styles.checkIcon}>•</span> Domestic Donations: Accept donations with compliance to anti-money laundering regulations</li>
        </ul>
      </div>
    </div>

    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle provides end-to-end guidance for Section 8 Company registration, ensuring all legal formalities are met. Our team assists with documentation, filing, approvals, and compliance, helping organizations establish themselves as credible, non-profit entities efficiently.
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
          "Delfyle ensures smooth, expert-assisted Section 8 Company registration and compliance."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
    </div>
  </div>
</section>




  
  );
};

export default PrivateLimitedCompanyContentTwo; 