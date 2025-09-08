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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Halal Certification</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Get Your Halal Certification with Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          If your business aims to cater to Muslim consumers, obtaining a Halal Certificate is essential. Delfyle offers expert guidance, handling consultation, documentation, audits, and certification—ensuring your products meet Halal standards and are market-ready.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Start your Halal certification journey with Delfyle today and expand your reach to Muslim consumers confidently!
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is Halal Certification?</h3>
        <p className={styles.paragraphContent}>
          “Halal” means “permissible” under Islamic law. Halal Certification confirms that a product or service adheres to Shariah requirements, including cleanliness, ethical sourcing, and absence of prohibited substances like pork or alcohol. It applies across food, pharmaceuticals, cosmetics, personal care, and other industries.
        </p>

        <h3 className={styles.subContentHeading}>Halal Certification in India</h3>
        <p className={styles.paragraphContent}>
          In India, recognized certifying authorities issue Halal Certification after reviewing documentation, conducting facility audits, and verifying ingredients and processes. This ensures compliance with Islamic dietary laws and ethical standards.
        </p>

        <h3 className={styles.subContentHeading}>Key Sectors Seeking Halal Certification</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Food and beverages</li>
          <li><span className={styles.checkIcon}>✔</span> Pharmaceuticals</li>
          <li><span className={styles.checkIcon}>✔</span> Cosmetics and personal care</li>
          <li><span className={styles.checkIcon}>✔</span> Hospitality (hotels, restaurants, catering)</li>
          <li><span className={styles.checkIcon}>✔</span> Packaging and labelling materials</li>
        </ul>

        
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Halal Certification ensures your products or services comply with Islamic law, giving Muslim consumers confidence and expanding your market reach.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Delfyle makes Halal certification simple, so you can focus on delivering quality products to a growing consumer base."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
      <div className={styles.leftBottomContainer}>
      <h3 className={styles.subContentHeading}>Types of Halal Certification</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Food and Catering Scheme</li>
          <li><span className={styles.checkIcon}>✔</span> Restaurant Scheme</li>
          <li><span className={styles.checkIcon}>✔</span> Industrial Scheme</li>
          <li><span className={styles.checkIcon}>✔</span> Abattoir Scheme</li>
          <li><span className={styles.checkIcon}>✔</span> Storage and Warehouse Scheme</li>
          <li><span className={styles.checkIcon}>✔</span> Product Endorsement Scheme</li>
        </ul>
        <p className={styles.paragraphContent}>
          Halal Certification is not limited to food—non-alcoholic beverages, herbal products, cosmetics, cleaning agents, and other daily use items can also be certified.
        </p>
      </div>
    </div>
  </div>
</section>




  );
};

export default PrivateLimitedCompanyContent; 