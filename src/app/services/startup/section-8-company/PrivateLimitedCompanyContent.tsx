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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Section 8 Company</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Section 8 Company Registration in India with Delfyle
        </h2>
        <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
          A Section 8 Company is a non-profit organization aimed at promoting charitable activities, education, arts, science, and sports. Profits are used solely to further these objectives and are not distributed among members. Delfyle provides end-to-end services to help you establish a Section 8 Company efficiently, with expert guidance throughout the process.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
          What is a Section 8 Company?
        </h3>
        <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
          According to the Companies Act, 2013, Section 8 Companies are organizations established to promote arts, commerce, science, research, education, sports, charity, social welfare, religion, environmental protection, or other similar objectives. These companies utilize profits solely to achieve their mission and do not distribute dividends to shareholders.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Overview of Section 8 Company Registration</h3>
        <p className={styles.paragraphContent}>
          Section 8 Companies are formed to support non-profit goals, including education, social welfare, environmental preservation, arts, charity, sports research, and more. A minimum of two directors is required for registration, and there is no minimum paid-up capital. Delfyle ensures all legal formalities and documentation are handled professionally for smooth incorporation.
        </p>

        <h3 className={styles.subContentHeading}>Key Points about Section 8 Companies</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> NGOs can register as a Section 8 Company under the Companies Act, 2013</li>
          <li><span className={styles.checkIcon}>•</span> Profits cannot be used for purposes other than charitable objectives or distributed among members</li>
          <li><span className={styles.checkIcon}>•</span> Section 8 Companies succeed the earlier Section 25 Companies under the Companies Act, 1956</li>
          <li><span className={styles.checkIcon}>•</span> Must comply with Companies Act, maintain accounts, file returns, and adhere to GST and IT regulations</li>
          <li><span className={styles.checkIcon}>•</span> Changes to MoA or AoA require government approval</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle provides professional Section 8 Company registration services, managing documentation, approvals, and legal compliance, so you can focus on your non-profit mission.
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
          "Establish your Section 8 Company seamlessly with expert guidance from Delfyle."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
    </div>
  </div>
</section>




  
  );
};

export default PrivateLimitedCompanyContent; 