"use client";

import React, { useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import { AiOutlineStop, AiOutlineBank, AiOutlineDollar, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { FiPackage, FiTool, FiUsers, FiAward, FiHexagon, FiGrid, FiMusic } from 'react-icons/fi';

const PrivateLimitedCompanyBenefits: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const featureItemsRef = useRef<HTMLDivElement[]>([]);
  const circleGraphicRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className={styles.container}>
  <div className={styles.contentWrapper}>
    <div ref={leftColumnRef} className={styles.leftColumn}>
      <p className={styles.subHeading}>Trademark Registration Guide</p>
      <h2 className={styles.mainHeading}>Types of Trademark Registrations in India</h2>
      <p className={styles.description}>
      In India, various trademark registration online or brand name registrations cater to different needs and purposes, all aimed at enabling consumers to recognize products and services associated with specific manufacturers or service providers. Here, we delve into the distinct categories of trademark registrations available:
      </p>

      {/* Product Mark */}
      <div className={styles.featureItem}>
        <div className={styles.featureIcon} style={{ color: '#B40068' }}><FiPackage /></div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Product Mark</h3>
          <p className={styles.featureDescription}>
          This type of trademark is affixed to goods or products, aiding in identifying their origin and preserving a company's reputation. Trademark applications falling under classes 1-34 are typically classified as product marks as they pertain to tangible commodities.
          </p>
        </div>
      </div>

      {/* Service Mark */}
      <div className={styles.featureItem}>
        <div className={styles.featureIcon} style={{ color: '#B40068' }}><FiTool /></div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Service Mark</h3>
          <p className={styles.featureDescription}>
          Similar to a product mark, a service mark is used to identify services rather than physical products. Service marks primarily help differentiate the providers of certain services from others. Trademark applications falling under classes 35-45 are often regarded as service marks related to service offerings.

          </p>
        </div>
      </div>

      {/* Collective Mark */}
      <div className={styles.featureItem}>
        <div className={styles.featureIcon} style={{ color: '#B40068' }}><FiUsers /></div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Collective Mark</h3>
          <p className={styles.featureDescription}>
          A collective mark conveys specific characteristics of products or services associated with a particular group. It allows individuals or entities to protect and represent goods and services collectively. The trademark holder may be an association, a public institution, or a Section 8 corporation.
          </p>
        </div>
      </div>

      {/* Certification Mark */}
      <div className={styles.featureItem}>
        <div className={styles.featureIcon} style={{ color: '#B40068' }}><FiAward /></div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Certification Mark</h3>
          <p className={styles.featureDescription}>
          The owner issues these marks to indicate information about a product's origin, composition, quality, or other pertinent data. Certification marks establish product standards and assure consumers that the product meets standardized quality benchmarks. They are commonly found in packaged goods, toys, and electronics.
          </p>
        </div>
      </div>

      {/* Shape Mark */}
      <div className={styles.featureItem}>
        <div className={styles.featureIcon} style={{ color: '#B40068' }}><FiHexagon /></div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Shape Mark</h3>
          <p className={styles.featureDescription}>
          Shape marks are employed to secure the distinct shape of a product, making it easily recognizable to consumers as originating from a specific manufacturer. Registration is contingent on the shape being deemed distinctive.
          </p>
        </div>
      </div>

      {/* Pattern Mark */}
      <div className={styles.featureItem}>
        <div className={styles.featureIcon} style={{ color: '#B40068' }}><FiGrid /></div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Pattern Mark</h3>
          <p className={styles.featureDescription}>
          Pattern marks are used for products featuring unique, designed patterns that serve as distinguishing features. To qualify for registration, these patterns must stand out as distinctly recognizable.
          </p>
        </div>
      </div>

      {/* Sound Mark */}
      <div className={styles.featureItem}>
        <div className={styles.featureIcon} style={{ color: '#B40068' }}><FiMusic /></div>
        <div className={styles.featureTextContent}>
          <h3 className={styles.featureHeading}>Sound Mark</h3>
          <p className={styles.featureDescription}>
            Protects distinctive sounds or jingles, like the IPL tune, used in branding.Sound marks are distinctive sounds associated with products or services from suppliers. Sound logos, often known as audio mnemonics, are commonly heard at the beginning or end of commercials. An example in India is the IPL tune. These diverse categories of trademark registrations like logo trademark registration offer businesses and entities the flexibility to protect their brand identity following their unique offerings and market presence.
          </p>
        </div>
      </div>
    </div>

    <div ref={rightColumnRef} className={styles.rightColumn}>
      <p className={styles.subHeading} style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-20%, -50%)', fontSize: '1.2rem'
      }}>
        Trademark Registration Guide
      </p>
      <div className={styles.contentStack}>
        <span className={`${styles.square} ${styles.squareTl}`} style={{ left: '150%' }}></span>
        <span className={`${styles.square} ${styles.squareBr}`} style={{ right: '150%' }}></span>
        <span className={`${styles.star} ${styles.star1}`}></span>
        <span className={`${styles.star} ${styles.star2}`}></span>
      </div>
    </div>
  </div>
</section>

  );
};

export default PrivateLimitedCompanyBenefits;
