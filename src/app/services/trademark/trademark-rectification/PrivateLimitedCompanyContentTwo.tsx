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
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trademark Rectification</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading}>
            Trademark Rectification Procedure Explained by Delfyle
            </h2>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
            A trademark is more than just a logo or symbol—it's your brand’s identity in the marketplace. To safeguard its distinctiveness and legal standing, the trademark must be accurately registered under the Trademark Act and Rules. However, errors or changes may arise after registration, such as incorrect details, classification issues, or outdated information. In such cases, Trademark Rectification becomes necessary.At Delfyle, we provide comprehensive trademark rectification services to help you correct the record and protect your brand’s legal status. Whether you're the trademark owner, an aggrieved party, or a third party with a legitimate concern, our experts will guide you through this precise legal process.
            </p>
          </div>

          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
            What is Trademark Rectification?
            </h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
            Trademark Rectification refers to the legal procedure used to correct errors, omissions, or inaccuracies in the trademark register. Governed by Chapter 7 of the Trademarks Act, 1999, rectification can be initiated when a trademark was:
            </p>
            <div className={styles.productsGrid} style={{ display: 'flex', flexDirection: 'column' }}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>•</span> Erroneously registered</li>
                <li><span className={styles.checkIcon}>•</span> Wrongfully remaining in the register,</li>
                <li><span className={styles.checkIcon}>•</span> Or found to contain incorrect details that need amending.</li>
              </ul>
            </div>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent}>
            Under Section 57, any person affected by such inaccuracies—or even the trademark holder themselves—can request rectification. However, rectification must be approached carefully, as it can lead to cancellation if misused.
            </p>
          
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
            Common Reasons for Trademark Rectification
            </h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
            Trademark rectification may be needed due to:
            </p>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>•</span> Errors in the Application: Wrong applicant details, contact info, or legal documents.</li>
                <li><span className={styles.checkIcon}>•</span> Incorrect Trademark Classification: Mistakes in class, description, or representation.</li>
                <li><span className={styles.checkIcon}>•</span> Information Changes: Address changes, ownership updates, or restructuring.</li>
                <li><span className={styles.checkIcon}>•</span> Non-Use of the Trademark: If the trademark has not been used for 5 years and 3 months.</li>
                <li><span className={styles.checkIcon}>•</span> Registrar's Order or Third-Party Complaint: Based on verified evidence or formal opposition.</li>
            </ul>
            
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
            Jurisdiction for Filing Rectification in India
            </h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
            Applications for rectification must be filed with the appropriate Trademark Registry office based on where the original registration was made. Key jurisdictions include:
            </p>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>✓</span> Mumbai</li>
                <li><span className={styles.checkIcon}>✓</span> Chennai</li>
                <li><span className={styles.checkIcon}>✓</span> Delhi</li>
                <li><span className={styles.checkIcon}>✓</span> Kolkata</li>
                <li><span className={styles.checkIcon}>✓</span> Ahmedabad</li>
            </ul>
          </div>
        </div>

        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
            Trademark rectification is a crucial process that helps correct errors, omissions, or inaccuracies in the trademark register. 
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
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
            Who Can File for Trademark Rectification?
            </h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
            Rectification can be initiated by:
            </p>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>•</span> Trademark Proprietor: To correct genuine errors post-registration.</li>
                <li><span className={styles.checkIcon}>•</span> Aggrieved Person: Anyone adversely affected by the registration, e.g., due to confusion or conflict.</li>
                <li><span className={styles.checkIcon}>•</span> Third Party: When the public interest is compromised or a mark is registered maliciously.</li>
            </ul>
            
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
            Forms Used in Trademark Rectification
            </h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
            Depending on who initiates the rectification, the following forms are applicable:
            </p>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>•</span> Form TM-16 – Used by the trademark proprietor to correct registration.</li>
                <li><span className={styles.checkIcon}>•</span> Form TM-M – Used when the Registrar initiates rectification.</li>
                <li><span className={styles.checkIcon}>•</span> Form TM-26 – Used by an aggrieved party to challenge or request correction/removal.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>


  
  );
};

export default PrivateLimitedCompanyContentTwo; 