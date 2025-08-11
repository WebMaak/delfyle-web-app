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
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trademark Hearing</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading}>
            Trademark Hearing in India: Everything You Need to Know
            </h2>
          </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>Trademark Hearing</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
            A Trademark Hearing in India is a formal administrative process conducted by the Registrar of Trademarks to resolve disputes or objections related to the registration, renewal, or potential infringement of a trademark. This proceeding allows the applicant and opposing parties to present their arguments, documents, and evidence. The Registrar makes a final decision based on these submissions, which can significantly impact the status of the trademark.
            </p>
            <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
            A Trademark Hearing in India is a formal administrative process conducted by the Registrar of Trademarks to resolve disputes or objections related to the registration, renewal, or potential infringement of a trademark. This proceeding allows the applicant and opposing parties to present their arguments, documents, and evidence. The Registrar makes a final decision based on these submissions, which can significantly impact the status of the trademark.
            </p>
    
            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>What is Trademark Opposition?</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.paragraphContent} style={{marginBottom: '0px'}} >
            Under the Trademarks Act of 1999, any person can oppose the registration of a trademark once it is published in the Trademark Journal. Such oppositions must be submitted to the Trademark Registry where the application was originally filed. If opposition arises, the Registry conducts a formal opposition hearing to resolve the matter. The legal basis and procedures are governed by the Trademarks Act, 1999 and the Trade Marks Rules, 2017.
            </p>
            
          </div>
        </div>
    
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
            Delfyle offers expert-assisted trademark opposition services, ensuring smooth, successful registration. Our team handles all compliance requirements, from opposition response to final registration.
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
            "Delfyle ensures smooth, successful trademark opposition service with expert assistance."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
        </div>
      </div>
    </section>

  
  );
};

export default PrivateLimitedCompanyContent; 