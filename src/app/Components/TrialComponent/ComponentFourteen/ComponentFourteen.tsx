'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ComponentFourteen.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const companyData = {
  dynMedia: {
    topAnchor: "Case studies",
    mainHeading: "Dyn Media works with Stripe professional services for smooth platform launch and growth",
    introParagraph: "Dyn Media is a streaming sports platform where German sports fans can watch high-quality basketball, handball, field hockey, table tennis, and volleyball content, including games and highlights. The relatively new platform, which launched in August 2023, worked with Stripe to power its subscription offering and provide a simple and secure payment solution for its subscribers.",
    challenge: "Dyn Media is a streaming sports platform where German sports fans can watch high-quality basketball, handball, field hockey, table tennis, and volleyball content, including games and highlights. The relatively new platform, which launched in August 2023, worked with Stripe to power its subscription offering and provide a simple and secure payment solution for its subscribers.",
    solution: "Dyn Media launched with Stripe in August 2023 to power the payments and subscriptions behind the launch of the sports streaming platform and, subsequently, the successful collection of all registration fees from early platform sign-ups from June and July. Stripe Billing's coupon feature proved to be an integral part of Dyn Media's customer growth, giving the platform the ability to set up partnerships",
    products: [
      { name: "Billing", checked: true },
      { name: "Payments", checked: true },
      { name: "Radar", checked: true },
    ],
    cardImage: "/images/dyn_media_main.png", // New image for the right column card
    quote: "“Stripe professional services provided vital support in our launch window, helping us deal with the enormous peak in payments and supporting in saving some potential lost customers.”",
    author: "Moritz Mücke, Head of Product and Technology",
  },
  snowflake: {
    topAnchor: "Case studies",
    mainHeading: "Snowflake partners with Stripe experts to launch marketplace in four months",
    introParagraph: "Snowflake is a cloud data platform that enables data storage, processing, and analytics solutions for businesses. With the Data Cloud platform, Snowflake manages the complexities of data storage infrastructure, enabling organisations to focus on building data-driven solutions.",
    challenge: "Snowflake sought to create a B2B marketplace for its customers. Eager to move quickly and be first-to-market, Snowflake turned to Stripe for additional expertise to guide its technical approach, as well as subject matter expertise in topics such as regulation and compliance, to expedite the process.",
    solution: "Snowflake partnered with Stripe professional services team for expertise and guidance throughout their implementation. We provided product workshops, ongoing Q&A sessions, and weekly check-ins to keep the Snowflake team unblocked and moving efficiently. As a result, Snowflake successfully launched their marketplace in just four months.",
    products: [
      { name: "Connect", checked: true },
      { name: "Billing", checked: true },
      { name: "Payments", checked: true },
      { name: "Invoicing", checked: true },
    ],
    cardImage: "/images/snowflake_main.png", // Placeholder for Snowflake main image
    quote: "“Partnering with Stripe professional services team enabled us to quickly create a unique marketplace experience with consumption-based pricing options for our customers. We not only created a product we're happy with and customers are finding value from, but through the partnership we were able to execute quickly and effectively.”",
    author: "Eric Dorf, Senior Product Manager, Monetisation",
  },
  jpmorgan: {
    topAnchor: "Case studies",
    mainHeading: "JPMorgan enhances financial services with advanced analytics",
    introParagraph: "JPMorgan Chase & Co. is a leading global financial services firm with operations worldwide. The Firm is a leader in investment banking, financial services for consumers and small businesses, commercial banking, financial transaction processing, and asset management.",
    challenge: "JPMorgan faced challenges in processing vast amounts of financial data efficiently to derive actionable insights for their clients. They needed a robust solution to enhance their data analytics capabilities and improve decision-making processes.",
    solution: "JPMorgan partnered with a leading data analytics provider to implement a scalable data platform. This collaboration focused on integrating diverse data sources, developing custom analytics models, and providing real-time dashboards to support their financial operations and client services.",
    products: [
      { name: "Data Analytics", checked: true },
      { name: "Cloud Integration", checked: true },
      { name: "Security", checked: true },
    ],
    cardImage: "/images/jpmorgan_main.png", // Placeholder for JPMorgan main image
    quote: "“The new data analytics platform has transformed our ability to understand market trends and client needs, leading to more informed decisions and improved service delivery.”",
    author: "Head of Data Strategy, JPMorgan",
  },
  heygen: {
    topAnchor: "Case studies",
    mainHeading: "HeyGen revolutionizes content creation with AI-powered video generation",
    introParagraph: "HeyGen is a cutting-edge technology company specializing in AI-powered video creation. Their platform enables users to easily produce engaging video content for marketing, education, and entertainment purposes, revolutionizing how businesses communicate visually.",
    challenge: "HeyGen aimed to simplify and accelerate video content production for businesses without requiring extensive video editing skills. The primary challenge was to create a user-friendly platform that could generate high-quality videos from text inputs.",
    solution: "HeyGen developed an innovative AI-powered video generation platform that allows users to create professional videos from simple text descriptions. This solution leverages advanced AI models for script-to-video conversion, voice synthesis, and avatar animation, significantly reducing production time and costs.",
    products: [
      { name: "AI Video Generation", checked: true },
      { name: "Text-to-Speech", checked: true },
      { name: "Avatar Animation", checked: true },
    ],
    cardImage: "/images/heygen_main.png", // Placeholder for HeyGen main image
    quote: "“HeyGen's platform has empowered our team to produce engaging video content at an unprecedented speed, allowing us to scale our marketing efforts effectively and creatively.”",
    author: "CMO, HeyGen",
  },
};

const ComponentFourteen: React.FC = () => {
  const [currentCompany, setCurrentCompany] = useState(companyData.dynMedia);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const logoSectionRef = useRef<HTMLDivElement>(null);
  const topAnchorRef = useRef<HTMLAnchorElement>(null);
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const leftBottomContainerRef = useRef<HTMLDivElement>(null);
  const rightTopContainerRef = useRef<HTMLDivElement>(null);
  const rightBottomContainerRef = useRef<HTMLDivElement>(null);
  const isInitialRender = useRef(true);

  // Effect for entrance animation - runs only once
  useEffect(() => {
    const section = sectionRef.current;
    const logos = logoSectionRef.current?.children;
    const topAnchor = topAnchorRef.current;
    const mainHeading = mainHeadingRef.current;
    const leftBottom = leftBottomContainerRef.current;
    const rightTop = rightTopContainerRef.current;
    const rightBottom = rightBottomContainerRef.current;
    
    if (section && logos && topAnchor && mainHeading && leftBottom && rightTop && rightBottom) {
      const leftContent = leftBottom.children;
      const rightContent = [rightTop, rightBottom];

      gsap.set(logos, { opacity: 0, y: -30 });
      gsap.set([topAnchor, mainHeading, ...Array.from(leftContent)], { opacity: 0, y: 30 });
      gsap.set(rightContent, { opacity: 0, x: 30 });
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to(logos, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' })
        .to(topAnchor, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, "-=0.2")
        .to(mainHeading, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, "-=0.3")
        .to(leftContent, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' }, "-=0.3")
        .to(rightContent, { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' }, "-=0.3");
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // Effect for hover animations and content switching
  useEffect(() => {
    // Skip the fade-in animation on the very first render
    if (isInitialRender.current) {
        isInitialRender.current = false;
    } else if (mainContentRef.current) {
        gsap.fromTo(mainContentRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.1 });
    }

    const leftContainer = leftBottomContainerRef.current;
    const rightTop = rightTopContainerRef.current;
    const rightBottom = rightBottomContainerRef.current;
    const eventListeners: { el: HTMLElement, enter: () => void, leave: () => void }[] = [];

    const addCardHover = (element: HTMLElement) => {
      if (!element) return;
      const onEnter = () => gsap.to(element, { y: -10, boxShadow: '0 15px 25px -10px rgba(0,0,0,0.1)', duration: 0.3, ease: 'power2.out' });
      const onLeave = () => gsap.to(element, { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)', duration: 0.3, ease: 'power2.out' });
      element.addEventListener('mouseenter', onEnter);
      element.addEventListener('mouseleave', onLeave);
      eventListeners.push({ el: element, enter: onEnter, leave: onLeave });
    };

    const addPairHover = (pair: HTMLElement[]) => {
      if (pair.some(el => !el)) return;
      const onEnter = () => gsap.to(pair, { scale: 1.03, duration: 0.3, ease: 'power2.out' });
      const onLeave = () => gsap.to(pair, { scale: 1, duration: 0.3, ease: 'power2.out' });
      pair.forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
        eventListeners.push({ el, enter: onEnter, leave: onLeave });
      });
    };
    
    if (rightTop) addCardHover(rightTop);
    if (rightBottom) addCardHover(rightBottom);
    
    if (leftContainer) {
        const leftContent = Array.from(leftContainer.children) as HTMLElement[];
        if (leftContent.length >= 6) {
            addPairHover([leftContent[0], leftContent[1]]);
            addPairHover([leftContent[2], leftContent[3]]);
            addPairHover([leftContent[4], leftContent[5]]);
        }
    }
    
    return () => {
      eventListeners.forEach(({ el, enter, leave }) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [currentCompany]);

  const handleLogoClick = (companyKey: keyof typeof companyData) => {
    if (mainContentRef.current && companyData[companyKey] !== currentCompany) {
      gsap.to(mainContentRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentCompany(companyData[companyKey]);
        },
      });
    }
  };

  return (
    <section ref={sectionRef} className={styles.container}>
      <div ref={logoSectionRef} className={styles.companyLogosSectionTop}>
        <div className={styles.companyLogoWrapper} onClick={() => handleLogoClick('snowflake')}>
          <Image src="/CompanyLogos/1.png" alt="Snowflake Logo" width={120} height={40} />
        </div>
        <div className={styles.companyLogoWrapper} onClick={() => handleLogoClick('jpmorgan')}>
          <Image src="/CompanyLogos/2.png" alt="JPMorgan Logo" width={120} height={40} />
        </div>
        <div className={styles.companyLogoWrapper} onClick={() => handleLogoClick('heygen')}>
          <Image src="/CompanyLogos/3.png" alt="HeyGen Logo" width={120} height={40} />
        </div>
        <div className={styles.companyLogoWrapper} onClick={() => handleLogoClick('dynMedia')}>
          <Image src="/CompanyLogos/4.png" alt="Dyn Media Logo" width={120} height={40} />
        </div>
      </div>
      <div ref={mainContentRef}>
        <div className={styles.topAnchorContainer}>
          <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>{currentCompany.topAnchor}</a>
        </div>
        <div className={styles.mainContentWrapper}>
          <div className={styles.leftColumn}>
            <div className={styles.leftTopContainer}>
              <h2 ref={mainHeadingRef} className={styles.mainHeading}>ComponentFourteen: {currentCompany.mainHeading}</h2>
            </div>
            <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
              <h3 className={styles.subContentHeading}>Challenge</h3>
              <p className={styles.paragraphContent}>
                {currentCompany.challenge}
              </p>

              <h3 className={styles.subContentHeading}>Solution</h3>
              <p className={styles.paragraphContent}>
                {currentCompany.solution}
              </p>

              <h3 className={styles.subContentHeading}>Products</h3>
              <div className={styles.productsGrid}>
                <ul className={styles.productsList}>
                  {currentCompany.products.slice(0, Math.ceil(currentCompany.products.length / 2)).map((product, index) => (
                    <li key={index}><span className={styles.checkIcon}>{product.checked ? '✔' : ''}</span> {product.name}</li>
                  ))}
                </ul>
                <ul className={styles.productsList}>
                  {currentCompany.products.slice(Math.ceil(currentCompany.products.length / 2)).map((product, index) => (
                    <li key={index}><span className={styles.checkIcon}>{product.checked ? '✔' : ''}</span> {product.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div ref={rightTopContainerRef} className={styles.rightTopContainer}>
              <p className={styles.introParagraph}>
                {currentCompany.introParagraph}
              </p>
            </div>
            <div ref={rightBottomContainerRef} className={styles.rightBottomContainer}>
              <Image 
                src={currentCompany.cardImage} 
                alt="Company Main Image" 
                width={600} 
                height={400} 
                objectFit="cover"
                className={styles.companyMainImage}
              />
              <div className={styles.imageOverlayText}>
                <p className={styles.bottomQuote}>
                  {currentCompany.quote}
                </p>
                <p className={styles.bottomAuthor}>{currentCompany.author}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentFourteen; 