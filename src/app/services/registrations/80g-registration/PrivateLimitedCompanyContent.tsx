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
    <a href="#" className={styles.topAnchorLink}>80G Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          80G Registration
        </h2>
        <p className={styles.paragraphContent}>
          Maximise Your NGO’s Impact with 80G Registration through Delfyle
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Registering your NGO under Section 80G of the Income Tax Act can significantly increase donor confidence by offering them tax deductions on their contributions. This benefit acts as a financial incentive, encouraging more individuals and businesses to support your cause. If you're looking to secure 80G registration for your charitable organization, Delfyle is here to assist. Our experienced team will guide you through the entire registration process—efficiently and accurately.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is Section 80G?</h3>
        <p className={styles.paragraphContent}>
          Section 80G of the Income Tax Act, 1961, enables donors to claim deductions on donations made to approved charitable organizations. Once an NGO obtains an 80G certificate, it becomes eligible to receive contributions that are deductible from the donor’s taxable income—up to prescribed limits—encouraging philanthropic activity while reducing tax burdens.
        </p>
        <h4 className={styles.subContentHeading}>What is 80G Registration?</h4>
        <p className={styles.paragraphContent}>
          80G registration certifies a charitable organization as eligible to receive tax-deductible donations. Both the donor and the recipient benefit—donors can claim tax relief, and NGOs enjoy increased fundraising potential.
        </p>
        <p className={styles.paragraphContent}>
          Amendments introduced under the Finance Act 2020 now require registered organizations to file annual returns, undergo periodic assessments, and ensure full compliance to maintain the validity of their 80G certificate.
        </p>

        <p className={styles.rightDescription}>
          Why 80G Registration Matters
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Tax Savings for Donors: Donations to your NGO become tax-deductible, up to 50% or 100% depending on the nature of your organization.</li>
          <li><span className={styles.checkIcon}>✔</span> Greater Donor Confidence: Recognition under Section 80G assures donors that your NGO is compliant and trustworthy.</li>
          <li><span className={styles.checkIcon}>✔</span> Higher Fundraising Potential: The tax exemption benefit can lead to increased donations from both individuals and corporations.</li>
          <li><span className={styles.checkIcon}>✔</span> Legal Recognition: The certificate confirms that your NGO meets Income Tax Act requirements and uses funds responsibly.</li>
          <li><span className={styles.checkIcon}>✔</span> To issue valid donation receipts, NGOs must mention the 80G certificate number, date of issue, and its validity period.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          80G registration is a powerful tool for increasing an NGO's fundraising potential. It allows donors to claim a tax deduction on their contributions, which encourages greater philanthropic support. This one-time registration enhances the credibility of the organization and makes it more attractive to both individual and corporate donors.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Empower your charitable mission—Delfyle makes 80G registration simple, fast, and fully compliant."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Eligibility Criteria for 80G Registration</h3>
        <p className={styles.paragraphContent}>
          To be eligible for 80G certification, your organization must meet the following conditions:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Registered Entity: Must be legally registered as a Trust, Society, or Section 8 Company.</li>
          <li><span className={styles.checkIcon}>✔</span> Charitable Objective: Must operate for non-profit, charitable purposes.</li>
          <li><span className={styles.checkIcon}>✔</span> Proper Bookkeeping: Maintain audited accounts and records in compliance with the Income Tax Act.</li>
          <li><span className={styles.checkIcon}>✔</span> Section 11 and 12 Compliance: Must meet the criteria under these sections for tax exemptions.</li>
          <li><span className={styles.checkIcon}>✔</span> Restricted Business Income: If engaging in business activities, maintain separate records and ensure donations are only used for charitable work.</li>
          <li><span className={styles.checkIcon}>✔</span> No Religious Bias: Should not benefit any particular religious community or caste exclusively.</li>
          <li><span className={styles.checkIcon}>✔</span> Darpan Registration: Mandatory for organizations receiving or planning to receive government grants; registration on the NITI Aayog Darpan portal is required.</li>
          <li><span className={styles.checkIcon}>✔</span> Use of Funds: At least 85% of the income must be applied toward charitable activities within India.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 