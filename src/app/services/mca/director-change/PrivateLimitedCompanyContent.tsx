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
    <a href="#" className={styles.topAnchorLink}>Director Change</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Add a Director to Your Private Limited Company with Ease – Powered by Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          In a Private Limited Company, directors are the driving force behind business decisions, daily operations, and strategic planning. As a company scales or its structure evolves, it may become necessary to appoint additional directors to meet business needs or fulfill shareholder expectations. The appointment of a new director must comply with the Companies Act, 2013 to ensure smooth governance and continued regulatory compliance.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Delfyle simplifies the process of adding a director to your company. Our experienced professionals guide you through every step, from assessing eligibility to filing with the Registrar of Companies (ROC), ensuring your business remains compliant and strategically aligned.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Who Is a Director in a Company?</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          A director is an individual appointed by shareholders to manage the affairs of a company. Since companies are artificial legal entities, they act through their directors—collectively known as the Board of Directors. Directors are entrusted with safeguarding shareholder interests and ensuring the company adheres to legal and ethical standards.
        </p>
        <p className={styles.paragraphContent}>
          In a Private Limited Company, directors oversee day-to-day business operations and strategic growth initiatives, making their role critical to the company’s success.
        </p>
        <h3 className={styles.subContentHeading}>Types of Directors in a Company</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Executive Directors:</span> Actively involved in the daily operations of the company. Often hold titles like CEO, CFO, or COO.</li>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Non-Executive Directors:</span> Offer oversight and strategic input but are not involved in daily operations.</li>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Independent Directors:</span> Have no material relationship with the company and bring unbiased judgment and governance.</li>
        </ul>
        <h3 className={styles.subContentHeading}>Why Add or Change Directors?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Business Expansion: </span> To bring in fresh skills and leadership.</li>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Compliance: </span> To meet legal requirements under the Companies Act.</li>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Board Restructuring: </span> Due to resignation, retirement, or incapacity of existing directors.</li>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Strategic Oversight: </span> To ensure efficient distribution of responsibilities and decision-making.</li>
        </ul>

        <h3 className={styles.subContentHeading}>Legal Framework for Director Appointment (Companies Act, 2013)</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Section 149:</span> Composition of the Board, including minimum and maximum number of directors.</li>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Section 152:</span> Process of director appointment during general meetings.</li>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Section 161:</span> Guidelines for appointing additional, alternate, and nominee directors.</li>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Section 164:</span> Lists disqualifications for director appointments.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          The appointment of a new director must comply with the Companies Act, 2013 to ensure smooth governance and continued regulatory compliance.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Delfyle simplifies the process of adding a director to your company. Our experienced professionals guide you through every step."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        
        <h3 className={styles.subContentHeading}>Eligibility Criteria for Directors</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Be at least 18 years old</li>
          <li><span className={styles.checkIcon}>✔</span> Not be disqualified under Section 164 of the Companies Act</li>
          <li><span className={styles.checkIcon}>✔</span> Provide consent in writing (Form DIR-2)</li>
          <li><span className={styles.checkIcon}>✔</span> Obtain Director Identification Number (DIN) and Digital Signature Certificate (DSC)</li>
        </ul>
        <h3 className={styles.subContentHeading}>Documents Required to Appoint a Director</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> PAN Card</li>
          <li><span className={styles.checkIcon}>✔</span> Identity Proof (Aadhaar, Voter ID, Passport, Driving License)</li>
          <li><span className={styles.checkIcon}>✔</span> Residential Proof (Utility bill or rental agreement)</li>
          <li><span className={styles.checkIcon}>✔</span> Passport-size photograph</li>
          <li><span className={styles.checkIcon}>✔</span> Digital Signature Certificate (DSC)</li>
          <li><span className={styles.checkIcon}>✔</span> Form DIR-2 (Consent to act as Director)</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 