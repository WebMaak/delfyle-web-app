"use client";

import React, { useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import { FiBriefcase } from 'react-icons/fi';
import { AiOutlineStock } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';
import { FaGlobe } from 'react-icons/fa';
import { MdBusinessCenter } from 'react-icons/md';

const ITR2EligibilitySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const featureItemsRef = useRef<HTMLDivElement[]>([]);
  const circleGraphicRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.contentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <p className={styles.subHeading}>ITR-3 Filing Guide</p>
          <h2 className={styles.mainHeading}>What is ITR-3 Form?</h2>
          <p className={styles.description}>
          <strong>The ITR-3 Form is used by:</strong> ITR-3 is applicable to a specific group of taxpayers whose income sources are more complex or diverse. This includes those running businesses, offering professional services, or having other financial interests that require disclosure under Indian tax law. Below are the categories of taxpayers who are eligible or required to file using the ITR-3 form:
          </p>

          {/* ✅ Who Can File */}
          <div className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FiBriefcase /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Individuals and HUFs who earn income from business or profession</h3>
              <p className={styles.featureDescription}>
              For those earning from freelancing, consulting, or any self-owned business not registered as a company.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><MdBusinessCenter /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Directors of companies</h3>
              <p className={styles.featureDescription}>
              Mandatory for company directors, even if they don’t have business income.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><FaGlobe /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Individuals with foreign assets or income</h3>
              <p className={styles.featureDescription}>
              Required if you hold foreign bank accounts, assets, or earn income from abroad.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}}><AiOutlineStock /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Persons holding unlisted equity shares</h3>
              <p className={styles.featureDescription}>
              Applicable if you own shares in private (unlisted) companies.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon} style={{color: '#B40068'}} ><MdAttachMoney /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Taxpayers with capital gains, house property income, salary, and other income sources</h3>
              <p className={styles.featureDescription}>
              When you earn from multiple sources along with business or profession.
              </p>
            </div>
          </div>
          <p className={styles.description}>
          This form is crucial for comprehensive tax disclosure for professionals and business owners.
          </p>
        </div>

        {/* Right Circle Graphic */}
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={circleGraphicRef} className={styles.circleGraphic}>
            <p className={styles.circleText}>ITR-3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITR2EligibilitySection;
