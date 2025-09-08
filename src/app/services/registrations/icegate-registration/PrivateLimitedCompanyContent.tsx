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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>ICEGATE Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Get Your ICEGATE Registration with Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          ICEGATE (Indian Customs Electronic Gateway) is the official portal for electronic filing of import/export documents. Delfyle provides end-to-end support for ICEGATE registration, ensuring your business can file documents digitally, track submissions, and communicate seamlessly with customs authorities.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Start your ICEGATE registration with Delfyle today and streamline your international trade operations!
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is ICEGATE?</h3>
        <p className={styles.paragraphContent}>
          ICEGATE is a digital interface by Indian Customs to facilitate cross-border trade operations. Importers, exporters, and logistics providers can file key documents such as Shipping Bills, Bills of Entry, and Manifests online, reducing paperwork and accelerating customs clearance.
        </p>

        <h3 className={styles.subContentHeading}>Why ICEGATE Registration is Essential</h3>
        <p className={styles.paragraphContent}>
          ICEGATE registration is mandatory for businesses engaged in international trade. Without it, you cannot submit documents electronically, which may delay imports or exports. Registration grants access to digital customs procedures and status tracking across all EDI-enabled Customs Ports in India.
        </p>

        <h3 className={styles.subContentHeading}>Who Can Register on ICEGATE?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> IEC Certificate Holders (Importers/Exporters)</li>
          <li><span className={styles.checkIcon}>✔</span> Custom Brokers / CHA (Individuals, Firms, Employees)</li>
          <li><span className={styles.checkIcon}>✔</span> Shipping Lines & Agents</li>
          <li><span className={styles.checkIcon}>✔</span> Airlines & Air Cargo Agents</li>
          <li><span className={styles.checkIcon}>✔</span> Console Agents</li>
          <li><span className={styles.checkIcon}>✔</span> IEC-Authorized Persons</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          ICEGATE registration enables digital filing, real-time tracking, and secure communication with Indian Customs, simplifying compliance and improving operational efficiency.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Delfyle streamlines ICEGATE registration so you can focus on growing your import/export business efficiently."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Benefits of ICEGATE Registration</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Digital Filing: Submit Shipping Bills, Bills of Entry, and Manifests online.</li>
          <li><span className={styles.checkIcon}>✔</span> Real-Time Tracking: Monitor submission status and document movement through the portal.</li>
          <li><span className={styles.checkIcon}>✔</span> Instant Notifications: Receive automated updates on SB/BE numbers and status.</li>
          <li><span className={styles.checkIcon}>✔</span> Secure Communication: Official customs messages delivered to your registered email.</li>
          <li><span className={styles.checkIcon}>✔</span> Nationwide Access: One registration provides access to all EDI-enabled Customs locations in India.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

);
};

export default PrivateLimitedCompanyContent; 