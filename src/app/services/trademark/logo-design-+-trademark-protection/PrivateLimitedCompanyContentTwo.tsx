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
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Expedited Trademark Registration</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{marginBottom: '0px'}}>
            Expedited Trademark Registration Services in India with Delfyle
            </h2>
          </div>

          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '10px'}}>
            In today’s fast-moving business environment, a registered trademark is a vital asset that helps distinguish your brand, build customer trust, and secure your market position. However, the standard trademark registration process in India can take 18 to 24 months—time that many businesses simply can't afford to lose.
            To address this, the Indian government introduced the Expedited Trademark Examination process, a faster route to trademark registration designed to help applicants secure their brand rights in as little as 3 to 4 months.
            At Delfyle, we help you navigate this accelerated process with precision, ensuring timely protection of your brand identity.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
            What is Expedited Trademark Registration?
            </h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '10px'}}>
            Introduced in 2018, the Expedited Trademark Examination process—also known as the Fast Track Examination—allows eligible applicants to fast-track their trademark applications for quicker review and approval.
            While the regular process takes up to two years, expedited applications are examined within 3–4 months from the date of filing, offering brands early protection and a strategic edge in the marketplace.
            </p>
            
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
            Who is Eligible for Expedited Examination?
            </h3>
            <p ref={(el) => {if (el) leftBottomContentRef.current[1] = el;}} className={styles.paragraphContent} style={{marginBottom: '0px'}}>
            The expedited process is available to any applicant who files a trademark application and meets the criteria established by the Trade Marks Rules, 2017. Eligible categories include:
            </p>
            <div className={styles.productsGrid} style={{ display: 'flex', flexDirection: 'column' }}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>•</span> Individuals</li>
                <li><span className={styles.checkIcon}>•</span> Start-ups</li>
                <li><span className={styles.checkIcon}>•</span> Small Enterprises</li>
                <li><span className={styles.checkIcon}>•</span> Women Entrepreneurs</li>
                <li><span className={styles.checkIcon}>•</span> MSMEs (Micro, Small and Medium Enterprises)</li>
                <li><span className={styles.checkIcon}>•</span> Educational Institutions</li>
                <li><span className={styles.checkIcon}>•</span> Government Departments</li>
              </ul>
            </div>
            <p ref={(el) => {if (el) leftBottomContentRef.current[1] = el;}} className={styles.paragraphContent}>
            All applications must be submitted online through the Trademark Registry’s official platform to qualify for expedited processing.
            </p>
          </div>
        </div>

        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
            Delfyle offers expert assistance for expedited trademark registration, ensuring your brand's unique identity and IP protection.
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

          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
          <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading} style={{marginBottom: '0px'}}>
          Fees for Expedited Examination
            </h3>
            <p ref={(el) => {if (el) leftBottomContentRef.current[1] = el;}} className={styles.paragraphContent} style={{marginBottom: '10px'}}>
            A higher government fee is required for expedited processing, compared to the standard application fee. This premium enables the Trademark Registry to prioritize your application and conduct a quicker examination.
            Delfyle ensures complete transparency regarding fees and provides value-driven legal services aligned with your business goals.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading} >
            Why Opt for Expedited Examination?
            </h3>
            <p ref={(el) => {if (el) leftBottomContentRef.current[1] = el;}} className={styles.paragraphContent} style={{marginBottom: '0px'}}>
            Applicants may request expedited examination for valid reasons, including:
            </p>
            <div className={styles.productsGrid} style={{ display: 'flex', flexDirection: 'column', margin: '0' }}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>•</span> Imminent risk of trademark infringement</li>
                <li><span className={styles.checkIcon}>•</span> Pending legal proceedings related to the trademark</li>
                <li><span className={styles.checkIcon}>•</span> Urgent need for registration to raise investments</li>
                <li><span className={styles.checkIcon}>•</span> Requirements for participating in trade fairs or exhibitions</li>
                <li><span className={styles.checkIcon}>•</span> Need for registration to support licensing or franchising</li>
              </ul>
            </div>
            <p ref={(el) => {if (el) leftBottomContentRef.current[1] = el;}} className={styles.paragraphContent} style={{marginBottom: '0px'}}>
            These circumstances warrant a faster resolution to prevent commercial losses or reputational harm.
            </p>
            </div>
        </div>
      </div>
    </section>


  
  );
};

export default PrivateLimitedCompanyContentTwo; 