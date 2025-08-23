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
    <a href="#" className={styles.topAnchorLink}>COMPANY NAME CHANGE</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Company Name Change in India – Process, Requirements & Legal Compliance
        </h2>
        <p className={styles.paragraphContent}>
          In the ever-evolving business landscape, a company’s name plays a pivotal role in defining its brand identity, shaping customer perception, and reinforcing its market position. However, businesses often reach a point where a company name change becomes essential—be it for rebranding, ownership change, business expansion, or legal compliance.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Changing a company’s name is a strategic decision governed by legal procedures under the Companies Act, 2013. At Delfyle, we offer expert guidance and end-to-end support to ensure a smooth and legally compliant transition to your company’s new name.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Why Consider a Company Name Change?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Change in Business Structure: Shifting from Private Limited to Public Limited, or vice versa, often necessitates a name change.</li>
          <li><span className={styles.checkIcon}>✔</span> Rebranding Strategy: Aligning the name with updated brand messaging, modern market trends, or expansion into new domains.</li>
          <li><span className={styles.checkIcon}>✔</span> Ownership or Management Change: A name change often accompanies mergers, acquisitions, or change in business ownership.</li>
          <li><span className={styles.checkIcon}>✔</span> New Business Activity: Updating the name to reflect revised objectives, industry focus, or service offerings.</li>
          <li><span className={styles.checkIcon}>✔</span> Intellectual Property Concerns: Avoid trademark conflicts or strengthen brand protection under IPR laws.</li>
          <li><span className={styles.checkIcon}>✔</span> RoC Compliance Directive: If the Registrar of Companies (RoC) issues a directive following a name dispute or legal objection.</li>
        </ul>

        <h3 className={styles.subContentHeading}>Legal Framework for Company Name Change in India</h3>
        <p className={styles.paragraphContent}>
          Under Section 13(2) of the Companies Act, 2013, a company can change its name by passing a special resolution in a general meeting and obtaining approval from the Central Government, which has delegated the power to the RoC.
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Changing a company’s name is a strategic decision governed by legal procedures under the Companies Act, 2013. At Delfyle, we offer expert guidance and end-to-end support to ensure a smooth and legally compliant transition.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Changing a company’s name is a strategic decision governed by legal procedures under the Companies Act, 2013. At Delfyle, we offer expert guidance and end-to-end support to ensure a smooth and legally compliant transition to your company’s new name."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        
        <h4 className={styles.subContentHeading}>Key Provisions:</h4>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Section 4(2): Restricts use of names identical to existing companies or names considered undesirable.</li>
          <li><span className={styles.checkIcon}>✔</span> Section 4(3): Certain words (like ‘Federal’, ‘National’, etc.) need prior Central Government approval.</li>
          <li><span className={styles.checkIcon}>✔</span> Rule 29(1): Companies in default (filing, deposits, etc.) are barred from name changes.</li>
          <li><span className={styles.checkIcon}>✔</span> Rule 29(2): Requires Form INC-24 and issuance of a new Certificate of Incorporation (Form INC-25) after approval.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 