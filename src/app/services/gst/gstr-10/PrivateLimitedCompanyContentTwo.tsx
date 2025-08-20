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
    <>
     <section ref={sectionRef} className={styles.container}>
  <div className={styles.topAnchorContainer}>
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>GSTR-10 Filing</a>
  </div>

  <div className={styles.mainContentWrapper}>
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          File GSTR-10 Easily with Delfyle
        </h2>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          At Delfyle, we offer a seamless and stress-free way to file your GSTR-10 final return. Our experienced tax professionals ensure accuracy, compliance, and timely filing to help you close your GST registration without any issues.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Why Choose Delfyle for GSTR-10 Filing?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Expert Guidance: Get personalized advice and end-to-end assistance from GST experts.</li>
          <li><span className={styles.checkIcon}>✔</span> Fast & Hassle-Free Process: We simplify the GSTR-10 filing process so you can focus on your business.</li>
          <li><span className={styles.checkIcon}>✔</span> Accurate Documentation: We ensure all required details and documents are correctly filed to prevent errors or rejection.</li>
          <li><span className={styles.checkIcon}>✔</span> Compliance Alerts: Stay updated with filing reminders and avoid penalties.</li>
          <li><span className={styles.checkIcon}>✔</span> Dedicated Support: Access real-time support throughout your GSTR-10 filing journey.</li>
        </ul>

        <h3 className={styles.subContentHeading}>Our GSTR-10 Filing Process</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>1.</span> Initial Consultation: Understand your business status and eligibility.</li>
          <li><span className={styles.checkIcon}>2.</span> Document Collection: Gather all required records, including stock and ITC details.</li>
          <li><span className={styles.checkIcon}>3.</span> Return Preparation: Prepare the GSTR-10 accurately as per GST guidelines.</li>
          <li><span className={styles.checkIcon}>4.</span> Filing on GST Portal: Submit the return electronically on your behalf.</li>
          <li><span className={styles.checkIcon}>5.</span> Acknowledgement and Support: Provide confirmation and assist with any follow-ups or queries from the GST department.</li>
        </ul>
      </div>
    </div>

    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Our experts at Delfyle ensure your GSTR-10 filing is accurate, timely, and fully compliant, helping you close your GST registration hassle-free.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Delfyle makes GSTR-10 filing simple and stress-free, ensuring compliance and peace of mind."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default PrivateLimitedCompanyContentTwo; 