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
    <a href="#" className={styles.topAnchorLink}>Fire License</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Fire Safety Certificate in West Bengal – A Comprehensive Guide by Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          Fire safety is a critical aspect of building safety and public welfare across India, including West Bengal. To ensure the protection of life and property from fire hazards, every business, commercial establishment, and institution operating from a building is required to obtain a Certificate of Fire Safety, commonly referred to as a Fire License or Fire No Objection Certificate (NOC).
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          In West Bengal, this certificate is issued by the West Bengal Fire and Emergency Services Department in accordance with the West Bengal Fire Services Act, 1950 and the National Building Code (NBC) of India. Delfyle offers end-to-end assistance for obtaining a Fire Safety Certificate in West Bengal, helping businesses meet compliance requirements smoothly and efficiently.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is a Fire License?</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          A Fire License is a state-mandated permit that certifies whether a building complies with prescribed fire safety standards. It ensures that fire prevention, protection, and control measures are implemented according to government norms. The license is especially crucial for buildings and operations that are vulnerable to fire hazards.
        </p>

        <h3 className={styles.subContentHeading}>Applicability of Fire License in West Bengal</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          A Fire Safety Certificate is required for:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> All commercial, industrial, and institutional establishments.</li>
          <li><span className={styles.checkIcon}>✔</span> Residential apartments exceeding specific height and area thresholds.</li>
          <li><span className={styles.checkIcon}>✔</span> Buildings used for public assembly or with high occupancy.</li>
        </ul>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          As per the West Bengal Fire Services Act and relevant municipal regulations, the fire license is mandatory for:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Office complexes, shopping malls, and retail outlets.</li>
          <li><span className={styles.checkIcon}>✔</span> Manufacturing and warehousing units.</li>
          <li><span className={styles.checkIcon}>✔</span> Educational institutions, hospitals, and clinics.</li>
          <li><span className={styles.checkIcon}>✔</span> Hotels, restaurants, entertainment venues, and theatres.</li>
          <li><span className={styles.checkIcon}>✔</span> Multi-storey residential apartments (typically above 15 meters).</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          A Fire Safety Certificate is a mandatory government permit that certifies a building’s compliance with fire safety standards, protecting public life and property from fire hazards.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Ensure your building is compliant and your people are safe—Delfyle makes fire safety certificate approval simple and efficient."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Why Choose Delfyle for Your Fire Safety Certificate?</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Delfyle offers expert guidance to help your business apply for and renew Fire Safety Certificates in West Bengal. Our team ensures:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Proper assessment of building compliance with local fire norms.</li>
          <li><span className={styles.checkIcon}>✔</span> Timely documentation and submission to the Fire Services Department.</li>
          <li><span className={styles.checkIcon}>✔</span> Coordination with fire officials for site inspections.</li>
          <li><span className={styles.checkIcon}>✔</span> Assistance in periodic renewals and modifications, if needed.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 