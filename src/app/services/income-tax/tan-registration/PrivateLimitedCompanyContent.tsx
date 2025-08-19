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
      TAN Registration
    </a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          TAN Registration Online – Apply for Your TAN Number with Delfyle
        </h2>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3
          ref={(el) => {
            if (el) leftBottomContentRef.current[0] = el;
          }}
          className={styles.subContentHeading}
        >
          What is TAN Registration and why is it important?
        </h3>
        <p
          ref={(el) => {
            if (el) leftBottomContentRef.current[1] = el;
          }}
          className={styles.paragraphContent}
        >
          In India, obtaining a Tax Deduction and Collection Account Number (TAN) is mandatory 
          for businesses and individuals responsible for deducting or collecting tax at source (TDS/TCS). 
          Issued by the Income Tax Department, TAN is a unique 10-digit alphanumeric identifier that must be 
          quoted in all TDS returns, challans, and certificates. Non-compliance can lead to heavy penalties.
        </p>

        <h3
          ref={(el) => {
            if (el) leftBottomContentRef.current[2] = el;
          }}
          className={styles.subContentHeading}
        >
          Why choose Delfyle for TAN Registration?
        </h3>
        <p
          ref={(el) => {
            if (el) leftBottomContentRef.current[3] = el;
          }}
          className={styles.paragraphContent}
        >
          At Delfyle, we simplify the process of TAN application online, ensuring that individuals, 
          companies, and non-profits secure their TAN quickly and without hassle. With our expertise 
          in tax and compliance services, you can obtain your TAN registration number in a smooth, 
          reliable, and efficient manner.
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div
        ref={(el) => {
          if (el) rightColumnContentRef.current[0] = el;
        }}
        className={styles.rightTopContainer}
      >
        <p className={styles.rightDescription}>
          Delfyle ensures a seamless TAN registration experience, helping you stay 
          compliant and avoid penalties. We handle the complexities so you can 
          focus on growing your business or organization.
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
          "Apply now with Delfyle and get your TAN Number easily!"
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default PrivateLimitedCompanyContent; 