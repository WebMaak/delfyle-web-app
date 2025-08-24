"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../../Components/TrialComponent/ComponentTwelve/ComponentTwelve.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Fire License</a>
  </div>

  <div className={styles.mainContentWrapper}>
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Ensure your business is safe and legally compliant with a Fire License.
        </h2>
        <p
          ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }}
          className={styles.paragraphContent}
          style={{marginBottom: '0'}}
        >
          Fire License Validity, Renewal, and Compliance
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        
        <h3 className={styles.subContentHeading}>Advantages of Registering for a Fire License</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Compliance with Law: Avoid penalties, legal action, or business closure.</li>
          <li><span className={styles.checkIcon}>•</span> Safety Assurance: Protect your workforce, clients, and assets from fire-related incidents.</li>
          <li><span className={styles.checkIcon}>•</span> Reputation and Trust: Demonstrates your commitment to public safety and responsible business practices.</li>
          <li><span className={styles.checkIcon}>•</span> Insurance Benefits: Insurance companies may offer better rates with valid fire certifications.</li>
          <li><span className={styles.checkIcon}>•</span> Eligibility for Other Licenses: Fire NOC is a prerequisite for several other permits.</li>
        </ul>
        
      </div>
    </div>

    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
      <h3 className={styles.subContentHeading}>Fire License Validity and Renewal</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          The Fire Safety Certificate is usually valid for one to three years, depending on the nature of the premises and local rules.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Renewal must be initiated before expiry to maintain compliance and business continuity.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Renewal applications may require a fresh inspection and updated documentation.
        </p>

        <h3 className={styles.subContentHeading}>Penalties for Non-Compliance in West Bengal</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Failure to obtain or renew a Fire License in West Bengal may result in:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Fines under the West Bengal Fire Services Act, 1950.</li>
          <li><span className={styles.checkIcon}>•</span> Sealing of premises.</li>
          <li><span className={styles.checkIcon}>•</span> Suspension or cancellation of operating licenses.</li>
          <li><span className={styles.checkIcon}>•</span> Imprisonment in cases of gross negligence.</li>
        </ul>
        </div>
    </div>
  </div>
</section>


    </>
  );
};

export default PrivateLimitedCompanyContentTwo; 