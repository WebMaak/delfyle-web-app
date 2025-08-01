"use client";

import React, { useEffect, useRef } from "react";
import styles from "./VisionMission.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

const VisionMission: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const blankCardRef = useRef<HTMLDivElement>(null);
  const thirdContainerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;
    const blankCard = blankCardRef.current;
    const thirdContainer = thirdContainerRef.current;

    if (section && leftColumn && rightColumn && blankCard && thirdContainer) {
      ScrollTrigger.create({
        trigger: blankCard,
        start: "center center",
        end: () => {
          const thirdContainerRect = thirdContainer.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          return `+=${thirdContainerRect.bottom - viewportHeight/2 - 100}`;
        },
        pin: blankCard,
        pinSpacing: false,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true
      });

      // Refresh ScrollTrigger after a small delay
      const timeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        clearTimeout(timeout);
      };
    }
  }, []);

  useEffect(() => {
    if (lottieRef.current) {
      const anim = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animation/mission.json",
      });
      return () => anim.destroy();
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.visionMissionSection}>
      <div className={styles.contentContainer}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div ref={blankCardRef} className={styles.blankCard}>
            <div ref={lottieRef} className={styles.lottieAnimation} />
          </div>
        </div>
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div className={styles.textContentContainer}>
            <h2 className={styles.mainHeading}>Born from a Vision – Built for Entrepreneurs</h2>
            <p className={styles.subHeading}>
              Delfyle was created as an ease-of-business engine, in line with the ideals of Atmanirbhar Bharat and Startup India. Our purpose is to empower businesses by eliminating the complexities of legal paperwork, documentation, registrations, and regulatory filings.
            </p>
            <p className={styles.subHeading}>
              Whether you're building the next unicorn or managing a legacy organisation, we ensure that compliance never becomes a roadblock.
            </p>
          </div>
          <div className={styles.textContentContainer}>
            <h2 className={styles.mainHeading}>Our Mission</h2>
            <p className={styles.subHeading}>
              To shoulder the legal and compliance responsibilities of high-growth businesses—so founders and teams can focus on what truly matters: building, scaling, and innovating.
            </p>
          </div>
          <div ref={thirdContainerRef} className={styles.textContentContainer}>
            <h2 className={styles.mainHeading}>Our Vision</h2>
            <p className={styles.subHeading}>
              To create an entrepreneurial India where legal and compliance bottlenecks are a thing of the past, and where "business hassles" is no longer part of the entrepreneurial dictionary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission; 