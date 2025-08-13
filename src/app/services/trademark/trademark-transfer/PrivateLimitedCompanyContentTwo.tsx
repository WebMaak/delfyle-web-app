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
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trademark Transfer</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading}>
            Trademark Transfer Process with Delfyle
            </h2>
          </div>

          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>

            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
            What is a Trademark?
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
            
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
            Legal Definition of Trademark Assignment
            </h3>
            <p
            ref={(el) => {
              if (el) leftBottomContentRef.current[1] = el;
            }}
            className={styles.paragraphContent}
            >
            As per Section 37 of the Trade Marks Act, 1999, trademark assignment refers to the transfer of ownership, title, and rights of a trademark from one entity (assignor) to another (assignee).
            In simple terms, it enables a business or individual to legally sell or transfer their trademark rights.
            </p>
            
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
            Common Scenarios for Trademark Assignment
            </h3>
            <div className={styles.productsGrid} style={{ display: 'flex', flexDirection: 'column' }}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>Inheritance:</span> Trademark transferred to legal heirs upon the death of the owner.</li>
                <li><span className={styles.checkIcon}>Business Sale:</span> Trademarks are transferred as part of a business acquisition.</li>
                <li><span className={styles.checkIcon}>Standalone Trademark Sale:</span>Transfer of trademark without selling the entire business.</li>
                <li><span className={styles.checkIcon}>Corporate Restructuring:</span>Ownership changes due to business mergers, splits, or entity conversion.
                </li>
                <li><span className={styles.checkIcon}>Change of Name:</span> Updates in ownership following a legal name change.
                </li>
                <li><span className={styles.checkIcon}>Court Order:</span>  Mandated trademark assignment following legal disputes.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
            Delfyle ensures a smooth trademark transfer process, ensuring your brand's identity and IP are protected.
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
              "Delfyle ensures a smooth trademark transfer process, ensuring your brand's identity and IP are protected."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
        </div>
      </div>
    </section>


  
  );
};

export default PrivateLimitedCompanyContentTwo; 