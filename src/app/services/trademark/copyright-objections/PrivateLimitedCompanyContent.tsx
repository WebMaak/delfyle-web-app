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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>
      Copyright Registration
    </a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{ marginBottom: "0px" }}>
          Protect Your Intellectual Property with Copyright Registration
        </h2>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        {/* Section 1 */}
        <h3 className={styles.subContentHeading} style={{ marginBottom: "0px" }}>
          What is Copyright?
        </h3>
        <p className={styles.paragraphContent}>
          Copyright is a fundamental legal right that protects the original creations of authors,
          artists, and other creators. It grants them exclusive control over the use, reproduction,
          adaptation, and distribution of their works.
        </p>
        <p className={styles.paragraphContent}>
          In India, copyright is governed by the Copyright Act, 1957. Registration ensures legal recognition,
          strengthens your rights, and allows you to enforce them in case of infringement.
        </p>

        {/* Section 2 */}
        <h3 className={styles.subContentHeading} style={{ marginBottom: "0px" }}>
          Eligibility for Copyright Registration
        </h3>
        <p className={styles.paragraphContent}>
          Copyright protection can be sought for literary, dramatic, musical, artistic works, cinematographic films, and sound recordings. Registration establishes your legal ownership and protects against unauthorized use.
        </p>

        {/* Section 3 */}
        <h3 className={styles.subContentHeading} style={{ marginBottom: "0px" }}>
          Benefits of Copyright Registration
        </h3>
        <ul className={styles.paragraphContent} style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
          <li>Legal protection against unauthorized use and infringement.</li>
          <li>Establishes market presence and publicly asserts ownership.</li>
          <li>Exclusive rights to reproduce, adapt, distribute, and license your work.</li>
        </ul>

      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div
        ref={(el) => { if (el) rightColumnContentRef.current[0] = el; }}
        className={styles.rightTopContainer}
      >
        <p className={styles.rightDescription}>
          Our team handles every step with accuracy and compliance, giving you confidence that your creative works are legally protected.
        </p>
      </div>

      <div
        ref={(el) => { if (el) rightColumnContentRef.current[1] = el; }}
        className={styles.rightBottomContainer}
      >
        <Image
          src="/delfyle-logo/delfyle-logo.png"
          alt="Delfyle Logo"
          width={180}
          height={50}
          objectFit="contain"
          className={styles.companyLogo}
        />
        <p className={styles.bottomQuote}>
          "With Delfyle, copyright registration is streamlined and secure, protecting your creative rights."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>

        {/* Section 4 */}
        <h3 className={styles.subContentHeading} style={{ marginBottom: "0px" }}>
          How Delfyle Helps
        </h3>
        <p className={styles.paragraphContent}>
          Delfyle simplifies online copyright registration, guiding you through documentation, application filing, and objection handling. We ensure timely registration so you can focus on creating while we safeguard your work.
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default PrivateLimitedCompanyContent; 