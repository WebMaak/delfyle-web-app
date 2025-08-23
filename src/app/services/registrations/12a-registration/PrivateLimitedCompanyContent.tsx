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
    <a href="#" className={styles.topAnchorLink}>12A Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          12A Registration
        </h2>
        <p className={styles.paragraphContent}>
          Section 12A Registration, granted by the Income Tax Department, is a one-time registration that allows nonprofit organizations to claim income tax exemptions under the Income Tax Act of 1961. Entities such as Trusts, NGOs, and Section 8 Companies typically apply for this registration shortly after incorporation to ensure that their surplus income used for charitable or religious purposes is not taxed.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          At Delfyle, we recognize the critical importance of Section 12A registration for nonprofit entities. Our team provides end-to-end support—from preparing the necessary documentation to filing and follow-up—to help your organization access the tax benefits and funding opportunities available under this provision.
        </p>
        <p className={styles.paragraphContent}>
          Contact Delfyle today to begin your Section 12A registration online and obtain a valid 12A certificate that empowers your charitable mission.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is 12A Registration?</h3>
        <p className={styles.paragraphContent}>
          Section 12A of the Income Tax Act allows charitable trusts and institutions to claim exemption from income tax on income applied for charitable or religious purposes. Once granted, this registration remains valid indefinitely unless specifically cancelled by the Income Tax Department.
        </p>
        <h4 className={styles.subContentHeading}>Entities eligible for 12A registration include:</h4>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Public charitable or religious trusts</li>
          <li><span className={styles.checkIcon}>✔</span> Registered societies under the Societies Registration Act</li>
          <li><span className={styles.checkIcon}>✔</span> Nonprofit companies under Section 8 of the Companies Act</li>
          <li><span className={styles.checkIcon}>✔</span> NGOs and welfare organizations involved in education, healthcare, poverty relief, environmental protection, etc.</li>
        </ul>
        <p className={styles.paragraphContent}>
          <b>Note:</b> Private or family trusts are not eligible for Section 12A registration.
        </p>

        <h3 className={styles.subContentHeading}>Key Benefits of Section 12A Registration</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Tax Exemption on Surplus Income: Income applied to charitable/religious purposes is exempt from income tax.</li>
          <li><span className={styles.checkIcon}>✔</span> Eligibility for Grants: 12A-registered entities can receive government and foreign funding (subject to FCRA approval).</li>
          <li><span className={styles.checkIcon}>✔</span> Income Accumulation: Up to 15% of income can be set aside for future charitable use.</li>
          <li><span className={styles.checkIcon}>✔</span> Application of Income: Charitable expenses are considered as applied income, reducing tax liability.</li>
          <li><span className={styles.checkIcon}>✔</span> Permanent Validity: 12A registration is a one-time process, with no need for periodic renewal.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          12A registration is crucial for non-profit organizations to achieve tax-exempt status, allowing income applied to charitable/religious purposes to be exempt from income tax. This one-time registration also helps these entities become eligible for grants and funding.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Empower your charitable mission—Delfyle makes 12A registration simple, fast, and fully compliant."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Eligibility Criteria for 12A Registration</h3>
        <p className={styles.paragraphContent}>
          To be eligible for 12A registration, an entity must:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Be engaged in charitable purposes such as education, relief to the poor, medical relief, or public utility.</li>
          <li><span className={styles.checkIcon}>✔</span> Operate without profit motives.</li>
          <li><span className={styles.checkIcon}>✔</span> Ensure that commercial receipts, if any, are less than 20% of total receipts.</li>
          <li><span className={styles.checkIcon}>✔</span> Provide evidence of genuine activities benefiting the public.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 