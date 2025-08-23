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
    <a href="#" className={styles.topAnchorLink}>OPC COMPLIANCE</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          One Person Company (OPC) Annual Compliance in India
        </h2>
        <p className={styles.paragraphContent}>
          A One Person Company (OPC) is a unique business structure introduced under the Companies Act, 2013, designed for single entrepreneurs who wish to operate as a company rather than a sole proprietorship. As per Section 2(62) of the Act, an OPC is a company that has only one member and is registered as a Private Limited Company. This means it is required to adhere to the same compliance framework applicable to other Private Limited Companies.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          At Delfyle, we specialize in helping entrepreneurs manage their OPC annual compliance responsibilities with ease. Our team of professionals ensures that your company stays fully compliant with all the Ministry of Corporate Affairs (MCA) regulations and Income Tax filing obligations. Whether you’re just starting or are looking for end-to-end compliance services, Delfyle is your trusted partner in maintaining your OPC’s legal status.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is a One Person Company?</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          An OPC is a company with only one member, typically the sole owner. It provides the benefits of limited liability, legal recognition, and easier access to funding compared to traditional sole proprietorships. This structure allows a single entrepreneur to operate as a separate legal entity, with greater control and less regulatory burden compared to a traditional company.
        </p>

        <h3 className={styles.subContentHeading}>Why OPC Compliance is Mandatory</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          OPC Compliance refers to the mandatory filings and procedures required by the Ministry of Corporate Affairs (MCA) and the Income Tax Department. These ensure that the company remains active and in good legal standing. Even if your OPC has not conducted any business activity, you are still required to file annual returns and other mandatory reports.
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle specializes in helping entrepreneurs manage their OPC annual compliance responsibilities with ease, ensuring your company stays fully compliant.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Whether you’re just starting or are looking for end-to-end compliance services, Delfyle is your trusted partner in maintaining your OPC’s legal status."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        
        <h4 className={styles.subContentHeading}>Benefits of Timely OPC Compliance</h4>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Avoid Penalties: Prevent hefty fines and legal actions.</li>
          <li><span className={styles.checkIcon}>•</span> Maintain Active Status: Ensures your OPC remains legally active and credible.</li>
          <li><span className={styles.checkIcon}>•</span> Investor Confidence: Builds trust with investors and financial institutions.</li>
          <li><span className={styles.checkIcon}>•</span> Improved Creditworthiness: Helps in building a credit profile for future funding.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 