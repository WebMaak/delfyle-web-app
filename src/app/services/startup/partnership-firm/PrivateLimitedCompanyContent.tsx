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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>
      Partnership Firm Registration
    </a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Partnership Firm Registration in India
        </h2>
        <p ref={(el) => { if (el) leftBottomContentRef.current[0] = el; }} className={styles.paragraphContent}>
          A partnership firm is a popular choice among entrepreneurs due to its simplicity and flexibility. It allows multiple individuals to come together and combine their resources, skills, and expertise to run a business. Registering your partnership firm is the first step toward formalizing your partnership and ensuring its legal recognition.
        </p>
        <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent}>
          At Delfyle, we understand that navigating the intricacies of the partnership firm registration process can be daunting. That's why we offer a comprehensive and hassle-free partnership firm registration online service designed to meet your needs with affordable partnership firm registration fees. We handle the entire process and register the partnership deed effortlessly. Whether you are a new startup or an existing unregistered partnership looking to formalize your business, our expert team of professionals guides you through the process to register a partnership firm.
        </p>
        <p ref={(el) => { if (el) leftBottomContentRef.current[2] = el; }} className={styles.paragraphContent}>
          Contact us now to learn more and get started on your partnership firm registration journey!
        </p>

        <h3 ref={(el) => { if (el) leftBottomContentRef.current[3] = el; }} className={styles.subContentHeading}>
          Partnership Firms
        </h3>
        <p ref={(el) => { if (el) leftBottomContentRef.current[4] = el; }} className={styles.paragraphContent}>
          A partnership stands as one of the fundamental structures for conducting business. It materializes when two or more individuals collaborate to establish a business venture, sharing profits according to an agreed-upon ratio. This form of business encompasses a broad spectrum of trades, occupations, and professions. A notable advantage is that partnership firms entail relatively fewer regulatory requirements than companies.
        </p>

        <h3 ref={(el) => { if (el) leftBottomContentRef.current[5] = el; }} className={styles.subContentHeading}>
          Law Governing the Partnership Firms Registration
        </h3>
        <p ref={(el) => { if (el) leftBottomContentRef.current[6] = el; }} className={styles.paragraphContent}>
          In India, the operation of partnership firms is governed by the Indian Partnership Act of 1932. Those who unite to create a partnership firm are referred to as partners, and the formation of the partnership firm is based on a contractual agreement among these individuals. The agreement among partners is commonly referred to as a "partnership deed."
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={(el) => { if (el) rightColumnContentRef.current[0] = el; }} className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle makes partnership firm registration straightforward and compliant with legal requirements. Our team assists with drafting partnership deeds, submitting documents, and providing guidance throughout the registration process, so you can focus on building your business.
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
          "With Delfyle, your partnership firm registration is professional, accurate, and hassle-free."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
    </div>
  </div>
</section>






  
  );
};

export default PrivateLimitedCompanyContent; 