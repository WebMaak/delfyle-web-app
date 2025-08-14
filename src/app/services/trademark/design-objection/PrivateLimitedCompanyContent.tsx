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

          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            {/* Section 1 */}
            <h3 className={styles.subContentHeading} style={{ marginBottom: "0px" }}>
              Design Objection
            </h3>
            <p className={styles.paragraphContent}>
              Ensure Seamless Design Registration by Tackling Objections Effectively.
              During the design registration process in India, it's common for the examiner
              to raise design objections—a crucial checkpoint to validate the originality
              and eligibility of your submitted design. These objections typically stem from
              perceived similarities with existing designs, lack of clarity, or non-compliance
              with the Designs Act, 2000. To proceed with successful registration, these issues
              must be addressed with precision and speed.
            </p>
            <p className={styles.paragraphContent}>
              With Delfyle by your side, responding to objections becomes a guided, stress-free
              process. Our experts help you craft solid replies, manage documentation, and stay
              on track toward securing your design rights.
            </p>

            {/* Section 2 */}
            <h3 className={styles.subContentHeading} style={{ marginBottom: "0px" }}>
              What Constitutes a Design?
            </h3>
            <p className={styles.paragraphContent}>
              Under Section 2(d) of the Designs Act, 2001, a ‘design’ refers to the visual
              features—such as shape, configuration, pattern, or ornamentation—applied to an
              article, whether two-dimensional or three-dimensional. These visual aspects must
              appeal to the eye and must not include functional or mechanical elements of the product.
            </p>

            {/* Section 3 */}
            <h3 className={styles.subContentHeading} style={{ marginBottom: "0px" }}>
              Design Objection: What It Means
            </h3>
            <p className={styles.paragraphContent}>
              A design objection is a formal notification from the Indian Design Office
              indicating issues in your application that prevent it from being approved.
              These could relate to the originality, visual presentation, or documentary
              compliance of your submission. Responding correctly to these objections is vital
              to ensure your design gets legally protected.
            </p>
            <p className={styles.paragraphContent}>
              A design objection is a formal notification from the Indian Design Office
              indicating issues in your application that prevent it from being approved.
              These could relate to the originality, visual presentation, or documentary
              compliance of your submission. Responding correctly to these objections is vital
              to ensure your design gets legally protected.
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
              At Delfyle, we treat your designs with the highest priority. Our proven process
              ensures every application is handled with accuracy, compliance, and timely delivery—
              so you can focus on creating while we handle the legalities.
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
              "With Delfyle, your design registration is more than a formality—it's a commitment
              to safeguarding your originality."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default PrivateLimitedCompanyContent; 