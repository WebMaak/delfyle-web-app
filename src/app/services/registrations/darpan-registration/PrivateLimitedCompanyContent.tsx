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
    <a href="#" className={styles.topAnchorLink}>Darpan Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Darpan Registration
        </h2>
        <p className={styles.paragraphContent}>
          Simplify Your NGO Darpan Registration with Delfyle
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Registering on the NGO Darpan portal is a vital step for any NGO or Voluntary Organisation (VO) in India aiming to gain recognition, build credibility, and access government grants or support. Managed by NITI Aayog, the NGO Darpan portal serves as a centralized platform where NGOs can register, present their work, and become eligible for collaboration with various government departments.
        </p>
        <p className={styles.paragraphContent}>
          By securing a Darpan Registration Certificate, your organisation strengthens its ability to network, raise funds, and operate transparently. Delfyle ensures a seamless and hassle-free experience throughout your NGO Darpan registration process—so you can focus on creating social impact while we take care of the paperwork.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is NGO Darpan Registration?</h3>
        <p className={styles.paragraphContent}>
          NGO Darpan registration involves enrolling your NGO or VO on the official portal of NITI Aayog, developed in partnership with the National Informatics Centre (NIC), Ministry of Electronics and Information Technology. Launched in 2015, this platform aims to create a structured and transparent database of NGOs operating across India.
        </p>
        <p className={styles.paragraphContent}>
          Upon successful registration, NGOs are issued a Unique Darpan ID—a mandatory identifier for applying to government schemes, receiving funding, and complying with regulatory mandates such as FCRA and 80G registration.
        </p>

        <h3 className={styles.subContentHeading}>
          Purpose and Benefits of NGO Darpan Registration
        </h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Access to Government Funding: The Unique Darpan ID enables NGOs to apply for grants and schemes offered by various ministries and departments.</li>
          <li><span className={styles.checkIcon}>✔</span> Enhanced Transparency: Registered NGOs publicly declare their structure, sources of income, and activities, thereby boosting accountability.</li>
          <li><span className={styles.checkIcon}>✔</span> Centralised Database: The platform helps the government efficiently monitor and engage with NGOs across sectors.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Darpan registration is a crucial step for any NGO or Voluntary Organisation (VO) aiming to access government grants and funding. It provides a Unique Darpan ID, which is mandatory for applying to various government schemes. The registration process also enhances an organization's credibility and public transparency.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Empower your charitable mission—Delfyle makes Darpan registration simple, fast, and fully compliant."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Who Should Register on NGO Darpan?</h3>
        <p className={styles.paragraphContent}>
          The registration is applicable to:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Registered Trusts</li>
          <li><span className={styles.checkIcon}>✔</span> Registered Societies</li>
          <li><span className={styles.checkIcon}>✔</span> Section 8 Companies (non-profit companies)</li>
          <li><span className={styles.checkIcon}>✔</span> Charitable Associations and Foundations</li>
        </ul>
        <p className={styles.paragraphContent}>
          <b>Note:</b> Individuals or unregistered entities are not eligible.
        </p>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 