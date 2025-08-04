"use client";

import React, { useEffect, useRef } from 'react';

import styles from './PrivateLimitedCompanyDocs.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PrivateLimitedCompanyDocsProps {
  title?: string;
  description?: string;
  buttonText?: string;
  showButton?: boolean;
  features?: {
    column1: string[];
    column2: string[];
  };
  showFeatures?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
}

const defaultProps = {
  title: "Post-Registration Compliance",
  description: "After incorporation, companies must fulfil compliance obligations such as",
  buttonText: "Contact sales >",
  showButton: true,
  features: {
    column1: [
      "Holding board and shareholder meetings",
      "Maintaining statutory records",
      "Filing annual returns with the ROC",
    ],
    column2: []
  },
  showFeatures: true,
  showTitle: true,
  showDescription: true
};

const PrivateLimitedCompanyDocs: React.FC<PrivateLimitedCompanyDocsProps> = ({
  title = defaultProps.title,
  description = defaultProps.description,
  buttonText = defaultProps.buttonText,
  showButton = defaultProps.showButton,
  features = defaultProps.features,
  showFeatures = defaultProps.showFeatures,
  showTitle = defaultProps.showTitle,
  showDescription = defaultProps.showDescription
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const checkmarkRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const featureTextRefs = useRef<(HTMLParagraphElement | null)[]>([]);



  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !checkmarkRefs.current.includes(el)) {
      checkmarkRefs.current.push(el);
    }
  };

  const addTextToRefs = (el: HTMLParagraphElement | null) => {
    if (el && !featureTextRefs.current.includes(el)) {
      featureTextRefs.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.content}>
        {showTitle && (
          <div className={styles.titleContainer}>
            <h2 ref={titleRef} className={styles.title}>{title}</h2>
          </div>
        )}
        {showDescription && (
          <div className={styles.descriptionContainer}>
            <p ref={descriptionRef} className={styles.description}>
              {description}
            </p>
          </div>
        )}
        {showButton && (
          <button ref={buttonRef} className={styles.button}>{buttonText}</button>
        )}
      </div>
      {showFeatures && (
        <div ref={featuresRef} className={styles.features}>
          <div className={styles.featureColumn}>
            {features.column1.map((feature, index) => (
              <p 
                key={`col1-${index}`} 
                ref={addTextToRefs}
                className={styles.featureItem}
              >
                <span ref={addToRefs} className={styles.checkmark}>✓</span>
                {feature}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivateLimitedCompanyDocs; 