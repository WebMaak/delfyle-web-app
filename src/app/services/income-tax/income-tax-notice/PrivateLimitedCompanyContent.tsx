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
      Income Tax Notices
    </a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Income Tax Notices: Verify & Respond Online with Delfyle
        </h2>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3
          ref={(el) => { if (el) leftBottomContentRef.current[0] = el; }}
          className={styles.subContentHeading}
        >
          What is an Income Tax Notice?
        </h3>
        <p
          ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }}
          className={styles.paragraphContent}
        >
          An Income Tax Notice is an official communication from the Income Tax Department sent to a taxpayer regarding their return or tax compliance. Notices may seek clarifications, supporting documents, or payment of dues. Timely action is required to avoid penalties.
        </p>

        <h3
          ref={(el) => { if (el) leftBottomContentRef.current[2] = el; }}
          className={styles.subContentHeading}
        >
          Common Types of Income Tax Notices
        </h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> <b>Section 142(1):</b> Request for additional documents or filing of return.</li>
          <li><span className={styles.checkIcon}>✔</span> <b>Section 139(9):</b> Defective or incomplete return.</li>
          <li><span className={styles.checkIcon}>✔</span> <b>Section 148:</b> Income escaped assessment or non-filed return.</li>
          <li><span className={styles.checkIcon}>✔</span> <b>Section 156:</b> Demand for tax, penalty, or dues.</li>
          <li><span className={styles.checkIcon}>✔</span> <b>Section 143(1):</b> Automated intimation of tax payable or refund due.</li>
          <li><span className={styles.checkIcon}>✔</span> <b>Section 143(2):</b> Detailed scrutiny of the return.</li>
          <li><span className={styles.checkIcon}>✔</span> <b>Section 131:</b> Suspected concealment of income.</li>
          <li><span className={styles.checkIcon}>✔</span> <b>Section 245:</b> Adjustment of refunds against pending tax.</li>
        </ul>

        <h3 className={styles.subContentHeading}>How Delfyle Helps</h3>
        <p className={styles.paragraphContent}>
          Delfyle guides you through every step: verifying the notice, preparing required documents, drafting accurate responses, and submitting them online. Our experts ensure timely action to keep you compliant and avoid unnecessary complications.
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div
        ref={(el) => { if (el) rightColumnContentRef.current[0] = el; }}
        className={styles.rightTopContainer}
      >
        <p className={styles.rightDescription}>
          Handle your Income Tax Notices efficiently with Delfyle. We simplify the process, save you time, and ensure full compliance with ITD requirements.
        </p>
      </div>

      <div
        ref={(el) => { if (el) rightColumnContentRef.current[1] = el; }}
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
          "Verify, respond, and stay compliant with Delfyle – your trusted tax partner."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
    </div>
  </div>
</section>


  );
};

export default PrivateLimitedCompanyContent; 