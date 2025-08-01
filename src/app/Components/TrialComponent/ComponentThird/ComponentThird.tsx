"use client";

import React, { useEffect, useRef } from 'react';
import styles from './ComponentThird.module.css';
import Button from '../../Button/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface Card {
  title: string;
  description: string;
  learnMoreLink: string;
}

interface ComponentThirdProps {
  mainHeading?: string;
  cards: Card[];
}

const defaultProps = {
  mainHeading: "ComponentThird",
  cards: [
    {
      title: "Professional services",
      description: "Integrate Stripe faster and with fewer people, with the help of our in-house payments and financial services experts. Our team supports compliance of regulatory requirements and data security standards.",
      learnMoreLink: "#"
    },
    {
      title: "Services partners",
      description: "Engage a certified Stripe partner to help with strategy, implementation, deployment, global expansion, or managed services for your Stripe solution.",
      learnMoreLink: "#"
    }
  ]
};

const ComponentThird: React.FC<ComponentThirdProps> = ({
  mainHeading = defaultProps.mainHeading,
  cards = defaultProps.cards
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (section && cards.length > 0) {
      // Initial states
      gsap.set(cards, {
        y: 50,
        opacity: 0
      });

      // Create timeline for entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate cards entrance
      tl.to(cards, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Add hover animations for each card
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.container}>
      <h2 className={styles.mainHeading}>{mainHeading}</h2>
      <div className={styles.cardsWrapper}>
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={styles.card}
            ref={el => {
              if (el) cardsRef.current[index] = el;
            }}
          >
          <div className={styles.cardHeader}></div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
          <p className={styles.cardDescription}>
              {card.description}
            </p>
            <Button 
              type="smallWhatWeDoButton" 
              text="Learn more"
              onClick={() => window.location.href = card.learnMoreLink}
            />
        </div>
        ))}
      </div>
    </section>
  );
};

export default ComponentThird; 