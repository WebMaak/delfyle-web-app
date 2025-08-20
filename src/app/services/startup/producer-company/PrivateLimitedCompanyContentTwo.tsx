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
    <>
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.topAnchorContainer}>
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trust Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Types of Public Limited Companies
        </h2>
        <p
          ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }}
          className={styles.paragraphContent}
          style={{marginBottom: '0'}}
        >
          Public limited companies are broadly categorised into two distinct types:
        </p>
      </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 className={styles.subContentHeading}>Key Characteristics of a Public Limited Company</h3>
            <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
              Below are the fundamental characteristics of a public limited company:
            </p>
            <h3 className={styles.subContentHeading}>Listed Company</h3>
            <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
              This type of public limited company has its shares actively listed and available for trading on one or more stock exchanges. This accessibility allows the public and various financial entities to buy and sell the company's shares, providing greater liquidity and exposure to a diverse pool of investors.
            </p>
            <h3 className={styles.subContentHeading}>Unlisted Company</h3>
            <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
            Unlike its listed counterparts, an unlisted public limited company does not have its shares traded on any stock exchange. As a result, its shares are not as easily transferable, and the company does not experience the same level of public scrutiny or regulatory requirements as a listed company. This category of public limited company may appeal to businesses seeking to benefit from a broader base of shareholders while avoiding the complexities of full public trading.
            </p>
            
            <h3 className={styles.subContentHeading}>Requirements for Registration of a Public Limited Company</h3>
            <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
            When planning to register a public limited company, it is important to understand and adhere to the specific rules and regulations set under the Companies Act. Here are the key requirements for forming a public limited company in India:
            </p>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>•</span> Minimum Shareholders: The minimum members required to form a PLC is seven shareholders, with no limit on the maximum number.</li>
              <li><span className={styles.checkIcon}>•</span> Board of Directors: A minimum of three directors is required to establish a public limited company. Each director must possess a valid Director Identification Number (DIN).</li>
              <li><span className={styles.checkIcon}>•</span> Authorised Share Capital: The company should have a minimum authorised share capital of Rs. 1 lakh to meet the initial financial requirements for registration.</li>
              <li><span className={styles.checkIcon}>•</span> Digital Signature Certificate (DSC): The registration process includes electronic submission of documents. Therefore, a Digital Signature Certificate of at least one director is necessary for authenticating documents submitted electronically.</li>
              <li><span className={styles.checkIcon}>•</span> Company Name: The proposed name of the company must comply with the provisions of the Companies Act and Rules, ensuring it is unique and not already in use.</li>
              <li><span className={styles.checkIcon}>•</span> Foundational Documents: Key documents required include the Memorandum of Association (MOA) and Articles of Association (AOA). Additionally, Form DIR-12 must be duly filled to register the details of the directors.</li>
            </ul>
          </div>
        </div>

        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
              Delfyle provides end-to-end guidance for Section 8 Company registration, ensuring all legal formalities are met. Our team assists with documentation, filing, approvals, and compliance, helping organizations establish themselves as credible, non-profit entities efficiently.
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
              "Delfyle ensures smooth, expert-assisted Section 8 Company registration and compliance."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
        </div>
      </div>
    </section>

    <section ref={sectionRef} className={styles.container}>
      <div className={styles.topAnchorContainer}>
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trust Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Start Your Public Limited Company with Ease through Delfyle!
        </h2>
        <p
          ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }}
          className={styles.paragraphContent}
          style={{marginBottom: '0'}}
        >
          Starting your public limited company registration is straightforward and efficient with Delfyle. With a proven track record of expert guidance and a commitment to smooth, compliant service, we streamline the entire registration process. From handling all necessary documentation, including DSC, DIN, MOA, and AOA, to ensuring your company complies with all legal requirements, our team is equipped to support you at every step.
        </p>
      </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 className={styles.subContentHeading}>Advantages of Public Limited Company Registration</h3>
            <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
              Registering as a public limited company brings several key benefits:
            </p>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>•</span> Easier Access to Capital: These companies can raise funds by selling shares to the public, which provides a major boost in capital and makes it easier to fund expansion projects.</li>
              <li><span className={styles.checkIcon}>•</span> Financial Flexibility: Public limited companies can raise money using a variety of financial options, thanks to strict regulations that give investors’ confidence in their investments.</li>
              <li><span className={styles.checkIcon}>•</span> Limited Liability: The shareholders of a Public Limited Company are given limited liability protection. In a situation of unexpected liability, the same would be limited only to the company and would not affect the shareholders in any way.</li>
              <li><span className={styles.checkIcon}>•</span> Growth Opportunities: Going public can help smaller companies grow by providing the funds needed for expansion and improving operational efficiency due to increased accountability.</li>
              <li><span className={styles.checkIcon}>•</span> Flexibility in Shareholder Structure: While the minimum members in a public company are 7 shareholders, there is no upper limit for maximum members.</li>
              <li><span className={styles.checkIcon}>•</span> Easy Share Trading: Shares of public limited companies can be bought and sold easily on the stock market, which attracts more investors and makes it simpler for existing shareholders to sell their shares if they choose.</li>
            </ul>
          </div>
        </div>

        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
              These benefits make public limited companies attractive for businesses looking to expand and attract investment.
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
              "Delfyle ensures smooth, expert-assisted Section 8 Company registration and compliance."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PrivateLimitedCompanyContentTwo; 