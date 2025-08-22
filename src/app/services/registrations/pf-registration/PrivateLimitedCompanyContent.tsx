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
 <section className={styles.container}>
      <div className={styles.topAnchorContainer}>
        <a href="#" className={styles.topAnchorLink}>PF Registration</a>
      </div>

      <div className={styles.mainContentWrapper}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 className={styles.mainHeading}>
              PF Registration
            </h2>
            <p className={styles.paragraphContent}>
              Provident Fund (PF) registration is a mandatory process through which an employer registers with the Employees’ Provident Fund Organisation (EPFO) to comply with the Employees’ Provident Fund and Miscellaneous Provisions Act, 1952. This ensures that employees are part of a long-term social security scheme, providing financial protection after retirement, in emergencies, or unforeseen situations.
            </p>
            <p className={styles.paragraphContent} style={{marginBottom: '0'}}>
              Delfyle offers expert guidance and end-to-end support for seamless PF registration online. Our experienced team ensures timely compliance, accurate documentation, and hassle-free EPF code generation—helping businesses stay legally compliant and support their employees’ financial security.
            </p>
          </div>

          <div className={styles.leftBottomContainer}>
            <h3 className={styles.subContentHeading}>What is the EPF Scheme?</h3>
            <p className={styles.paragraphContent}>
              The Employees' Provident Fund (EPF) is a government-backed savings scheme where both the employer and employee contribute monthly toward a fund that can be accessed during retirement, unemployment, or emergencies. It plays a crucial role in long-term wealth creation and financial planning for employees.
            </p>
            <h4 className={styles.subContentHeading}>EPF Fund Withdrawal Scenarios:</h4>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>✔</span> <b>Retirement:</b> Withdrawal allowed at 58 years of age.</li>
              <li><span className={styles.checkIcon}>✔</span> <b>Unemployment:</b> Withdrawal permitted after 2 months of continuous unemployment.</li>
              <li><span className={styles.checkIcon}>✔</span> <b>Medical/Emergency Needs:</b> Partial withdrawals allowed under specific conditions.</li>
              <li><span className={styles.checkIcon}>✔</span> <b>Death of the Employee:</b> The nominee receives the accumulated funds.</li>
            </ul>

             <h3 className={styles.subContentHeading}>Contribution Structure under EPF</h3>
            <p className={styles.paragraphContent} style={{ marginBottom: '0px'}}>
              From day one of employment, all employees earning up to ₹15,000/month must be enrolled.
            </p>
            <ul className={styles.productsList}>
              <li><span className={styles.checkIcon}>✔</span>Employee: 12% of basic salary</li>
              <li><span className={styles.checkIcon}>✔</span> Employer: 12% of basic salary: <br/>
              </li>
                <ul style={{ marginLeft: '20px', marginTop: '5px'}}>
                  <li><span className={styles.checkIcon}>•</span>3.67% to EPF account</li>
                  <li><span className={styles.checkIcon}>•</span>8.33% to Employee Pension Scheme (EPS)</li>
                </ul>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <div className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
              EPF registration is essential for businesses to comply with statutory requirements and to provide employees with long-term financial security and social protection.
            </p>
          </div>

          <div className={styles.rightBottomContainer}>
            <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={180} height={50} objectFit="contain" className={styles.companyLogo} />
            <p className={styles.bottomQuote}>
              "Empower your workforce with financial security—Delfyle makes PF registration simple, fast, and fully compliant."
            </p>
            <p className={styles.bottomAuthor}>Team Delfyle</p>
          </div>

          <div className={styles.leftBottomContainer}>
            <h3 className={styles.subContentHeading}>When Is PF Registration Mandatory?</h3>
            <ul className={styles.productsList}>
              <li>
                <span className={styles.checkIcon}>✔</span> Mandatory Registration: When an establishment employs 20 or more people, it must register with EPFO.
              </li>
              <li>
                <span className={styles.checkIcon}>✔</span> Voluntary Registration: Businesses with fewer than 20 employees can voluntarily opt for PF registration to offer additional benefits and build trust among employees.
              </li>
              <li>
                <span className={styles.checkIcon}>✔</span> Timelines: PF registration must be completed within one month of reaching the 20-employee threshold to avoid penalties.
              </li>
              <li>
                <span className={styles.checkIcon}>✔</span> Special Provisions: The government can mandate PF registration for establishments with fewer than 20 employees via notification. Employers and a majority of employees may jointly opt for registration even if the 20-employee threshold isn’t met.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


export default PrivateLimitedCompanyContent; 