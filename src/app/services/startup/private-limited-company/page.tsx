"use client";

import React, { useState, useEffect, useRef } from "react";
import StartupHero from "../StartupHero";
import styles from "../StartupHero.module.css";
import BigLogoMarquee from "../../../Components/BigLogoMarquee/BigLogoMarquee";
import CustomAccordion from "../../../Components/CustomAccordion/CustomAccordion";
import PrivateLimitedCompanyContent from "./PrivateLimitedCompanyContent";
import PrivateLimitedCompanyTypes from "./PrivateLimitedCompanyTypes";
import PrivateLimitedCompanyBenefits from "./PrivateLimitedCompanyBenefits";
import PrivateLimitedCompanyDisadvantages from "./PrivateLimitedCompanyDisadvantages";
import PrivateLimitedCompanyRequirements from "./PrivateLimitedCompanyRequirements";
import PrivateLimitedCompanyDocs from "./PrivateLimitedCompanyDocs";
import PrivateLimitedPost from "./PrivateLimitedPost";
import ModernFooter from "../../../Components/Footer/ModernFooter";
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
import ToggleNav from '../../../Components/ToggleNav/toggleNav';
import Button from "../../../Components/Button/Button";
import AuthManager from "../../../Components/admin/AuthManager";
import { useUser } from '../../../../hooks/useUser';

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

    // Progress bar animation with more robust configuration
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: "#smooth-content",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3, // Smoother scrubbing
          invalidateOnRefresh: true, // Recalculate on page refresh
          markers: false, // For debugging
          onUpdate: (self) => {
            // Update progress bar width directly for more reliability
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`;
            }
          }
        }
      });
    }

    // Refresh ScrollTrigger on window resize for better responsiveness
    window.addEventListener('resize', () => {
      ScrollTrigger.refresh();
    });

    // Cleanup
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', () => {
        ScrollTrigger.refresh();
      });
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

  // Company registration process data
  const registrationProcessData = [
    {
      id: 'step-1',
      title: 'Acquire a Digital Signature Certificate (DSC)',
      content: 'All directors and shareholders must obtain a DSC for online document signing.',
      stepNumber: 1
    },
    {
      id: 'step-2',
      title: 'Obtain a Director Identification Number (DIN)',
      content: 'Essential for company directors, DIN is obtained through the MCA portal.',
      stepNumber: 2
    },
    {
      id: 'step-3',
      title: 'Name Reservation (SPICe+ Part A)',
      content: 'Choose a unique business name and submit for approval. Specify business activities and industrial classification.',
      stepNumber: 3
    },
    {
      id: 'step-4',
      title: 'Submit Company Details (SPICe+ Part B)',
      content: 'Provide company capital details, registered office address, and director information. Apply for PAN and TAN simultaneously.',
      stepNumber: 4
    },
    {
      id: 'step-5',
      title: 'Draft & Submit Incorporation Documents',
      content: 'Memorandum of Association (MOA) & Articles of Association (AOA) digitally signed and submitted. File AGILE-PRO-S form for GST, EPFO, ESIC, and bank account registration.',
      stepNumber: 5
    },
    {
      id: 'step-6',
      title: 'Receive Certificate of Incorporation',
      content: 'Upon approval, MCA issues a Certificate of Incorporation (COI) with CIN, PAN, and TAN.',
      stepNumber: 6
    }
  ];

  return (
    <>
      <TopMarquee />
      {/* ToggleNav for mobile */}
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
            // MCA
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
      

      {/* Main Content */}
      <main id="smooth-content" className="min-h-screen">
        <div className="bg-white">
          <StartupHero 
          heading={<><span className={styles.coloredplc}>Private Limited Company</span><br /><span className={styles.coloredreg}>Registration</span> in India <br /> with <span className={styles.colored}>Delfyle</span></>}
          description="Setting up a business in India often involves choosing a private limited company as a preferred option. This structure offers shareholders limited liability protection while placing specific ownership constraints. In contrast, in the case of an LLP, partners oversee the management. Private limited company registration allows for a clear distinction between directors and shareholders."
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

          <PrivateLimitedCompanyTypes/>

          <PrivateLimitedCompanyBenefits/>

          <PrivateLimitedCompanyDisadvantages/>

          <PrivateLimitedCompanyRequirements/>

          {/* Company Registration Process Accordion */}
          <CustomAccordion
            subheading="Requirements for registering"
            title="Company Registration Process – How to Register a Company in India with Delfyle?"
            description="Follow these 6 simple steps to register your private limited company in India. Our expert team will guide you through each step of the process."
            items={registrationProcessData}
            variant="numbered"
            theme="light"
            maxOpenItems={1}
          />

          <PrivateLimitedCompanyDocs/>

          <PrivateLimitedPost/>
        </div>

        {/* Footer */}
        <ModernFooter/>
      </main>
      <AuthManager 
        isOpen={!!panelType} 
        onClose={() => setPanelType(null)} 
        onUserChange={setUser} 
        panelType={panelType} 
      />
    </div>
    </>
  );
};

export default PrivateLimitedCompany;