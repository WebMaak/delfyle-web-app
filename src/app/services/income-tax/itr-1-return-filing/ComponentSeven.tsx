"use client";

import React from 'react';
import styles from '../../../Components/TrialComponent/ComponentSeven/ComponentSeven.module.css';

interface ComponentSevenProps {
  title?: string;
  titleTwo?: string;
  description?: string;
  descriptionTwo?: string;
  buttonText?: string;
  showButton?: boolean;
  features?: {
    column1: string[];
    column2: string[];
    column3: string[];
  };
  showFeatures?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
}

const defaultProps = {
  title: "Documents Required for ITR-1 Filing",
  titleTwo: " Penalty for Late ITR-1 Filing",
  description: "While no documents are to be attached with the return, keep these handy:",
  descriptionTwo: "Avoid these risks by filing your ITR-1 before July 31st.",
  buttonText: "Contact sales >",
  showButton: true,
  features: {
    column1: [
      "Form 16 from your employer",
      "Form 26AS for TDS verification",
      "Bank Statements",
      "Interest Certificates"
    ],
    column2: [
      "Investment Proofs for -",
      "- 80C/80D/80G deductions",
      "Aadhaar Card",
      "PAN Card"
    ],
    column3: [
      "₹5,000 penalty if income exceeds ₹5 lakhs",
      "₹1,000 penalty if income is below ₹5 lakhs",
      "1% interest/month on outstanding taxes",
      "Up to 200% penalty for misreporting income",
      "Risk of prosecution for consistent non-filing"
    ]
  },
  showFeatures: true,
  showTitle: true,
  showDescription: true
};

const ComponentSeven: React.FC<ComponentSevenProps> = ({
  title = defaultProps.title,
  titleTwo = defaultProps.titleTwo,
  description = defaultProps.description,
  descriptionTwo = defaultProps.descriptionTwo,
  buttonText = defaultProps.buttonText,
  showButton = defaultProps.showButton,
  features = defaultProps.features,
  showFeatures = defaultProps.showFeatures,
  showTitle = defaultProps.showTitle,
  showDescription = defaultProps.showDescription
}) => {
  return (
    <>
    <div className={styles.container}>
      <div style={{width: '100%'}} >
        <div className={styles.content}>
          {showTitle && (
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>{title}</h2>
            </div>
          )}
          {showDescription && (
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>
                {description}
              </p>
            </div>
          )}
          {showButton && (
            <button className={styles.button}>{buttonText}</button>
          )}
        </div>
      </div>
      <div style={{width: '100%'}} >
        {showFeatures && (
          <div className={styles.features}>
            <div className={styles.featureColumn}>
              {features.column1.map((feature, index) => (
                <p 
                  key={`col1-${index}`} 
                  className={styles.featureItem}
                >
                  <span className={styles.checkmark}>✓</span>
                  {feature}
                </p>
              ))}
            </div>
            <div className={styles.featureColumn}>
              {features.column2.map((feature, index) => (
                <p 
                  key={`col2-${index}`} 
                  className={styles.featureItem}
                >
                  <span className={styles.checkmark}>✓</span>
                  {feature}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    <div className={styles.container}>
      <div style={{width: '100%'}} >
        <div className={styles.content}>
          {showTitle && (
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>{titleTwo}</h2>
            </div>
          )}
          {showDescription && (
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>
                {descriptionTwo}
              </p>
            </div>
          )}
          {showButton && (
            <button className={styles.button}>{buttonText}</button>
          )}
        </div>
      </div>
      <div style={{width: '100%'}} >
      {showFeatures && (
        <div className={styles.features}>
          <div className={styles.featureColumn}>
            {features.column3.map((feature, index) => (
              <p 
                key={`col1-${index}`} 
                className={styles.featureItem}
              >
                <span className={styles.checkmark}>✓</span>
                {feature}
              </p>
            ))}
          </div>
        </div>
        )}
      </div>
    </div>
    </>
  );
};

export default ComponentSeven; 