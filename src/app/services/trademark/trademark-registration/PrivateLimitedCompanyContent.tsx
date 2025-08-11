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
      Trademark Registration
    </a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Trademark Registration with Delfyle | Safeguard Your Brand Identity
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
         Within the competitive business realm, a product is frequently distinguished by its brand name and the distinctive elements that set it apart. These elements, ranging from logos and jingles to packaging design, collectively constitute what we refer to as a trademark. In today's digital era, safeguarding your brand identity has gained even greater significance. Whether you are launching a startup, managing an established business, or embarking on the entrepreneurial path as an individual, trademark registration online remains a vital step to guarantee the uniqueness and distinctiveness of your products and services.

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
          Following the Indian Trademarks Act of 1999 (Section 2(zb)), a trademark is a distinctive marker that distinguishes products or services from competitors in the market. It encompasses various elements such as symbols, designs, expressions, or any identifiable feature linked to a specific brand. Remarkably, trademarks are open to ownership by individuals, corporations, or legal entities, making them accessible to a broad spectrum of entities and individuals alike.
        </p>

        <h3
          ref={(el) => {
            if (el) leftBottomContentRef.current[2] = el;
          }}
          className={styles.subContentHeading}
        >
          Why Should You Register Your Trademark?
        </h3>
        <p
          ref={(el) => {
            if (el) leftBottomContentRef.current[3] = el;
          }}
          className={styles.paragraphContent}
        >
          Trademark registration in India protects your rights to use the mark in association with your goods or services. It offers a robust shield against infringement, empowering you to take legal action against unauthorized trademark use. Upon successful trademark or brand name registration, your trademark remains valid for ten years from the filing date, with the option to renew it indefinitely.
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