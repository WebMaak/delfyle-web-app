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
  ModernNavbarButton,
} from "../../../Components/ui/modern-navbar";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import PrivateLimitedCompanyContent from "./PrivateLimitedCompanyContent";
import CustomAccordion from "../../../Components/CustomAccordion/CustomAccordion";
import ListComponent from "./ListComponent";
import Button from "../../../Components/Button/Button";
import AuthManager from "../../../Components/admin/AuthManager";
import { useUser } from '../../../../hooks/useUser';
import CallToAction from "../../../Components/CallToAction/CallToAction";
import PrivateLimitedCompanyContentTwo from "./PrivateLimitedCompanyContentTwo";
import { FaFileInvoice, FaFileContract, FaShieldAlt } from 'react-icons/fa';
import ServiceFeatureSection from "../../../Components/ServiceFeatureSection/ServiceFeatureSection"
import { 
  FaFileAlt,    // For "Accurate Documentation"
  FaBolt,       // For "Fast Approvals"
  FaUserShield  // For "Expert CA Guidance"
} from "react-icons/fa";


// Register ScrollTrigger and ScrollSmoother plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const PrivateLimitedCompany: React.FC = () => {
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
                <span className={styles.coloredplc}>15CA–15CB Filing </span><br />
                <span className={styles.coloredreg}>Services Online</span> 
                <span style={{letterSpacing: 'normal'}}> in India <br /> with</span> 
                <span className={styles.colored}>Delfyle</span>
              </>
            }
            description="Ensure smooth compliance for foreign remittances with Delfyle. Our experts handle Form 15CA & 15CB filing, CA certification, and submission to the Income Tax portal efficiently and accurately."
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

          <ListComponent/>

          <PrivateLimitedCompanyContentTwo/>

          {/* ITR-3 Filing Process Accordion */}
          <CustomAccordion
            subheading="15CA–15CB with Delfyle"
            title="Why Choose Delfyle for 15CA–15CB Filing?"
            description="At Delfyle, we provide end-to-end assistance with 15CA–15CB compliance. Our experts ensure accurate documentation, quick approvals, and seamless online filing. Here’s how we make the process simple for you:"
            items={[
              {
                id: 'step-1',
                title: 'Accurate Documentation & Filing',
                content:
                  'We ensure your 15CA and 15CB forms are prepared with precision, minimizing chances of errors or rejection.',
                stepNumber: 1
              },
              {
                id: 'step-2',
                title: 'Fast Processing & Approvals',
                content:
                  'Our streamlined process ensures quick submission and approval, saving you valuable time.',
                stepNumber: 2
              },
              {
                id: 'step-3',
                title: 'Expert CA Support & Guidance',
                content:
                  'Certified Chartered Accountants review and certify your filings, ensuring compliance with RBI and Income Tax rules.',
                stepNumber: 3
              },
              {
                id: 'step-4',
                title: '100% Online Filing – No Paperwork Hassle',
                content:
                  'The entire process, from documentation to submission, is handled digitally for your convenience.',
                stepNumber: 4
              },
              {
                id: 'step-5',
                title: 'Affordable Pricing for Individuals & Businesses',
                content:
                  'We offer cost-effective solutions tailored for both individuals and corporate remittances.',
                stepNumber: 5
              }
            ]}
            variant="numbered"
            theme="light"
            maxOpenItems={1}
          />



          <CallToAction
            heading="Why Choose Delfyle for"
            highlighted="15CA–15CB Filing?"
            subheading="We provide expert Chartered Accountant support for 15CA–15CB filing, ensuring accurate compliance with RBI and Income Tax regulations for smooth foreign remittances."
            cards={[
              {
                icon: <FaFileAlt className="text-2xl" />,
                title: "Accurate Documentation",
                description: "We prepare and verify Form 15CA & 15CB with precision to avoid rejection.",
              },
              {
                icon: <FaBolt className="text-2xl" />,
                title: "Fast Approvals",
                description: "Quick and hassle-free processing for timely foreign remittance clearance.",
              },
              {
                icon: <FaUserShield className="text-2xl" />,
                title: "Expert CA Guidance",
                description: "Certified CAs ensure compliance with RBI rules and provide end-to-end support.",
              },
            ]}
            primaryBtnText="File Your 15CA–15CB"
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

export default PrivateLimitedCompany; 