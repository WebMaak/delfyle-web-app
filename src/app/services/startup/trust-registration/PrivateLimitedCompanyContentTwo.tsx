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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trust Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Trust Registration in India with Delfyle
        </h2>
        <p
          ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }}
          className={styles.paragraphContent}
          style={{marginBottom: '0'}}
        >
          Registering a trust provides legal recognition for charitable, social, or religious objectives under the Indian Trusts Act, 1882. Delfyle streamlines the process—from drafting the Trust Deed and preparing documents to filing and obtaining the registration certificate.
        </p>
      </div>

          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 className={styles.subContentHeading}>Registration Requirements for the Trust</h3>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>•</span> At least two or more individuals must form the trust</li>
              <li><span className={styles.checkIcon}>•</span> The trust must comply with the Indian Trusts Act of 1882</li>
              <li><span className={styles.checkIcon}>•</span> The objectives should not contradict any existing laws in India</li>
              <li><span className={styles.checkIcon}>•</span> The trustee must act in a fair and just manner</li>
              <li><span className={styles.checkIcon}>•</span> The trust deed must align with the objectives and legal requirements</li>
            </ul>
          </div>

          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 className={styles.subContentHeading}>Contents of a Trust Deed</h3>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>•</span> Duration of the trust</li>
              <li><span className={styles.checkIcon}>•</span> Registered office address</li>
              <li><span className={styles.checkIcon}>•</span> Geographical scope</li>
              <li><span className={styles.checkIcon}>•</span> Goals and objectives</li>
              <li><span className={styles.checkIcon}>•</span> Information on trustor and trustees</li>
              <li><span className={styles.checkIcon}>•</span> Roles and responsibilities of trustees</li>
              <li><span className={styles.checkIcon}>•</span> Amendment procedures</li>
              <li><span className={styles.checkIcon}>•</span> Provisions for closure or termination</li>
            </ul>
          </div>

          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 className={styles.subContentHeading}>Documents required for Trust Registration Online</h3>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>•</span> Trust Deed</li>
              <li><span className={styles.checkIcon}>•</span> Two photographs of the parties involved</li>
              <li><span className={styles.checkIcon}>•</span> PAN cards and address proof</li>
              <li><span className={styles.checkIcon}>•</span> Identity proof of individuals</li>
              <li><span className={styles.checkIcon}>•</span> No Objection Certificate (if applicable)</li>
              <li><span className={styles.checkIcon}>•</span> Utility bill for address verification</li>
              <li><span className={styles.checkIcon}>•</span> 12A Registration and 80G Certificates (if applicable)</li>
            </ul>
          </div>
        </div>

        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
              Delfyle provides end-to-end guidance for Section 8 Company registration, ensuring all legal formalities are met. Our team assists with documentation, filing, approvals, and compliance, helping organizations establish themselves as credible, non-profit entities efficiently.
            </p>
          </div>

          {/* Moved last list block here */}
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 className={styles.subContentHeading}>Process for Registration of Trust</h3>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>•</span> Name of the Trust: Select an appropriate name in compliance with relevant laws</li>
              <li><span className={styles.checkIcon}>•</span> Settlers of the Trust: Determine the individuals who will act as settlers</li>
              <li><span className={styles.checkIcon}>•</span> Prepare a Memorandum of Association (MOA): Outline the objectives and purpose of the trust</li>
              <li><span className={styles.checkIcon}>•</span> Draft the Trust Deed: Establish the legally binding document</li>
              <li><span className={styles.checkIcon}>•</span> Submit the Deed to the Registrar: Along with required documents for verification</li>
              <li><span className={styles.checkIcon}>•</span> Obtain Trust Registration Certificate: Once approved, the registrar will issue the certificate</li>
            </ul>
          </div>

          <h3 className={styles.subContentHeading}>Winding up a Trust</h3>
          <p className={styles.rightDescription}>
            A trust is wound up when its properties or assets are lawfully distributed to beneficiaries or a similar  entity. The process must comply with tax regulations and legal approvals to prevent disputes.
          </p>
        </div>
      </div>
    </section>

  );
};

export default PrivateLimitedCompanyContentTwo; 