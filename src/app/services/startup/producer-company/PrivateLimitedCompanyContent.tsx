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
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Public Limited Company</a>
      </div>

      <div className={styles.mainContentWrapper}>
        {/* Left Column */}
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{marginBottom: '0'}}>
              Start your public limited company registration today with Delfyle!
            </h2>
            {/* <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
              
            </p> */}
          </div>

          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
              Public Limited Company Registration
            </h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
              In India, a Public Limited Company (PLC) is a business structure suited for large-scale operations. Entrepreneurs who are planning for large-scale business operations can start a Public Limited Company registration in India. Unlike private companies, PLCs can raise funds from the general public by offering shares on stock exchanges. This allows them to access a wider pool of capital for growth. A Public Limited Company in India enjoys all the privileges of a corporate entity together with the features of Limited Liability.
            </p>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent}>
              Delfyle can help you start your public limited company in India with ease and efficiency. Our comprehensive services cover everything from company registration to compliance management, ensuring a smooth and hassle-free setup process for your business.
            </p>

            <h3 className={styles.subContentHeading}>What is a Public Limited Company?</h3>
            <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
              A public limited company is a form of corporate entity that permits the general public to hold ownership stakes through publicly traded shares. These shares are commonly exchanged on established stock markets, enabling a diverse group of brokers, investors, and traders to buy and sell equity. This structure allows individuals from various backgrounds to invest and hold shares in the company.
            </p>
            <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
              Unlike private companies, public limited companies are governed by stricter regulatory and reporting standards. In India, the law governing public limited companies is primarily outlined in the Companies Act of 2013. The minimum number of members in a public company is seven, and there is no limit on the maximum number of members/shareholders for starting a Public Limited Company.
            </p>
            <p className={styles.paragraphContent}>
              The day-to-day operations are managed by an executive team, but the broader ownership lies with the many shareholders who invest in the company's stock. These shareholders typically have voting rights that include the ability to vote on the election of the board of directors. The board then selects the executive team tasked with managing the company's ongoing business affairs.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
              Delfyle provides professional trust registration services, managing documentation, approvals, and legal compliance, so you can focus on your mission.
            </p>
          </div>
          <div ref={el => { if (el) rightColumnContentRef.current[1] = el }} className={styles.rightBottomContainer}>
            <Image 
              src="/delfyle-logo/delfyle-logo.png" 
              alt="Delfyle Logo" 
              width={180} 
              height={50} 
              objectFit="contain"
              className={styles.companyLogo}
            />
            <p className={styles.bottomQuote}>
              "Establish your trust seamlessly with expert guidance from Delfyle."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
          {/* Balanced Content from Left Column */}
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 className={styles.subContentHeading}>Key Characteristics of a Public Limited Company</h3>
            <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
              Below are the fundamental characteristics of a public limited company:
            </p>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>✔</span> Board of Directors: According to the Companies Act, a public limited company must appoint at least three directors, with no upper limit on the number. The board of directors plays a crucial role in governing the company's management and strategic decision-making.</li>
              <li><span className={styles.checkIcon}>✔</span> Company Name: It is a legal requirement for all public limited companies to include the word "Limited" in their company name. This designation indicates that the company is legally a public entity, capable of trading shares on the stock market and open to investment by the public.</li>
              <li><span className={styles.checkIcon}>✔</span> The Company's Prospectus: Public limited companies are required to prepare and issue a prospectus. This document offers a detailed look at the company's operational activities and financial health, providing essential information to potential investors and aiding their decision-making process.</li>
              <li><span className={styles.checkIcon}>✔</span>Paid-Up Capital: While the Companies Act stipulates various regulations for public limited companies, it does not impose a minimum initial share capital requirement for registration. This absence of a specified minimum allows companies the flexibility to set their capital structure according to their specific needs and strategic objectives.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateLimitedCompanyContent; 