"use client";

import React, { useEffect, useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEight/ComponentEight.module.css';
import Button from '../../../Components/Button/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface CardItem {
  type: 'online-event' | 'report' | 'guide';
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface ComponentEightProps {
  title?: string;
  description?: string;
  cards?: CardItem[];
  showTitle?: boolean;
  showDescription?: boolean;
}

const defaultProps = {
  title: "How Delfyle Simplifies ITR-1 (Sahaj) Filing?",
  description: "At Delfyle, we ensure:",
  showTitle: true,
  showDescription: true,
  cards: [
    {
      type: 'step',
      title: "Correct ITR Form Selection",
      description: "We help choose the right ITR form based on your income source and eligibility.",
      buttonText: "Contact team",
      buttonLink: ""
    },
    {
      type: 'step',
      title: "Accurate Tax Calculations",
      description: "All tax liability and deductions are computed with precision to avoid errors.",
      buttonText: "Contact team",
      buttonLink: ""
    },
    {
      type: 'step',
      title: "Expert Review",
      description: "A tax expert reviews your return to ensure compliance and accuracy.",
      buttonText: "Contact team",
      buttonLink: ""
    },
    {
      type: 'step',
      title: "Timely Filing",
      description: "Your return is filed well within the due date to avoid penalties or interest.",
      buttonText: "Contact team",
      buttonLink: ""
    },
    {
      type: 'step',
      title: "Refund & Notice Assistance",
      description: "We assist with tracking refunds and responding to any notices from the IT Department.",
      buttonText: "Contact team",
      buttonLink: ""
    },
    {
      type: 'step',
      title: "Bank-Grade Security",
      description: "Your data is protected with industry-standard, bank-grade encryption.",
      buttonText: "Contact team",
      buttonLink: ""
    }
  ]
};


const getIconForType = (type: CardItem['type']) => {
  switch (type) {
    case 'online-event':
      return '▶';
    case 'report':
    case 'guide':
      return '🗐';
    default:
      return '🗐';
  }
};

const getTypeLabel = (type: CardItem['type']) => {
  switch (type) {
    case 'online-event':
      return 'Online event';
    case 'report':
      return 'Report';
    case 'guide':
      return 'Guide';
    default:
      return 'Report';
  }
};

const ComponentEight: React.FC<ComponentEightProps> = ({
  title = defaultProps.title,
  description = defaultProps.description,
  cards = defaultProps.cards,
  showTitle = defaultProps.showTitle,
  showDescription = defaultProps.showDescription
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;

    if (section && cards.length > 0) {
      // Initial states
      gsap.set([header, cards], {
        y: 5
      });


      // Add hover animations for each card
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -5,
            scale: 1.015,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)",
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
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
      <div ref={headerRef} className={styles.header}>
       <h2 className={styles.mainHeading}>{title}</h2>
        <p className={styles.mainDescription}>{description}</p>
      </div>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={styles.card}
            ref={el => {
              if (el) cardsRef.current[index] = el;
            }}
          >
          <div className={styles.cardTag}>
              <span className={styles.tagIcon}>{getIconForType(card.type as CardItem['type'])}</span> {getTypeLabel(card.type as CardItem['type'])}
          </div>
            <h3 className={styles.cardHeading}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
            <Button
              type="smallWhatWeDoButton"
              text={card.buttonText}
              onClick={() => window.location.href = card.buttonLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComponentEight; 