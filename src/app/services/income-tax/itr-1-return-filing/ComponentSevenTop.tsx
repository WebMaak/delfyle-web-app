


"use client";

import React from 'react';
import styles from '../../../Components/TrialComponent/ComponentSeven/ComponentSeven.module.css';

interface ComponentSevenTopProps {
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
    title: "Who is Eligible to File ITR-1?",
    description: 'You can file ITR-1 Sahaj Form if you are -> Clubbing of income is allowed only if the clubbed income also meets the eligibility criteria above.',
    buttonText: "Contact sales >",
    showButton: true,
    features: {
      column1: [
        "A resident individual (not HUF/company)",
        "Earning income up to ₹50 lakhs from:",
        "1) Salary or Pension",
        "2) Single House Property"
      ],
      column2: [
        "3) Family Pension",
        "4) Interest Income (Bank/Post Office/Deposits)",
        "5) Agricultural income (up to ₹5,000)",
        "6) Other sources (like interest income)"
      ]
    },
    showFeatures: true,
    showTitle: true,
    showDescription: true
  };

const ComponentSevenTop: React.FC<ComponentSevenTopProps> = ({
  title = defaultProps.title,
  description = defaultProps.description,
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
      {/* <div style={{width: '100%'}} > */}
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
      {/* </div> */}
      {/* <div style={{width: '100%'}} > */}
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
    {/* </div> */}
    </>
  );
};

export default ComponentSevenTop; 