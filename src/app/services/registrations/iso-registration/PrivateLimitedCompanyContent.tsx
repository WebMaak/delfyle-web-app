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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>ISO Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Achieve Global Quality Standards with ISO Certification
        </h2>
        <p className={styles.paragraphContent}>
          ISO certification demonstrates your business's commitment to quality, consistency, and operational excellence. At Delfyle, we streamline the ISO registration process, helping you achieve this globally recognized credential with ease and confidence.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Start your ISO certification journey with Delfyle and strengthen your business with global standards.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is ISO Registration?</h3>
        <p className={styles.paragraphContent}>
          ISO registration is the process of getting certified by an external body for complying with standards set by the International Organization for Standardization (ISO). These standards provide frameworks for effective management systems in areas like quality, environment, and information security.
        </p>

        <h3 className={styles.subContentHeading}>Purpose of ISO Certification</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Enhanced Credibility: Boost customer trust and market reputation.</li>
          <li><span className={styles.checkIcon}>✔</span> Improved Efficiency: Optimize internal processes and reduce errors.</li>
          <li><span className={styles.checkIcon}>✔</span> Global Market Access: Meet international standards to unlock new business opportunities.</li>
          <li><span className={styles.checkIcon}>✔</span> Continuous Improvement: Implement a framework for ongoing enhancement.</li>
          <li><span className={styles.checkIcon}>✔</span> Risk Mitigation: Establish robust systems to manage business risks.</li>
        </ul>

        <h3 className={styles.subContentHeading}>Key Benefits for Your Business</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> **Increased Customer Satisfaction:** Consistent product/service quality leads to happier customers.</li>
          <li><span className={styles.checkIcon}>✔</span> **Streamlined Operations:** Documented processes improve efficiency and reduce waste.</li>
          <li><span className={styles.checkIcon}>✔</span> **Competitive Advantage:** Stand out from competitors who are not certified.</li>
          <li><span className={styles.checkIcon}>✔</span> **Improved Employee Morale:** Clear roles and processes lead to a more organized and productive workplace.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle simplifies the ISO certification process, offering expert guidance and support to ensure a smooth and successful registration, from documentation to final audit.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Delfyle makes ISO certification simple, so you can focus on building a stronger, more credible business."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>How Delfyle Helps</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> **Consultation:** We help you choose the right ISO standard for your business (e.g., ISO 9001, ISO 27001).</li>
          <li><span className={styles.checkIcon}>✔</span> **Documentation:** Our team assists with preparing all required documents and policies.</li>
          <li><span className={styles.checkIcon}>✔</span> **Audit Preparation:** We guide you through the audit process to ensure a successful outcome.</li>
          <li><span className={styles.checkIcon}>✔</span> **Post-Certification Support:** We provide ongoing support to help you maintain compliance.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
);
};

export default PrivateLimitedCompanyContent; 