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
    <a href="#" className={styles.topAnchorLink}>Company Registered Office Change</a>
  </div>
  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Change of Registered Office Address for a Company
        </h2>
        <h3 className={styles.subContentHeading} style={{marginTop: '20px'}}>What is a Registered Office?</h3>
        <p className={styles.paragraphContent}>
          A company’s registered office is its official address registered with the Registrar of Companies (ROC) where all legal and statutory communications are sent. It is a mandatory disclosure in key incorporation documents such as the Memorandum of Association (MOA) and Articles of Association (AOA).
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          This location serves as the central hub for receiving government correspondence, legal notices, and communication from stakeholders. Companies are legally required to maintain and disclose this address throughout their operations.
        </p>
      </div>
      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Why Change the Registered Office Address?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Expansion: Accommodating team growth or scaling operations.</li>
          <li><span className={styles.checkIcon}>✔</span> Better Location: Moving to a more accessible or prestigious area.</li>
          <li><span className={styles.checkIcon}>✔</span> Cost Efficiency: Reducing rental, tax, or operational costs.</li>
          <li><span className={styles.checkIcon}>✔</span> Market Access: Shifting closer to clients or emerging markets.</li>
          <li><span className={styles.checkIcon}>✔</span> Regulatory Requirements: Complying with specific state-level guidelines.</li>
          <li><span className={styles.checkIcon}>✔</span> Brand Positioning: Relocating to enhance corporate image.</li>
        </ul>
        <p className={styles.paragraphContent}>
          The Companies Act, 2013 outlines the legal procedure for changing the registered office, and the process varies depending on the type of relocation.
        </p>

        <h3 className={styles.subContentHeading}>Types of Registered Office Address Changes</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Within the same city, town, or village</li>
          <li><span className={styles.checkIcon}>✔</span> From one city to another within the same ROC jurisdiction</li>
          <li><span className={styles.checkIcon}>✔</span> From the jurisdiction of one ROC to another within the same state</li>
          <li><span className={styles.checkIcon}>✔</span> From one state to another</li>
        </ul>
        <p className={styles.paragraphContent}>
          Each category has its own compliance requirements and documentation procedures.
        </p>
      </div>
    </div>


    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Changing a company’s registered office is a critical process that requires meticulous documentation and adherence to regulatory guidelines. We ensure a seamless transition for your business.
        </p>
      </div>
      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Changing a company’s registered office is a critical process that requires meticulous documentation and adherence to regulatory guidelines. We ensure a seamless transition for your business."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      {/* <div className={styles.leftBottomContainer}>
                
      </div> */}
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 