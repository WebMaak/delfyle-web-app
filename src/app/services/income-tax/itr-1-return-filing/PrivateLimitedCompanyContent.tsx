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
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>ITR-1 (Sahaj) Filing</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading}>ITR-1 (Sahaj) Filing Online with Delfyle – Quick, Accurate & Hassle-Free
            </h2>
          </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>Who is eligible for ITR-1 filing?</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
            Income Tax Return (ITR) is a vital document that every taxpayer in India must file annually, reporting income earned and taxes paid. Among the various ITR forms under the Income Tax Act, 1961, the ITR-1 or Sahaj Form is the most commonly used. It is designed specifically for resident individuals earning up to ₹50 lakhs through salary, one house property, or other sources like bank interest.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[2] = el }} className={styles.subContentHeading}>What does Delfyle offer for ITR-1?</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
            At Delfyle, we make ITR-1 Filing Online easy, fast, and secure. Our tax professionals help you navigate the process step-by-step, ensuring accurate tax computation, maximum deduction benefits, and timely submission to avoid penalties.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[2] = el }} className={styles.subContentHeading}>What is ITR-1 (Sahaj)?</h3>
            

            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>The ITR-1 Sahaj Form is a simplified ITR form for resident individuals with:</h3>
            <div ref={el => { if (el) leftBottomContentRef.current[5] = el }} className={styles.productsGrid}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>✔</span> Income up to ₹50 lakhs</li>
                <li><span className={styles.checkIcon}>✔</span> Income from salary or pension</li>
                <li><span className={styles.checkIcon}>✔</span>Income from a single house property</li>
              </ul>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>✔</span> Income from other sources (like interest income)</li>
                <li><span className={styles.checkIcon}>✔</span> Agricultural income up to ₹5,000t</li>
              </ul>
            </div>
            <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
            It is a quick and user-friendly form for salaried taxpayers to report their annual income and stay tax-compliant.
            </p>

            
          </div>
        </div>
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
              At Delfyle, we offer affordable and efficient support for filing ITR-1 returns in India, helping salaried individuals meet their tax obligations with ease. Our expert team ensures accurate filing, optimal deductions, and full compliance with the latest Income Tax Department regulations.
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
              "ITR-1 is designed to simplify tax filing for resident individuals earning up to ₹50 lakhs, promoting transparency, timely compliance, and financial responsibility."
            </p>
            <p className={styles.bottomAuthor}>Income Tax Department, Government of India</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivateLimitedCompanyContent; 