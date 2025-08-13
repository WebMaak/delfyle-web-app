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
    <>
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.topAnchorContainer}>
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trademark Restoration</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{marginBottom: '0px'}}>
            Trademark Restoration | Everything You Need to Know
            </h2>
          </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            {/* <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}></h3> */}
            <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
            If the renewal period lapses, trademark owners can file for restoration within one year of expiration. This includes paying the standard renewal fee plus a penalty. Restoration revives all legal protections associated with the mark.
            </p>
    
            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Documents Required</h3>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>✓</span> Copy of trademark registration certificate</li>
                <li><span className={styles.checkIcon}>✓</span> ID and address proof of the applicant</li>
                <li><span className={styles.checkIcon}>✓</span> TM-A (initial registration form)</li>
                <li><span className={styles.checkIcon}>✓</span> Power of Attorney if filed by an agent</li>
            </ul>

            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>Online Trademark Renewal Process with Delfyle</h3>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>Application Filing:</span>  We prepare and file Form TM-R with all necessary details.</li>
                <li><span className={styles.checkIcon}>Review & Verification:</span> The Trademark Registry examines your renewal request.</li>
                <li><span className={styles.checkIcon}>Publication:</span> Renewal is published in the Trademark Journal.</li>
                <li><span className={styles.checkIcon}>Renewal Certificate:</span> Upon acceptance, a certificate is issued for another 10 years.</li>
            </ul>   
            
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>Delfyle’s Trademark Renewal Services</h3>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>Expert Guidance:</span> Our team ensures accurate filing and deadline compliance. </li>
                <li><span className={styles.checkIcon}>End-to-End Support:</span> From document preparation to application submission.</li>
                <li><span className={styles.checkIcon}>Transparent Communication:</span> Regular updates at each stage.
                </li>
                <li><span className={styles.checkIcon}>Reliable Legal Experts:</span>Backed by professionals specializing in trademark law.</li>
            </ul>    
          </div>
        </div>
    
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
            Trademark renewal is a crucial process to maintain the legal protection of your brand identity.
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
            "Let Delfyle take the hassle out of trademark renewal. Stay compliant, stay protected, and let your brand thrive without interruption!"
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
        </div>
      </div>
    </section>
    </>
  
  );
};

export default PrivateLimitedCompanyContent; 