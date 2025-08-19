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
import ListComponentTwo from "./ListComponentTwo";
import Button from "../../../Components/Button/Button";
import AuthManager from "../../../Components/admin/AuthManager";
import { useUser } from '../../../../hooks/useUser';
import CallToAction from "../../../Components/CallToAction/CallToAction";
import PrivateLimitedCompanyContentTwo from "./PrivateLimitedCompanyContentTwo";
import PrivateLimitedCompanyContentThree from "./PrivateLimitedCompanyContentThree";
import { FaFileInvoice, FaFileContract, FaShieldAlt } from 'react-icons/fa';
import ServiceFeatureSection from "../../../Components/ServiceFeatureSection/ServiceFeatureSection"
import { Building2, BarChart3, FileSpreadsheet, Layers, LineChart, Calculator } from "lucide-react";


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
              <span className={styles.coloredplc}>Expert Income Tax Notice </span><br />
              <span className={styles.coloredreg}>Response Services Online</span> 
              <span style={{letterSpacing: 'normal'}}> for Individuals & Businesses <br /> with</span> 
              <span className={styles.colored}>Delfyle</span>
            </>
          }
          description="Handle your Income Tax notices efficiently with Delfyle. Our experts provide end-to-end support from analyzing the notice to submitting accurate responses, ensuring full compliance and peace of mind."
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

          <ListComponentTwo/>

          <StartupHero 
          heading={
            <>
              <span className={styles.coloredplc}>Expert Income Tax Notice </span><br />
              <span className={styles.coloredreg}>Response Services</span><br />
              <span className={styles.colored}>with Delfyle</span>
            </>
          }
          description="Efficiently handle your Income Tax notices with Delfyle. Get expert analysis, document support, and accurate responses—all in one place."
        />


          <PrivateLimitedCompanyContentThree/>


          {/* ITR-3 Filing Process Accordion */}
          <CustomAccordion
            subheading="Income Tax Notices with Delfyle"
            title="How Delfyle Helps with Income Tax Notices?"
            description="At Delfyle, we simplify the process of handling income tax notices for individuals and businesses. Our experts ensure timely, accurate, and compliant responses. Here’s how we assist you:"
            items={[
              {
                id: 'step-1',
                title: 'Expert Consultation',
                content: 'Guidance from experienced tax professionals to understand your notice and its implications.',
                stepNumber: 1
              },
              {
                id: 'step-2',
                title: 'Notice Analysis',
                content: 'Identify the reason behind the notice and the potential impact on your taxes or refund.',
                stepNumber: 2
              },
              {
                id: 'step-3',
                title: 'Document Assistance',
                content: 'Help in preparing, organizing, and verifying all supporting proofs required for the response.',
                stepNumber: 3
              },
              {
                id: 'step-4',
                title: 'Response Preparation',
                content: 'Draft accurate replies within the stipulated deadlines to ensure compliance and avoid penalties.',
                stepNumber: 4
              },
              {
                id: 'step-5',
                title: 'Compliance Assurance',
                content: 'Ensuring your submission is complete, lawful, and protects your refund from unnecessary adjustments.',
                stepNumber: 5
              }
            ]}
            variant="numbered"
            theme="light"
            maxOpenItems={1}
          />


          <CallToAction
            heading="Why Choose Delfyle for"
            highlighted="Income Tax Notices?"
            subheading="We provide expert assistance in handling Income Tax notices, helping individuals and businesses respond accurately and stay fully compliant with tax laws."
            cards={[
              {
                icon: <FaFileInvoice className="text-2xl" />,
                title: "Notice Analysis",
                description: "Identify the type and reason for the notice, ensuring you understand its implications.",
              },
              {
                icon: <FaFileContract className="text-2xl" />,
                title: "Document Assistance",
                description: "Organize and prepare all supporting documents needed for your response.",
              },
              {
                icon: <FaShieldAlt className="text-2xl" />,
                title: "Compliance Support",
                description: "Ensure your replies are timely, accurate, and fully compliant to avoid penalties.",
              },
            ]}
            primaryBtnText="Get Help with Notices"
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