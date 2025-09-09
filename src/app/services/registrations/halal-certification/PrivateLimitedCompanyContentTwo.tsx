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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>FSSAI Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Don't risk penalties or customer distrust — secure your FSSAI Registration with Delfyle today!
        </h2>
        <p
          ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }}
          className={styles.paragraphContent}
          style={{marginBottom: '0'}}
        >
          Types of FSSAI Registration and License
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        

        <h3 className={styles.subContentHeading}>Benefits of FSSAI Registration</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Legal Authorization: Operate legally under FSSAI regulations</li>
          <li><span className={styles.checkIcon}>•</span> Consumer Confidence: Enhances customer trust in product safety</li>
          <li><span className={styles.checkIcon}>•</span> Business Growth: Helps in securing partnerships, retailers, and market access</li>
          <li><span className={styles.checkIcon}>•</span> International Trade: Essential for food exports and import compliance</li>
          <li><span className={styles.checkIcon}>•</span> Avoids Legal Penalties: Reduces risk of fines or shutdowns</li>
          <li><span className={styles.checkIcon}>•</span> Reputation Boost: Promotes your commitment to food safety</li>
          <li><span className={styles.checkIcon}>•</span> Access to Government Support: Gain access to FSSAI workshops and resources</li>
        </ul>
        <h3 className={styles.subContentHeading}>Validity, Renewal, and Compliance</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          License Validity: All FSSAI registrations and licenses are valid for 1 to 5 years, based on selection during application.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Renewal Process: Businesses must renew their license before expiry through the FoSCoS portal to avoid penalties or legal issues.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Compliance Check: FSSAI officers conduct periodic inspections and rate businesses as:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> C – Compliant</li>
          <li><span className={styles.checkIcon}>•</span> NC – Non-compliant</li>
          <li><span className={styles.checkIcon}>•</span> PC – Partially Compliant</li>
          <li><span className={styles.checkIcon}>•</span> NA – Not Applicable</li>
        </ul>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Non-compliance may lead to improvement notices, fines, or even cancellation of licenses.
        </p>

        <h3 className={styles.subContentHeading}>Online FSSAI Registration Process</h3>
        <ol className={styles.productsList}>
          <li>Visit FoSCoS Portal</li>
          <li>Choose Form A or B (based on business type)</li>
          <li>Upload Required Documents</li>
          <li>Application Review & Inspection (if required)</li>
          <li>Receive Certificate via Email / Portal</li>
          <li>Display Certificate at Business Premises</li>
        </ol>
        
      </div>
    </div>

    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Required Documents for FSSAI Registration or License</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Common Documents for All Categories:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Valid ID proof (Aadhaar, Passport, Voter ID)</li>
          <li><span className={styles.checkIcon}>•</span> Business registration proof (Shop Act, Partnership Deed, etc.)</li>
          <li><span className={styles.checkIcon}>•</span> Address proof (rent agreement, NOC, utility bill)</li>
          <li><span className={styles.checkIcon}>•</span> List of food products handled</li>
          <li><span className={styles.checkIcon}>•</span> Food Safety Management Plan</li>
          <li><span className={styles.checkIcon}>•</span> Bank details</li>
          <li><span className={styles.checkIcon}>•</span> NOC from local authority (if applicable)</li>
        </ul>

        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Additional for State License:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Form B (signed)</li>
          <li><span className={styles.checkIcon}>•</span> Processing unit layout plan</li>
          <li><span className={styles.checkIcon}>•</span> List of partners/directors</li>
          <li><span className={styles.checkIcon}>•</span> Equipment and machinery list</li>
          <li><span className={styles.checkIcon}>•</span> Water analysis report</li>
          <li><span className={styles.checkIcon}>•</span> Authorization letter</li>
          <li><span className={styles.checkIcon}>•</span> Certificate under Cooperative Acts (if applicable)</li>
        </ul>

        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Additional for Central License:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Form B (signed)</li>
          <li><span className={styles.checkIcon}>•</span> Processing and machinery details</li>
          <li><span className={styles.checkIcon}>•</span> Recall plan (if applicable)</li>
          <li><span className={styles.checkIcon}>•</span> Source details of raw material</li>
          <li><span className={styles.checkIcon}>•</span> Ministry of Tourism certificate (if required)</li>
          <li><span className={styles.checkIcon}>•</span> Import Export Code (IE Code)</li>
          <li><span className={styles.checkIcon}>•</span> NOC/PA document from FSSAI</li>
          <li><span className={styles.checkIcon}>•</span> Proof of turnover and transport capacity</li>
        </ul>
      </div>
    </div>
  </div>
</section>


    </>
  );
};

export default PrivateLimitedCompanyContentTwo; 