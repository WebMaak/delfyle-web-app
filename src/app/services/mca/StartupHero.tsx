'use client';

import React from "react";
import styles from "./StartupHero.module.css";
import ContactForm from "../../Components/ContactForm/ContactForm";

interface StartupHeroProps {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  buttonText?: string;
}

const defaultHeading = (
  <>
    <span className={styles.coloredplc}>Private Limited Company</span><br />
    <span className={styles.coloredreg}>Registration</span> in India <br /> with <span className={styles.colored}>Delfyle</span>
  </>
);

const defaultDescription = `Setting up a business in India often involves choosing a private limited company as a preferred option. This structure offers shareholders limited liability protection while placing specific ownership constraints. In contrast, in the case of an LLP, partners oversee the management. Private limited company registration allows for a clear distinction between directors and shareholders.`;

const defaultButtonText = "Get Started   >";

const StartupHero: React.FC<StartupHeroProps> = ({
  heading = defaultHeading,
  description = defaultDescription,
  buttonText = defaultButtonText,
}) => {
  const services = [
    'Bussiness registration',
    'Trademark',
    'Registration',
    'Goods & Services Tax',
    'MCA',
    'Compliance',
    'Income Tax',
    'Other',
  ];

  return (
    <div className={styles.heroWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.leftContentWrapper}>
              <h1 className={styles.heading}>{heading}</h1>
              <div className={styles.descWrapper}>
                <p className={styles.description}>{description}</p>
              </div>
              <a
                href="https://wa.me/918697603824"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta}
              >
                {buttonText}
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <ContactForm services={services} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartupHero; 