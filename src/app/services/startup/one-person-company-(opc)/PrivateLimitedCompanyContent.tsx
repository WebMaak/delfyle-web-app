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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>One Person Company (OPC)</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          One Person Company (OPC) Registration in India
        </h2>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>
          What is a One Person Company (OPC)?
        </h3>
        <p className={styles.paragraphContent}>
          Registering a One-Person Company (OPC) is ideal for entrepreneurs who desire limited liability 
          and a distinct legal identity. OPC allows a single individual to operate as a company, providing 
          the benefits of limited liability while retaining full control. The individual serves as both the 
          director and shareholder, merging the advantages of a sole proprietorship with the legal protection 
          of a private limited company.
        </p>

        <h3 className={styles.subContentHeading}>
          Why Register an OPC with Delfyle?
        </h3>
        <p className={styles.paragraphContent}>
          Delfyle simplifies the OPC registration process, guiding you through legal formalities, document preparation, 
          and filing, with reasonable registration fees. Our team ensures you make informed decisions and 
          helps you smoothly establish your OPC.
        </p>

        <h3 className={styles.subContentHeading}>
          Introduction to OPC in India
        </h3>
        <p className={styles.paragraphContent}>
          Introduced under the Companies Act of 2013, OPC registration enables a single individual to set up a 
          company, enjoying benefits of both a sole proprietorship and a traditional company. This concept 
          promotes entrepreneurship and formalization of MSMEs. Section 2(62) of the Companies Act 2013 allows 
          a company to be formed with just one director and one member, both held by the same person.
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle provides expert-assisted OPC registration, ensuring smooth compliance and hassle-free incorporation. 
          Our team handles all documentation and approvals, so you can focus on growing your business.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image 
          src="/delfyle-logo/delfyle-logo.png" 
          alt="Delfyle Logo" 
          width={180} 
          height={50} 
          objectFit="contain"
          className={styles.companyLogo}
        />
        <p className={styles.bottomQuote}>
          "Register your One Person Company seamlessly with expert guidance from Delfyle."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
    </div>
  </div>
</section>


  
  );
};

export default PrivateLimitedCompanyContent; 