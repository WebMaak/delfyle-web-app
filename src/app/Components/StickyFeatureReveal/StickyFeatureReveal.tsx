'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import styles from './StickyFeatureReveal.module.css';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: '', title: 'End-to-End Services', desc: 'From company setup to compliance. Comprehensive solutions that cater to every stage of your needs, ensuring seamless execution and timely delivery.' },
  { icon: '', title: 'Expert Team', desc: 'Chartered Accountants, CS, Lawyers and Legal Experts. Highly skilled and experienced professionals dedicated to providing expert guidance and support to drive your goals forward.' },
  { icon: '', title: 'Pan-India Presence', desc: 'Remote and city-based operations. A widespread network of offices and partners that enables us to serve customers across the country, providing localized support and expertise.' },
  { icon: '', title: 'Secure & Confidential', desc: 'Fully compliant with data protection norms. Robust measures in place to safeguard your data and maintain confidentiality, ensuring your trust and peace of mind with our services.' },
  { icon: '', title: 'Tech-Enabled Process', desc: 'Seamless, paperless workflows. Leveraging cutting-edge technology to streamline our processes, enhance efficiency, and provide real-time insights to optimize your experience.' },
];

const StickyFeatureReveal = () => {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(1);

  // Framer Motion scroll progress for header progress bar
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "center center"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 270px',
        end: 'bottom 650px',
        pin: pinRef.current,
        pinSpacing: false,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Set up ScrollTriggers for each feature block to update activeIndex
  useEffect(() => {
    const triggers = featureRefs.current.map((ref, idx) => {
      if (!ref) return null;
      return ScrollTrigger.create({
        trigger: ref,
        start: 'top center',
        end: 'bottom 20%',
        onEnter: () => setActiveIndex(idx + 1),
        onEnterBack: () => setActiveIndex(idx + 1),
      });
    });
    return () => {
      triggers.forEach(trigger => trigger && trigger.kill());
    };
  }, []);

  return (
    <>
    {/* Header Section for StickyFeatureReveal */}
    <div ref={headerRef} className={styles.headerSection}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.mainHeading}>Why Delfyle</h2>
        <motion.div className={styles.progressLine} style={{ width: lineWidth }} />
      </div>
      <p className={styles.subHeading}>
      Why Thousands of Indian Businesses Trust Delfyle?
      </p>
    </div>
    <div
      ref={sectionRef}
      className={styles.stickyFeatureSection}
      style={{ position: 'relative', fontFamily: "'Inter', sans-serif" }}
    >
      {/* Left: Scrollable Fields */}
      <div className={styles.leftCol}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-block ${styles.featureBlock}`}
            ref={el => { featureRefs.current[index] = el; }}
          >
            <div className={styles.featureInner}>
              <div className={styles.featureLogo}>
                <span style={{
                  display: 'inline-block',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: 'rgba(180, 0, 104, 0.8)',
                }} />
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Pinned Block (with GSAP) */}
      <div className={styles.rightCol} ref={pinRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.pinnedBlock}
          >
            <Image
              src={`/images/${activeIndex}.png`}
              className={styles.pinnedImage}
              alt="Sticky Feature Reveal"
              width={664}
              height={450}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    </>
  );
};

export default StickyFeatureReveal;
