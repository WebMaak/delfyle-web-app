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
    <a href="#" className={styles.topAnchorLink}>Dormant Status Filing</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Dormant Status Filing
        </h2>
        <p className={styles.paragraphContent}>
          Under the Companies Act of 2013, a dormant company is a registered entity that is not engaged in any significant business activities or operations. This status can apply to companies that were set up for future ventures, to hold assets, or to manage intellectual property rights without being actively involved in trading. Dormant company status offers several advantages, such as reducing compliance requirements and maintaining the company’s registration without needing to fulfill all operational reporting obligations. If your company is currently inactive, Delfyle is here to assist you with the dormant status filing process. Our team of experts can guide you through the entire process, ensuring a smooth transition.
        </p>
        <h3 className={styles.subContentHeading}>What is a Dormant Company?</h3>
        <p className={styles.paragraphContent}>
          A Dormant Company, also referred to as a Dormant Entity, is a company that has been registered but has not engaged in significant business activities or transactions. This status typically applies to companies that are waiting to launch a future project, holding assets, or managing intellectual property without generating any revenue. These companies can apply to the Registrar to obtain dormant status, and this status is primarily for:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Reserving a company name for future use.</li>
          <li><span className={styles.checkIcon}>✔</span> Holding assets or intellectual property.</li>
          <li><span className={styles.checkIcon}>✔</span> Being inactive for a specific period, with no significant transactions in the financial year.</li>
        </ul>
        <p className={styles.paragraphContent}style={{marginBottom: '0px'}}>
          While dormant companies can remain inactive, they cannot retain this status for more than five consecutive years. If you wish to resume business, the company can apply to revert to active status.
        </p>
      </div>
      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Overview of Dormant Status Under the Companies Act of 2013</h3>
        <p className={styles.paragraphContent}  >
          The Companies Act of 2013 allows businesses to obtain dormant status under certain conditions. When a company is established for purposes like launching a future project, holding assets, or managing intellectual property, and has not conducted significant financial activities, it can be classified as dormant.
        </p>
        <h4 className={styles.subContentHeading}>An Inactive Company is one that:</h4>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Has not conducted significant business activities or accounting transactions for the past two financial years.</li>
          <li><span className={styles.checkIcon}>✔</span> Has not filed financial statements or annual returns for the last two financial years.</li>
        </ul>
        <h4 className={styles.subContentHeading}>Significant Accounting Transactions exclude:</h4>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Payments to the Registrar of Companies (ROC).</li>
          <li><span className={styles.checkIcon}>✔</span> Transactions related to allotment of shares.</li>
          <li><span className={styles.checkIcon}>✔</span> Payments for office maintenance.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          At Delfyle, we simplify the process of obtaining Dormant Company Status, ensuring your business stays legally compliant while inactive. Protect your company name and avoid unnecessary compliance burdens with our expert assistance!
        </p>
      </div>


      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Dormant status is a great way to protect a company name and intellectual property while it remains inactive."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Why Choose Delfyle?</h3>
        <p className={styles.paragraphContent}>
          At Delfyle, we understand the complexities of corporate compliance. We offer:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Expert guidance on the entire dormant status filing process.</li>
          <li><span className={styles.checkIcon}>✔</span> Timely and accurate filing to avoid penalties.</li>
          <li><span className={styles.checkIcon}>✔</span> Customized solutions to meet your company’s specific needs.</li>
          <li><span className={styles.checkIcon}>✔</span> A seamless and hassle-free experience.</li>
        </ul>
        
        <h3 className={styles.subContentHeading}>Why Opt for Dormant Company Status?</h3>
        <p className={styles.paragraphContent}>
          There are several reasons a company might choose to apply for dormant status, including:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Name Reservation: To ensure that the company name is protected until the company is ready to commence business.</li>
          <li><span className={styles.checkIcon}>✔</span> Business Restructuring: For businesses that are planning a future restructure or reorganization, dormant status can offer flexibility.</li>
          <li><span className={styles.checkIcon}>✔</span> Extended Absences: For business owners who plan to be away from the company for a period (due to travel, health, sabbaticals, etc.), dormant status can ease the administrative burden..</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 