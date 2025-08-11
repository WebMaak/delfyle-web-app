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
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trademark Registration</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading}>
            Choosing the Correct Trademark Class
            </h2>
          </div>

          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <p
            ref={(el) => {
              if (el) leftBottomContentRef.current[1] = el;
            }}
            className={styles.paragraphContent}
            >
            Trademark classes are a critical aspect of the registration process, as they categorize goods and services into 45 distinct classes. To register a trademark, you should carefully select the appropriate class because it determines the validity of your trademark registration online concerning your business's products or services. If your company operates across various areas falling into different classes, it's crucial to ensure that you apply for a trademark under all the relevant classes.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
            In India, some commonly chosen trademark classes to register a trademark include:
            </h3>
            <div className={styles.productsGrid} style={{ display: 'flex', flexDirection: 'column' }}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>Class 9:</span> Encompassing computer software and electronics</li>
                <li><span className={styles.checkIcon}>Class 25:</span> Covering Clothing</li>
                <li><span className={styles.checkIcon}>Class 35:</span> About business management and advertising</li>
                <li><span className={styles.checkIcon}>Class 41:</span> Related to education and entertainment</li>
              </ul>
            </div>
          </div>
        </div>

        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
            At Delfyle, we understand the paramount importance of brand name registration and ensuring the distinctiveness of your products and services in today's competitive market. That's why we offer expert assistance in filing for trademarks. Whether you're a dynamic startup, an established business, or an individual entrepreneur, our dedicated team is here to guide you through the intricate trademark registration online process. Let Delfyle be your trusted partner, securing your brand's identity and protecting your intellectual property.
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
              "Let Delfyle be your trusted partner in securing your brand’s identity and protecting your intellectual property."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
        </div>
      </div>
    </section>


  
  );
};

export default PrivateLimitedCompanyContentTwo; 