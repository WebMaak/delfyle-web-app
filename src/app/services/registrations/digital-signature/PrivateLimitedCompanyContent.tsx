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
    <a href="#" className={styles.topAnchorLink}>Digital Signature</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Digital Signature
        </h2>
        <p className={styles.paragraphContent}>
          Hassle-Free Assistance for Digital Signature Certificate (DSC) Application with Delfyle
        </p>
        <p className={styles.paragraphContent} style={{ marginBottom: '0' }}>
          A Digital Signature Certificate (DSC) is a secure digital key issued by Certifying Authorities (CAs) to authenticate the identity of the certificate holder. It ensures the authenticity and integrity of digitally signed documents and is a legal requirement for several online transactions, particularly with government portals.
        </p>
        <p className={styles.paragraphContent}>
          Using public-key encryption, DSCs enable secure digital signing of documents, validating the signer’s identity, and ensuring that the content has not been altered. These certificates are essential for e-filings, e-tenders, tax submissions, and a wide range of digital processes across industries.
        </p>
        <p className={styles.paragraphContent}>
          The Controller of Certifying Authorities (CCA) governs DSC issuance in India and authorizes licensed CAs such as eMudhra to provide these certificates.
        </p>
        <p className={styles.paragraphContent}>
          Get Your DSC Online with Delfyle
          Delfyle simplifies the DSC application process by offering complete online DSC registration, including procurement of the eMudhra Class 3 DSC with a validity of two years and a FIPS-compliant ePass USB token for enhanced security. Whether you are an individual or an organization, you can obtain your DSC without any paperwork or courier hassles—everything is handled digitally by our expert team.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is a Class 3 Digital Signature Certificate?</h3>
        <p className={styles.paragraphContent}>
         <span style={{fontWeight: '600',}}> A Class 3 DSC is the most secure digital certificate available. It includes both:</span>
          <ul>
            <li><span className={styles.checkIcon}>✔</span> A Signature Certificate – for digitally signing documents.</li>
            <li><span className={styles.checkIcon}>✔</span> An Encryption Certificate – for securing confidential information.</li>
          </ul>
        </p>
        <p className={styles.paragraphContent}>
          <span style={{fontWeight: '600',}}>Class 3 DSCs are ideal for:</span>
          <ul>
            <li><span className={styles.checkIcon}>✔</span> Individuals and organizations involved in high-value online transactions.</li>
            <li><span className={styles.checkIcon}>✔</span> Activities like MCA e-filing, Income Tax e-filing, e-Tendering, LLP registration, GST application, Import-Export (IE) code registration, Trademark/Patent filing, e-Procurement, and e-Bidding.</li>
          </ul>
        </p>
        <p className={styles.paragraphContent}>
          <h3 className={styles.subContentHeading}>Class 3 DSC for Individuals</h3>
          Delfyle assists individuals in obtaining Class 3 DSCs along with a secure ePass USB token. These certificates validate the identity of the user and ensure confidentiality and authenticity for electronic submissions.
        </p>

        <h3 className={styles.subContentHeading}>Class 3 DSC for Companies/Organizations</h3>
        <p className={styles.paragraphContent}>
          Delfyle helps companies, NGOs, trusts, and government entities obtain Class 3 DSCs issued in the name of the organization. These certificates confirm the authority of the signatory and include both personal and company details.
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Digital Signature Certificates are essential for secure and legally compliant electronic transactions. They are mandatory for a variety of government e-filings, e-procurement, and other digital processes. A DSC acts as a secure identity proof in the digital world, ensuring the authenticity and integrity of your online activities.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Secure your digital identity—Delfyle makes DSC application simple, fast, and fully compliant."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer}>
        
        <h3 className={styles.subContentHeading}>Why You Need a Digital Signature Certificate</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Legal Compliance: Meets all regulatory requirements for electronic signatures.</li>
          <li><span className={styles.checkIcon}>✔</span> Secure Business Transactions: Digitally sign contracts, agreements, and other legal documents.</li>
          <li><span className={styles.checkIcon}>✔</span> Government Filings: Mandatory for various submissions to government departments and agencies.</li>
          <li><span className={styles.checkIcon}>✔</span> Secure Financial Transactions: Used by financial institutions for authentication and data protection.</li>
          <li><span className={styles.checkIcon}>✔</span> International Trade: Ensures legally compliant and secure global trade documentation.</li>
        </ul>
        <h3 className={styles.subContentHeading}>Benefits of DSC Registration with Delfyle</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Enhanced Security: Ensures document authenticity and protects against tampering.</li>
          <li><span className={styles.checkIcon}>✔</span> Legally Valid: Recognized under the IT Act, 2000—just like a physical signature.</li>
          <li><span className={styles.checkIcon}>✔</span> Efficiency: Eliminates paperwork and streamlines digital workflows.</li>
          <li><span className={styles.checkIcon}>✔</span> Cost Saving: Reduces costs associated with printing, courier, and administrative overhead.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 