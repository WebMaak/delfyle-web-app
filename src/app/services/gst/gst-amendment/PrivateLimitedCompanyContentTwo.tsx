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
    <>
      <section ref={sectionRef} className={styles.container}>
        <div className={styles.topAnchorContainer}>
          <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>GST Amendment</a>
        </div>

        <div className={styles.mainContentWrapper}>
          <div ref={leftColumnRef} className={styles.leftColumn}>
            <div className={styles.leftTopContainer}>
              <h2 ref={mainHeadingRef} className={styles.mainHeading}>
                Key Amendments to GST Registration
              </h2>
              <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
                Once you have obtained GST registration, certain circumstances may require you to update the details provided during the registration process. This is referred to as a GST Amendment. GST amendments allow businesses to make necessary updates to their information, including business details, contact information, or other essential particulars.
              </p>
            </div>
            <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
              <h3 className={styles.subContentHeading}>Business Name Change</h3>
              <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
                If you change your business's legal name, you can file for an amendment to reflect this in your GST registration. This can be done by submitting GST FORM REG-14 within 15 days. After submission, the GST Officer will review and approve the change within 15 working days.
              </p>
              <h3 className={styles.subContentHeading}>Business Address Change</h3>
              <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
                Changes to the business address, whether the principal place of business or any other business location, can be amended by filing GST FORM REG-14. You must provide valid proof of address, such as a property tax receipt or rental agreement. These changes must be updated within 15 days.
              </p>
              <h3 className={styles.subContentHeading}>Changes to Promoter or Stakeholder Information</h3>
              <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
                If there are changes to the business structure, such as the addition, deletion, or retirement of partners or directors, you must file an amendment application within 15 days of the event.
              </p>
              
              
            </div>
          </div>

          <div ref={rightColumnRef} className={styles.rightColumn}>
            
            <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
              <h3 className={styles.subContentHeading}>Mobile Number and Email ID Updates</h3>
              <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
                Changes to your mobile number or email ID can be made directly on the GST portal without filing an amendment application. After completing the online verification, these changes will be automatically updated.
              </p>
              <h3 className={styles.subContentHeading}>PAN Changes</h3>
              <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
                A change in PAN cannot be handled through a GST amendment. Instead, a new GST registration application must be filed if there is a change in PAN or business structure.
              </p>
              <h3 className={styles.subContentHeading}>Time Limits for GST Amendments</h3>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>•</span> Notification Deadline: Businesses must inform the GST portal of amendments within 15 days of the change.</li>
                <li><span className={styles.checkIcon}>•</span> Approval Process: The tax officer will verify and approve the amendment within 15 working days.</li>
                <li><span className={styles.checkIcon}>•</span> Automatic Updates: If there is no action within the set timelines, the amendment will be processed automatically.</li>
              </ul>
              <h3 className={styles.subContentHeading}>Why Choose Delfyle for Your GST Amendment?</h3>
              <p className={styles.paragraphContent}>
                At Delfyle, we make the GST registration amendment process hassle-free. Whether you need to update your business address, change authorized signatories, or modify non-core details like bank account information, we provide step-by-step guidance. Our experts ensure that all amendments are filed correctly, quickly, and in compliance with GST regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default PrivateLimitedCompanyContentTwo; 