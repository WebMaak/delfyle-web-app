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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>GST Registration & Filing</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{marginBottom: '0'}}>
          GST Registration & Return Filing in India: Process, Compliance & Expert Help
        </h2>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is GST Registration?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Introduced on July 1, 2017, GST replaced multiple indirect taxes such as VAT, Service Tax, and Excise Duty. Registration is mandatory for service providers, manufacturers, traders, freelancers, and e-commerce sellers exceeding specified turnover thresholds.
        </p>
        <p className={styles.paragraphContent}>
          GST is applied at every stage — from raw material procurement to final consumer sale — and being destination-based, the revenue goes to the state where the goods or services are consumed.
        </p>

        <h3 className={styles.subContentHeading}>Why GST Registration is Important?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          GST Registration provides a unique 15-digit GSTIN, enabling businesses to:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Legally collect GST from customers</li>
          <li><span className={styles.checkIcon}>✔</span> Claim input tax credits</li>
          <li><span className={styles.checkIcon}>✔</span> Expand business by being GST-compliant</li>
          <li><span className={styles.checkIcon}>✔</span> Build trust with customers and stakeholders</li>
        </ul>

        <h3 className={styles.subContentHeading}>GST Registration Process</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Submit your details through our secure portal</li>
          <li><span className={styles.checkIcon}>✔</span> Our GST experts assess your business and state-specific requirements</li>
          <li><span className={styles.checkIcon}>✔</span> Documents are collected, verified, and uploaded on the GST portal</li>
          <li><span className={styles.checkIcon}>✔</span> Receive your GSTIN and Certificate within 3–7 working days</li>
          <li><span className={styles.checkIcon}>✔</span> Get access to Delfyle’s platform for invoicing and compliance management</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle offers complete assistance for GST registration and return filing — from documentation and filing to approval and compliance management. Get your GSTIN hassle-free with expert guidance.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Talk to our GST experts and start your registration today with Delfyle."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Key Components of GST</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> CGST: Central Government tax on intra-state supplies</li>
          <li><span className={styles.checkIcon}>✔</span> SGST: State Government tax on intra-state supplies</li>
          <li><span className={styles.checkIcon}>✔</span> IGST: Central Government tax on inter-state supplies</li>
        </ul>

        <h3 className={styles.subContentHeading}>GST Return Filing</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Filing returns is mandatory for all registered taxpayers, even if there are zero sales. Delfyle ensures timely and accurate GST return filings to avoid penalties.
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Sales (Outward Supplies) – All taxable and exempt sales</li>
          <li><span className={styles.checkIcon}>✔</span> Purchases (Inward Supplies) – Claimable Input Tax Credit (ITC)</li>
          <li><span className={styles.checkIcon}>✔</span> Output GST – Tax collected on sales</li>
          <li><span className={styles.checkIcon}>✔</span> Input Tax Credit – GST paid on purchases to offset output tax</li>
        </ul>

        <p className={styles.paragraphContent}>
          Delfyle provides expert guidance, fast processing, and complete compliance support to simplify your GST registration and return filing.
        </p>
      </div>
    </div>
  </div>
</section>


  );
};

export default PrivateLimitedCompanyContent; 