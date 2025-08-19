"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../../Components/TrialComponent/ComponentTwelve/ComponentTwelve.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrivateLimitedCompanyContentTwo: React.FC = () => {
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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Income Tax Notices</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          What to Do After Receiving an Income Tax Notice?
        </h2>

        <ul className={styles.productsList}>
          {[
            "Read the Notice Carefully: Identify the reason (mismatch, scrutiny, refund adjustment, etc.).",
            "Verify Details: Check PAN, name, assessment year, and ensure the notice is genuine.",
            "Identify the Issue/Discrepancy: Look for mismatches in income, deductions, TDS, or high-value transactions.",
            "Check Online on the e-Filing Portal: Log in and view the notice under 'e-Proceedings' or 'View Notices/Orders'.",
            "Respond Within the Deadline: Usually 30 days for Section 245 notices. Non-response may lead to forced adjustment of refunds.",
            "Submit Supporting Documents: Salary slips, Form 16, Form 26AS, bank statements, investment proofs, or other relevant records."
          ].map((item, idx) => (
            <li key={idx}><span className={styles.checkIcon}>✔</span> {item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Legal Consequences of Ignoring an Income Tax Notice</h3>
        <ul className={styles.productsList}>
          {[
            "Penalties for non-compliance",
            "Interest on unpaid taxes",
            "Invalid Return: Loss of exemptions, disallowance of losses, or reassessment",
            "Prosecution: In serious cases of tax evasion",
            "Refund Loss: Adjustment of due refunds against tax demands"
          ].map((item, idx) => (
            <li key={idx}><span className={styles.checkIcon}>✔</span> {item}</li>
          ))}
        </ul>

        
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>How to Verify the Authenticity of an ITD Notice?</h3>
        <p style={{marginBottom:'0'}}>
          You can verify a notice or order online through the Income Tax e-filing portal:
        </p>
        <ul className={styles.productsList}>
          {[
            "Go to the Income Tax e-filing portal → Authenticate Notice/Order",
            "Verify using either PAN + Document details (for AY 2011–12 onwards), or DIN (Document Identification Number) + Mobile OTP",
            "If genuine, the system confirms the notice with DIN & date of issue",
            "If fake, it shows 'No record found'"
          ].map((item, idx) => (
            <li key={idx}><span className={styles.checkIcon}>✔</span> {item}</li>
          ))}
        </ul>

        <h3 className={styles.subContentHeading}>Essential Documents for Replying to an Income Tax Notice</h3>
        <ul className={styles.productsList}>
          {[
            "Copy of the Income Tax Notice received",
            "Salary slips / business income statements",
            "Form 16 (Part A & Part B) / Form 16A",
            "Investment proofs (LIC, PPF, ELSS, tuition fee, etc.)",
            "Bank statements",
            "Form 26AS / AIS",
            "ITR acknowledgement & computation sheet",
            "Other supporting documents (property sale deed, rent agreement, loan statements, etc.)"
          ].map((item, idx) => (
            <li key={idx}><span className={styles.checkIcon}>✔</span> {item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>


  
  );
};

export default PrivateLimitedCompanyContentTwo; 