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
        <a href="#" className={styles.topAnchorLink}>12A and 80G Registration</a>
      </div>

      <div className={styles.mainContentWrapper}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 className={styles.mainHeading}>
              12A and 80G Registration
            </h2>
            <p className={styles.paragraphContent}>
              In India, non-profit organisations can unlock significant advantages through two essential registrations under the Income Tax Act: 12A and 80G.
              12A registration exempts non-profits from paying income tax on their earnings, ensuring that more of their funds are available for charitable activities.
              80G registration benefits donors by allowing them to claim deductions on their taxable income for donations made to eligible NGOs.
            </p>
            <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
              Registering under both these sections not only strengthens your organisation’s financial foundation but also enhances its appeal to potential donors.
              At Delfyle, we recognise how critical these registrations are for non-profits. Our team provides end-to-end assistance to help you navigate the registration process smoothly and enjoy the full spectrum of tax benefits available under the law.
            </p>
          </div>

          <div className={styles.leftBottomContainer}>
            <h3 className={styles.subContentHeading}>What Are 12A and 80G Registrations?</h3>
            <p className={styles.paragraphContent}>
              12A and 80G registrations are tax provisions under the Income Tax Act, 1961 that enable charitable organisations to enjoy tax exemptions and benefits.
            </p>
            <h4 className={styles.subContentHeading}>12A Registration</h4>
            <p className={styles.paragraphContent}>
              This exemption allows NGOs to avoid paying income tax on surplus income generated from donations, grants, or other sources, provided the funds are used for charitable purposes. It applies to trusts, societies, and Section 8 companies pursuing education, medical relief, environmental conservation, and other public welfare objectives.
            </p>
            <h4 className={styles.subContentHeading}>80G Registration</h4>
            <p className={styles.paragraphContent}>
              80G registration encourages donations by offering tax benefits to donors. Individuals and organisations contributing to 12A-registered NGOs can claim a deduction on their taxable income, boosting donations and long-term support.
            </p>
            <p className={styles.paragraphContent}>
              <b>Key Difference:</b> 12A benefits the NGO by exempting its income from tax, while 80G benefits the donor by offering tax deductions for contributions.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <div className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
              12A and 80G registrations are crucial for non-profit organisations to achieve tax-exempt status and attract more donors by offering tax deductions on their contributions.
            </p>
          </div>

          <div className={styles.rightBottomContainer}>
            <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
            <p className={styles.bottomQuote}>
              "Empower your non-profit’s mission—Delfyle makes 12A and 80G registration simple, fast, and fully compliant."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>

          <div className={styles.leftBottomContainer}>
            <h3 className={styles.subContentHeading}>Who Can Apply for 12A and 80G?</h3>
            <p className={styles.paragraphContent}>
              The following entities are eligible for registration:
            </p>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>✔</span> Charitable Trusts</li>
              <li><span className={styles.checkIcon}>✔</span> Registered Societies</li>
              <li><span className={styles.checkIcon}>✔</span> Section 8 Companies</li>
              <li><span className={styles.checkIcon}>✔</span> Religious Organisations</li>
              <li><span className={styles.checkIcon}>✔</span> Educational Institutions</li>
              <li><span className={styles.checkIcon}>✔</span> Medical Institutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


export default PrivateLimitedCompanyContent; 