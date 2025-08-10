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
          Producer Company Registration
        </a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading}>
              Producer Company Registration with Delfyle | Empowering Farmers and Agriculturists
            </h2>
          </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3
              ref={(el) => {
                if (el) leftBottomContentRef.current[0] = el;
              }}
              className={styles.subContentHeading}
            >
              What is a Producer Company?
            </h3>
            <p
              ref={(el) => {
                if (el) leftBottomContentRef.current[1] = el;
              }}
              className={styles.paragraphContent}
            >
              A Producer Company is an officially established group of farmers or agriculturists aimed
              at improving their quality of life, financial support, and income. This type of company
              combines elements of both private limited companies and cooperatives, encouraging
              cooperative businesses to operate as companies and helping existing cooperatives
              transition into company structures.
            </p>

            <h3
              ref={(el) => {
                if (el) leftBottomContentRef.current[2] = el;
              }}
              className={styles.subContentHeading}
            >
              Why choose Delfyle for Producer Company registration?
            </h3>
            <p
              ref={(el) => {
                if (el) leftBottomContentRef.current[3] = el;
              }}
              className={styles.paragraphContent}
            >
              Delfyle simplifies the registration process of Farmer Producer Organizations under the
              Companies Act 2013. Our team ensures full compliance while guiding you at every step,
              helping you create a sustainable, democratically governed company that empowers its
              members and enhances profitability.
            </p>
            <h3
              ref={(el) => {
                if (el) leftBottomContentRef.current[2] = el;
              }}
              className={styles.subContentHeading}
            >
              Benefits of Producer Company Registration
            </h3>
            <p
              ref={(el) => {
                if (el) leftBottomContentRef.current[3] = el;
              }}
              className={styles.paragraphContent}
            >
              A Producer Company, also referred to as a Farmer Producer Company, is a legally recognized farmer producer organization composed of farmers or agriculturists. Its primary goal is to enhance the livelihoods of its members and ensure the long-term sustainability of their resources, incomes, and profitability. Functioning as a hybrid between private limited companies and cooperative societies, a Producer Company is registered under the Companies Act 2013. Farmer producer organizations operate based on democratic governance principles, ensuring that each member has an equal say in decision-making, regardless of the number of shares they hold.
            </p>
          </div>
        </div>

        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div
            ref={(el) => {
              if (el) rightColumnContentRef.current[0] = el;
            }}
            className={styles.rightTopContainer}
          >
            <p className={styles.rightDescription}>
              Delfyle’s expertise in Producer Company registration ensures that your agricultural
              venture is set up correctly from the start, giving you the foundation to grow, sustain,
              and prosper.
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
              "We guide farmers and agriculturists in building sustainable businesses through Producer
              Company registration."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
        </div>
      </div>
    </section>



  );
};

export default PrivateLimitedCompanyContent; 