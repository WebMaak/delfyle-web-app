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
              and distribution of their works.
            </p>
            <p className={styles.paragraphContent}>
              Copyright in India is governed by the Copyright Act, 1957. Once registered, it ensures that
              only the creator or those authorized by them can use, reproduce, or adapt the work, granting
              enhanced legal protection for a defined period.
            </p>

            {/* Section 2 */}
            <h3 className={styles.subContentHeading} style={{ marginBottom: "0px" }}>
              How Delfyle Helps
            </h3>
            <p className={styles.paragraphContent}>
              At Delfyle, we simplify the process of Copyright Registration, ensuring a smooth and efficient
              journey to protect your intellectual property. Our team of experts guides you through the
              online registration process, making it easy to secure your creative works.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div ref={rightColumnRef} className={styles.rightColumn}>
          {/* Assurance Block */}
          <div
            ref={(el) => {
              if (el) rightColumnContentRef.current[0] = el;
            }}
            className={styles.rightTopContainer}
          >
            <p className={styles.rightDescription}>
              Delfyle ensures that your copyright applications are handled with precision, accuracy, and
              compliance, allowing you to focus on your creative endeavors while we take care of the legal process.
            </p>
          </div>

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
              "With Delfyle, copyright registration is streamlined and secure, protecting your creative rights."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
        </div>
      </div>
    </section>


  );
};

export default PrivateLimitedCompanyContent; 