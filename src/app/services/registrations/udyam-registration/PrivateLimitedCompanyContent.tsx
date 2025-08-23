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
    <a href="#" className={styles.topAnchorLink}>Udyam Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Udyam Registration
        </h2>
        <p className={styles.paragraphContent}>
          Empower Your Business with Udyam Registration Through Delfyle
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          In the evolving business environment, Micro, Small, and Medium Enterprises (MSMEs) play a critical role in driving innovation, employment, and economic development. To support and formalize this vital sector, the Government of India introduced Udyog Aadhaar registration, now updated and known as Udyam Registration. This initiative streamlines the process for MSMEs to gain formal recognition, access financial incentives, and benefit from a range of government schemes.
        </p>
        <p className={styles.paragraphContent}>
          Launched on July 1, 2020, Udyam Registration replaced the older Udyog Aadhaar Memorandum (UAM) system. It aims to simplify the classification and registration process for MSMEs using updated investment and turnover-based criteria.
        </p>
        <p className={styles.paragraphContent}>
          At Delfyle, we help businesses navigate the Udyam registration online process seamlessly. Our expert team ensures fast, accurate, and hassle-free registration so you can focus on growing your business while we handle the compliance.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is Udyam Registration?</h3>
        <p className={styles.paragraphContent}>
          Udyam Registration is a government-initiated process designed for the official recognition of MSMEs in India. This online self-declaration system categorizes businesses based on investment in plant and machinery or equipment and their annual turnover.
        </p>
        <p className={styles.paragraphContent}>
          Once registered, businesses receive a permanent Udyam Registration Number and an e-certificate, which serves as official proof of their MSME status. This registration enables enterprises to access various benefits offered by central and state governments.
        </p>

        <h3 className={styles.subContentHeading}>
          Benefits of Udyam Registration
        </h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Priority in Government Tenders: Gain preference and enhanced eligibility for public procurement contracts.</li>
          <li><span className={styles.checkIcon}>✔</span> Collateral-Free Bank Loans: Access financing without requiring a mortgage, under schemes like the Credit Guarantee Fund.</li>
          <li><span className={styles.checkIcon}>✔</span> Lower Interest Rates on Overdrafts: Benefit from up to 1% interest rate exemption on OD facilities.</li>
          <li><span className={styles.checkIcon}>✔</span> Income Tax and Other Rebates: Avail multiple tax deductions and exemptions exclusive to registered MSMEs.</li>
          <li><span className={styles.checkIcon}>✔</span> Faster Licensing and Certification: Enjoy quicker access to licenses, approvals, and registrations with minimal documentation.</li>
          <li><span className={styles.checkIcon}>✔</span> Capital and Tariff Subsidies: Reduce operational costs through subsidies offered under various state and central policies.</li>
          <li><span className={styles.checkIcon}>✔</span> Electricity Bill Concessions: Save on utility expenses with applicable discounts.</li>
          <li><span className={styles.checkIcon}>✔</span> Protection Against Delayed Payments: Ensure timely payments through legal protection under MSME policies.</li>
          <li><span className={styles.checkIcon}>✔</span> 50% Discount on Patent and Trademark Filing Fees: Make your intellectual property filings more affordable.</li>
          <li><span className={styles.checkIcon}>✔</span> Simplified Dispute Resolution: Get faster resolution of business-related disputes through dedicated MSME platforms.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Udyam Registration is a crucial step for businesses looking to formalize their operations and unlock a range of government benefits. It provides a unique, permanent registration number that is essential for accessing financial schemes, subsidies, and priority in government procurement.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Empower your business—Delfyle makes Udyam registration simple, fast, and fully compliant."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Who Can Apply for Udyam Registration?</h3>
        <p className={styles.paragraphContent}>
          Udyam Registration is open to various types of business entities, including:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Proprietorships</li>
          <li><span className={styles.checkIcon}>✔</span> Hindu Undivided Families (HUFs)</li>
          <li><span className={styles.checkIcon}>✔</span> Partnership Firms</li>
          <li><span className={styles.checkIcon}>✔</span> Limited Liability Partnerships (LLPs)</li>
          <li><span className={styles.checkIcon}>✔</span> Private and Public Limited Companies</li>
          <li><span className={styles.checkIcon}>✔</span> One Person Companies (OPCs)</li>
          <li><span className={styles.checkIcon}>✔</span> Co-operative Societies</li>
          <li><span className={styles.checkIcon}>✔</span> Producer Companies</li>
          <li><span className={styles.checkIcon}>✔</span> Trusts and Associations</li>
        </ul>
        <p className={styles.paragraphContent}>
          <b>Note:</b> A single enterprise can only register once, but the registration can include multiple activities such as manufacturing, services, or both.
        </p>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 