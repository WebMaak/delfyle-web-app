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
    <a href="#" className={styles.topAnchorLink}>DIN eKYC Filing</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          DIN eKYC Filing – Form DIR-3 KYC Compliance with Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          Stay MCA Compliant with Timely DIN KYC Filing
          The Director Identification Number (DIN) is a unique 8-digit number assigned by the Ministry of Corporate Affairs (MCA) to individuals intending to serve as directors in Indian companies. It is essential for ensuring transparency and accountability in corporate governance.
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          Every director with an approved DIN must annually update their KYC details by filing Form DIR-3 KYC with the MCA. Failure to comply leads to the deactivation of the DIN, which restricts the individual from acting as a director until the KYC is updated.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is Form DIR-3 KYC?</h3>
        <p className={styles.paragraphContent}>
          Form DIR-3 KYC is a mandatory filing under the Companies (Appointment and Qualification of Directors) Rules, 2014. It enables the MCA to verify and maintain up-to-date records of directors, including their contact details, residential address, and identity verification.
        </p>
        <h3 className={styles.subContentHeading}>Who is Required to File DIR-3 KYC?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> You have been allotted a DIN by 31st March of the financial year.</li>
          <li><span className={styles.checkIcon}>✔</span> Your DIN status is marked as ‘Approved’.</li>
          <li><span className={styles.checkIcon}>✔</span> Even if you're a disqualified director, eKYC filing is still required.</li>
        </ul>
        <h3 className={styles.subContentHeading}>Key Dates and Deadlines</h3>
        <p className={styles.paragraphContent}>
          The annual due date for filing Form DIR-3 KYC is September 30th each year. Failing to file within this timeframe results in DIN deactivation and a late filing penalty of ₹5,000.
        </p>

        <h3 className={styles.subContentHeading}>Documents Required for DIR-3 KYC Filing</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Digital Signature Certificate (DSC) – Must be linked to PAN</li>
          <li><span className={styles.checkIcon}>✔</span> Self-Attested PAN Card</li>
          <li><span className={styles.checkIcon}>✔</span> Proof of Address – Aadhaar, Voter ID, or Driver’s License</li>
          <li><span className={styles.checkIcon}>✔</span> Passport-sized Photograph – Required and mandatory for foreign nationals</li>
          <li><span className={styles.checkIcon}>✔</span> Mobile Number and Email ID – Must be unique and verifiable via OTP</li>
          <li><span className={styles.checkIcon}>✔</span> Personal Details – Including nationality, citizenship, and residential status</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Let Delfyle handle your DIN eKYC filing with expert assistance, ensuring you stay compliant without hassle.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Let Delfyle handle your DIN eKYC filing with expert assistance, ensuring you stay compliant without hassle."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Types of DIR-3 KYC Filings</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> <span className='font-bold'>DIR-3 KYC e-Form:</span> For first-time filers or directors updating personal contact details like mobile number or email ID.</li>
          <li><span className={styles.checkIcon}>✔</span> <span className='font-bold'>DIR-3 KYC Web Form:</span> For directors who have previously filed the eForm and are simply confirming their details without changes. This is a simplified, pre-filled version available through the MCA portal.</li>
        </ul>
        
        <h3 className={styles.subContentHeading}>What Happens If You Don’t File?</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> DIN Deactivation with status: “Deactivated due to non-filing of DIR-3 KYC”</li>
          <li><span className={styles.checkIcon}>✔</span> Inability to participate in board meetings, sign documents, or perform duties as a director</li>
          <li><span className={styles.checkIcon}>✔</span> Re-activation possible only upon filing the KYC form and paying a ₹5,000 late fee</li>
        </ul>
        <p className={styles.paragraphContent}>
          Once submitted, the form is processed under Straight Through Processing (STP). Upon approval, the DIN is automatically reactivated.
        </p>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 