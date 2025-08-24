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
    <a href="#" className={styles.topAnchorLink}>Share Transfer</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Share Transfer in a Private Limited Company – Process, Rules & Expert Help from Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          Transferring shares in a Private Limited Company is a structured process that facilitates the movement of ownership from one party to another. Since shares represent equity ownership in a company, their transfer is a significant legal and financial transaction governed by the Companies Act, 2013 and regulations by the Ministry of Corporate Affairs (MCA).
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          At Delfyle, we simplify the share transfer process with expert legal and compliance support, ensuring a seamless, legally compliant transfer of ownership in private companies.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is Share Transfer?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Share transfer is the voluntary transfer of ownership rights by a shareholder to another individual or entity. This transfer includes rights to profits, voting power, and liabilities associated with the shares.
        </p>
        <p className={styles.paragraphContent}>
          Like any other movable asset, shares can be sold or transferred unless restricted by the company’s Articles of Association (AOA).
        </p>
        
        <h3 className={styles.subContentHeading}>Legal Framework for Share Transfer in Private Limited Companies</h3>
        <p className={styles.paragraphContent}>
          Share transfers in private companies are strictly governed under:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Section 56 (1) & (3) of the Companies Act, 2013</li>
          <li><span className={styles.checkIcon}>✔</span> Rule 11 (1), (2), (3) of the Companies (Share Capital and Debentures) Rules, 2014</li>
        </ul>
        <p className={styles.paragraphContent}>
          These laws are designed to protect stakeholder interests and maintain the “private” character of the company.
        </p>
        
        <h3 className={styles.subContentHeading}>Share Transfer Rules in a Private Limited Company</h3>
        <p className={styles.paragraphContent}>
          Private Limited Companies often include restrictions on share transfers in their AOA to maintain control and ensure internal regulation. Key restrictions include:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Pre-Emptive Rights:</span> Existing shareholders have the right of first refusal.</li>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">Board Approval:</span> Directors may reserve the right to refuse a share transfer.</li>
        </ul>

      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle simplifies the complex procedure of share transfer, providing expert guidance to ensure legal compliance and accurate documentation.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Ensure a smooth and legally compliant transfer of ownership with our expert share transfer services."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Key Participants in the Share Transfer Process</h3>
       <ul className={styles.productsList}>
        <li><span className={styles.checkIcon}>✔</span> Transferor: The existing shareholder selling or transferring shares.</li>
        <li><span className={styles.checkIcon}>✔</span> Transferee: The individual/entity acquiring the shares.</li>
        <li><span className={styles.checkIcon}>✔</span> Company: Must facilitate and record the transfer in its share register.</li>
        <li><span className={styles.checkIcon}>✔</span> Legal Representative: Required in case of the shareholder's death.</li>
      </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 