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
      <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>ITR-2 Filing</a>
    </div>
    <div className={styles.mainContentWrapper}>
      <div ref={leftColumnRef} className={styles.leftColumn}>
        <div className={styles.leftTopContainer}>
          <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Modes of ITR-2 Filing
          </h2>
        </div>
        <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
          <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>Online ITR-2 Filing (Recommended):</h3>
          <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
          Filing Income Tax Return (ITR) is a key responsibility for every Indian taxpayer. Among the various forms prescribed under the Income Tax Act, 1961, the ITR-2 Form is specifically for individuals and Hindu Undivided Families (HUFs) who do not earn income from business or profession. If your income comes from salary, house property, capital gains, or foreign assets, ITR-2 is the right form for you.
          </p>
  
          <h3 ref={el => { if (el) leftBottomContentRef.current[2] = el }} className={styles.subContentHeading} style={{display: 'none'}}>How does Delfyle assist taxpayers with ITR-2 filing?</h3>
          <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent} style={{display: 'none'}}>
          At Delfyle, we provide expert-assisted ITR-2 filing services, making tax filing stress-free, secure, and efficient. Whether you're an NRI, salaried individual with capital gains, or a director in a company, Delfyle ensures accurate filing and complete compliance.
          </p>
  
          <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Online ITR-2 Filing (Recommended):</h3>
          <div ref={el => { if (el) leftBottomContentRef.current[5] = el }} className={styles.productsGrid} style={{display: 'flex', flexDirection: 'column'}}>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>✔</span> Log in to Income Tax Portal and submit digitally (with or without DSC)</li>
              <li><span className={styles.checkIcon}>✔</span> Verify using e-Verification or ITR-V (sent to CPC)</li>
            </ul>
            <ul className={styles.productsList} style={{display: 'none'}}>
              <li><span className={styles.checkIcon}>✔</span> Capital gains or losses</li>
              <li><span className={styles.checkIcon}>✔</span> Income from foreign assets or NRIs</li>
            </ul>
          </div>
          <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Offline ITR-2 Filing (Only for Age 80+):</h3>
          <div ref={el => { if (el) leftBottomContentRef.current[5] = el }} className={styles.productsGrid} style={{display: 'flex', flexDirection: 'column'}}>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>✔</span> Physical submission or barcode return</li>
              <li><span className={styles.checkIcon}>✔</span> Acknowledgment issued by Income Tax Department</li>
            </ul>
          </div>
          <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}> Late Filing Penalties for ITR-2</h3>
          <div ref={el => { if (el) leftBottomContentRef.current[5] = el }} className={styles.productsGrid} style={{display: 'flex', flexDirection: 'column'}}>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>✔</span> ₹5,000 if income &gt; ₹5L</li>
              <li><span className={styles.checkIcon}>✔</span> ₹1,000 if income &lt; ₹5L</li>
              <li><span className={styles.checkIcon}>✔</span> 1% monthly interest on outstanding tax </li>
              <li><span className={styles.checkIcon}>✔</span> Penalties up to 200% for misreporting</li>
              <li><span className={styles.checkIcon}>✔</span> Prosecution risk for repeat non-filers</li>
            </ul>
          </div>
          <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
          File before July 31, 2025 to avoid penalties.
          </p>
        </div>
      </div>
  
      <div ref={rightColumnRef} className={styles.rightColumn}>
        <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
          <p className={styles.rightDescription}>
            Delfyle offers secure, expert-assisted ITR-2 filing for residents, NRIs, and high-net-worth individuals. We ensure compliance, optimize deductions, and file your returns on time—stress-free.
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
            "Filing your ITR accurately is more than a task—it’s a responsibility. Delfyle ensures you get it right every time."
          </p>
          <p className={styles.bottomAuthor}>Team Delfyle</p>
        </div>
      </div>
    </div>
  </section>

  
  );
};

export default PrivateLimitedCompanyContentTwo; 