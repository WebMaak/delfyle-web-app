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
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trademark Opposition Procedure</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading}>
            Trademark Opposition Procedure Explained by Delfyle
            </h2>
          </div>

          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
              1. Filing an Opposition:
            </h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent}>
            Anyone may file a notice of opposition within four months of the trademark’s advertisement in the journal, using Form TM-O and paying the prescribed fee. The notice must outline the opposing party’s identity, the application opposed, and the grounds for objection.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
              2. Counterstatement by Applicant:
            </h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent}>
             Within two months of receiving the opposition notice, the trademark applicant must file a counterstatement (also via Form TM-O). Failure to do so results in the application being considered abandoned.
            </p>
           
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
              3. Submission of Evidence:
            </h3>
            <div className={styles.productsGrid} style={{ display: 'flex', flexDirection: 'column' }}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>•</span> The opponent must submit supporting evidence within two months of the counterstatement.</li>
                <li><span className={styles.checkIcon}>•</span> The applicant then has two months to file evidence supporting the application.</li>
                <li><span className={styles.checkIcon}>•</span> The opponent may file rebuttal evidence within one month if needed.</li>
              </ul>
            </div>
            
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
              4. Hearing and Decision:
            </h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent}>
              Both parties are notified of a scheduled hearing. Absence of the opponent results in dismissal of the opposition; absence of the applicant results in abandonment of the application. The Registrar evaluates the evidence and submissions before issuing a final decision in writing.<br/>
              Post-Hearing Outcomes:
            </p>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>•</span> If the opposition fails, the trademark is registered, and a certificate is issued.</li>
                <li><span className={styles.checkIcon}>•</span> If the opposition succeeds, the application is rejected.</li>
            </ul>

            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
              Why Filing Timely Responses Matters?
            </h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent}>
              Failure to meet deadlines during opposition proceedings can result in severe consequences:
            </p>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>•</span> Opposition may be dismissed if no evidence or response is filed</li>
                <li><span className={styles.checkIcon}>•</span> Trademark applications may be abandoned without applicant response</li>
              </ul>
          </div>
        </div>

        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
            Trademark opposition is a crucial stage in the trademark registration process. It allows any individual or entity to challenge the registration of a trademark if they believe it infringes upon their rights or is similar to an existing trademark. Delfyle provides expert assistance in navigating this process, ensuring a smooth and successful outcome.
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
              "Let Delfyle be your trusted partner in securing your brand’s identity and protecting your intellectual property."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
        </div>
      </div>
    </section>


  
  );
};

export default PrivateLimitedCompanyContentTwo; 