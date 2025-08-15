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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>OPC Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          One Person Company (OPC) Registration in India with Delfyle
        </h2>
        <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Registering a One Person Company (OPC) is ideal for entrepreneurs seeking limited liability and complete control. An OPC allows a single individual to act as both the director and shareholder, combining the advantages of a sole proprietorship with the legal protection of a private limited company. Delfyle simplifies the OPC registration process, offering expert guidance from document preparation to filing.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
          Introduction to OPC
        </h3>
        <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
          OPC registration in India was introduced under the Companies Act, 2013, allowing a single individual to establish a limited liability company. The main aim is to encourage entrepreneurship and formalize MSMEs. According to Section 2(62) of the Act, an OPC can be formed with just one director and one member, which can be the same person.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Steps for OPC Registration</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>•</span> Obtain a Digital Signature Certificate (DSC) for the proposed director</li>
          <li><span className={styles.checkIcon}>•</span> Acquire Director Identification Number (DIN) from MCA</li>
          <li><span className={styles.checkIcon}>•</span> Apply for name reservation through SPICe+ (Part A)</li>
          <li><span className={styles.checkIcon}>•</span> Draft the Memorandum of Association (MoA) and Articles of Association (AoA)</li>
          <li><span className={styles.checkIcon}>•</span> File all forms and documents with MCA</li>
          <li><span className={styles.checkIcon}>•</span> Obtain Certificate of Incorporation from ROC</li>
        </ul>
      </div>
    </div>

    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle guides you through the complete OPC registration process, ensuring compliance with legal requirements, assisting with document submission, and providing ongoing support post-incorporation.
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
          "Delfyle ensures smooth, expert-assisted OPC registration and post-incorporation compliance."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
    </div>
  </div>
</section>




  
  );
};

export default PrivateLimitedCompanyContentTwo; 