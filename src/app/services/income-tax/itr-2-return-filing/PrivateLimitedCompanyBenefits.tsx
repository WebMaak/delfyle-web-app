"use client";

import React, { useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import { FiBriefcase, FiHome, FiGlobe, FiTrendingUp, FiAward, FiBarChart2, FiUsers, FiGitBranch } from 'react-icons/fi';
import { AiOutlineStop, AiOutlineBank, AiOutlineDollar, AiOutlineAppstoreAdd } from 'react-icons/ai';

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
          <p className={styles.subHeading}>ITR-2 Filing Guide</p>
          <h2 className={styles.mainHeading}>Who Can & Cannot File ITR-2?</h2>
          <p className={styles.description}>
            ITR-2 is meant for individuals and HUFs who do not have income from business or profession. It's used when income comes from salary, house property (more than one), capital gains, foreign assets, or other specific sources. However, not everyone qualifies to use this form.
          </p>

          {/* ✅ Who Can File */}
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><FiBriefcase /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Have income from salary or pension</h3>
              <p className={styles.featureDescription}>
                Individuals receiving income through employment or pension can use ITR-2, provided they meet the other eligibility criteria.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><FiHome /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Own more than one house property</h3>
              <p className={styles.featureDescription}>
                If you own multiple properties, ITR-2 allows detailed reporting of income from house property.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><FiTrendingUp /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Earn capital gains</h3>
              <p className={styles.featureDescription}>
                Those who have earned capital gains from shares, mutual funds, or sale of property must file ITR-2.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><FiGlobe /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Have foreign assets or foreign income</h3>
              <p className={styles.featureDescription}>
                If you hold foreign assets or earned income outside India, ITR-2 is the correct form for you.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><AiOutlineDollar /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Have income from lotteries or racehorses</h3>
              <p className={styles.featureDescription}>
                Winnings from legal gambling, lotteries, or horse racing must be reported using ITR-2.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><FiUsers /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Are a director in a company</h3>
              <p className={styles.featureDescription}>
                Directors in listed or unlisted companies must use ITR-2 for additional disclosure compliance.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><FiAward /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Have agricultural income over ₹5,000</h3>
              <p className={styles.featureDescription}>
                If your agricultural income exceeds ₹5,000, ITR-2 is mandatory for tax filing.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><AiOutlineBank /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Are RNOR or NRI</h3>
              <p className={styles.featureDescription}>
                Non-Resident Indians (NRIs) and Resident but Not Ordinarily Residents (RNORs) are required to file ITR-2.
              </p>
            </div>
          </div>

          {/* ❌ Who Cannot File */}
          <h2 className={styles.mainHeading} style={{ fontSize: '2rem', marginTop: '2rem' }}>
            Who Cannot File ITR-2?
          </h2>
          <p className={styles.description}>
            ITR-2 is not applicable for individuals or HUFs earning income from business or profession. If you qualify for ITR-1 (Sahaj), you must not file ITR-2.
          </p>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon} style={{ color: 'red' }}><AiOutlineStop /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Have income from business or profession</h3>
              <p className={styles.featureDescription}>
                Individuals or HUFs earning from business, freelancing, or professional services must not use ITR-2.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon} style={{ color: 'red' }}><AiOutlineAppstoreAdd /></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Are eligible to file ITR-1 Sahaj</h3>
              <p className={styles.featureDescription}>
                If your income is limited to salary, one house property, and total income is under ₹50 lakhs, ITR-1 is the correct form, not ITR-2.
              </p>
            </div>
          </div>
        </div>

        {/* Right Circle Graphic */}
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={circleGraphicRef} className={styles.circleGraphic}>
            <p className={styles.circleText}>ITR-2</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITR2EligibilitySection;
