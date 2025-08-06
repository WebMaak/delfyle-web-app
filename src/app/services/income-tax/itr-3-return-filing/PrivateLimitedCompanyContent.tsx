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
      <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>ITR-3 Filing</a>
    </div>
    <div className={styles.mainContentWrapper}>
      <div ref={leftColumnRef} className={styles.leftColumn}>
        <div className={styles.leftTopContainer}>
          <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          For Business Owners, Professionals & HUFs | Trusted Tax Experts | Easy & Accurate Filing
          </h2>
        </div>
        <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
          <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>Who is required to file the ITR-3 Form under the Income Tax Act, 1961, and how does Delfyle help in this process?</h3>
          <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
          Filing your Income Tax Return (ITR) is a legal obligation—and for those with business or professional income, the ITR-3 Form is the prescribed format under the Income Tax Act, 1961. Whether you're a self-employed professional, a proprietor, or a Hindu Undivided Family (HUF), Delfyle ensures that your ITR-3 filing is done right—accurately, on time, and stress-free.
          </p>
  
          <h3 ref={el => { if (el) leftBottomContentRef.current[2] = el }} className={styles.subContentHeading}>How does Delfyle's team simplify the tax filing process and ensure accurate returns?</h3>
          <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
          Our team of seasoned tax professionals makes complex tax reporting simple. From assessing eligibility to maximizing deductions, we handle your return with precision and care.
          </p>
  
          <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading} style={{display:'none'}}>Who should file ITR-2?</h3>
          <div ref={el => { if (el) leftBottomContentRef.current[5] = el }} className={styles.productsGrid} style={{display:'none'}} >
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>✔</span> Individuals or HUFs not having income from business/profession</li>
              <li><span className={styles.checkIcon}>✔</span> Income from salary/pension</li>
              <li><span className={styles.checkIcon}>✔</span> Income from house property (multiple allowed)</li>
            </ul>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>✔</span> Capital gains or losses</li>
              <li><span className={styles.checkIcon}>✔</span> Income from foreign assets or NRIs</li>
            </ul>
          </div>
        </div>
      </div>
  
      <div ref={rightColumnRef} className={styles.rightColumn}>
        <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
          <p className={styles.rightDescription}>
          If you earn income from business or professional activities, filing your ITR is mandatory—and ITR-3 is the designated form under the Income Tax Act, 1961. Whether you’re a sole proprietor, a self-employed individual, or part of a Hindu Undivided Family (HUF), Delfyle handles your ITR-3 filing with precision, punctuality, and complete peace of mind.
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
            "Delfyle’s expert tax team simplifies even the most complicated tax scenarios. We thoroughly evaluate your eligibility, optimize all possible deductions, and file your returns with accuracy and attention to detail."
          </p>
          <p className={styles.bottomAuthor}>Team Delfyle</p>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default PrivateLimitedCompanyContent; 