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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>FSSAI Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          FSSAI Registration
        </h2>
        <p className={styles.paragraphContent}>
          Ensure Your Food Business is Safe, Compliant, and Trusted. If you’re involved in any food-related activity in India — whether it’s a small homemade kitchen, street food stall, restaurant chain, or packaged food brand — obtaining FSSAI Registration is a legal requirement. This essential certification, issued by the Food Safety and Standards Authority of India (FSSAI), affirms your commitment to food safety, hygiene, and consumer trust.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          With Delfyle, you can get your FSSAI license quickly and without hassle. Our experts guide you through choosing the right food category, compiling necessary documents, and ensuring full compliance with food safety laws.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is FSSAI Registration?</h3>
        <p className={styles.paragraphContent}>
          FSSAI Registration is a mandatory certification for individuals and entities involved in the manufacture, processing, distribution, sale, and storage of food products in India. It is governed under the Food Safety & Standards (Licensing and Registration of Food Business) Regulations, 2011. The type of FSSAI approval required depends on your business size:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Basic Registration for small businesses or startups</li>
          <li><span className={styles.checkIcon}>✔</span> State License for medium-scale operations</li>
          <li><span className={styles.checkIcon}>✔</span> Central License for large businesses or those operating in multiple states</li>
        </ul>

        <h3 className={styles.subContentHeading}>Why is FSSAI Registration Important?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Legal Requirement: Operating a food business without FSSAI registration is illegal and subject to penalties.</li>
          <li><span className={styles.checkIcon}>✔</span> Consumer Trust: The FSSAI number on food packages signals safety, hygiene, and quality assurance.</li>
          <li><span className={styles.checkIcon}>✔</span> Market Credibility: Registered businesses are more likely to be trusted by distributors, e-commerce platforms, and retail chains.</li>
          <li><span className={styles.checkIcon}>✔</span> Safety Accountability: Encourages better hygiene standards and reduces instances of food adulteration.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          FSSAI Registration is a mandatory legal certification that validates your commitment to food safety and hygiene. It is required for all food businesses, regardless of size, to ensure consumer trust and market credibility.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Secure your food business's compliance and build consumer trust. We make FSSAI registration simple, so you can focus on serving great food."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Key Features of FSSAI Registration</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> 14-Digit FSSAI Number: Each registered business receives a unique 14-digit number that must be printed on all food packaging for transparency.</li>
          <li><span className={styles.checkIcon}>✔</span> Universal Applicability: From small food stalls to large manufacturers, all food businesses must obtain this registration or license.</li>
          <li><span className={styles.checkIcon}>✔</span> Regulatory Oversight: The FSSAI, an autonomous body under the Ministry of Health and Family Welfare, ensures uniform food safety standards across India.</li>
        </ul>
      </div>
    </div>
  </div>
</section>


  );
};

export default PrivateLimitedCompanyContent; 