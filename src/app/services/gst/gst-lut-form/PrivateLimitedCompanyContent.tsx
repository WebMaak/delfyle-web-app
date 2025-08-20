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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>GST LUT Form</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{marginBottom: '0'}}>
          LUT Filing in GST for Exporters – Simplify Your Exports with Delfyle
        </h2>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is LUT in GST?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          The full form of LUT is Letter of Undertaking. Under the GST regime, an LUT enables exporters to supply goods or services without the payment of Integrated Goods and Services Tax (IGST). This helps businesses avoid the burden of upfront tax payments and reduces the need for claiming refunds later.
        </p>
        <p className={styles.paragraphContent}>
          Exporters must file LUT in Form GST RFD-11 every financial year to avail of tax-free exports.
        </p>

        <h3 className={styles.subContentHeading}>Who Should File LUT under GST?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Registered taxpayers exporting goods or services</li>
          <li><span className={styles.checkIcon}>✔</span> Suppliers to Special Economic Zones (SEZs)</li>
          <li><span className={styles.checkIcon}>✔</span> Businesses providing services to clients outside India</li>
        </ul>
        <p className={styles.paragraphContent}>
          Note: Taxpayers prosecuted for tax evasion exceeding ₹2.5 crores are not eligible to file an LUT.
        </p>

        <h3 className={styles.subContentHeading}>Eligibility Criteria for Filing LUT</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Must be a registered GST taxpayer</li>
          <li><span className={styles.checkIcon}>✔</span> Should be engaged in export of goods/services or SEZ supplies</li>
          <li><span className={styles.checkIcon}>✔</span> Should not have a history of serious tax evasion</li>
          <li><span className={styles.checkIcon}>✔</span> Must intend to make zero-rated supplies without IGST payment</li>
        </ul>

        <h3 className={styles.subContentHeading}>Validity of LUT</h3>
        <p className={styles.paragraphContent}>
          An LUT remains valid for one financial year. Exporters must submit a fresh LUT every year to continue availing of IGST exemption. If the exporter fails to comply with LUT conditions, the LUT can be revoked and a bond may be required instead.
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Are you an exporter? Filing a Letter of Undertaking (LUT) allows you to export goods or services without paying IGST upfront. Delfyle helps you file your GST LUT quickly and accurately.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "At Delfyle, we simplify the GST LUT filing process, enabling you to ship goods and services without paying IGST upfront."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>When is a Bond Required Instead of LUT?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Exporters with a history of tax defaults</li>
          <li><span className={styles.checkIcon}>✔</span> Exporters failing to comply with LUT conditions</li>
          <li><span className={styles.checkIcon}>✔</span> Any zero-rated supply not meeting eligibility for LUT</li>
        </ul>
        <p className={styles.paragraphContent}>
          A bond must be executed on non-judicial stamp paper and backed by a bank guarantee (typically 15% of the bond amount unless waived).
        </p>
      </div>
    </div>
  </div>
</section>


  );
};

export default PrivateLimitedCompanyContent; 