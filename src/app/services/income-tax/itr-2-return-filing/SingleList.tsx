"use client";

import React from 'react';
import styles from '../../../Components/TrialComponent/ComponentSeven/ComponentSeven.module.css';

interface SingleListProps {
  title?: string;
  description?: string;
  buttonText?: string;
  showButton?: boolean;
  features?: {
    column: string[];
  };
  showFeatures?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
}

const defaultProps = {
  title: "Documents Required for ITR-2 Filing",
  description: "While the ITR-2 form is annexure-less and requires no attachments, it’s important to keep these documents ready:",
  buttonText: "Contact sales >",
  showButton: true,
  features: {
    column: [
      "Form 16 / 16A",
      "Form 26AS, AIS, TIS",
      "Capital gains statements from mutual funds or brokers",
      "Bank statements for dividend/interest income",
      "Details of foreign assets & income",
      "PAN, Aadhaar Card",
      "Property documents (if applicable)"
    ]
  },
  showFeatures: true,
  showTitle: true,
  showDescription: true
};

const SingleList: React.FC<SingleListProps> = ({
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
        <div style={{ width: '100%' }}>
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

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          {showFeatures && (
            <div className={styles.features}>
              <div className={styles.featureColumn}>
                {features.column.map((feature, index) => (
                  <p
                    key={`col-${index}`}
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

export default SingleList;
