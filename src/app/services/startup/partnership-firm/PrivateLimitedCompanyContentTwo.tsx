"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../../Components/TrialComponent/ComponentTwelve/ComponentTwelve.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrivateLimitedCompanyContentTwo: React.FC = () => {
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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>
      Partnership Deed & Firm Registration
    </a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Partnership Deed & Firm Registration in India with Delfyle
        </h2>
        <p ref={(el) => { if (el) leftBottomContentRef.current[0] = el; }} className={styles.paragraphContent}>
          A partnership deed is a legal document that outlines the terms and conditions of a partnership. It includes details such as the rights and duties of partners, the distribution of profits, individual capital contributions, and the partnership's duration. Partnership deed registration is essential to execute the operations legally.
        </p>
        <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent}>
          This document is significant as it helps prevent misunderstandings and conflicts among partners by clearly defining their roles and responsibilities. Moreover, it serves as proof of the partnership's existence and can be used in legal proceedings to resolve disputes. So, it is necessary to register a partnership deed to get these benefits.
        </p>

        <h3 ref={(el) => { if (el) leftBottomContentRef.current[2] = el; }} className={styles.subContentHeading}>
          Partnership Firm Registration
        </h3>
        <p ref={(el) => { if (el) leftBottomContentRef.current[3] = el; }} className={styles.paragraphContent}>
          Partnership registration involves the formal registration of a partnership firm by its partners with the Registrar of Firms. This process typically occurs in the state where the firm is located. It's important to note that partnership firm registration is not mandatory; it's optional. Partners can choose to apply for partnership deed registration at the time of forming the firm or later during its ongoing operations.
        </p>
        <p ref={(el) => { if (el) leftBottomContentRef.current[4] = el; }} className={styles.paragraphContent}>
          For partnership deed registration to take place, two or more individuals must come together as partners, agree on a firm name, and create a deed to register the partnership deed. Get expert help from Delfyle to easily register your firm with an affordable partnership firm registration cost!
        </p>

        <h3 ref={(el) => { if (el) leftBottomContentRef.current[5] = el; }} className={styles.subContentHeading}>
          Who Can Be a Partner in India's Partnership Firms?
        </h3>
        <p ref={(el) => { if (el) leftBottomContentRef.current[6] = el; }} className={styles.paragraphContent}>
          To become a partner in an Indian partnership firm, you need to meet these conditions:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Mental and Legal Fitness: You must be mentally sound, not underage, not insolvent, and not legally prohibited from making contracts.</li>
          <li><span className={styles.checkIcon}>•</span> Registered Partnership Firms: A registered partnership firm can partner with other firms or businesses.</li>
          <li><span className={styles.checkIcon}>•</span> Head of a Hindu Family: A Hindu Undivided Family (HUF) leader can be a partner if they contribute their own skills and labour to the partnership.</li>
          <li><span className={styles.checkIcon}>•</span> Companies as Partners: Companies, considered legal entities, can also be partners if their objectives permit it.</li>
          <li><span className={styles.checkIcon}>•</span> Trustees of Specific Trusts: Trustees of private religious, family, or Hindu trusts can partner unless their rules explicitly prohibit it.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={(el) => { if (el) rightColumnContentRef.current[0] = el; }} className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle provides comprehensive support for partnership deed and firm registration. Our team guides you through drafting the deed, filing documents with the Registrar of Firms, and ensuring compliance with all legal requirements, making the registration process hassle-free and efficient.
        </p>
      </div>

      <div ref={(el) => { if (el) rightColumnContentRef.current[1] = el; }} className={styles.rightBottomContainer}>
        <Image
          src="/delfyle-logo/delfyle-logo.png"
          alt="Delfyle Logo"
          width={180}
          height={50}
          objectFit="contain"
          className={styles.companyLogo}
        />
        <p className={styles.bottomQuote}>
          "With Delfyle, your partnership firm registration and deed are accurate, legal, and hassle-free."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
    </div>
  </div>
</section>





  
  );
};

export default PrivateLimitedCompanyContentTwo; 