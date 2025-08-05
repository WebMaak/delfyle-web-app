"use client";

import React, { useState, useRef } from 'react';
import styles from './CustomAccordion.module.css';
import gsap from 'gsap';

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  stepNumber?: number;
  icon?: string;
}

export interface CustomAccordionProps {
  title: string;
  subheading?: string;
  description?: string;
  items: AccordionItem[];
  theme?: 'light' | 'dark';
  variant?: 'numbered' | 'icon' | 'simple';
  maxOpenItems?: number;
  className?: string;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  title,
  subheading,
  description,
  items,
  theme = 'light',
  variant = 'numbered',
  maxOpenItems = 1,
  className = ''
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentInnerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      const newOpenItems = maxOpenItems === 1
        ? prev.includes(itemId) ? [] : [itemId]
        : prev.includes(itemId)
          ? prev.filter(id => id !== itemId)
          : prev.length >= maxOpenItems
            ? [...prev.slice(1), itemId]
            : [...prev, itemId];

      // Animate content after state update
      setTimeout(() => {
        animateContent(itemId, newOpenItems.includes(itemId));
      }, 0);

      return newOpenItems;
    });
  };

  const animateContent = (itemId: string, isOpening: boolean) => {
    const itemIndex = items.findIndex(item => item.id === itemId);
    const contentRef = contentRefs.current[itemIndex];
    const contentInnerRef = contentInnerRefs.current[itemIndex];
    const chevron = contentRef?.parentElement?.querySelector(`.${styles.chevron}`);

    if (contentRef && contentInnerRef) {
      if (isOpening) {
        // Measure the actual height of the content
        const contentHeight = contentInnerRef.scrollHeight;
        
        // Animate the content opening
        gsap.to(contentRef, {
          height: contentHeight,
          duration: 0.4,
          ease: "power2.out",
          onStart: () => {
            contentRef.style.overflow = 'hidden';
          },
          onComplete: () => {
            contentRef.style.overflow = 'visible';
          }
        });

        // Animate chevron rotation
        if (chevron) {
          gsap.to(chevron, {
            rotation: 180,
            duration: 0.3,
            ease: "power2.out"
          });
        }

        // Animate content fade in
        gsap.fromTo(contentInnerRef, 
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.3, delay: 0.1, ease: "power2.out" }
        );
      } else {
        // Animate the content closing
        gsap.to(contentRef, {
          height: 0,
          duration: 0.3,
          ease: "power2.in",
          onStart: () => {
            contentRef.style.overflow = 'hidden';
          }
        });

        // Animate chevron rotation
        if (chevron) {
          gsap.to(chevron, {
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        }

        // Animate content fade out
        gsap.to(contentInnerRef, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          ease: "power2.in"
        });
      }
    }
  };

  const addContentRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      contentRefs.current[index] = el;
    }
  };

  const addContentInnerRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      contentInnerRefs.current[index] = el;
    }
  };

  const renderIcon = (item: AccordionItem, index: number) => {
    if (variant === 'numbered') {
      return (
        <div className={styles.stepNumber}>
          {item.stepNumber || index + 1}
        </div>
      );
    } else if (variant === 'icon' && item.icon) {
      return (
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>{item.icon}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <section 
      className={`${styles.container} ${styles[`theme--${theme}`]} ${className}`}
    >
      <div className={styles.header}>
        {subheading && (
          <p className={styles.subHeading}>{subheading}</p>
        )}
        <h2 className={styles.mainHeading}>{title}</h2>
        {description && (
          <p className={styles.description}>{description}</p>
        )}
      </div>

      <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
        <div className={styles.accordionContainer}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.accordionItem} ${openItems.includes(item.id) ? styles.open : ''}`}
            >
              <button
                className={styles.accordionHeader}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.includes(item.id)}
                aria-controls={`accordion-content-${item.id}`}
              >
                <div className={styles.headerContent}>
                  {renderIcon(item, index)}
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </div>
                <div className={`${styles.chevron} ${openItems.includes(item.id) ? styles.rotated : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              
              <div
                ref={(el) => addContentRef(el, index)}
                id={`accordion-content-${item.id}`}
                className={`${styles.accordionContent} ${openItems.includes(item.id) ? styles.expanded : ''}`}
                aria-hidden={!openItems.includes(item.id)}
                style={{ height: 0, overflow: 'hidden' }}
              >
                <div 
                  ref={(el) => addContentInnerRef(el, index)}
                  className={styles.contentInner}
                >
                  <p className={styles.contentText}>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomAccordion; 