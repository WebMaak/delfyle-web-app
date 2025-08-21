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
          Get Your FSSAI License with Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          Ensure your food business is fully compliant with FSSAI norms. Delfyle offers expert assistance to help you choose the right registration type, file documentation, and navigate every step of the application process—quickly and efficiently.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Get started with Delfyle today and grow your food business the right way!
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>FSSAI License Overview</h3>
        <p className={styles.paragraphContent}>
          Any business involved in selling food or edible items must comply with the Food Safety and Standards Authority of India (FSSAI) Act. FSSAI registration or licensing is mandatory based on the size and nature of your operations—be it production, storage, transportation, or distribution. Compliance ensures legal safety and promotes food quality nationwide.
        </p>

        <h3 className={styles.subContentHeading}>Licensing and Registration for Food Businesses in India</h3>
        <p className={styles.paragraphContent}>
          As per Section 31(1) of the Food Safety and Standards Act, 2006, all Food Business Operators (FBOs) must obtain an FSSAI license. This is governed by the Food Safety & Standards (Licensing and Registration of Food Business) Regulations, 2011. The license type—registration, state, or central—depends on business scale and operations.
        </p>

        <h3 className={styles.subContentHeading}>Who Needs an FSSAI License?</h3>
        <p className={styles.paragraphContent}>
          Any business involved in production, storage, sale, distribution, or import of food products requires an FSSAI license. This applies to restaurants, caterers, cloud kitchens, food processing units, and online delivery platforms. Both individuals and corporate entities must apply online and regularly track license status.
        </p>

        <h3 className={styles.subContentHeading}>FSSAI Registration for Small Businesses</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Turnover below ₹12 lakhs</li>
          <li><span className={styles.checkIcon}>✔</span> Production less than 100 kg/litres per day (excluding milk, meat, fish)</li>
          <li><span className={styles.checkIcon}>✔</span> Milk handling up to 500 litres/day</li>
          <li><span className={styles.checkIcon}>✔</span> Slaughter capacity: 10 small animals, 2 large, or 50 poultry/day</li>
          <li><span className={styles.checkIcon}>✔</span> Food served at religious/social functions (non-caterers)</li>
        </ul>
        <p className={styles.paragraphContent}>
          State Licensing Authority issues these registrations. Each registration includes a 14-digit FSSAI number starting with "2".
        </p>

        
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          FSSAI registration ensures your food business operates legally and safely, building consumer trust and enhancing market credibility.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Secure your food business's compliance and gain consumer trust. Delfyle simplifies FSSAI registration so you can focus on serving quality food."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>FSSAI License (State & Central)</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> State License: For businesses with turnover ₹12 lakhs–₹20 crores, issued by state authorities.</li>
          <li><span className={styles.checkIcon}>✔</span> Central License: For large-scale businesses (above ₹20 crores) or import/export operations, issued by the Central Government. Identified by a 14-digit number starting with "1".</li>
        </ul>
        <h3 className={styles.subContentHeading}>Key Features of FSSAI Registration</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> 14-Digit FSSAI Number: Unique number for all registered businesses, printed on food packaging.</li>
          <li><span className={styles.checkIcon}>✔</span> Universal Requirement: From small vendors to large manufacturers, all must obtain FSSAI approval.</li>
          <li><span className={styles.checkIcon}>✔</span> Regulatory Oversight: FSSAI ensures consistent food safety standards across India.</li>
        </ul>
      </div>
    </div>
  </div>
</section>



  );
};

export default PrivateLimitedCompanyContent; 