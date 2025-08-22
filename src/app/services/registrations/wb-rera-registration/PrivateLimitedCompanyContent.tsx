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
        <a href="#" className={styles.topAnchorLink}>WB RERA Registration</a>
      </div>

      <div className={styles.mainContentWrapper}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 className={styles.mainHeading}>
              WB RERA Registration
            </h2>
            <p className={styles.paragraphContent}>
              RERA (Real Estate Regulatory Authority) registration is a statutory requirement for real estate developers and agents operating in India. Instituted under the Real Estate (Regulation and Development) Act, this registration ensures that real estate transactions are conducted with transparency, accountability, and in accordance with the law. It is mandatory for real estate agents and professionals to obtain RERA registration before undertaking any advertising, marketing, booking, or selling of property.
            </p>
            <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
              With Delfyle, navigating the RERA registration process becomes seamless. Our experts handle documentation, compliance, and procedural requirements, helping you register efficiently and legally operate in the real estate sector.
            </p>
          </div>

          <div className={styles.leftBottomContainer}>
            <h3 className={styles.subContentHeading}>What Is RERA Registration?</h3>
            <p className={styles.paragraphContent}>
              RERA registration is a government-mandated procedure under the Real Estate (Regulation and Development) Act. It applies to developers, promoters, and real estate agents. The registration is necessary before engaging in the following activities:
            </p>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>✔</span> Advertising and marketing of real estate projects</li>
              <li><span className={styles.checkIcon}>✔</span> Selling or offering for sale of plots, apartments, or buildings</li>
              <li><span className={styles.checkIcon}>✔</span> Facilitating investment in real estate properties</li>
            </ul>
            <p className={styles.paragraphContent}>
              The main objectives of the Act are:
            </p>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>✔</span> Enhancing transparency in project approvals and transactions</li>
              <li><span className={styles.checkIcon}>✔</span> Ensuring accountability among real estate stakeholders</li>
              <li><span className={styles.checkIcon}>✔</span> Protecting the interests of home buyers and investors</li>
            </ul>
            <p className={styles.paragraphContent}>
              Each state has its own RERA authority responsible for enforcing the Act, registering projects and agents, and regulating sales and purchase activities.
            </p>

            <h3 className={styles.subContentHeading}>Scope and Applicability</h3>
            <p className={styles.paragraphContent}>
              RERA registration is applicable in the following cases:
            </p>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>✔</span> Agents involved in marketing or selling properties of projects exceeding 500 sq. meters or more than 8 apartments</li>
              <li><span className={styles.checkIcon}>✔</span> All commercial, residential, and plotted developments</li>
              <li><span className={styles.checkIcon}>✔</span> Individuals or entities inviting people to invest in real estate under the scope of RERA</li>
              <li><span className={styles.checkIcon}>✔</span> Transactions involving properties registered with the respective state's RERA authority</li>
            </ul>
            <p className={styles.paragraphContent}>
              The registration is state-specific but valid throughout the state and must be renewed periodically.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <div className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
              RERA registration is essential for real estate businesses to comply with statutory requirements, build buyer trust, and enhance transparency in the market.
            </p>
          </div>

          <div className={styles.rightBottomContainer}>
            <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
            <p className={styles.bottomQuote}>
              "Ensure your real estate projects are compliant and trusted—Delfyle makes RERA registration simple, fast, and fully transparent."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>

          <div className={styles.leftBottomContainer}>
            <h3 className={styles.subContentHeading}>Who Is Required to Register?</h3>
            <p className={styles.paragraphContent}>
              Real Estate Agents include individuals or entities facilitating real estate transactions in exchange for fees. They may be:
            </p>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>✔</span> Property dealers</li>
              <li><span className={styles.checkIcon}>✔</span> Brokers or intermediaries</li>
              <li><span className={styles.checkIcon}>✔</span> Corporate entities or partnerships</li>
            </ul>
            <p className={styles.paragraphContent}>
              According to the RERA Act, agents must obtain RERA registration to:
            </p>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>✔</span> Advertise or market RERA-registered properties</li>
              <li><span className={styles.checkIcon}>✔</span> Participate in the sale or purchase of plots, apartments, or buildings</li>
              <li><span className={styles.checkIcon}>✔</span> Represent promoters and developers in transactions</li>
            </ul>

            
          </div>
        </div>
      </div>
    </section>
  );
};


export default PrivateLimitedCompanyContent; 