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
    <a href="#" className={styles.topAnchorLink}>MOA Amendment</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          MOA Amendment Services - Modify Your Company’s Foundation Seamlessly with Delfyle
        </h2>
        <p className={styles.paragraphContent} >
          As businesses grow and evolve, changes in operational goals, geographical presence, or strategic direction often necessitate amendments to their Memorandum of Association (MOA). The MOA is a fundamental legal document that defines your company’s objectives, scope of operations, and framework for decision-making. At Delfyle, we simplify the process of MOA amendment by offering expert assistance, ensuring full compliance with the Companies Act, 2013.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0px' }}>
          Get in touch with our compliance experts today to begin your MOA amendment with confidence!
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is a Memorandum of Association (MOA)?</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0px' }}>
          The Memorandum of Association is a key legal document that outlines the very structure and purpose of a company. It is drafted at the time of incorporation and contains vital information about the company’s name, objectives, capital, liability, and registered office. The MOA serves as a guide for all internal and external stakeholders, including shareholders, regulatory authorities, and investors.
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> The company's legal identity and geographic jurisdiction</li>
          <li><span className={styles.checkIcon}>✔</span> The scope of business activities</li>
          <li><span className={styles.checkIcon}>✔</span> The nature of liability of its members</li>
          <li><span className={styles.checkIcon}>✔</span> The capital structure and shareholding</li>
        </ul>

        <h3 className={styles.subContentHeading}>What is an MOA Amendment?</h3>
        <p className={styles.rightDescription}>
          An MOA amendment involves updating or modifying specific clauses within the Memorandum of Association to reflect changes in a company’s structure or operations. This process is legally governed under Section 13 of the Companies Act, 2013, and the associated company rules.
        </p>
        <p className={styles.rightDescription} style={{ marginBottom: '0px' }}>
          Common reasons for MOA amendments include:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Change in company name</li>
          <li><span className={styles.checkIcon}>✔</span> Shift of registered office (especially interstate)</li>
          <li><span className={styles.checkIcon}>✔</span> Expansion or change of business activities</li>
          <li><span className={styles.checkIcon}>✔</span> Modification in capital structure</li>
          <li><span className={styles.checkIcon}>✔</span> Limiting or redefining member liability</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
        Delfyle streamlines the process of MOA amendments, providing expert guidance to ensure accurate updates, compliance with legal requirements, and timely submission.
      </p>

      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Ensure your company’s legal foundation is up-to-date and compliant with expert MOA amendment services from Delfyle."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Why Choose Delfyle for MOA Amendments?</h3>
        <p className={styles.paragraphContent}>
          Delfyle provides comprehensive MOA amendment services to ensure a seamless process. Our experts assist you with every step, from preparing the necessary documents to filing with the Registrar of Companies (ROC), ensuring full compliance and saving you time and effort.
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Expert legal guidance</li>
          <li><span className={styles.checkIcon}>✔</span> Streamlined and efficient process</li>
          <li><span className={styles.checkIcon}>✔</span> Full compliance with the Companies Act, 2013</li>
          <li><span className={styles.checkIcon}>✔</span> Timely filing to avoid penalties</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 