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
      <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trademark Objection</a>
    </div>
    <div className={styles.mainContentWrapper}>
      <div ref={leftColumnRef} className={styles.leftColumn}>
        <div className={styles.leftTopContainer}>
          <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Trademark Objection in India: Everything You Need to Know
          </h2>
        </div>
        <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
          <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>Why Trademark Objection Matters?</h3>
          <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
          Trademark registration in India involves various stages, and one of the most crucial is trademark examination. If your application doesn't meet legal requirements or conflicts with existing trademarks, the Trademark Office may raise an objection.With expert guidance from Delfyle, responding to trademark objections becomes easier—ensuring smooth, successful registration.
          </p>
  
          <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>What is a Trademark Objection?</h3>
          <p ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.paragraphContent} style={{marginBottom: '0px'}} >
          When the Indian Trademark Office reviews your application, it may raise an objection if:
          </p>
          <div ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.productsGrid} style={{display: 'flex', flexDirection: 'column', margin: '0px 0 10px'}}>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>•</span> Your mark is similar to an existing one</li>
              <li><span className={styles.checkIcon}>•</span> It lacks distinctiveness</li>
              <li><span className={styles.checkIcon}>•</span> It contains misleading or prohibited content</li>
            </ul>
          </div>

          <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Important: An objection is not a rejection, but a request for clarification or changes.</h3>
          <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
          Deadline to Respond: Within 30 days of receiving the Examination Report.
          </p>
        </div>
      </div>
  
      <div ref={rightColumnRef} className={styles.rightColumn}>
        <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
          <p className={styles.rightDescription}>
          Delfyle offers expert-assisted trademark opposition services, ensuring smooth, successful registration. Our team handles all compliance requirements, from objection response to final registration.
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
          "Delfyle ensures smooth, successful trademark registration with expert assistance."
          </p>
          <p className={styles.bottomAuthor}>Team Delfyle</p>
        </div>
      </div>
    </div>
  </section>

  
  );
};

export default PrivateLimitedCompanyContent; 