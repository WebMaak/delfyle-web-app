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
    <a href="#" className={styles.topAnchorLink}>Drug License</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Drug License
        </h2>
        <p className={styles.paragraphContent}>
          Obtain Your Drug License in West Bengal with Ease – Delfyle Makes It Simple
        </p>
        <p className={styles.paragraphContent}>
          Operating in the pharmaceutical sector in India, especially in West Bengal, requires strict compliance with legal norms—starting with obtaining a valid drug license. Whether you're involved in manufacturing, distributing, or selling pharmaceutical or cosmetic products, securing a drug license is a mandatory legal prerequisite under the Drugs and Cosmetics Act, 1940.
        </p>
        <p className={styles.paragraphContent}>
          The drug license not only ensures that your business adheres to quality and safety standards but also protects public health by regulating the sale and distribution of medicines. However, navigating the regulatory framework—particularly in a state like West Bengal, where regional compliance is critical—can be overwhelming.
        </p>
        <p className={styles.paragraphContent}style={{ marginBottom: '0' }}>
          Delfyle is here to simplify the Drug License Registration process for you. With a nuanced understanding of the regulatory landscape in West Bengal, Delfyle offers end-to-end support for obtaining your drug license, guiding you through application preparation, submission, premises inspection, and verification, while ensuring complete legal compliance.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is a Drug License?</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          A drug license is a government-issued legal authorization that permits individuals or entities to legally engage in drug-related business operations such as manufacturing, distributing, or selling pharmaceutical and cosmetic products.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          In West Bengal, drug licenses are jurisdiction-specific. This means:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Separate licenses are needed for each state or union territory.</li>
          <li><span className={styles.checkIcon}>✔</span> Multiple premises within the same state (including West Bengal) require separate licenses.</li>
          <li><span className={styles.checkIcon}>✔</span> Businesses selling or distributing without a valid license risk suspension, cancellation, or legal prosecution.</li>
          <li><span className={styles.checkIcon}>✔</span> Mobile vendors are generally exempt but must still adhere to safety norms.</li>
        </ul>

        <h3 className={styles.subContentHeading}>Definition of Drugs under Indian Law</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Under Section 3(b) of the Drugs and Cosmetics Act, 1940, "drugs" include:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Allopathic, Homeopathic, Ayurvedic, Siddha, and Unani medicines.</li>
          <li><span className={styles.checkIcon}>✔</span> Substances for the diagnosis, treatment, prevention, or mitigation of diseases in humans or animals.</li>
          <li><span className={styles.checkIcon}>✔</span> Insect repellents for topical application.</li>
          <li><span className={styles.checkIcon}>✔</span> Medical devices and components (e.g., empty gelatin capsules).</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          A valid drug license is a legal mandate for any business involved in the pharmaceutical sector. It ensures that all drugs and cosmetics sold are of standard quality and protects public health.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Ensure your pharmaceutical business is compliant—Delfyle makes drug license registration simple, fast, and secure."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        
        <h3 className={styles.subContentHeading}>Drug Categories and Regulatory Oversight</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          1. Drugs Regulated by the Drug Control Authority (Ministry of Health):
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Allopathic drugs</li>
          <li><span className={styles.checkIcon}>✔</span> Veterinary medicines</li>
          <li><span className={styles.checkIcon}>✔</span> Medical devices</li>
          <li><span className={styles.checkIcon}>✔</span> Homeopathic products</li>
        </ul>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          2. Drugs Regulated by AYUSH (Ministry of Ayush):
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Ayurvedic, Unani, Siddha medicines</li>
          <li><span className={styles.checkIcon}>✔</span> Herbal products for medicinal and cosmetic use</li>
        </ul>
        <h3 className={styles.subContentHeading}>Why Obtain a Drug License?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Legal compliance and protection from penalties</li>
          <li><span className={styles.checkIcon}>✔</span> Quality control of pharmaceutical products</li>
          <li><span className={styles.checkIcon}>✔</span> Prevention of misuse, abuse, or illegal distribution</li>
          <li><span className={styles.checkIcon}>✔</span> Consumer safety and public health assurance</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 