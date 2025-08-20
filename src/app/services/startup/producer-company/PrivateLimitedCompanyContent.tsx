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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Producer Company</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading} >
          Producer Company Registration with Delfyle
        </h2>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          A Producer Company is an officially established group of farmers or agriculturists aimed at improving 
          their quality of life, financial support, and income. This type of company combines elements of both 
          private limited companies and cooperatives. Its primary goal is to encourage cooperative businesses 
          to operate as companies and to facilitate the transition of existing cooperatives into company structures.
        </p>
        <p className={styles.paragraphContent}>
          Complete your Producer Company registration with Delfyle's expert guidance. Our team simplifies the 
          registration process of farmer producer organizations, ensuring full compliance under the Companies 
          Act 2013. Contact Delfyle today and take the first step towards empowering your agricultural venture.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is a Producer Company?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          A Producer Company, also referred to as a Farmer Producer Company, is a legally recognized farmer 
          producer organization composed of farmers or agriculturists. Its primary goal is to enhance the 
          livelihoods of its members and ensure the long-term sustainability of their resources, incomes, 
          and profitability.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Functioning as a hybrid between private limited companies and cooperative societies, a Producer 
          Company is registered under the Companies Act 2013. Farmer producer organizations operate based 
          on democratic governance principles, ensuring that each member has an equal say in decision-making, 
          regardless of the number of shares they hold.
        </p>

        <h3 className={styles.subContentHeading}>Objective of Producer Company</h3>
        <p className={styles.paragraphContent}>
          A Producer Company's objective is to advance its members' interests by facilitating activities 
          related to the production, marketing, sale, and export of their primary products. Additionally, 
          the Producer Company incorporation is empowered to import goods or services essential for the 
          welfare of its members.
        </p>

        <h3 className={styles.subContentHeading}>Why Register a Producer Company?</h3>
        <p className={styles.paragraphContent}>
          Registering a Producer Company provides farmers with a formal legal structure that enhances credibility, 
          access to finance, and better market opportunities. It safeguards members’ rights, ensures transparency 
          in operations, and helps small farmers collectively scale their businesses. By functioning under the 
          Companies Act 2013, Producer Companies also enjoy limited liability protection while retaining the spirit 
          of cooperative growth.
        </p>

      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle provides expert assistance to farmers and agriculturists in registering Producer Companies 
          under the Companies Act 2013. From documentation to compliance, our team ensures a seamless process 
          so you can focus on strengthening your agricultural venture.
        </p>
      </div>

      <div ref={el => { if (el) rightColumnContentRef.current[1] = el }} className={styles.rightBottomContainer}>
        <Image 
          src="/delfyle-logo/delfyle-logo.png" 
          alt="Delfyle Logo" 
          width={180} 
          height={50} 
          objectFit="contain"
          className={styles.companyLogo}
        />
        <p className={styles.bottomQuote}>
          "Empowering farmers with seamless Producer Company registration and compliance."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      {/* Balanced Content: Activities moved here */}
      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Activities of a Producer Company</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Farmer Producer Organizations are established with diverse objectives aimed at enhancing their 
          members' welfare and economic status.
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Agricultural Support – production, marketing, export, and import of essential goods/services.</li>
          <li><span className={styles.checkIcon}>✔</span> Processing & Preservation – value addition through drying, canning, packaging, etc.</li>
          <li><span className={styles.checkIcon}>✔</span> Equipment Supply – providing machinery, tools, and consumables to members.</li>
          <li><span className={styles.checkIcon}>✔</span> Education & Training – skill development and awareness programs.</li>
          <li><span className={styles.checkIcon}>✔</span> Technical Services – consultancy, R&D, and capacity-building support.</li>
          <li><span className={styles.checkIcon}>✔</span> Energy & Resources – power generation and sustainable land/water use.</li>
          <li><span className={styles.checkIcon}>✔</span> Insurance – protection for farmers and their produce.</li>
          <li><span className={styles.checkIcon}>✔</span> Mutual Cooperation – promoting unity and collective growth.</li>
          <li><span className={styles.checkIcon}>✔</span> Member Welfare – welfare schemes and facilities for farmers.</li>
          <li><span className={styles.checkIcon}>✔</span> Ancillary Activities – any supporting activities that promote members’ interests.</li>
          <li><span className={styles.checkIcon}>✔</span> Financial Support – credit, loans, and funding for farming activities.</li>
        </ul>

      </div>
    </div>
  </div>
</section>


  );
};

export default PrivateLimitedCompanyContent; 