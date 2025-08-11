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
    <>
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.topAnchorContainer}>
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trademark Renewal</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{marginBottom: '0px'}}>
            Trademark Renewal | Everything You Need to Know
            </h2>
          </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            {/* <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}></h3> */}
            <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
            A registered trademark is not perpetual—it must be renewed every 10 years to remain legally valid and enforceable. Trademark renewal ensures uninterrupted protection and continued ownership of your brand identity. Missing the renewal deadline can lead to removal from the Register of Trademarks.
At Delfyle, we simplify the trademark renewal process with prompt legal assistance to safeguard your intellectual property.

            </p>
    
            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>What is a Trademark?</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.paragraphContent} style={{marginBottom: '0px'}} >
            A trademark is a unique sign, word, phrase, logo, or combination that distinguishes your goods or services from those of others. It helps consumers identify your brand and associate it with a certain quality and origin.
            </p>   

            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>Trademark Renewal Period </h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0px'}}>
            As per Section 25 of the Trade Marks Act, 1999, a trademark can be renewed every ten years.
            <strong > The renewal can be initiated:</strong>
            </p>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>➜</span> Up to one year before the trademark’s expiration</li>
                <li><span className={styles.checkIcon}>➜</span> Within six months after expiry with a surcharge</li>
                <li><span className={styles.checkIcon}>➜</span> Within one year after expiry, through a restoration application with additional fees</li>
                <li><span className={styles.checkIcon}>➜</span> Failure to act within this timeframe results in the trademark being removed from the register.</li>
            </ul>

            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>Benefits of Trademark Renewal</h3>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>➜</span> Continued Legal Protection: Maintains exclusive rights to your trademark.</li>
                <li><span className={styles.checkIcon}>➜</span> Brand Integrity: Prevents others from claiming your mark.</li>
                <li><span className={styles.checkIcon}>➜</span> Market Recognition: Retains consumer trust and brand identity.</li>
                <li><span className={styles.checkIcon}>➜</span> Asset Value: Enables licensing, franchising, or assignment for monetary gain.</li>
            </ul>   
            
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>Modes of Renewal</h3>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>➜</span> Without Alteration: Renew the trademark as is.</li>
                <li><span className={styles.checkIcon}>➜</span> With Alteration: Modify certain elements, subject to approval.</li>
            </ul>    
          </div>
        </div>
    
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
            Trademark renewal is a crucial process to maintain the legal protection of your brand identity.
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
            "Delfyle ensures smooth, successful trademark renewal with expert assistance."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
          <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Why is Trademark Renewal Important?</h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0px'}}>
            Trademark renewal is essential to maintain the legal protection and exclusive rights to your brand identity.
            </p>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>➜</span> Prevents loss of trademark rights.</li>
                <li><span className={styles.checkIcon}>➜</span> Ensures continued legal protection.</li>
                <li><span className={styles.checkIcon}>➜</span> Maintains brand reputation and integrity.</li>
                <li><span className={styles.checkIcon}>➜</span> Supports business growth and expansion.</li>
            </ul>   

          <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Consequences of Not Renewing a Trademark</h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0px'}}>
            Failure to renew a trademark can lead to loss of legal protection and exclusive rights.
            </p>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}></span> Loss of trademark rights.</li>
                <li><span className={styles.checkIcon}></span> Increased risk of infringement.</li>
                <li><span className={styles.checkIcon}></span> Damage to brand reputation.</li>
                <li><span className={styles.checkIcon}></span> Financial losses due to unauthorized use.</li>
            </ul>        
          </div>
        </div>
      </div>
    </section>
    </>
  
  );
};

export default PrivateLimitedCompanyContent; 