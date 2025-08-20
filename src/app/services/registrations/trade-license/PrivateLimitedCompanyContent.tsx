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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Trade License</a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading}>
          Trade License
        </h2>
        <p className={styles.paragraphContent}>
          Engaging in any business activity within India mandates adherence to various regulations, among which acquiring a Trade License is paramount. Serving as an official document to commence specific trade or business operations within a designated locale. A trade license ensures businesses follow municipal norms and uphold public health and safety standards. With India's robust regulatory landscape, obtaining a Company Trade License becomes an indispensable step for businesses aiming to carve a niche in the competitive market, reinforcing the foundation for a trustworthy and lawful business.
        </p>
        <p className={styles.paragraphContent}style={{marginBottom: '0'}}>
          Getting a Trade license in India involves complex steps and rules. Delfyle makes this easier by guiding you through the process and helping you get your license smoothly.
        </p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        <h3 className={styles.subContentHeading}>What is a Trade License?</h3>
        <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
          A trade license meaning is defined as an official document or certificate issued by the Municipal Corporation of a state granting permission to the applicant to engage in a specific trade or business activity within a designated area or location.
        </p>
        <p className={styles.paragraphContent}>
          This license ensures that the business complies with all safety standards mandated by the State Municipal Corporation, safeguarding residents from potential health hazards. Obtaining a trade license is mandatory for all businesses falling under the purview of the respective state's State Municipal Corporation Act. It's important to note that an online trading license restricts the holder from engaging in any trade or business activity other than the one for which it was issued. Additionally, the license does not confer any property ownership to the holder.
        </p>

        <h3 className={styles.subContentHeading}>Who Can Issue a Trade License?</h3>
        <p className={styles.paragraphContent}>
          Trade licenses are typically issued by the licensing department of the Municipal Corporation, which encompasses various departments such as industries, engineering, and health. These departments grant permission through a formal document or trade license certificate, allowing businesses to operate within their jurisdiction. The issuance process may vary from state to state, depending on the rules and regulations of local government agencies.
        </p>

        <h3 className={styles.subContentHeading}>Main Objectives of a Trade License Certificate</h3>
        <p className={styles.paragraphContent}>
          The primary aim of a Trade License certificate is to ensure that business activities within a specific area are regulated and controlled. This licensing system helps local authorities maintain public safety, health, and welfare by overseeing and managing the urban business landscape. By mandating a Trade License, the government ensures that businesses do not negatively impact the surrounding environment and community.
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div className={styles.rightTopContainer}>
        <p className={styles.rightDescription}>
          A Trade License is a crucial legal document that permits you to conduct a specific business in a designated area. It ensures your business activities comply with municipal regulations and promote public welfare.
        </p>
      </div>

      <div className={styles.rightBottomContainer}>
        <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
        <p className={styles.bottomQuote}>
          "Secure your business's legality with a Trade License. Our experts simplify the application process, ensuring compliance and peace of mind."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
       <h3 className={styles.subContentHeading}>The Importance of a Trade License</h3>
        <p className={styles.paragraphContent}>
          In India, trade licenses were established four decades ago under the regulations of the respective state governments' Municipal Corporation Acts. These licenses are crucial in safeguarding against various trades or businesses' nuisances and health hazards. State governments require a trade license certificate for conducting specific businesses or trades within designated areas to prevent unethical business practices. The government can regulate various commercial activities nationwide by mandating online trading licenses.
        </p>
      </div>
    </div>
  </div>
</section>


  );
};

export default PrivateLimitedCompanyContent; 