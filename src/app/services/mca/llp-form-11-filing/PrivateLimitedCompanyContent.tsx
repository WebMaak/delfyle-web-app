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
    <a href="#" className={styles.topAnchorLink}>LLP Form 11 Filing</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          LLP Annual Return - LLP Form 11 Filing with Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          A Limited Liability Partnership (LLP) is an increasingly popular business structure in India, offering the benefits of both a partnership and a company. It provides the partners with limited liability while allowing them to actively participate in the business’s management. Filing the Annual Return is an essential regulatory requirement for all LLPs registered in India, mandated under the LLP Act of 2008. This process ensures compliance and helps avoid penalties.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          At Delfyle, we make the filing of your LLP Annual Return using Form 11 easy and accurate. Start today and ensure your LLP remains fully compliant with the law, without any hassle!
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>LLP Annual Return Overview</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          The LLP Annual Return is a mandatory filing requirement that all LLPs must complete each year. This filing must be done electronically with the Ministry of Corporate Affairs (MCA), and it needs to accurately reflect any changes in management or partner details. This is a crucial step to maintain compliance and avoid penalties.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Even if no changes have occurred within the business, submitting a NIL return is still a legal obligation for LLPs. The filing is compulsory, even for LLPs that are not actively engaging in business activities.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          The LLP Form 11 outlines any updates in the management structure, particularly any changes to the Designated Partners during the financial year. A NIL return must be filed if no such changes or business activities occurred during the year.
        </p>
        <p className={styles.paragraphContent}>
          It’s important to note that filing LLP Form 11 will not be allowed if there are any pending submissions of eForm 4 (Notice of appointment, cessation, or changes in the designation of a partner or Designated Partner) with unpaid fees. Therefore, it’s crucial to file any necessary eForm 4 well in advance of the Form 11 deadline.
        </p>

        <h3 className={styles.subContentHeading}>Forms for LLP Annual Filing</h3>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          All LLPs must submit two key forms to the Registrar of Companies (ROC) each year:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Form LLP 11:</span> This is the Annual Return, filed within 60 days from the end of the financial year.</li>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Form LLP 8:</span> A Statement of Account & Solvency, which must be filed within 30 days of the completion of six months of the financial year.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          At Delfyle, we make the filing of your LLP Annual Return using Form 11 easy and accurate. Start today and ensure your LLP remains fully compliant with the law, without any hassle!
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Delfyle makes the filing of your LLP Annual Return easy and accurate, ensuring your LLP remains fully compliant with the law."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Why is Annual Return Filing Important?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Compliance: Ensures adherence to regulatory and legal obligations.</li>
          <li><span className={styles.checkIcon}>✔</span> Transparency: Provides stakeholders with up-to-date, accurate information about the LLP.</li>
          <li><span className={styles.checkIcon}>✔</span> Accountability: Keeps the LLP accountable for its financial activities.</li>
          <li><span className={styles.checkIcon}>✔</span> Investor Confidence: Builds trust with investors, partners, and clients.</li>
          <li><span className={styles.checkIcon}>✔</span> Avoid Penalties: Non-filing can lead to penalties and legal consequences.</li>
          <li><span className={styles.checkIcon}>✔</span> Record-Keeping: Helps maintain organized and accurate records for future reference.</li>
          <li><span className={styles.checkIcon}>✔</span> Business Continuity: Ensures the uninterrupted functioning of the LLP.</li>
        </ul>

        
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 