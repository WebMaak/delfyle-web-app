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
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>ITR-7 Filing</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading}>
              ITR-7 Return Filing with Delfyle | Expert Support for Trusts, NGOs, and Institutions
            </h2>
          </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
              What is the ITR-7 Form and who should file it?
            </h3>
            <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
              The ITR-7 Form is a specialized income tax return for entities such as Charitable Trusts, NGOs, Political Parties,
              Research Institutions, and Educational Institutions. These organizations are required to file under Sections 139(4A),
              139(4B), 139(4C), 139(4D), 139(4E), and 139(4F) of the Income Tax Act, 1961—especially when claiming exemptions.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[2] = el }} className={styles.subContentHeading}>
              Why choose Delfyle for ITR-7 Filing?
            </h3>
            <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
              Filing ITR-7 can be complex due to specific compliance and exemption requirements. Delfyle provides end-to-end support—
              from document preparation and compliance checks to accurate and timely submission—ensuring a hassle-free filing experience
              for trusts, political entities, and institutions.
            </p>
          </div>
        </div>

        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
              Delfyle makes ITR-7 filing simple and compliant for entities that operate with special tax considerations.
              Our expert team handles the details, so you can stay focused on your mission.
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
              "We help simplify ITR-7 compliance for trusts, NGOs, and institutions—accurately and on time."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
        </div>
      </div>
    </section>


  );
};

export default PrivateLimitedCompanyContent; 