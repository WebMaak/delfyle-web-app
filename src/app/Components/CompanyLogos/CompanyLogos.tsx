"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./CompanyLogos.module.css";

const CompanyLogos: React.FC = () => {
  const headingRef = useRef<HTMLDivElement>(null);

  // Scroll-based progress line
  const { scrollYProgress: headingProgress } = useScroll({
    target: headingRef,
    offset: ["start 0.7", "center center"],
  });

  const lineWidth = useTransform(headingProgress, [0, 1], ["2%", "30%"]);

  return (
    <section className={styles.companyLogosSection}>
      <div className={styles.container}>
        <motion.div
          ref={headingRef}
          className={styles.headingWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.mainHeading}>Proud To Have Worked With</h2>
          <motion.div
            className={styles.progressLine}
            style={{ width: lineWidth }}
          />
        </motion.div>

        <video
          src="/animation/CompanyLogos.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={styles.companyLogosVideo}
        />
      </div>
    </section>
  );
};

export default CompanyLogos;
