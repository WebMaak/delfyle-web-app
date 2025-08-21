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
    <>
    <section ref={sectionRef} className={styles.container}>
  <div className={styles.topAnchorContainer}>
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>
      Copyright Registration
    </a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{ marginBottom: '0px' }}>
          Copyright Registration Services in India with Delfyle
        </h2>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <p className={styles.paragraphContent}>
          Copyright registration provides legal protection for creators, ensuring exclusive rights over their literary, artistic, musical, and digital works. Delfyle simplifies the process from filing to certificate issuance.
        </p>

        <h3 className={styles.subContentHeading}>Copyright Protection Validity</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Literary, Theatrical, Musical, and Artistic Works: Life of the author + 60 years.</li>
          <li><span className={styles.checkIcon}>•</span> Cinematographic Films and Sound Recordings: 60 years from publication.</li>
        </ul>

        <h3 className={styles.subContentHeading}>Remedies for Copyright Infringement</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Penalties: Up to 6 months in prison and fine of ₹50,000.</li>
          <li><span className={styles.checkIcon}>•</span> Seizure of infringing copies and production plates.</li>
        </ul>

        <h3 className={styles.subContentHeading}>Understanding Copyright Objections</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0px' }}>
          Objections may be raised due to similarities with existing works, prior registrations, or inconsistencies in the application. They can arise up to 30 days after filing. Responding promptly is crucial, and a registrar may schedule a hearing.
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Similarities with existing works</li>
          <li><span className={styles.checkIcon}>•</span> Discrepancies in documentation</li>
          <li><span className={styles.checkIcon}>•</span> Conflicting claims of authorship</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
       <h3 className={styles.subContentHeading}>Responding to Copyright Objections</h3>
        <p className={styles.paragraphContent}>
          Address objections thoroughly with clear responses, additional evidence if required, and legal expertise. Failing to respond may result in rejection of the application.
        </p>

        <h3 className={styles.subContentHeading}>Rights of the Copyright Owner</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Reproduction: Make copies of your work in any format.</li>
          <li><span className={styles.checkIcon}>•</span> Adaptation: Modify or create derivative works.</li>
          <li><span className={styles.checkIcon}>•</span> Public Communication: Broadcast or distribute your work.</li>
          <li><span className={styles.checkIcon}>•</span> Public Performance: Perform works publicly or authorize others.</li>
          <li><span className={styles.checkIcon}>•</span> Moral Rights: Right to attribution and integrity.</li>
          <li><span className={styles.checkIcon}>•</span> Distribution: Control sale, lease, or licensing of copies.</li>
        </ul>

        <h3 className={styles.subContentHeading}>Lawful Use Without Permission</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Research, private study, criticism, review, or news reporting.</li>
          <li><span className={styles.checkIcon}>•</span> Libraries, schools, and legislatures.</li>
          <li><span className={styles.checkIcon}>•</span> Amateur or non-paying public performances.</li>
          <li><span className={styles.checkIcon}>•</span> Making sound recordings under certain conditions.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</>


  );
};

export default PrivateLimitedCompanyContentTwo; 