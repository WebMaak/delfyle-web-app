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
<section className={styles.container}>
  <div className={styles.topAnchorContainer}>
    <a href="#" className={styles.topAnchorLink}>Demat of Shares</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Dematerialisation of Shares – Convert Physical Shares to Demat with Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          Dematerialisation is the process of converting physical share certificates into electronic form through a Demat account, simplifying how shares are stored, transferred, and managed. This transition not only enhances security but also improves the efficiency of share transactions by eliminating risks like theft, damage, and loss.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          In light of recent regulatory changes, dematerialisation is now mandatory for most private limited companies in India. Except for small companies, all private limited firms must dematerialise their shares by September 30, 2024, as per the Ministry of Corporate Affairs (MCA) guidelines.
          Looking to convert physical shares into Demat? Delfyle is here to help you every step of the way.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is Dematerialisation of Shares?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Dematerialisation refers to the conversion of physical securities (such as share certificates) into electronic format held in a Demat account. These accounts are managed by Depository Participants (DPs), who serve as intermediaries between investors and the two SEBI-registered depositories in India:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> NSDL (National Securities Depository Ltd.)</li>
          <li><span className={styles.checkIcon}>✔</span> CDSL (Central Depository Services India Ltd.)</li>
        </ul>
        <p className={styles.paragraphContent}>
          A Demat account allows shareholders to trade and manage their holdings digitally, ensuring greater convenience, faster processing, and higher security.
        </p>

        <h3 className={styles.subContentHeading}>Dematerialisation Rules for Private Companies – Rule 9B</h3>
        <p className={styles.paragraphContent}>
          In October 2023, the MCA introduced Rule 9B via an amendment to the Companies (Prospectus and Allotment of Securities) Rules, 2014. This rule mandates the compulsory dematerialisation of shares for private companies, excluding only those classified as “small companies.”
        </p>
       <ul className={styles.productsList}>
        <li className="flex items-start gap-2">
          <span className={styles.checkIcon}>✔</span>
          <div>
            <span className="font-bold">Mandatory Electronic Shareholding:</span> Private companies must issue and hold securities only in Demat form.
          </div>
        </li>
        <li className="flex items-start gap-2">
          <span className={styles.checkIcon}>✔</span>
          <div>
            <span className="font-bold">Existing Share Conversion:</span> All existing physical share certificates must be dematerialised.
          </div>
        </li>
        <li className="flex items-start gap-2">
          <span className={styles.checkIcon}>✔</span>
          <div>
            <span className="font-bold">Shareholding by Promoters and Directors:</span> Before any issuance of new shares, the existing shares held by promoters, directors, and key managerial personnel must be in Demat form.
          </div>
        </li>
        <li className="flex items-start gap-2">
          <span className={styles.checkIcon}>✔</span>
          <div>
            <span className="font-bold">Applies to Transfers and Subscriptions:</span> Any transfer or subscription must occur only via Demat.
          </div>
        </li>
        <li className="flex items-start gap-2">
          <span className={styles.checkIcon}>✔</span>
          <div>
            <span className="font-bold">Compliance Timeline:</span> Companies exceeding small company thresholds as of March 31, 2023, must comply by September 30, 2024.
          </div>
        </li>
      </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle simplifies the complex process of dematerialisation, providing expert guidance to ensure your company complies with the latest MCA regulations and transitions to digital shareholding smoothly.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Secure your shares, ensure compliance, and streamline operations by dematerialising your company’s shares with Delfyle."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
      
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 