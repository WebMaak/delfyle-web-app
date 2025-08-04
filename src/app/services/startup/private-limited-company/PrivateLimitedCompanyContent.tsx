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
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Company Registration</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading}>Private Limited Company Registration in India with Delfyle</h2>
          </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>What is a Private Limited Company?</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
              A private limited company is a privately held business entity with limited liability, making it one of the most preferred business structures in India. Its advantages include liability protection, ease of formation and maintenance, and recognition as a distinct legal entity.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[2] = el }} className={styles.subContentHeading}>Why Choose Private Limited Company?</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
              Setting up a business in India often involves choosing a private limited company as a preferred option. This structure offers shareholders limited liability protection while placing specific ownership constraints. In contrast, in the case of an LLP, partners oversee the management. Private limited company registration allows for a clear distinction between directors and shareholders.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Key Characteristics</h3>
            <div ref={el => { if (el) leftBottomContentRef.current[5] = el }} className={styles.productsGrid}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>✔</span> Limited Liability Protection</li>
                <li><span className={styles.checkIcon}>✔</span> Separate Legal Entity</li>
                <li><span className={styles.checkIcon}>✔</span> Minimum 2 Shareholders</li>
              </ul>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>✔</span> Restricted Share Transfer</li>
                <li><span className={styles.checkIcon}>✔</span> No Public Investment</li>
                <li><span className={styles.checkIcon}>✔</span> Compliance Requirements</li>
              </ul>
            </div>
          </div>
        </div>
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
              At Delfyle, we provide cost-effective solutions for company registration in India, ensuring a seamless and legally compliant process. From startup incorporation to online company registration, our expert team manages all legal formalities under the Ministry of Corporate Affairs (MCA) regulations.
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
              "Shareholders are liable only to the extent of their shareholding, ensuring personal assets remain protected. The company has its own legal identity, capable of owning property, signing contracts, and initiating legal actions."
            </p>
            <p className={styles.bottomAuthor}>Ministry of Corporate Affairs (MCA)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateLimitedCompanyContent; 