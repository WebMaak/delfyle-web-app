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
      Design Registration
    </a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2
          ref={mainHeadingRef}
          className={styles.mainHeading}
          style={{ marginBottom: "0px" }}
        >
          Secure Your Unique Designs with Legal Backing
        </h2>
      </div>

      <div
        ref={leftBottomContainerRef}
        className={styles.leftBottomContainer}
      >
        {/* Section 1 */}
        <h3
          ref={(el) => {
            if (el) leftBottomContentRef.current[0] = el;
          }}
          className={styles.subContentHeading}
          style={{ marginBottom: "0px" }}
        >
          Why Protect Your Design?
        </h3>
        <p
          ref={(el) => {
            if (el) leftBottomContentRef.current[1] = el;
          }}
          className={styles.paragraphContent}
          style={{ marginBottom: "0px" }}
        >
          Your creative designs deserve more than just admiration—they deserve
          protection. Design registration establishes your design as a form of
          intellectual property, giving you exclusive rights and shielding it
          from unauthorized use or imitation. In India, a registered design
          enjoys protection for 10 years, extendable by another 5 years.
        </p>

        {/* Section 2 */}
        <h3
          ref={(el) => {
            if (el) leftBottomContentRef.current[2] = el;
          }}
          className={styles.subContentHeading}
          style={{ marginBottom: "0px" }}
        >
          How Delfyle Helps
        </h3>
        <p
          ref={(el) => {
            if (el) leftBottomContentRef.current[3] = el;
          }}
          className={styles.paragraphContent}
        >
          At Delfyle, we simplify the design e-filing process, helping innovators
          and businesses legally safeguard their creations with ease and
          efficiency. Our experts guide you every step of the way—from
          classification to registration—ensuring your rights are upheld.
        </p>

        {/* Section 3 */}
        <h3
          ref={(el) => {
            if (el) leftBottomContentRef.current[4] = el;
          }}
          className={styles.subContentHeading}
          style={{ marginBottom: "0px" }}
        >
          Legal Framework
        </h3>
        <p
          ref={(el) => {
            if (el) leftBottomContentRef.current[5] = el;
          }}
          className={styles.paragraphContent}
        >
          Design registration in India is governed by the Designs Act, 2000,
          along with the Design Rules, 2001 (amended in 2008 and 2014). These
          laws replaced the earlier Designs Act of 1911 and introduced updated
          standards for protection. A key amendment was the recognition of
          "small entities" as a distinct category of applicants, making the
          process more inclusive.
        </p>

        {/* Section 4 */}
        <h3
          ref={(el) => {
            if (el) leftBottomContentRef.current[6] = el;
          }}
          className={styles.subContentHeading}
          style={{ marginBottom: "0px" }}
        >
          What is a Design?
        </h3>
        <p
          ref={(el) => {
            if (el) leftBottomContentRef.current[7] = el;
          }}
          className={styles.paragraphContent}
        >
          Under Section 2(d) of the Designs Act, 2000, a design refers to the
          features of shape, pattern, configuration, composition, or
          ornamentation—applied to an article in two or three dimensions (or
          both)—that appeal to the visual senses. These features must be applied
          through industrial processes and are judged solely by the eye, without
          covering functional aspects or mechanical structures.
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      {/* Assurance Block 1 */}
      <div
        ref={(el) => {
          if (el) rightColumnContentRef.current[0] = el;
        }}
        className={styles.rightTopContainer}
      >
        <p className={styles.rightDescription}>
          At Delfyle, we treat your designs with the highest priority. Our
          proven process ensures every application is handled with accuracy,
          compliance, and timely delivery—so you can focus on creating while we
          handle the legalities.
        </p>
      </div>

      {/* Assurance Block 2 */}
      <div
        ref={(el) => {
          if (el) rightColumnContentRef.current[1] = el;
        }}
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
          "With Delfyle, your design registration is more than a formality—it's
          a commitment to safeguarding your originality."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
    </div>
  </div>
</section>


  
  );
};

export default PrivateLimitedCompanyContent; 