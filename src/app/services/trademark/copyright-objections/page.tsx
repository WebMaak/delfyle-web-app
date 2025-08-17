"use client";

import React, { useState, useEffect, useRef } from "react";
import StartupHero from "../StartupHero";
import styles from "../StartupHero.module.css";
import BigLogoMarquee from "../../../Components/BigLogoMarquee/BigLogoMarquee";
import ModernFooter from "../../../Components/Footer/ModernFooter";
import ToggleNav from "../../../Components/ToggleNav/toggleNav";
import TopMarquee from "../../../Components/TopMarquee/TopMarquee";
import { 
  ModernNavbar, 
  ModernNavBody, 
  ModernNavItems, 
  ModernNavbarLogo, 
  ModernNavbarButton
} from "../../../Components/ui/modern-navbar";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import PrivateLimitedCompanyContent from "./PrivateLimitedCompanyContent";
import CustomAccordion from "../../../Components/CustomAccordion/CustomAccordion";
import Button from "../../../Components/Button/Button";
import AuthManager from "../../../Components/admin/AuthManager";
import { useUser } from '../../../../hooks/useUser';
import CallToAction from "../../../Components/CallToAction/CallToAction";
import TitleDescCanvas from "../../../Components/TrialComponent/TitleDescCanvas/TitleDescCanvas";
import { FaPhone, FaEnvelope, FaUsers, FaCalendar, FaPaintBrush, FaRocket,  FaCheckCircle } from "react-icons/fa";
import ListComponentTwo from "../../../Components/TrialComponent/ListComponent/ListComponentReusable";
import ListComponent from "./ListComponent";
import { FiFileText, FiMusic, FiImage, FiFilm, FiMic, FiCode } from 'react-icons/fi';
import PrivateLimitedCompanyContentTwo from "./PrivateLimitedCompanyContentTwo";
import { FaGavel, FaFileContract, FaShieldAlt } from 'react-icons/fa';


// Register ScrollTrigger and ScrollSmoother plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const TrademarkObjection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [panelType, setPanelType] = useState<'auth' | 'profile' | null>(null);
  const { user, loading, setUser } = useUser();
  const progressBarRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);

  const navItems = [
    { name: "Startup", link: "#startup" },
    { name: "Trademark", link: "#trademark" },
    { name: "Registration", link: "#registration" },
    { name: "Goods & Services Tax", link: "#gst" },
    { name: "MCA", link: "#mca" },
    { name: "Compliance", link: "#compliance" },
    { name: "Income Tax", link: "#income-tax" },
    { name: "About Us", link: "/about" }
  ];

  // Progress bar animation
  useEffect(() => {
    // Create ScrollSmoother
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1,
    });

    // Progress bar animation
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: "100%",
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#smooth-content",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            // Optional: You can add additional logic here if needed
          }
        }
      });
    }

    // Cleanup
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Listen for custom event from ToggleNav
  useEffect(() => {
    const handleToggleNavMenu = (e: any) => {
      if (smootherRef.current) {
        if (e.detail.isOpen) {
          smootherRef.current.paused(true);
        } else {
          smootherRef.current.paused(false);
        }
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('toggleNavMenu', handleToggleNavMenu);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('toggleNavMenu', handleToggleNavMenu);
      }
    };
  }, []);

  // Array of company logos from the CompanyLogos directory
  const companyLogos = [
    "/CompanyLogos/1.png",
    "/CompanyLogos/2.png",
    "/CompanyLogos/3.png",
    "/CompanyLogos/4.png",
    "/CompanyLogos/5.png",
    "/CompanyLogos/6.png",
    "/CompanyLogos/7.png",
    "/CompanyLogos/8.png",
    "/CompanyLogos/9.png",
    "/CompanyLogos/10.png",
    "/CompanyLogos/11.png",
    "/CompanyLogos/12.png",
    "/CompanyLogos/13.png",
    "/CompanyLogos/14.png",
    "/CompanyLogos/15.png",
    "/CompanyLogos/16.png",
    "/CompanyLogos/17.png",
    "/CompanyLogos/18.png",
    "/CompanyLogos/19.png",
    "/CompanyLogos/20.png",
    "/CompanyLogos/21.png",
    "/CompanyLogos/22.png",
    "/CompanyLogos/23.png",
    "/CompanyLogos/24.png",
    "/CompanyLogos/25.png",
    "/CompanyLogos/26.png",
    "/CompanyLogos/27.png",
    "/CompanyLogos/28.png",
    "/CompanyLogos/29.png",
    "/CompanyLogos/30.png",
  ];
  
 
  return (
    <>
    <TopMarquee />
      {/* ToggleNav for tablet and mobile only - moved above progress bar */}
      <div className="block lg:hidden fixed inset-x-0 top-0 z-[1100]">
        <ToggleNav 
          mainOptions={navItems.map(item => item.name)}
        />
      </div>
    <div id="smooth-wrapper" style={{ height: '100vh', overflow: 'hidden' }}>
      {/* Progress Bar */}
      <div 
        style={{
          position: 'fixed',
          top: 30,
          left: 0,
          width: '100%',
          height: '4px',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
        }}
      >
        <div
          ref={progressBarRef}
          style={{
            width: '0%',
            height: '100%',
            background: 'linear-gradient(90deg, #ff0080 0%,#ff0080 25%, #ff0080 50%,rgb(206, 2, 70) 75%, rgb(206, 2, 70) 100%)',
            transition: 'width 0.1s ease-out',
            // boxShadow: '0 0 15px rgba(255, 0, 128, 0.6)',
          }}
        />
      </div>

      {/* Modern Navbar */}
      <div className="fixed inset-x-0 top-0 z-50">
        <ModernNavbar user={user}>
          <ModernNavBody user={user} onProfileClick={() => setPanelType('profile')}>
            <ModernNavbarLogo />
            <ModernNavItems items={navItems} />
            <div className="modernNavActions">
              <ModernNavbarButton href="/contact">Contact us</ModernNavbarButton>
              {loading ? null : !user && (
                <Button text="Sign In" type="whiteButtonNoBackground" onClick={() => setPanelType('auth')} />
              )}
            </div>
          </ModernNavBody>
        </ModernNavbar>
      </div>

      <AuthManager 
        isOpen={!!panelType} 
        onClose={() => setPanelType(null)} 
        onUserChange={setUser} 
        panelType={panelType} 
      />

      {/* Main Content */}
      <main id="smooth-content" className="min-h-screen">
        <div >
          <StartupHero
            heading={
              <>
                <span className={styles.coloredplc}>Copyright Registration</span>
                <br />
                <span className={styles.coloredreg}>Protect Your Creative Works</span>
                <span style={{ letterSpacing: 'normal' }}> in India with</span>
                <span className={styles.colored}>Delfyle</span>
              </>
            }
            description="Copyright protects your original creations, giving you exclusive rights over their use and distribution. Delfyle simplifies the registration process, ensuring your intellectual property is legally secured."
          />

          {/* Big Company Logo Marquee Section */}
          <section style={{ 
            overflow: 'hidden'
          }}>        
            <BigLogoMarquee 
              logos={companyLogos}
              direction="left"
              speed="100s"
            />
          </section>

          <PrivateLimitedCompanyContent/>
          
          <PrivateLimitedCompanyContentTwo/>

          <TitleDescCanvas
            features={[
              {
                icon: <FiFileText />,
                title: 'Literary Works',
                description: 'Books, articles, essays, poems, and other written materials (excluding computer programs).',
              },
              {
                icon: <FiMusic />,
                title: 'Musical Works',
                description: 'Musical compositions, song lyrics, and sheet music.',
              },
              {
                icon: <FiImage />,
                title: 'Artistic Works',
                description: 'Paintings, sculptures, drawings, photographs, and other visual art forms.',
              },
              {
                icon: <FiFilm />,
                title: 'Cinematographic Films',
                description: 'Films, documentaries, and other audiovisual works.',
              },
              {
                icon: <FiMic />,
                title: 'Sound Recordings',
                description: 'Audio recordings including music, spoken word, and other sound-based content.',
              },
              {
                icon: <FiCode />,
                title: 'Computer Programs, Tables & Compilations',
                description: 'Software, databases, and other digital content.',
              },
            ]}
            subHeading="Copyright Protection"
            heading="What Works Can You Copyright in India?"
            description="Copyright protection in India covers a wide variety of creative works. Filing for copyright grants you exclusive rights over your creations and a certificate of registration."
          />

          <PrivateLimitedCompanyContentTwo/>

          {/* Copyright Registration Process Accordion */}
          <CustomAccordion
            subheading="Copyright Registration"
            title="How to Register Your Copyright Online in India"
            description="Follow these steps to secure legal protection for your creative work quickly and efficiently:"
            items={[
              {
                id: 'step-1',
                title: 'Application Submission',
                content:
                  'Draft an application in the required format (Form XIV) with all necessary details. Each individual work requires a separate application, signed by both the applicant and an advocate or authorized representative.',
                stepNumber: 1
              },
              {
                id: 'step-2',
                title: 'Diary Number Assignment',
                content:
                  'After submission, the Registrar assigns a Diary Number to your application, officially starting the registration process.',
                stepNumber: 2
              },
              {
                id: 'step-3',
                title: 'Objection Handling',
                content:
                  'If objections are raised within 30 days, a hearing is scheduled. If no objections arise, the application proceeds to the next step automatically.',
                stepNumber: 3
              },
              {
                id: 'step-4',
                title: 'Final Scrutiny and Certificate Issuance',
                content:
                  'After the hearing or in the absence of objections, the application is scrutinized for approval. Upon successful approval, a Copyright Registration Certificate is issued.',
                stepNumber: 4
              },
              {
                id: 'step-5',
                title: 'Timeline',
                content:
                  'The entire copyright registration process typically takes 2 to 3 months, depending on the type of work and any objections raised during the review.',
                stepNumber: 5
              }
            ]}
            variant="numbered"
            theme="light"
            maxOpenItems={1}
          />

          <CallToAction
            heading="Why Choose Delfyle for"
            highlighted="Copyright Objection Handling?"
            subheading="We assist you in managing copyright objections efficiently, providing expert guidance, legal support, and fast resolution to protect your intellectual property."
            cards={[
              {
                icon: <FaGavel className="text-2xl" />,
                title: "Legal Expertise",
                description: "Professional guidance to handle copyright disputes effectively.",
              },
              {
                icon: <FaFileContract className="text-2xl" />,
                title: "Quick Documentation",
                description: "Prepare and submit all necessary documentation for objection handling.",
              },
              {
                icon: <FaShieldAlt className="text-2xl" />,
                title: "IP Protection",
                description: "Ensure your intellectual property rights remain secure and enforced.",
              },
            ]}
            primaryBtnText="Resolve Copyright Objection"
            primaryBtnLink="https://wa.me/917439587419"
            secondaryBtnText="Get Free Consultation"
            secondaryBtnLink="/contact"
          />

          
        </div>

        {/* Footer */}
        <ModernFooter/>
      </main>
    </div>
    </>
  );
};

export default TrademarkObjection; 