"use client";

import React from 'react';
import styles from '../ComponentSeven/ComponentSeven.module.css';

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
    title: "Late Filing Penalty for ITR-3",
    description: "Avoid penalties and interest—file on time!",
    buttonText: "Contact sales >",
    showButton: true,
    features: {
      column: [
        "₹5,000 if filed after due date but before Dec 31",
        "₹10,000 if filed after Dec 31",
        "₹1,000 for income below ₹5 lakh Avoid penalties and interest—file on time!"
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
