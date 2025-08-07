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
      <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>ITR-3 Filing</a>
    </div>
    <div className={styles.mainContentWrapper}>
      <div ref={leftColumnRef} className={styles.leftColumn}>
        {/* Section 1 */}
        <div className={styles.leftTopContainer}>
          <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          ITR-3 Form Structure: What You Need to Fill
          </h2>
        </div>
        <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
          <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>1. General Information</h3>
          <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
          PAN, Name, Address, DOB, Employer Category, Filing Status, etc.
          </p>
  
          <h3 ref={el => { if (el) leftBottomContentRef.current[2] = el }} className={styles.subContentHeading} >2. Computation of Income</h3>
          <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent} >
          Income from Salary, House Property, Business/Profession, Capital Gains, and Other Sources
          </p>

          <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>3. Deductions and Tax Payments</h3>
          <div ref={el => { if (el) leftBottomContentRef.current[5] = el }} className={styles.productsGrid} style={{display: 'flex', flexDirection: 'column'}}>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>•</span> Deductions under Sections 80C to 80Uigitally (with or without DSC)</li>
              <li><span className={styles.checkIcon}>•</span> Advance Tax & Self-Assessment Tax paid</li>
            </ul>
          </div>

          <h3 ref={el => { if (el) leftBottomContentRef.current[2] = el }} className={styles.subContentHeading}>4. TDS/TCS Credits</h3>
          <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
          Tax deducted or collected at source from income
          </p>
          <h3 ref={el => { if (el) leftBottomContentRef.current[2] = el }} className={styles.subContentHeading}>5. Verification Section</h3>
          <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
          Declaration & E-Verification or ITR-V submission
          </p>
  
          <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading} style={{display: 'none'}}>Offline ITR-3 Filing (Only for Age 80+):</h3>
          <div ref={el => { if (el) leftBottomContentRef.current[5] = el }} className={styles.productsGrid} style={{display: 'none', flexDirection: 'column'}}>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>✔</span> Physical submission or barcode return</li>
              <li><span className={styles.checkIcon}>✔</span> Acknowledgment issued by Income Tax Department</li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className={styles.leftTopContainer}>
          <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Modes of ITR-3 Filing
          </h2>
        </div>
        <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
          <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Online ITR-3 Filing (Preferred)</h3>
            <div ref={el => { if (el) leftBottomContentRef.current[5] = el }} className={styles.productsGrid} style={{display: 'flex', flexDirection: 'column'}}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>•</span> File via Income Tax e-filing portal</li>
                <li><span className={styles.checkIcon}>•</span> Use Digital Signature or EVC (Aadhaar OTP, bank EVC, etc.)</li>
              </ul>
            </div>
  
          <h3 ref={el => { if (el) leftBottomContentRef.current[2] = el }} className={styles.subContentHeading} >Offline Filing (For senior citizens above 80 years)</h3>
          <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent} >
          File paper return or bar-coded return
          </p>
        </div>
      </div>
  
      <div ref={rightColumnRef} className={styles.rightColumn}>
        <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
          <p className={styles.rightDescription}>
          Filing Income Tax Return (ITR) is a key responsibility for every Indian taxpayer. Among the various forms prescribed under the Income Tax Act, 1961, the ITR-3 Form is specifically for individuals and Hindu Undivided Families (HUFs) who do not earn income from business or profession. If your income comes from salary, house property, capital gains, or foreign assets, ITR-3 is the right form for you.
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
          "At Delfyle, we understand the importance of accurate and timely ITR-3 filing. Our team of experts ensures that your tax return is prepared and submitted with utmost care, ensuring you avoid any penalties or interest. Trust us to handle your ITR-3 filing needs and focus on your business growth."
          </p>
          <p className={styles.bottomAuthor}>Team Delfyle</p>
        </div>
      </div>
    </div>
  </section>

  
  );
};

export default PrivateLimitedCompanyContentTwo; 