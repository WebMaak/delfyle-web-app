"use client";

import React, { useEffect, useRef } from "react";
import styles from "./DemoHero.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

const DemoHero: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const firstTextRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const secondTextRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current;
    const firstText = firstTextRef.current;
    const leftColumn = leftColumnRef.current;
    const secondText = secondTextRef.current;
    const section = sectionRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;
    const card4 = card4Ref.current;

    if (cards && firstText && leftColumn && secondText && section && card1 && card2 && card3 && card4) {
      // Calculate the final position
      const firstTextBottom = firstText.getBoundingClientRect().bottom;
      const leftColumnLeft = leftColumn.getBoundingClientRect().left;
      const cardsLeft = cards.getBoundingClientRect().left;
      const xOffset = leftColumnLeft - cardsLeft;
      const yOffset = firstTextBottom - cards.getBoundingClientRect().top;

      // Get initial positions of cards
      const card1Pos = card1.getBoundingClientRect();
      const card2Pos = card2.getBoundingClientRect();
      const card3Pos = card3.getBoundingClientRect();
      const card4Pos = card4.getBoundingClientRect();

      // Calculate swap positions with adjustments
      const card1ToCard4 = {
        x: (card4Pos.left - card1Pos.left) + 10,
        y: (card4Pos.top - card1Pos.top) + 10
      };
      const card2ToCard3 = {
        x: (card3Pos.left - card2Pos.left) + 70,
        y: (card3Pos.top - card2Pos.top) + 10
      };
      const card3ToCard2 = {
        x: (card2Pos.left - card3Pos.left) + 20,
        y: (card2Pos.top - card3Pos.top) - 50
      };
      const card4ToCard1 = {
        x: (card1Pos.left - card4Pos.left) - 10,
        y: (card1Pos.top - card4Pos.top) - 15
      };

      // Set initial rotation
      gsap.set(cards, { rotation: 0 });

      // Create a timeline for smooth animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          pin: false,
          markers: false,
          onUpdate: (self) => {
            // Update position based on scroll progress
            gsap.set(cards, {
              x: xOffset * self.progress,
              y: yOffset * self.progress,
              rotation: 0 - (-16 * self.progress),
            });

            // Animate card swaps with adjustments
            gsap.set(card1, {
              x: card1ToCard4.x * self.progress,
              y: card1ToCard4.y * self.progress,
            });
            gsap.set(card4, {
              x: card4ToCard1.x * self.progress,
              y: card4ToCard1.y * self.progress,
            });
            gsap.set(card2, {
              x: card2ToCard3.x * self.progress,
              y: card2ToCard3.y * self.progress,
            });
            gsap.set(card3, {
              x: card3ToCard2.x * self.progress,
              y: card3ToCard2.y * self.progress,
            });
          },
        },
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

  return (
    <section ref={sectionRef} className={styles.heroSection}>      
      <div className={styles.waveOverlay} />
      <div className={styles.contentContainer}>
        <div ref={leftColumnRef} className={styles.textColumn}>
          <div ref={firstTextRef} className={styles.textContentContainer}>
            <div className={styles.brandContainer}>
              <h1 className={styles.brandName}>Delfyle</h1>
            </div>
            <div className={styles.taglineContainer}>
              <h2 className={styles.headingLine}>Your Business,</h2>
              <h2 className={styles.headingLine}>Hassle-Free</h2>
            </div>
            <p className={styles.subHeading}>
              Delfyle is the dedicated filing, compliance, and legal services arm of a reputed startup incubator, while also operating as an independent legal and compliance consultancy. We serve as the CA, CS, and legal backbone for early-stage and growth-stage startups, offering complete regulatory support under one roof.
            </p>
            {/* <div className={styles.buttonsContainer}>
              <button className={styles.primaryButton}>
                Get a free consultation.
              </button>
              <button className={styles.secondaryButton}>
                <span className={styles.playIcon}>▶</span> See our case studies
              </button>
            </div> */}
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div ref={cardsRef} className={styles.imageColumn}>
            <div className={styles.cardsContainer}>
              <div ref={card1Ref} className={styles.card1}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>🧩</span>
                  <span className={styles.cardTitle}>All-in-One Legal & Compliance Hub</span>
                </div>
                <p className={styles.cardDescription}>
                  End-to-end solutions for GST, trademarks, ISO, accounting and more. Under one roof.
                </p>
              </div>
              <div ref={card2Ref} className={styles.card2}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>🚀</span>
                  <span className={styles.cardTitle}>Built for Startups & SMEs</span>
                </div>
                <p className={styles.cardDescription}>
                  Simplified, affordable services tailored for growing businesses.
                </p>
              </div>
              <div ref={card3Ref} className={styles.card3}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>🌍</span>
                  <span className={styles.cardTitle}>Trusted PAN India</span>
                </div>
                <p className={styles.cardDescription}>
                  <span className={styles.clientsValue}>1500+ clients</span> across India rely on us for consistent, reliable support.
                </p>
              </div>
              <div ref={card4Ref} className={styles.card4}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>👥</span>
                  <span className={styles.cardTitle}>Expert Team, Personalized Care</span>
                </div>
                <p className={styles.cardDescription}>
                  Legal experts delivering prompt, transparent, and human-focused service.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.textColumn}>
            <div ref={secondTextRef} className={styles.textContentContainer}>
              <div className={styles.taglineContainer}>
                <h2 className={styles.headingLine}>But we don't</h2>
                <h2 className={`${styles.headingLine} ${styles.stopText} ${styles.gradientText} ${styles.gradientTextLarge}`}>stop</h2>
                <h2 className={`${styles.headingLine} ${styles.thereText} ${styles.gradientText} ${styles.gradientTextMedium}`}>there!</h2>
              </div>
              <p className={styles.subHeading}>
                Delfyle also caters to established corporates, enterprises, and government bodies looking to outsource their legal and compliance operations for greater efficiency and reduced overhead.
              </p>
              {/* <div className={styles.buttonsContainer}>
                <button className={styles.primaryButton}>
                  Start your journey.
                </button>
                <button className={styles.secondaryButton}>
                  <span className={styles.playIcon}>▶</span> Watch demo
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoHero;
