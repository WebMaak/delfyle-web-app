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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>
      15CA–15CB Filing
    </a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          15CA–15CB Filing Online – Compliance for Foreign Remittances with Delfyle
        </h2>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        {/* Section 1 */}
        <h3
          ref={(el) => {
            if (el) leftBottomContentRef.current[0] = el;
          }}
          className={styles.subContentHeading}
        >
          What is 15CA–15CB Filing and Why is it Required?
        </h3>
        <p
          ref={(el) => {
            if (el) leftBottomContentRef.current[1] = el;
          }}
          className={styles.paragraphContent}
        >
          When an Indian resident makes a foreign remittance (payment to a non-resident
          or foreign company), it is mandatory under the Income Tax Act, 1961 to file
          Form 15CA and Form 15CB before transferring funds outside India. This ensures
          tax deduction at source (TDS) wherever applicable and compliance with
          international taxation rules.
        </p>

        {/* Section 2 */}
        <h3
          ref={(el) => {
            if (el) leftBottomContentRef.current[2] = el;
          }}
          className={styles.subContentHeading}
        >
          Why choose Delfyle for 15CA–15CB Filing?
        </h3>
        <p
          ref={(el) => {
            if (el) leftBottomContentRef.current[3] = el;
          }}
          className={styles.paragraphContent}
        >
          At Delfyle, our expert tax professionals manage the entire compliance process
          – from preparing Form 15CA to obtaining Chartered Accountant certification in
          Form 15CB. We ensure accurate documentation, quick turnaround, and hassle-free
          compliance for all types of foreign remittances.
        </p>

        {/* Section 3 */}
        <h3 className={styles.subContentHeading}>Key Features of 15CA–15CB Filing</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Mandatory under Section 195 of the Income Tax Act.</li>
          <li><span className={styles.checkIcon}>✔</span> Ensures proper deduction of TDS on foreign remittances.</li>
          <li><span className={styles.checkIcon}>✔</span> Prevents penalties and compliance risks.</li>
          <li><span className={styles.checkIcon}>✔</span> Applicable for payments to non-residents & foreign companies.</li>
        </ul>

        {/* Section 4 */}
        <h3 className={styles.subContentHeading}>Understanding the Forms</h3>
        <ul className={styles.productsList}>
          <li>
            <span className={styles.checkIcon}>✔</span>
            <b> Form 15CA:</b> Self-declaration form submitted online by the remitter
            (payer) giving details of the remittance.
          </li>
          <li>
            <span className={styles.checkIcon}>✔</span>
            <b> Form 15CB:</b> Certificate from a Chartered Accountant (CA) confirming
            that tax has been deducted as per the Income Tax Act and DTAA (Double Tax
            Avoidance Agreement).
          </li>
        </ul>

        {/* Section 5 */}
        <h3 className={styles.subContentHeading}>When is Form 15CB Required?</h3>
        <p className={styles.paragraphContent}>
          Filing Form 15CB is mandatory when the foreign remittance exceeds ₹5,00,000 in
          a financial year. For lower amounts, Form 15CA alone may be sufficient,
          depending on the nature of payment.
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div
        ref={(el) => {
          if (el) rightColumnContentRef.current[0] = el;
        }}
        className={styles.rightTopContainer}
      >
        <p className={styles.rightDescription}>
          Delfyle ensures a smooth 15CA–15CB filing experience – minimizing errors,
          ensuring legal compliance, and making cross-border payments stress-free. With
          our team handling the paperwork and tax validation, you can focus on your
          business without worrying about compliance hurdles.
        </p>
      </div>

      <div
        ref={(el) => {
          if (el) rightColumnContentRef.current[1] = el;
        }}
        className={styles.rightBottomContainer}
      >
        <Image
          src="/delfyle-logo/delfyle-logo.png"
          alt="Delfyle Logo"
          width={180}
          height={50}
          objectFit="contain"
          className={styles.companyLogo}
        />
        <p className={styles.bottomQuote}>
          "Get your Form 15CA & Form 15CB filed with Delfyle – Accurate, Fast & Hassle-free."
        </p>
        <p className={styles.bottomAuthor}>– Team Delfyle</p>
      </div>
    </div>
  </div>
</section>



  );
};

export default PrivateLimitedCompanyContent; 