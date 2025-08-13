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
      Trademark Transfer
    </a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Trademark Transfer with Delfyle | Safeguard Your Brand Identity
        </h2>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3
          ref={(el) => {
            if (el) leftBottomContentRef.current[0] = el;
          }}
          className={styles.subContentHeading}
        >
        </h3>
        <p
          ref={(el) => {
            if (el) leftBottomContentRef.current[1] = el;
          }}
          className={styles.paragraphContent}
        >
         Trademark Transfer, also known as Trademark Assignment, is a formal legal process where trademark rights are transferred from one party to another. This process is an essential component of intellectual property (IP) management, helping businesses secure and transfer valuable brand assets seamlessly.
         At Delfyle, we specialize in protecting and managing intellectual property, particularly trademarks. Whether you're transferring trademark rights due to a business sale, inheritance, or internal restructuring, our experienced legal team ensures the assignment is executed with precision and compliance.

        </p>

        <h3
          ref={(el) => {
            if (el) leftBottomContentRef.current[2] = el;
          }}
          className={styles.subContentHeading}
        >
          What is a Trademark?
        </h3>
        <p
          ref={(el) => {
            if (el) leftBottomContentRef.current[3] = el;
          }}
          className={styles.paragraphContent}
        >
          A trademark is a distinctive sign, word, symbol, or combination that identifies and distinguishes goods or services of one entity from others in the market. It plays a vital role in building brand recognition and trust. However, under certain circumstances, these rights may need to be transferred to another individual or organization, and this is where Trademark Assignment comes into play.
        </p>

        <h3
          ref={(el) => {
            if (el) leftBottomContentRef.current[2] = el;
          }}
          className={styles.subContentHeading}
        >
          Legal Definition of Trademark Assignment
        </h3>
        <p
          ref={(el) => {
            if (el) leftBottomContentRef.current[3] = el;
          }}
          className={styles.paragraphContent}
        >
          As per Section 37 of the Trade Marks Act, 1999, trademark assignment refers to the transfer of ownership, title, and rights of a trademark from one entity (assignor) to another (assignee).
          In simple terms, it enables a business or individual to legally sell or transfer their trademark rights.

        </p>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div
        ref={(el) => {
          if (el) rightColumnContentRef.current[0] = el;
        }}
        className={styles.rightTopContainer}
      >
        <p className={styles.rightDescription}>
        At Delfyle, we understand the paramount importance of brand name registration and ensuring the distinctiveness of your products and services in today's competitive market. That's why we offer expert assistance in filing for trademarks. Whether you're a dynamic startup, an established business, or an individual entrepreneur, our dedicated team is here to guide you through the intricate trademark registration online process. Let Delfyle be your trusted partner, securing your brand's identity and protecting your intellectual property.
        </p>
      </div>

      <div
        ref={(el) => {
          if (el) rightColumnContentRef.current[1] = el;
        }}
        className={styles.rightBottomContainer}
      >
        <Image
          src="/delfyle-logo/delfyle-logo.png"
          alt="Delfyle Logo"
          width={180}
          height={50}
          objectFit="contain"
          className={styles.companyLogo}
        />
        <p className={styles.bottomQuote}>
          "Let Delfyle be your trusted partner in securing your brand’s identity and protecting your
          intellectual property."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
    </div>
  </div>
</section>




  );
};

export default PrivateLimitedCompanyContent; 