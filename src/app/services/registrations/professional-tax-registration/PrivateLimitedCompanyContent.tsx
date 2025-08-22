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
<section ref={sectionRef} className={styles.container}>
  <div className={styles.topAnchorContainer}>
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Professional Tax Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Professional Tax Registration
        </h2>
        <p className={styles.paragraphContent}>
          Professional tax is a direct tax imposed on individuals earning an income through employment, profession, or trade. Unlike income tax which is levied by the Central Government, professional tax is regulated and collected by respective state governments in India. For salaried individuals, employers are responsible for deducting the professional tax from wages and depositing it with the state authorities. Self-employed professionals, on the other hand, must handle their own professional tax payments and registration. While rates and regulations differ across states, the maximum professional tax payable is capped at ₹2,500 per year.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Need assistance with professional tax compliance? Delfyle provides expert-led support tailored to your state’s legal requirements.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Who is Required to Pay Professional Tax?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Professional tax applies to a wide range of individuals and entities:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Individuals</li>
          <li><span className={styles.checkIcon}>✔</span> Hindu Undivided Families (HUFs)</li>
          <li><span className={styles.checkIcon}>✔</span> Companies, LLPs, Firms, and Co-operative Societies</li>
          <li><span className={styles.checkIcon}>✔</span> Associations of Persons or Body of Individuals</li>
        </ul>
        <p className={styles.paragraphContent}>
          Professions such as doctors, lawyers, teachers, architects, and chartered accountants must obtain a professional tax certificate and comply with regular payments.
        </p>

        <h3 className={styles.subContentHeading}>States Where Professional Tax is Applicable</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Applicable States Include: Andhra Pradesh, Assam, Bihar, Gujarat, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Puducherry, Punjab, Sikkim, Tamil Nadu, Telangana, Tripura, West Bengal</li>
          <li><span className={styles.checkIcon}>✔</span> Non-Applicable States and UTs: Delhi, Haryana, Uttar Pradesh, Rajasthan, Uttarakhand, Goa, Himachal Pradesh, Jammu & Kashmir, Ladakh, and all Union Territories like Chandigarh, Andaman & Nicobar, Daman & Diu, etc.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Professional tax is a state-specific levy on earned income. It is a mandatory compliance requirement for both employers and self-employed individuals in many states across India.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Navigate the complexities of state-specific taxes with our professional tax registration and compliance services, ensuring your business remains on the right side of the law."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        
        <h3 className={styles.subContentHeading}>Who Must Register?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Employers: Required to deduct and remit professional tax for employees. Must register and obtain a Professional Tax Registration Certificate (PTRC).</li>
          <li><span className={styles.checkIcon}>✔</span> Self-Employed Professionals: Must register themselves and pay tax directly.</li>
          <li><span className={styles.checkIcon}>✔</span> Registration must be completed within 30 days of starting employment or business activity.</li>
        </ul>
      </div>
    </div>
  </div>
</section>


  );
};

export default PrivateLimitedCompanyContent; 