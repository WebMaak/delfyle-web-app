"use client";

import React, { useEffect, useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaUsers } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { FaMapMarker } from 'react-icons/fa';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PrivateLimitedCompanyRequirements: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const featureItemsRef = useRef<HTMLDivElement[]>([]);
  const circleGraphicRef = useRef<HTMLDivElement>(null);



  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.contentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <p className={styles.subHeading}>Registration Process</p>
          <h2 className={styles.mainHeading}>Requirements for Registering a Company in India</h2>
          <p className={styles.description}>
            Understanding the essential requirements and documentation needed for successful private limited company registration in India.
          </p>

          <div ref={el => { if (el) featureItemsRef.current[0] = el }} className={styles.featureItem}>
            <div className={styles.featureHeadingContainer}>
              <div className={styles.featureIcon} style={{ color: "#B40068" }}>
                <FaUsers />
              </div>
              <h3 className={styles.featureHeading}>Directors & Members</h3>
            </div>
            <div className={styles.featureTextContent}>
              <p className={styles.featureDescription}>
                Minimum 2 directors (one must be an Indian resident), up to 200 members allowed. Directors must obtain DIN (Director Identification Number) from MCA.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[1] = el }} className={styles.featureItem}>
            <div className={styles.featureHeadingContainer}>
              <div className={styles.featureIcon} style={{ color: "#B40068" }}>
                <FaBuilding />
              </div>
              <h3 className={styles.featureHeading}>Company Name Selection</h3>
            </div>
            <div className={styles.featureTextContent}>
              <p className={styles.featureDescription}>
                Must be unique and align with business objectives. Name must end with "Private Limited" and comply with MCA naming guidelines.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[2] = el }} className={styles.featureItem}>
            <div className={styles.featureHeadingContainer}>
              <div className={styles.featureIcon} style={{ color: "#B40068" }}>
                <FaMapMarker />
              </div>
              <h3 className={styles.featureHeading}>Registered Office Address</h3>
            </div>
            <div className={styles.featureTextContent}>
              <p className={styles.featureDescription}>
                Permanent registered office address required post-registration. Must be a physical address in India where official communications can be sent.
              </p>
            </div>
          </div>
        </div>
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={circleGraphicRef} className={styles.circleGraphic}>
            <p className={styles.circleText}>Requirements</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateLimitedCompanyRequirements; 