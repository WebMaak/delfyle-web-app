"use client";

import React, { useEffect, useRef } from 'react';
import styles from './PrivateLimitedPost.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FeatureCard {
  icon?: string;
  title: string;
  description: string;
}

interface PrivateLimitedPostProps {
  tagline?: string;
  title?: string;
  description?: string;
  features?: FeatureCard[];
  showTagline?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
}

const defaultProps = {
  tagline: "Documents Required",
  title: "Documents Required for ITR-1 Filing",
  description: "While no physical documents are required to be attached with the return, keep these ready to ensure accurate and timely filing.",
  showTagline: true,
  showTitle: true,
  showDescription: true,
  features: [
    {
      icon: "/icons/form16.svg", // e.g., document icon
      title: "Form 16 from Employer",
      description: "Issued by your employer, this form summarizes salary paid and TDS deducted."
    },
    {
      icon: "/icons/form26as.svg", // e.g., checklist icon
      title: "Form 26AS",
      description: "Use it to verify TDS, advance tax, and self-assessment tax details before filing."
    },
    {
      icon: "/icons/bank.svg", // e.g., bank/building icon
      title: "Bank Statements & Interest Certificates",
      description: "Ensure interest income from savings and fixed deposits is correctly reported."
    },
    {
      icon: "/icons/investment.svg", // e.g., chart or investment doc icon
      title: "Investment Proofs",
      description: "Required to claim deductions under Sections 80C, 80D, 80G, etc."
    },
    {
      icon: "/icons/id-card.svg", // e.g., Aadhaar/PAN or ID card icon
      title: "Aadhaar & PAN Card",
      description: "Both are mandatory for identity verification and e-verification of the return."
    }
  ]
};


const PrivateLimitedPost: React.FC<PrivateLimitedPostProps> = ({
  tagline = defaultProps.tagline,
  title = defaultProps.title,
  description = defaultProps.description,
  features = defaultProps.features,
  showTagline = defaultProps.showTagline,
  showTitle = defaultProps.showTitle,
  showDescription = defaultProps.showDescription
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);



  return (
    <section ref={sectionRef} className={styles.container}>
      <div ref={headerRef} className={styles.header}>
        {showTagline && <p className={styles.tagline}>{tagline}</p>}
        {showTitle && <h2 className={styles.mainHeading}>{title}</h2>}
        {showDescription && <p className={styles.mainDescription}>{description}</p>}
      </div>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={styles.featureCard}
            ref={el => { if (el) cardsRef.current[index] = el; }}
          >
            {/* <div className={styles.icon}>
              {feature.icon && <img src={feature.icon} alt={feature.title} />}
            </div> */}
            <h3 className={styles.featureHeading}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

  );
};

export default PrivateLimitedPost; 