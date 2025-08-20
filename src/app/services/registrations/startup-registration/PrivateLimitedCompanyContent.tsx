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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Startup Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Startup Registration
        </h2>
        <p className={styles.paragraphContent}>
          Startup India Registration Made Simple with Delfyle. Are you ready to launch and grow your startup in India? The Startup India initiative, launched by the Government of India, is a powerful platform designed to support and empower entrepreneurs. By registering under Startup India, you can access a host of benefits — from tax exemptions and simplified compliance to funding support and exclusive opportunities.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Delfyle helps you streamline the Startup India registration process efficiently so that you can focus on what matters most — building and scaling your business. Join the community of next-generation entrepreneurs by registering your business with Startup India today!
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is the Startup India Scheme?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Launched in 2016, the Startup India Scheme aims to transform India into a global innovation hub by promoting sustainable economic growth and generating large-scale employment opportunities. Through this initiative, eligible startups can enjoy a wide range of benefits that reduce regulatory burden and improve access to resources and investment.
        </p>

        <h3 className={styles.subContentHeading}>DPIIT Recognition for Startups</h3>
        <p className={styles.paragraphContent}>
          To avail benefits under the Startup India scheme, startups must obtain recognition from the Department for Promotion of Industry and Internal Trade (DPIIT), a division of the Ministry of Commerce and Industry. DPIIT-recognized startups gain access to tax benefits, fast-tracked patent applications, simplified regulatory requirements, and more.
        </p>

        <h3 className={styles.subContentHeading}>Eligibility Criteria for Startup India Registration</h3>
        <p className={styles.paragraphContent}>
          To register under Startup India and qualify for DPIIT recognition, your business must meet the following conditions:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Incorporation Type: Must be a Private Limited Company, Limited Liability Partnership (LLP), or Partnership Firm.</li>
          <li><span className={styles.checkIcon}>✔</span> Age of Entity: Not more than 10 years from the date of incorporation (15 years for biotech startups).</li>
          <li><span className={styles.checkIcon}>✔</span> Annual Turnover: Must not exceed ₹100 crores in any financial year since incorporation.</li>
          <li><span className={styles.checkIcon}>✔</span> Innovation Requirement: Must work on innovation, development, deployment, or commercialization of new products, services, or processes.</li>
          <li><span className={styles.checkIcon}>✔</span> Regulatory Compliance: Must comply with applicable Indian laws and maintain a business bank account.</li>
          <li><span className={styles.checkIcon}>✔</span> Job Creation: Should contribute to or have potential for job creation in India.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          The Startup India initiative is a powerful platform to empower entrepreneurs. By registering under Startup India, you can access a host of benefits from tax exemptions to funding support and exclusive opportunities.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Our experts guide you through the seamless Startup India registration process, so you can concentrate on your entrepreneurial journey."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      {/* <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Eligibility Criteria for Startup India Registration</h3>
        <p className={styles.paragraphContent}>
          To register under Startup India and qualify for DPIIT recognition, your business must meet the following conditions:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Incorporation Type: Must be a Private Limited Company, Limited Liability Partnership (LLP), or Partnership Firm.</li>
          <li><span className={styles.checkIcon}>✔</span> Age of Entity: Not more than 10 years from the date of incorporation (15 years for biotech startups).</li>
          <li><span className={styles.checkIcon}>✔</span> Annual Turnover: Must not exceed ₹100 crores in any financial year since incorporation.</li>
          <li><span className={styles.checkIcon}>✔</span> Innovation Requirement: Must work on innovation, development, deployment, or commercialization of new products, services, or processes.</li>
          <li><span className={styles.checkIcon}>✔</span> Regulatory Compliance: Must comply with applicable Indian laws and maintain a business bank account.</li>
          <li><span className={styles.checkIcon}>✔</span> Job Creation: Should contribute to or have potential for job creation in India.</li>
        </ul>
      </div> */}
    </div>
  </div>
</section>


  );
};

export default PrivateLimitedCompanyContent; 