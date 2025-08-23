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
    <a href="#" className={styles.topAnchorLink}>DIN Reactivation</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          DIN Reactivation Made Easy – File Form DIR-3 KYC with Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          A Director Identification Number (DIN) is a mandatory unique identifier issued by the Ministry of Corporate Affairs (MCA) for individuals intending to become or continue as directors in Indian companies. To ensure compliance and transparency in corporate governance, directors are required to update their KYC details annually using Form DIR-3 KYC.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Failure to file DIR-3 KYC on time leads to DIN deactivation, preventing directors from performing their duties. To reactivate a DIN, directors must file the appropriate KYC form and pay a penalty, if applicable.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is a DIN (Director Identification Number)?</h3>
        <p className={styles.paragraphContent}style={{ marginBottom: '0' }}>
          A DIN is an 8-digit unique identification number issued to directors under the Companies Act, 2013. It helps track the involvement of an individual in different companies and is required for filing various company-related documents with the ROC (Registrar of Companies).
        </p>
        <p className={styles.paragraphContent}>
          Once issued, a DIN remains valid for the director's lifetime unless it is deactivated for non-compliance.
        </p>

        <h3 className={styles.subContentHeading}>What is Form DIR-3 KYC?</h3>
        <p className={styles.paragraphContent}style={{ marginBottom: '0' }}>
          Form DIR-3 KYC is a mandatory annual compliance requirement for directors to update their KYC information with the MCA. This includes confirming identity, address, and contact details.
        </p>
        <p className={styles.paragraphContent}>
          Directors allotted a DIN by March 31 of a financial year and whose DIN status is 'approved' must file DIR-3 KYC before the deadline.
        </p>
        <h3 className={styles.subContentHeading}>Why is DIR-3 KYC Important?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Ensures accurate records with the MCA</li>
          <li><span className={styles.checkIcon}>✔</span> Prevents DIN deactivation</li>
          <li><span className={styles.checkIcon}>✔</span> Required for compliance with the Companies (Appointment and Qualification of Directors) Rules, 2014</li>
        </ul>

         <h3 className={styles.subContentHeading}>Documents Required for DIN Reactivation</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Digital Signature Certificate (DSC) linked to PAN</li>
          <li><span className={styles.checkIcon}>✔</span> Self-attested PAN card</li>
          <li><span className={styles.checkIcon}>✔</span> Self-attested address proof (Aadhar Card, Voter ID, or Driving License)</li>
          <li><span className={styles.checkIcon}>✔</span> Recent passport-size photograph (self-attested)</li>
          <li><span className={styles.checkIcon}>✔</span> Mobile number and email ID for OTP-based verification</li>
          <li><span className={styles.checkIcon}>✔</span> Details such as citizenship, nationality, and residential status</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          If you're unsure how to reactivate your DIN, Delfyle simplifies the process. Our team of compliance experts ensures hassle-free DIN reactivation, from document collection to form filing on the MCA portal.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "If you're unsure how to reactivate your DIN, Delfyle simplifies the process. Our team of compliance experts ensures hassle-free DIN reactivation, from document collection to form filing on the MCA portal."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>DIN Deactivation & Reactivation</h3>
        <p className={styles.paragraphContent}style={{ marginBottom: '0' }}><span className="font-bold">DIN Deactivation:</span></p>
        <p className={styles.paragraphContent}style={{ marginBottom: '0' }}>
          If a director fails to file DIR-3 KYC by September 30, the DIN gets marked as ‘Deactivated due to non-filing of DIR-3 KYC’.
        </p>
        <p className={styles.paragraphContent}style={{ marginBottom: '0' }}><span className="font-bold">DIN Reactivation:</span></p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          To reactivate the DIN, directors must:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> File Form DIR-3 KYC or DIR-3 KYC Web (as applicable)</li>
          <li><span className={styles.checkIcon}>✔</span> Pay a late filing fee of ₹5,000</li>
        </ul>
        <p className={styles.paragraphContent}>
          Upon submission, the form undergoes Straight Through Processing (STP), and once approved, the DIN is automatically reactivated.
        </p>
        <h3 className={styles.subContentHeading}>Types of DIR-3 KYC Forms</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">DIR-3 KYC eForm:</span> Used by directors:</li>
          <ul className="list-disc ml-8">
            <li>Filing KYC for the first time</li>
            <li>Updating email ID, mobile number, or other personal details</li>
          </ul>
          <li><span className={styles.checkIcon}>✔</span> <span className="font-bold">DIR-3 KYC Web:</span> Used by directors who:</li>
          <ul className="list-disc ml-8">
            <li>Have previously filed the DIR-3 KYC eForm</li>
            <li>Have no changes in contact information</li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 