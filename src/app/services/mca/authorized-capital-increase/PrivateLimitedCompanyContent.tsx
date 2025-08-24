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
    <a href="#" className={styles.topAnchorLink}>Authorized Capital Increase</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Authorized Capital Increase for Private Limited Companies – Simplified with Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          Every growing business needs capital to fuel expansion and new opportunities. While short-term funds can come from loans or advances, long-term scalability often requires equity infusion. For a Private Limited Company, this means increasing the authorized share capital, which sets the upper limit for how much capital the company can raise by issuing shares.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          At Delfyle, we simplify the process of increasing your company’s authorized capital. Our professionals guide you through documentation, compliance, and filings – ensuring a seamless, stress-free experience.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is Authorized Share Capital?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          As per Section 2(8) of the Companies Act, 2013, Authorized Capital is the maximum amount of share capital a company is legally permitted to issue as outlined in its Memorandum of Association (MOA).
        </p>
        <p className={styles.paragraphContent}>
          To raise more funds by issuing additional shares, a company must first ensure its authorized capital is sufficient. If not, it must be formally increased through a legal process.
        </p>

        <h3 className={styles.subContentHeading}>Authorized Capital vs Paid-Up Capital</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Authorized Capital:</span> The ceiling limit for issuing shares, as approved in the MOA.</li>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Paid-Up Capital:</span> The actual capital received by the company from shareholders in exchange for shares issued.</li>
        </ul>
        <p className={styles.paragraphContent}>
          💡 A company cannot issue shares exceeding its authorized capital. To issue new shares after reaching this limit, increasing authorized capital is mandatory.
        </p>

        <h3 className={styles.subContentHeading}>Why Increase Authorized Share Capital?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Raise equity capital for expansion</li>
          <li><span className={styles.checkIcon}>✔</span> Onboard new investors or shareholders</li>
          <li><span className={styles.checkIcon}>✔</span> Launch new business units or verticals</li>
          <li><span className={styles.checkIcon}>✔</span> Facilitate mergers, acquisitions, or restructuring</li>
          <li><span className={styles.checkIcon}>✔</span> Convert outstanding debt into equity</li>
          <li><span className={styles.checkIcon}>✔</span> Meet regulatory or statutory requirements</li>
        </ul>

      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle streamlines the process of increasing authorized capital, providing expert guidance to ensure accurate updates, compliance with legal requirements, and timely submission.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Fuel your company’s growth and meet your funding goals with our expert authorized capital increase services."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is a Memorandum of Association (MOA)?</h3>
        <p className={styles.paragraphContent}>
          The Memorandum of Association is a key legal document that outlines the very structure and purpose of a company. It is drafted at the time of incorporation and contains vital information about the company’s name, objectives, capital, liability, and registered office. The MOA serves as a guide for all internal and external stakeholders, including shareholders, regulatory authorities, and investors.
        </p>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 