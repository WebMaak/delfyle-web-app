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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>ESI Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          ESI Registration
        </h2>
        <p className={styles.paragraphContent}>
          Employee State Insurance (ESI) registration is a statutory requirement under the Employees’ State Insurance Act, 1948. It ensures that eligible employees receive social security benefits, including medical care, cash benefits during sickness and maternity, disability coverage, and dependent benefits in case of death due to employment injury. Businesses with 10 or more employees (or 20 in some states) earning wages up to ₹21,000 (or ₹25,000 for persons with disabilities) per month must register under the ESI scheme.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Delfyle simplifies this process by offering expert-guided ESI and PF registration services. Our experienced professionals handle every step of the online registration process, helping your business meet compliance obligations while ensuring your employees receive the benefits they deserve.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Overview of the ESI Scheme</h3>
        <p className={styles.paragraphContent}>
          The Employee State Insurance Scheme is a government-backed program managed by the Employees’ State Insurance Corporation (ESIC). It provides employees and their families with comprehensive medical coverage and financial assistance under various circumstances, including illness, maternity, disability, and workplace accidents.
        </p>
        <p className={styles.paragraphContent}>
          Employers must register their establishments and employees with ESIC and contribute a fixed percentage of wages to the fund. Delfyle helps ensure that all compliance steps are correctly followed for smooth registration.
        </p>

        <h3 className={styles.subContentHeading}>Who Needs to Register?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Establishments with 10 or more employees (or 20 in specific states).</li>
          <li><span className={styles.checkIcon}>✔</span> Employees earning up to ₹21,000/month (₹25,000 for persons with disabilities).</li>
          <li><span className={styles.checkIcon}>✔</span> All employees eligible for benefits from the day they are hired.</li>
          <li><span className={styles.checkIcon}>✔</span> Registration is mandatory and must be completed immediately upon reaching the threshold.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          The ESI Scheme is a vital social security program in India, providing a safety net for employees and their families. It is a mandatory compliance requirement for businesses that meet specific employee and wage thresholds.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Ensure your business is compliant and your employees are protected. Our ESI registration service makes navigating complex regulations simple and stress-free."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
    </div>
  </div>
</section>


  );
};

export default PrivateLimitedCompanyContent; 