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
    <section ref={sectionRef} className={styles.container}>
  <div className={styles.topAnchorContainer}>
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>LLP Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Limited Liability Partnership (LLP) Registration in India with Delfyle
        </h2>
        <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
          A Limited Liability Partnership (LLP) is a modern business structure that combines the advantages of both a partnership and a private limited company. It offers flexibility in operations while providing limited liability protection to its partners. At Delfyle, we simplify the LLP registration process in India, ensuring compliance with the Ministry of Corporate Affairs (MCA) regulations. Our expert team handles all legal formalities, making online LLP registration quick, hassle-free, and affordable.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
          What is an LLP?
        </h3>
        <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
          A Limited Liability Partnership (LLP) is a business entity that grants limited liability to its partners while offering operational flexibility similar to a partnership. Unlike traditional partnerships, an LLP is a separate legal entity and can enter into contracts, own property, and sue or be sued in its own name. Introduced in 2008 under the Limited Liability Partnership Act, LLPs are preferred by startups, professionals, and small businesses due to their lower compliance burden and liability protection.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Why Choose LLP Registration with Delfyle?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Quick and hassle-free online registration process</li>
          <li><span className={styles.checkIcon}>•</span> Expert guidance on MCA compliance and legal formalities</li>
          <li><span className={styles.checkIcon}>•</span> Affordable and transparent service packages</li>
          <li><span className={styles.checkIcon}>•</span> Limited liability protection for partners</li>
          <li><span className={styles.checkIcon}>•</span> Suitable for startups, professionals, and small businesses</li>
        </ul>
      </div>
    </div>

    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          At Delfyle, we guide you through the complete LLP registration process, from name approval to obtaining the LLP Incorporation Certificate, ensuring your business starts on a strong legal foundation.
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
          "Let Delfyle be your trusted partner in establishing your business and ensuring full legal compliance."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
    </div>
  </div>
</section>



  
  );
};

export default PrivateLimitedCompanyContentTwo; 