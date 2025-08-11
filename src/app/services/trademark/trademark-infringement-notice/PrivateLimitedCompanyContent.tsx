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
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trademark Infringement Notice</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{marginBottom: '0px'}}>
            Trademark Infringement Notice in India: Everything You Need to Know
            </h2>
          </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            {/* <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}></h3> */}
            <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
            Trademark infringement occurs when someone uses a mark that is identical or deceptively similar to your registered trademark, leading to confusion among consumers and potentially damaging your brand's identity. A Trademark Infringement Notice is a formal legal step that outlines the violation, demands cessation, and warns of potential legal consequences.If you're dealing with an infringement, Delfyle is here to help. Our legal experts draft and issue trademark infringement notices professionally, ensuring your brand’s protection through email and registered post.
            </p>
    
            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Understanding Trademark Infringement</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.paragraphContent} style={{marginBottom: '0px'}} >
            Trademark infringement is the unauthorised use of a trademark that is identical or confusingly similar to a registered mark. This can include logos, phrases, designs, or brand identifiers that mislead consumers into associating with the registered brand. Such use can dilute the brand’s uniqueness and goodwill. Delfyle assists in safeguarding your rights through legally sound notices and action.
            </p>   

            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
            Types of Trademark Infringement
            </h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0px'}}>
            <strong >Direct Infringement:</strong>
            </p>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>➜</span> Providing applicants an opportunity to argue their case</li>
                <li><span className={styles.checkIcon}>➜</span> Clarifying any ambiguities or objections</li>
                <li><span className={styles.checkIcon}>➜</span> Presenting proof of usage or distinctiveness</li>
                <li><span className={styles.checkIcon}>➜</span> Avoiding trademark rejection or abandonment</li>
            </ul>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0px'}}>
            <strong >Indirect Infringement:</strong>
            </p>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>➜</span> Vicarious Infringement: When an entity benefits from and controls an infringing activity.</li>
                <li><span className={styles.checkIcon}>➜</span> Contributory Infringement: When a party aids or encourages the infringement.</li>
            </ul>   
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0px'}}>
              Trademark infringement can lead to significant financial losses and damage to brand reputation and goodwill instantly nationwide.
            </p>     
          </div>
        </div>
    
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
            A trademark infringement notice is a legal document sent to an infringer to stop unauthorized use of a trademark.
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
            "Delfyle ensures smooth, successful trademark registration with expert assistance."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
          <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Grounds for Sending a Trademark Infringement Notice</h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0px'}}>
            According to Section 29 of the Trade Marks Act, 1999, infringement can be claimed under these scenarios:
            </p>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}></span> Use of an identical or deceptively similar mark for identical goods/services.</li>
                <li><span className={styles.checkIcon}></span> Causing confusion or deception due to resemblance.</li>
                <li><span className={styles.checkIcon}></span> Use of a similar mark that exploits or harms the reputation of a well-known trademark.</li>
                <li><span className={styles.checkIcon}></span> Unauthorized use in advertising or on product packaging.</li>
            </ul>   

          <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Exceptions to Trademark Infringement</h3>
            <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0px'}}>
            As per Section 30 of the Act, certain uses of a trademark do not amount to infringement:
            </p>
            <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}></span> Descriptive use (e.g., describing type, quality, or origin).</li>
                <li><span className={styles.checkIcon}></span> Usage within agreed limitations.</li>
                <li><span className={styles.checkIcon}></span> Use by the registered owner or authorized user.</li>
                <li><span className={styles.checkIcon}></span> Reasonable use in integration or accessory goods.</li>
                <li><span className={styles.checkIcon}></span> Use of a similar registered trademark under permitted rights.</li>
            </ul>        
          </div>
        </div>
      </div>
    </section>
    </>
  
  );
};

export default PrivateLimitedCompanyContent; 