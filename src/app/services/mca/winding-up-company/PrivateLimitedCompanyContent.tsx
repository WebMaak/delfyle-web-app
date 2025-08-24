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
    <a href="#" className={styles.topAnchorLink}>Company Winding Up</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Company Winding Up & Liquidation Services – Seamless Closure with Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          Company winding up, also known as liquidation, is a formal legal process that involves closing down a company’s operations, liquidating its assets, paying off liabilities, and distributing any surplus among shareholders. The process results in the company’s dissolution and legal non-existence. Winding up can be initiated voluntarily by the company or through a court order.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Delfyle offers comprehensive support for company winding-up procedures, ensuring smooth, compliant, and efficient closure of your business operations in accordance with the Companies Act and other applicable regulations.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is the Winding Up of a Company?</h3>
        <p className={styles.paragraphContent}>
          As per Section 2(94A) of the Companies Act, 2013, winding up is the process by which a company ceases operations and settles its affairs. This can be conducted under the Companies Act or through liquidation under the Insolvency and Bankruptcy Code, 2016. During this phase, the company remains a legal entity and can participate in legal proceedings until it is formally dissolved. The key objective is the orderly distribution of the company’s assets and repayment of debts.
        </p>

        <h3 className={styles.subContentHeading}>Modes of Winding Up a Company in India</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          According to Section 293 of the Companies Act, a company can be wound up through the following modes:
        </p>
        <ul className={styles.productsList}>
          <li className="flex items-start gap-2">
            <span className={styles.checkIcon}>✔</span>
            <div>
              <span className="font-bold">Compulsory Winding Up by Tribunal:</span> Initiated by a tribunal order, this mode is typically employed when a company:
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Cannot pay its debts</li>
                <li>Has committed legal violations or fraud</li>
                <li>Is deemed by the court to be just and equitable to wind up</li>
              </ul>
              <p className="mt-2">An official liquidator is appointed to manage the closure process.</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className={styles.checkIcon}>✔</span>
            <div>
              <span className="font-bold">Voluntary Winding Up:</span> Initiated by shareholders or creditors, this process does not involve the court. It can occur under the following conditions:
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li><span className="font-bold">Special Resolution:</span> When members voluntarily decide to wind up a solvent company</li>
                <li><span className="font-bold">Trigger Events:</span> Based on expiry or events outlined in the Articles of Association</li>
              </ul>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className={styles.checkIcon}>✔</span>
            <div>
              <span className="font-bold">Winding Up Under Court Supervision:</span> Even if initiated voluntarily, the court may supervise the winding-up process to protect stakeholder interests, ensuring transparency and fairness.
            </div>
          </li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle offers comprehensive support for company winding-up procedures, ensuring smooth, compliant, and efficient closure of your business operations in accordance with the Companies Act and other applicable regulations.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Ensure seamless and compliant company liquidation with Delfyle, handling all legal complexities to facilitate a smooth closure."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Voluntary Winding Up of a Company</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          This form of winding up is initiated by the company itself, typically when the business is no longer needed or viable.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}><span className="font-bold">Scenarios:</span></p>
        <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
          <li>By Special Resolution: Members vote to wind up the company.</li>
          <li>As Per Articles of Association: Triggered upon the expiry or occurrence of events mentioned in the company’s Articles.</li>
        </ul>
        
        <h3 className={styles.subContentHeading}>Documents Required for Voluntary Winding Up</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          To proceed with voluntary liquidation, the following documentation is needed:
        </p>
        <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
          <li>Special Resolution (Form 26)</li>
          <li>Declaration of Solvency (Form 107)</li>
          <li>Directors’ Affidavit verifying financials</li>
          <li>Liquidator's Consent</li>
          <li>Public Notices of winding up and liquidator appointment</li>
          <li>Preliminary & Final Liquidator’s Reports</li>
          <li>Notice and Return of Final Meeting</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 