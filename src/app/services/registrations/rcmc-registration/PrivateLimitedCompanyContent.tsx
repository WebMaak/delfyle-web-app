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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>RCMC Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          RCMC Registration
        </h2>
        <p className={styles.paragraphContent}>
          The Registration-Cum-Membership Certificate (RCMC) is an essential document for businesses involved in the import or export of products categorized under the restricted list as per the Foreign Trade Policy (FTP) of India. Issued by Export Promotion Councils (EPCs), Commodity Boards, or Development Authorities recognized by the Director General of Foreign Trade (DGFT), the RCMC authorizes and validates an exporter’s engagement in international trade for specific products.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Beyond regulatory compliance, the RCMC serves as official proof of membership with the respective EPC or board and is mandatory for availing several FTP-linked benefits and concessions.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is RCMC?</h3>
        <p className={styles.paragraphContent}>
          RCMC stands for Registration-Cum-Membership Certificate. This certificate is issued to exporters dealing in products governed by designated EPCs or Commodity Boards, under the aegis of the DGFT. Holding an RCMC validates that an exporter is registered with the appropriate authority and is in compliance with Indian foreign trade regulations.
        </p>

        <h3 className={styles.subContentHeading}>Why is RCMC Registration Important?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Authorization for Trade in Restricted Items: Allows import/export of goods restricted under the FTP.</li>
          <li><span className={styles.checkIcon}>✔</span> Eligibility for Government Incentives: Necessary to claim benefits such as Duty Drawback, MEIS, MAI, and other export promotion schemes.</li>
          <li><span className={styles.checkIcon}>✔</span> Faster Customs Clearance: RCMC adds credibility and simplifies regulatory approvals at customs.</li>
          <li><span className={styles.checkIcon}>✔</span> Access to Trade Updates: Registered exporters gain access to vital market intelligence and promotional initiatives from EPCs.</li>
          <li><span className={styles.checkIcon}>✔</span> Enhanced Business Credibility: Demonstrates compliance with trade regulations and recognized standards.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          The RCMC is a vital document for any business engaged in international trade in India. It not only ensures legal compliance but also unlocks a range of government benefits and enhances an exporter’s market credibility.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Seamlessly navigate the complexities of international trade. We make RCMC registration straightforward, so you can focus on expanding your global footprint."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Who Needs RCMC?</h3>
        <p className={styles.paragraphContent}>
          Any entity engaged in the export or import of goods, including:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Merchant Exporters</li>
          <li><span className={styles.checkIcon}>✔</span> Manufacturer Exporters</li>
          <li><span className={styles.checkIcon}>✔</span> Service Exporters</li>
          <li><span className={styles.checkIcon}>✔</span> Exporters of Multi-Product or Miscellaneous Items</li>
        </ul>
        <p className={styles.paragraphContent}>
          Entities dealing in products that don’t fall under any EPC or board can register with the Federation of Indian Export Organisations (FIEO).
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default PrivateLimitedCompanyContent; 