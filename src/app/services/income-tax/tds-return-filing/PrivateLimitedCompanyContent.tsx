"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../../Components/TrialComponent/ComponentTwelve/ComponentTwelve.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TDSReturnFilingContent: React.FC = () => {
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
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>TDS Return Filing</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading}>
              TDS Return Filing Services by Delfyle
            </h2>
          </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 className={styles.subContentHeading}>Accurate. Timely. Compliant.</h3>
            <p className={styles.paragraphContent}>
              File TDS Returns online with Delfyle – trusted experts for businesses, professionals, and government deductors.
            </p>

            <h3 className={styles.subContentHeading}>What is TDS (Tax Deducted at Source)?</h3>
            <p className={styles.paragraphContent}>
              TDS is a mechanism under the Income Tax Act where tax is deducted at the point of income generation. It applies to payments like salary, rent, interest, professional fees, contractor payments, and more. The deductor must deposit the tax to the government and file quarterly TDS returns with deduction and PAN details.
            </p>

            <h3 className={styles.subContentHeading}>Who Should Deduct TDS?</h3>
            <div className={styles.productsGrid} style={{ display: 'flex', flexDirection: 'column' }}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>✔</span> Individuals & HUFs (under audit u/s 44AB)</li>
                <li><span className={styles.checkIcon}>✔</span> Companies (Private & Public Limited)</li>
                <li><span className={styles.checkIcon}>✔</span> Partnership Firms & LLPs</li>
                <li><span className={styles.checkIcon}>✔</span> Government Bodies & Local Authorities</li>
                <li><span className={styles.checkIcon}>✔</span> Trusts and Societies</li>
              </ul>
            </div>
          </div>
        </div>

        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
              Delfyle provides expert-led, compliant, and hassle-free TDS Return Filing for all types of deductors—ensuring timely submissions, reduced errors, and end-to-end support.
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
              "Filing your TDS return accurately avoids penalties and builds financial trust. Delfyle makes it easy and precise."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TDSReturnFilingContent;
