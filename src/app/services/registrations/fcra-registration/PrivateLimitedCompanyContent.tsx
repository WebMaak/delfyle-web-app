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
<section className={styles.container}>
  <div className={styles.topAnchorContainer}>
    <a href="#" className={styles.topAnchorLink}>FCRA Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          FCRA Registration in India: A Complete Guide by Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          Before receiving any foreign contribution or donation from foreign sources, individuals, associations, or companies in India are required to register with the Central Government under Section 11 of the Foreign Contribution (Regulation) Act, 2010 (FCRA). If an entity has not obtained this registration, it can still receive foreign contributions only with prior permission from the Central Government. The FCRA registration process is administered by the Ministry of Home Affairs, Government of India.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Delfyle’s FCRA online services streamline the registration process. Our compliance experts guide you through the legal requirements, documentation, and submission process to ensure fast, hassle-free FCRA approval. Begin your FCRA registration with Delfyle today.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is FCRA?</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          FCRA stands for the Foreign Contribution (Regulation) Act. This legislation regulates the acceptance and use of foreign funds by individuals and organizations in India. Originally enacted in 1976, and later updated in 2010, it aims to ensure transparency and accountability in the receipt and utilization of foreign donations, particularly by NGOs and charitable institutions.
        </p>

        <h3 className={styles.subContentHeading}>What is FCRA Registration?</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          FCRA registration is a mandatory legal process for any Indian entity—whether an individual, association, or company—that intends to receive foreign contributions for social, educational, cultural, religious, or economic purposes.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          **Types of FCRA Registration:**
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> **Normal Registration:** Applicable to organizations operational for at least three years with proven societal impact. Must have spent a minimum of ₹10 lakhs on core activities (excluding administrative expenses) in the past three years and be a registered entity.</li>
          <li><span className={styles.checkIcon}>✔</span> **Prior Permission:** For newly formed organizations that do not meet the three-year criterion. Must have a clearly defined project and a confirmed commitment from a foreign donor.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          The FCRA registration process is administered by the Ministry of Home Affairs, Government of India, to ensure transparency and accountability in the receipt and utilization of foreign funds.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Simplify your FCRA registration—Delfyle ensures fast, transparent, and legally compliant foreign funding."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Benefits of FCRA Registration</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> **Legally Receive Foreign Funds:** Enables acceptance of foreign contributions for specified purposes without further approval.</li>
          <li><span className={styles.checkIcon}>✔</span> **Enhanced Transparency:** Registered organizations must disclose foreign funding, ensuring financial clarity and compliance.</li>
          <li><span className={styles.checkIcon}>✔</span> **Legal and Financial Safeguards:** Eligible entities can receive tax benefits and enjoy legal protection under Indian law.</li>
          <li><span className={styles.checkIcon}>✔</span> **Support for Social Work:** Enables NGOs to tap into global resources and partnerships for social development.</li>
          <li><span className={styles.checkIcon}>✔</span> **Monitoring and Accountability:** Ensures donations are used appropriately, minimizing the risk of misuse or diversion of funds.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 