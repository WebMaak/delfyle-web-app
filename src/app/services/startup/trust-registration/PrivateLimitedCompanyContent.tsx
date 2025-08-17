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
    <section ref={sectionRef} className={styles.container}>
  <div className={styles.topAnchorContainer}>
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trust Registration</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Trust Registration in India with Delfyle
        </h2>
        <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Trusts are a business structure created with noble intentions to promote the development of sciences, literature, and other worthy causes. They serve purposes such as alleviating scarcity, providing education to those in need, and offering medical support. Trust registration is officially registering a trust under the Trusts Act of 1882. This legal step ensures that the trust is recognized and operates within the framework of the law. Trust registration online provides legal validity and establishes its existence as a separate entity.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>
          Why is Trust Registration Important?
        </h3>
        <p ref={(el) => { if (el) leftBottomContentRef.current[1] = el; }} className={styles.paragraphContent}>
          If you are contemplating the creation of a trust for non-profit or charitable purposes, registration of a trust is vital to ensure its effective operation and compliance with legal obligations. At Delfyle, we have a dedicated team of professionals ready to support you every step of the way during the trust registration and getting a trust registration certificate download. We clear up your doubts and confusion on how to register a trust in India. Our aim is to provide you with a seamless and efficient trust registration online process.
        </p>

        <h3 className={styles.subContentHeading}>Contact Us</h3>
        <p className={styles.paragraphContent}>
          Contact us today to discuss your registration needs and benefit from our expertise in establishing legally compliant and effective trusts!
        </p>

        <h3 className={styles.subContentHeading}>Trust & Trust Registration - An Overview</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          Individuals establish trusts to allocate a portion of their assets or property for the benefit of another person. A trust is a fiduciary relationship involving the trustor, trustee, and beneficiary. The involved parties are outlined in the trust deed when applying for registration for trust creation.
        </p>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          A trust is established when the trustor transfers a specific asset or property to the trustee for the ultimate benefit of the beneficiary. The beneficiary, who is typically a third party, may have a connection to both the trustor and the trustee.
        </p>
        <p className={styles.paragraphContent}>
          Therefore, the relationship between the parties involved is essential in defining trust. According to the Indian Trusts Act of 1882, a trust is defined as a "Relationship between the trustor and trustee to hold specific benefits for the beneficiary."
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          Delfyle provides professional trust registration services, managing documentation, approvals, and legal compliance, so you can focus on your mission.
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
          "Establish your trust seamlessly with expert guidance from Delfyle."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
      {/* Balanced Content from Left Column */}
      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>Parties Involved in the Trust Registration Process</h3>
        <ul className={styles.productsList}>
          <li><span className={styles.checkIcon}>✔</span> Trustor: The person who establishes the trust. They are typically the owner of the assets or property being placed in the trust.</li>
          <li><span className={styles.checkIcon}>✔</span> Trustee: The individual or entity entrusted with the responsibility of managing and overseeing the trust. They hold and administer the trust property on behalf of the trustor and for the benefit of the beneficiary.</li>
          <li><span className={styles.checkIcon}>✔</span> Beneficiary: The person for whom the trust is created. They are the intended recipient of the benefits, assets, or property held within the trust.</li>
        </ul>
      </div>
    </div>
  </div>
</section>





  
  );
};

export default PrivateLimitedCompanyContent; 