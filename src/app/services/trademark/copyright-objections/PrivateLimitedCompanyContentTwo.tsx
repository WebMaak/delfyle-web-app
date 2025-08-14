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
          <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>
            Copyright Registration
          </a>
        </div>

        <div className={styles.mainContentWrapper}>
          {/* Left Column */}
          <div ref={leftColumnRef} className={styles.leftColumn}>
            <div className={styles.leftTopContainer}>
              <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{ marginBottom: '0px' }}>
                Copyright Registration Services in India with Delfyle
              </h2>
            </div>

            <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
              <p className={styles.paragraphContent} style={{ marginBottom: '10px' }}>
                Copyright registration provides legal protection for creators, ensuring exclusive rights over their literary, artistic, musical, and digital works. Delfyle simplifies the process from filing to certificate issuance.
              </p>

              <h3 className={styles.subContentHeading}>Why Register Your Work?</h3>
              <ul className={styles.productsList}>
                {[
                  "Legal Ownership: Official documentation of your claim over the work.",
                  "Exclusive Rights: Control reproduction, distribution, adaptation, and licensing.",
                  "Global Protection: Protection under international treaties.",
                  "Commercial Value: Can be licensed, sold, or used as a business asset.",
                  "Peace of Mind: Prevents unauthorized use and infringement.",
                  "Asset for Income: Enables royalty or licensing opportunities."
                ].map((item, idx) => (
                  <li key={idx}><span className={styles.checkIcon}>•</span> {item}</li>
                ))}
              </ul>

              <h3 className={styles.subContentHeading}>Copyright Symbol (©)</h3>
              <p className={styles.paragraphContent}>
                Registered works can use the copyright symbol (©) to publicly indicate protection, deterring potential infringers and reinforcing your legal rights.
              </p>

              <h3 className={styles.subContentHeading}>Legal Rights of a Copyright Owner</h3>
              <ul className={styles.productsList}>
                {[
                  "Right to Authorship: Claim authorship and recognition.",
                  "Right to Reproduce: Exclusive right to reproduce your work.",
                  "Right to Publish: Control when and where the work is published.",
                  "Right to Public Display: Share or display the work publicly.",
                  "Right to Adapt: Modify, translate, or adapt your work.",
                  "Right to License or Transfer: Allow others to use under terms."
                ].map((item, idx) => (
                  <li key={idx}><span className={styles.checkIcon}>•</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div ref={rightColumnRef} className={styles.rightColumn}>
            <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
              <p className={styles.rightDescription}>
                Delfyle provides professional support for copyright registration, ensuring your creative works are legally protected and your rights are enforceable.
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
                "Secure your creativity with Delfyle—your trusted partner in copyright protection."
              </p>
              <p className={styles.bottomAuthor}>Team Delfyle</p>
            </div>

            <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
              <h3 className={styles.subContentHeading}>Duration of Copyright Protection</h3>
              <p className={styles.paragraphContent}>
                In India, copyright lasts for the life of the author plus 60 years after their death, ensuring long-term protection for creators and their heirs.
              </p>

              <h3 className={styles.subContentHeading}>Conditions for Filing a Copyright Application</h3>
              <ul className={styles.productsList}>
                {[
                  "Artistic Works: Upload in PDF or JPEG format.",
                  "Sound Recordings: Submit in MP3 format.",
                  "Literary/Dramatic, Music, and Software Works: PDF format, max 10 MB.",
                  "Software: PDF of first and last 10 pages of source code (entire code if <20 pages)."
                ].map((item, idx) => (
                  <li key={idx}><span className={styles.checkIcon}>•</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.topAnchorContainer}>
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>
          Copyright Registration
        </a>
      </div>

      <div className={styles.mainContentWrapper}>
        {/* Left Column */}
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading} style={{ marginBottom: '0px' }}>
              Copyright Registration Services in India with Delfyle
            </h2>
          </div>

          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <p className={styles.paragraphContent}>
              Copyright registration provides legal protection for creators, ensuring exclusive rights over their literary, artistic, musical, and digital works. Delfyle simplifies the process from filing to certificate issuance.
            </p>

            <h3 className={styles.subContentHeading}>Responding to Copyright Objections</h3>
            <p className={styles.paragraphContent}>
              It’s vital to address copyright objections promptly. Draft clear responses, provide evidence, and clarify discrepancies. Failing to respond may result in withdrawal or rejection of your application.
            </p>

            <h3 className={styles.subContentHeading}>Rights of the Copyright Owner</h3>
            <p className={styles.paragraphContent}>
              Registered works grant exclusive rights, including reproduction, adaptation, public communication, public performance, moral rights, and distribution control.
            </p>

            <h3 className={styles.subContentHeading}>Lawful Use Without Permission</h3>
            <p className={styles.paragraphContent}>
              Certain exceptions allow use without permission for research, private study, criticism, review, news reporting, use in libraries, schools, amateur performances, and specific sound recordings.
            </p>

          </div>
        </div>

        {/* Right Column */}
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
              Delfyle provides professional support for copyright registration, helping you respond to objections and ensuring your creative works are fully protected under the law.
            </p>
          </div>

          <div className={styles.rightBottomContainer}>
            <Image
              src="/delfyle-logo/delfyle-logo.png"
              alt="Delfyle Logo"
              width={180}
              height={50}
              objectFit="contain"
              className={styles.companyLogo}
            />
            <p className={styles.bottomQuote}>
              "Secure your creativity with Delfyle—your trusted partner in copyright protection."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 className={styles.subContentHeading}>Duration of Copyright Protection</h3>
            <p className={styles.paragraphContent}>
              In India, copyright lasts for the life of the author plus 60 years, providing long-term protection for creators and their heirs.
            </p>

            <h3 className={styles.subContentHeading}>Conditions for Filing a Copyright Application</h3>
            <p className={styles.paragraphContent}>
              Upload artistic works in PDF or JPEG, sound recordings in MP3, literary/dramatic/music/software works in PDF (max 10 MB), and software source code as PDF (first and last 10 pages, or full code if under 20 pages).
            </p>
          </div>
        </div>
      </div>
    </section>


</>


  );
};

export default PrivateLimitedCompanyContentTwo; 