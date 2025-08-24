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
    <a href="#" className={styles.topAnchorLink}>LLP Winding Up</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 className={styles.mainHeading}>
          Winding Up of an LLP – Complete Guide by Delfyle
        </h2>
        <p className={styles.paragraphContent}>
          Winding up a Limited Liability Partnership (LLP) is a legal procedure that brings the business to a close by settling outstanding debts, liquidating assets, and distributing any remaining capital among partners. This process can be initiated voluntarily by the partners or compulsorily by a tribunal under specific circumstances such as insolvency, prolonged inactivity, or violation of statutory obligations.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          The LLP winding-up process involves multiple compliance steps and legal formalities. Delfyle offers expert guidance and end-to-end assistance to ensure a hassle-free and legally compliant closure of your LLP.
        </p>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is the Winding Up of an LLP?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Winding up refers to the process of terminating all business operations of an LLP, clearing financial obligations, and ultimately dissolving it as a legal entity. This is usually done when the LLP no longer intends to continue its business activities.
        </p>
        
        <h3 className={styles.subContentHeading}>Legal Framework Governing LLP Winding Up</h3>
        <p className={styles.paragraphContent}>
          The winding up and dissolution of an LLP in India are governed by:
        </p>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Section 65 & 67 of the LLP Act, 2008</li>
          <li><span className={styles.checkIcon}>✔</span> Notification GSR 6(E), dated 6th January 2010</li>
          <li><span className={styles.checkIcon}>✔</span> Limited Liability Partnership (Winding up and Dissolution) Rules, 2012</li>
        </ul>
        <p className={styles.paragraphContent}>
          These rules and provisions outline the procedural and compliance requirements for closing down an LLP.
        </p>

        <h3 className={styles.subContentHeading}>Difference Between Winding Up and Dissolution</h3>
<table className="w-full text-left table-fixed border-collapse">
  <thead>
    <tr>
      <th className="w-1/4 px-2 py-2 text-sm font-bold border-b-2 border-gray-300">Basis</th>
      <th className="w-1/3 px-2 py-2 text-sm font-bold border-b-2 border-gray-300">Winding Up</th>
      <th className="w-1/3 px-2 py-2 text-sm font-bold border-b-2 border-gray-300">Dissolution</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="w-1/4 px-2 py-2 align-top break-words border-b border-gray-200">Meaning</td>
      <td className="w-1/3 px-2 py-2 align-top break-words border-b border-gray-200">The process of settling debts and liquidating assets.</td>
      <td className="w-1/3 px-2 py-2 align-top break-words border-b border-gray-200">The final closure of the LLP as a legal entity.</td>
    </tr>
    <tr>
      <td className="w-1/4 px-2 py-2 align-top break-words border-b border-gray-200">Legal Status</td>
      <td className="w-1/3 px-2 py-2 align-top break-words border-b border-gray-200">LLP continues to exist during this phase.</td>
      <td className="w-1/3 px-2 py-2 align-top break-words border-b border-gray-200">LLP ceases to exist; name is removed from records.</td>
    </tr>
  </tbody>
</table>
<p className={styles.paragraphContent}>
  In short, winding up is the process; dissolution is the final result.
</p>


      </div>
    </div>

    {/* Right Column */}
    <div className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle simplifies the complex process of dematerialisation, providing expert guidance to ensure your company complies with the latest MCA regulations and transitions to digital shareholding smoothly.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Secure your shares, ensure compliance, and streamline operations by dematerialising your company’s shares with Delfyle."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div className={styles.leftBottomContainer} >
        <h3 className={styles.subContentHeading}>Modes of LLP Winding Up</h3>
        <ul className={styles.productsList}>
          <li className="flex items-start gap-2">
            <span className={styles.checkIcon}>✔</span>
            <div>
              <span className="font-bold">Voluntary Winding Up:</span> Initiated by the partners when they mutually decide to cease business operations. Reasons may include business goals being achieved, financial concerns, or strategic decisions.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className={styles.checkIcon}>✔</span>
            <div>
              <span className="font-bold">Compulsory Winding Up by Tribunal:</span> An LLP may be wound up by the National Company Law Tribunal (NCLT) under the following conditions:
              <ul className="list-disc ml-5 mt-2 space-y-1" style={{ listStyleType: 'disc' }}>
          <li>Less than two partners for over six months</li>
          <li>Inability to pay debts</li>
          <li>Involvement in illegal or harmful activities</li>
          <li>Continuous non-filing of annual returns for five years</li>
          <li>Any other reason deemed just and equitable by the Tribunal</li>
        </ul>
            </div> 
          </li>
          <li className="flex items-start gap-2">
            <span className={styles.checkIcon}>✔</span>
            <div>
              <span className="font-bold">Winding Up under the Insolvency and Bankruptcy Code (IBC), 2016:</span> If the LLP is insolvent, the winding-up process is governed by the IBC, 2016. A creditor, partner, or the LLP itself can initiate insolvency proceedings before the NCLT.
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};


export default PrivateLimitedCompanyContent; 