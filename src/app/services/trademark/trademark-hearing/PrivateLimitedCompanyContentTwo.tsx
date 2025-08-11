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
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trademark Hearing</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading}>
            Trademark Hearing in India Explained by Delfyle
            </h2>
          </div>

          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
            Trademark Hearing
            </h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent}>
            A Trademark Hearing in India is a formal administrative process conducted by the Registrar of Trademarks to resolve disputes or objections related to the registration, renewal, or potential infringement of a trademark. This proceeding allows the applicant and opposing parties to present their arguments, documents, and evidence. The Registrar makes a final decision based on these submissions, which can significantly impact the status of the trademark.
            </p>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent}>
            Receiving a Show Cause Hearing Notice is a critical juncture in the trademark registration journey. Prompt and professional action is essential. At Delfyle, our legal experts are equipped to navigate the process with clarity and precision to help secure your intellectual property rights.
            </p>
            
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
            Why is a Trademark Hearing Important?
            </h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0px'}}>
            Trademark Hearings allow applicants to defend their trademark against objections raised by the Trademark Examiner or third parties. If an application is marked as 'Ready for Show Cause Hearing', it indicates the Registry needs further clarification or evidence before granting approval.<br/>
            <strong style={{fontStyle: 'italic'}}>These hearings play a crucial role in:</strong>
            </p>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>•</span> Providing applicants an opportunity to argue their case</li>
                <li><span className={styles.checkIcon}>•</span> Clarifying any ambiguities or objections</li>
                <li><span className={styles.checkIcon}>•</span> Presenting proof of usage or distinctiveness</li>
                <li><span className={styles.checkIcon}>•</span> Avoiding trademark rejection or abandonment</li>
            </ul>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0px', fontStyle: 'italic', fontWeight: 'bold'}}>
            Ignoring a hearing notice or presenting an unprepared case can result in denial of registration.<br/>
            </p>
          </div>
        </div>

        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
            Trademark hearings are a crucial part of the trademark registration process. They allow applicants to defend their trademark against objections raised by the Trademark Examiner or third parties.
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
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
            Trademark Registry Jurisdiction in India
            </h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0px'}}>
            Trademark applications and hearings are handled regionally based on jurisdiction:
            </p>
            <ul className={styles.productsList} >
              <li><span className={styles.checkIcon}>•</span> Chennai: Tamil Nadu, Telangana, Andhra Pradesh, Kerala, Karnataka, Lakshadweep, Puducherry</li>
              <li><span className={styles.checkIcon}>•</span> Mumbai: Maharashtra, Madhya Pradesh, Goa, Chhattisgarh</li>
              <li><span className={styles.checkIcon}>•</span> New Delhi: Delhi, Uttar Pradesh, Haryana, Punjab, Jammu & Kashmir, Himachal Pradesh, Uttarakhand, Chandigarh</li>
              <li><span className={styles.checkIcon}>•</span> Ahmedabad: Gujarat, Rajasthan, Dadra and Nagar Haveli, Daman & Diu</li>
              <li><span className={styles.checkIcon}>•</span> Kolkata: West Bengal, Bihar, Jharkhand, Odisha, North-Eastern States, Andaman & Nicobar Islands</li>
            </ul>
        </div>
      </div>
    </section>


  
  );
};

export default PrivateLimitedCompanyContentTwo; 