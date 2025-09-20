"use client";

import React, { useState, useEffect, useRef } from "react";
import StartupHero from "../StartupHero";
import styles from "../StartupHero.module.css";
import BigLogoMarquee from "../../../Components/BigLogoMarquee/BigLogoMarquee";
import ModernFooter from "../../../Components/Footer/ModernFooter";
import ToggleNav from "../../../Components/ToggleNav/toggleNav";
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

  

  // Company registration process data
  const registrationProcessData = [
    {
      id: 'step-1',
      title: 'Specialized Expertise',
      content:
        'Our team specializes in filing returns for charitable organizations, political entities, and educational institutions, ensuring full compliance with exemption rules.',
      stepNumber: 1
    },
    {
      id: 'step-2',
      title: 'Optimized Compliance',
      content:
        'We help you claim eligible exemptions and reduce tax liabilities by filing your return with precision.',
      stepNumber: 2
    },
    {
      id: 'step-3',
      title: 'Data Security',
      content:
        'Your financial information is protected with bank-grade encryption and privacy protocols.',
      stepNumber: 3
    },
    {
      id: 'step-4',
      title: 'Deadline Management',
      content:
        'With automated reminders and proactive support, we ensure you never miss an important tax deadline.',
      stepNumber: 4
    },
    {
      id: 'step-5',
      title: 'End-to-End Filing Support',
      content:
        'From preparation to submission and post-filing support, Delfyle handles the entire process so you can focus on your mission—not on paperwork.',
      stepNumber: 5
    }
  ];
  
 
  
  

  return (
    <>
    
      {/* ToggleNav for tablet and mobile only - moved above progress bar */}
      <div className="block lg:hidden fixed inset-x-0 top-0 z-[1100]">
        <ToggleNav 
          mainOptions={navItems.map(item => item.name)}
          subMenus={[
            // Startup
            [
              "Private Limited Company",
              "Limited Liability Partnership (LLP)",
              "One Person Company (OPC)",
              "Section 8 Company",
              "Partnership Firm",
              "Trust Registration",
              "Public Company",
              "Producer Company",
              "Nidhi Company"
            ],
            // Trademark
            [
              "Trademark Registration",
              "Trademark Objection",
              "Trademark Certificate",
              "Trademark Opposition",
              "Trademark Hearing",
              "Trademark Rectification",
              "Trademark Infringement Notice",
              "Trademark Renewal",
              "Trademark Restoration",
              "Trademark Transfer",
              "Expedited Trademark Registration",
              "Logo Design + Trademark Protection",
              "Design Registration",
              "Design Objection",
              "Copyright Registration",
              "Copyright Objections"
            ],
            // Registrations
            [
              "StartUp Registration",
              "Trade License",
              "FSSAI Registration",
              "FSSAI License",
              "Halal Certification",
              "ICEGATE Registration",
              "ISO Registration",
              "PF Registration",
              "ESI Registration",
              "Professional Tax Registration",
              "RCMC Registration",
              "WB RERA Registration",
              "12A and 80G Registration",
              "12A Registration",
              "80G Registration",
              "Darpan Registration",
              "Udyam Registration",
              "Digital Signature",
              "Shop and Establishment Act Registration",
              "Drug License",
              "FCRA Registration",
              "Fire License",
              "EPR Certficate"
            ],
            // GST
            [
              "GST Registration",
              "GST Return Filing",
              "GST Annual Return Filing (GSTR - 9)",
              "GST LUT Form",
              "GST Tax Notice",
              "GST Amendment",
              "GST Revocation",
              "GSTR-10"
            ],
            // MCA (already set previously)
            [
              "Company Compliance",
              "LLP Compliance",
              "OPC Compliance",
              "Name Change - Company",
              "Company Registered Office Change",
              "DIN eKYC Filing",
              "DIN Reactivation",
              "Director Change",
              "Remove Director",
              "Appointment of Auditor",
              "DPT-3 Filing",
              "LLP Form 11 Filing",
              "Dormant Status Filing",
              "MOA Amendment",
              "AOA Amendment",
              "Authorized Capital Increase",
              "Share Transfer",
              "Demat of Shares",
              "Winding Up - LLP",
              "Winding Up - Company"
            ],
            // Compliance
            [
              "FSSAI Renewal",
              "FSSAI Return Filing",
              "HR & Payroll Services",
              "PF Return Filing",
              "ESI Return Filing",
              "Professional Tax Return Filing",
              "Partnership Compliance",
              "Proprietorship Compliance",
              "Book-keeping"
            ],
            // Income Tax
            [
              "ITR-1 Return Filing",
              "ITR-2 Return Filing",
              "ITR-3 Return Filing",
              "ITR-4 Return Filing",
              "ITR-5 Return Filing",
              "ITR-6 Return Filing",
              "ITR-7 Return Filing",
              "TDS Return Filing",
              "Income Tax Notice",
              "TAN Registration",
              "15CA & 15CB Filing"
            ],
            // About Us (default)
            Array.from({ length: 18 }, (_, i) => `Sub Option ${i + 1}`)
          ]}
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
          heading={<><span className={styles.coloredplc}>Expert ITR-7 Filing </span><span className={styles.coloredreg}>Services Online</span> <span style={{letterSpacing: 'normal'}}> in India with</span> <span className={styles.colored}>Delfyle</span></>}
          description="Ensure timely ITR 7 return filing with Delfyle's expert assistance. We handle all compliance requirements, including ITR 7 return filing, return filing, and compliance monitoring."
          />
          
          {/* Big Company Logo Marquee Section */}
          <section style={{ 
            overflow: 'hidden'
          }}>        
            <BigLogoMarquee />
          </section>

          <PrivateLimitedCompanyContent/>

          <ListComponent/>

          <PrivateLimitedCompanyContentTwo/>

          {/* ITR-3 Filing Process Accordion */}
          <CustomAccordion
            subheading="ITR with Delfyle"
            title="Why Choose Delfyle for ITR-7 Filing?"
            description="At Delfyle, we provide trusted and efficient solutions for NGO, Trust, and Institutional ITR filing. Here’s what sets us apart:"
            items={registrationProcessData}
            variant="numbered"
            theme="light"
            maxOpenItems={1}
          />

          <CallToAction
            heading="Why Choose Delfyle for"
            highlighted="ITR 7 Return Filing?"
            subheading="We provide expert assistance for ITR 7 filing, helping charitable trusts, political parties, and other specified entities comply with tax regulations efficiently."
            cards={[
              {
                icon: <FaFileInvoice className="text-2xl" />,
                title: "Accurate Filing",
                description: "Professional guidance to file your ITR 7 correctly and on time.",
              },
              {
                icon: <FaFileContract className="text-2xl" />,
                title: "Quick Documentation",
                description: "Streamlined process for preparing and submitting all required documents.",
              },
              {
                icon: <FaShieldAlt className="text-2xl" />,
                title: "Compliance Support",
                description: "Ensure your ITR filing meets all legal requirements and avoids penalties.",
              },
            ]}
            primaryBtnText="File Your ITR 7"
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