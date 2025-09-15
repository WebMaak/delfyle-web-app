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
      <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Logo Design + Trademark Protection</a>
    </div>
    <div className={styles.mainContentWrapper}>
      <div ref={leftColumnRef} className={styles.leftColumn}>
        <div className={styles.leftTopContainer}>
          <h2 ref={mainHeadingRef}  className={`${styles.mainHeading} lg:mb-0 mb-6`}>
          Unlock Your Brand's Identity with Delfyle
          </h2>
        </div>
        <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
          <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading} style={{marginBottom: '0px'}}>Logo Design + Trademark Protection</h3>
          <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent} style={{marginBottom: '0px'}}>
          At Delfyle, our logo design services are integrated with legal expertise to protect your brand from the start. We serve businesses across all 45 trademark classes and offer:
          </p>
          <div ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.productsGrid} style={{display: 'flex', flexDirection: 'column', margin: '0px 0 0px'}}>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>•</span> Custom logo design online</li>
              <li><span className={styles.checkIcon}>•</span> Comprehensive trademark search</li>
              <li><span className={styles.checkIcon}>•</span> Trademark registration and renewal</li>
              <li><span className={styles.checkIcon}>•</span> Legal support for objections and oppositions</li>
              <li><span className={styles.checkIcon}>•</span> Infringement risk analysis</li>
            </ul>
          </div>
          <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
          Securing your logo through trademark registration is a crucial step to prevent unauthorised use and preserve your brand’s uniqueness.
          </p>
        </div>
      </div>
  
      <div ref={rightColumnRef} className={styles.rightColumn}>
        <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
          <p className={styles.rightDescription}>
          Delfyle provides comprehensive trademark protection services, including expert-assisted opposition handling and compliance management.
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
          "Delfyle's logo design and trademark protection services ensure a comprehensive brand identity."
          </p>
          <p className={styles.bottomAuthor}>Team Delfyle</p>
        </div>
      </div>
    </div>
  </section>

  
  );
};

export default PrivateLimitedCompanyContent; 