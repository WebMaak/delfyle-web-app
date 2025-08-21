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
    <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>
      Copyright Objections
    </a>
  </div>

  <div className={styles.mainContentWrapper}>
    {/* Left Column */}
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <div className={styles.leftTopContainer}>
        <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{ marginBottom: "0px" }}>
          Protect Your Creative Work and Resolve Copyright Objections Effectively
        </h2>
      </div>

      <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
        {/* Section 1 */}
        <h3 className={styles.subContentHeading} style={{ marginBottom: "0px" }}>
          What is Copyright?
        </h3>
        <p className={styles.paragraphContent}style={{ marginBottom: "0px" }}>
          Copyright grants the creators exclusive rights to their works, including literature, drama, music, artwork, sound recordings, and more. Registering a copyright establishes legal ownership, enabling creators to control reproduction, adaptation, translation, and public communication of their work. Copyright registration is essential to safeguard the creator’s rights and ensure they receive recognition and compensation for their efforts.
        </p>
        <p className={styles.paragraphContent}>
          In India, the number of copyright registrations has significantly increased as awareness of intellectual property rights has grown. Copyright protection is governed by The Copyright Act of 1957 and ensures that no one can reproduce, adapt, or use a creator’s work without permission, safeguarding creativity and innovation.
        </p>

        {/* Section 2 */}
        <h3 className={styles.subContentHeading} style={{ marginBottom: "0px" }}>
          Eligibility for Copyright Registration
        </h3>
        <p className={styles.paragraphContent}style={{ marginBottom: "0px" }}>
          Copyright protection can be sought for a wide range of creative works, including literature, music, art, drama, films, and sound recordings. There are three primary classes of work under the Copyright Act:
        </p>
        <ul className={styles.paragraphContent} style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
          <li>Original Literary, Dramatic, Musical, and Artistic Works: books, paintings, sculptures, music compositions, etc.</li>
          <li>Cinematographic Films: visual recordings such as movies, documentaries, or videos.</li>
          <li>Sound Recordings: any recorded audio, including music or speeches, regardless of medium.</li>
        </ul>

        {/* Section 3 */}
        <h3 className={styles.subContentHeading} style={{ marginBottom: "0px" }}>
          Benefits of Copyright Registration
        </h3>
        <ul className={styles.paragraphContent} style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
          <li>Legal Protection: Protects against unauthorized use and strengthens your case in infringement disputes.</li>
          <li>Establishing Market Presence: Creates public proof of ownership in the creative community.</li>
          <li>Exclusive Rights: Control over reproduction, adaptation, distribution, and translation of your work.</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div ref={rightColumnRef} className={styles.rightColumn}>
      <div
        ref={(el) => { if (el) rightColumnContentRef.current[0] = el; }}
        className={styles.rightTopContainer}
      >
        <p className={styles.rightDescription}>
          Our team handles every step with accuracy and compliance, giving you confidence that your creative works and objections are properly managed and legally protected.
        </p>
      </div>

      <div
        ref={(el) => { if (el) rightColumnContentRef.current[1] = el; }}
        className={styles.rightBottomContainer}
      >
        <Image
          src="/delfyle-logo/delfyle-logo.png"
          alt="Delfyle Logo"
          width={180}
          height={50}
          objectFit="contain"
          className={styles.companyLogo}
        />
        <p className={styles.bottomQuote}>
          "With Delfyle, copyright registration and objection handling are streamlined and secure."
        </p>
        <p className={styles.bottomAuthor}>Team Delfyle</p>
      </div>
    <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}></div>
      {/* Section 4 */}
        <h3 className={styles.subContentHeading} style={{ marginBottom: "0px" }}>
          Process for Copyright Registration
        </h3>
        <p className={styles.paragraphContent}style={{ marginBottom: "0px" }}>
          To register a copyright, file an application using Form IV with applicable fees. Works may be published or unpublished, and additional documentation is required depending on type:
        </p>
        <ul className={styles.paragraphContent} style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '0px' }}>
          <li>Published Works: submit three copies with the application.</li>
          <li>Unpublished Works: submit the manuscript as proof of originality.</li>
        </ul>
        <p className={styles.paragraphContent}>
          Steps include submitting the application, signing by an advocate (POA), receiving a Diary Number, examination by the copyright office, handling objections if any, and finally receiving the Copyright Registration Certificate.
        </p>
    </div>
  </div>
</section>


  );
};

export default PrivateLimitedCompanyContent; 