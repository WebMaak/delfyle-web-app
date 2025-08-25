"use client";

import React, { useEffect, useRef } from 'react';
import styles from './PrivateLimitedPost.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaIdCard, FaPassport, FaHome } from 'react-icons/fa';
import { MdDocumentScanner } from 'react-icons/md';


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
  title: "Documents Required for Online Company Registration in India",
  description: "Ensure you have all the necessary documents ready for a smooth company registration process.",
  showTagline: true,
  showTitle: true,
  showDescription: true,
  features: [
    {
      icon: <FaIdCard />,
      title: "For Indian Nationals",
      description: "PAN card, Aadhaar, passport-size photo, proof of identity, and address proof."
    },
    {
      icon: <FaPassport />,
      title: "For Foreign Nationals",
      description: "Notarized and apostilled passport, photo, and address proof."
    },
    {
      icon: <MdDocumentScanner />,
      title: "Registered Office Documents",
      description: "Rental agreement, utility bill, and NOC from property owner."
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
        {showTagline && <p className={styles.tagline} style={{ color: '#d81d62ff'}}>{tagline}</p>}
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
            <div className={styles.icon} style={{ width: '40px', height: '40px', color: '#d81d62ff', marginBottom: '10px' }}>
              {feature.icon && feature.icon}
            </div>

            <h3 className={styles.featureHeading}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivateLimitedPost; 