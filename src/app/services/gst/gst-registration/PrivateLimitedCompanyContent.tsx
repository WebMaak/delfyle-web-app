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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>GST Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{marginBottom: '0'}}>
          GST Registration in India: Process, Requirements & Expert Help
        </h2>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
          What is GST Registration?
        </h3>
        <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Introduced on July 1, 2017, the Goods and Services Tax (GST) is a unified tax system that replaced multiple indirect taxes such as VAT, Service Tax, and Excise Duty. 
          GST registration is mandatory for service providers, manufacturers, traders, freelancers, and e-commerce sellers whose turnover crosses specified thresholds. 
        </p>
        <p ref={(el) => { if (el) leftBottomContentRef.current[2] = el; }} className={styles.paragraphContent}>
          GST applies at every stage — from raw material procurement to end consumer sale — and being destination-based, the revenue goes to the state where the goods or services are consumed.
        </p>

        <h3 className={styles.subContentHeading}>Why GST Registration is Important?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          GST Registration provides businesses with a unique 15-digit GSTIN, enabling them to:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Legally collect GST from customers</li>
          <li><span className={styles.checkIcon}>✔</span> Claim input tax credits</li>
          <li><span className={styles.checkIcon}>✔</span> Expand business by being GST-compliant</li>
          <li><span className={styles.checkIcon}>✔</span> Build trust with customers and stakeholders</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle offers complete assistance for GST registration — from documentation and filing to approval and compliance. Get your GSTIN hassle-free with expert guidance.
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
          "Talk to our GST experts and start your registration today with Delfyle."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      {/* Balanced Content from Left Column */}
      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Key Components of GST</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> CGST : Levied by the Central Government on intra-state supplies</li>
          <li><span className={styles.checkIcon}>✔</span> SGST : Levied by the respective State Government on intra-state supplies</li>
          <li><span className={styles.checkIcon}>✔</span> IGST : Levied by the Central Government on inter-state supplies</li>
        </ul>
      </div>
    </div>
  </div>
</section>

  );
};

export default PrivateLimitedCompanyContent; 