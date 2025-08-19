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
  ModernMobileNav,
  ModernMobileNavHeader,
  ModernMobileNavMenu,
  ModernMobileNavToggle
} from "../../../Components/ui/modern-navbar";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import PrivateLimitedCompanyContent from "./PrivateLimitedCompanyContent";
import PrivateLimitedCompanyBenefits from "./PrivateLimitedCompanyBenefits";
import PrivateLimitedCompanyDisadvantages from "./PrivateLimitedCompanyDisadvantages";
import CustomAccordion from "../../../Components/CustomAccordion/CustomAccordion";
import ComponentEight from "./ComponentEight";
import ComponentSevenTop from "./ComponentSevenTop";
import ListComponent from "./ListComponent";
import Button from "../../../Components/Button/Button";
import AuthManager from "../../../Components/admin/AuthManager";
import { useUser } from '../../../../hooks/useUser';
import CallToAction from "../../../Components/CallToAction/CallToAction";
import { FaFileInvoice, FaFileContract, FaShieldAlt } from 'react-icons/fa';
import ServiceFeatureSection from "../../../Components/ServiceFeatureSection/ServiceFeatureSection";
import { FileWarning, Share2, Home, Briefcase, Building2, Ticket, User,
  Wallet,
  Percent,
  Calculator,
  FileText,
  Receipt,
  TicketPercent, } from "lucide-react";

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

  // Company registration process data
  const registrationProcessData = [
    {
      id: 'step-1',
      title: 'Get Expert Assistance',
      content: 'Obtain DSCs for directors and shareholders to sign documents online.',
      stepNumber: 1
    },
    {
      id: 'step-2',
      title: 'Apply for DIN',
      content: 'Directors must get their Director Identification Number via the MCA portal.',
      stepNumber: 2
    },
    {
      id: 'step-3',
      title: 'Reserve Company Name',
      content: 'Choose a unique name and submit it for approval through SPICe+ Part A.',
      stepNumber: 3
    },
    {
      id: 'step-4',
      title: 'Submit Company Info',
      content: 'Fill in capital, office address, and director details in SPICe+ Part B. Apply for PAN & TAN.',
      stepNumber: 4
    },
    {
      id: 'step-5',
      title: 'Submit Incorporation Docs',
      content: 'Submit signed MOA, AOA, and AGILE-PRO-S for GST, EPFO, ESIC & bank account setup.',
      stepNumber: 5
    },
    {
      id: 'step-6',
      title: 'Get Certificate of Incorporation',
      content: 'Receive COI from MCA with CIN, PAN & TAN after approval.',
      stepNumber: 6
    }
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

      Modern Navbar
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
          heading={<><span className={styles.coloredplc}>ITR 1 Return Filing</span><br /><span className={styles.coloredreg}>Return Filing</span> in India <br /> with <span className={styles.colored}>Delfyle</span></>}
          description="Ensure timely ITR 1 return filing with Delfyle's expert assistance. We handle all compliance requirements, including ITR 1 return filing, return filing, and compliance monitoring."
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

          <ComponentSevenTop/>

          <ServiceFeatureSection
            title="Who Cannot File ITR-1?"
            description="You are not eligible to file ITR-1 under the following conditions:"
            items={[
              {
                icon: FileWarning,
                title: "Non-Residents (NRI/RNOR)",
                description: "ITR-1 cannot be filed if your residential status is NRI or RNOR.",
              },
              {
                icon: FileWarning,
                title: "Income above ₹50 lakhs",
                description: "Individuals earning more than ₹50 lakhs are not eligible.",
              },
              {
                icon: Share2,
                title: "Capital Gains",
                description: "If you have income from capital gains, ITR-1 does not apply.",
              },
              {
                icon: Home,
                title: "Multiple House Properties",
                description: "Owning more than one house property disqualifies you.",
              },
              {
                icon: Briefcase,
                title: "Business or Profession Income",
                description: "If you earn from business or profession, you must use another ITR form.",
              },
              {
                icon: Building2,
                title: "Company Directorship",
                description: "Directors in companies cannot file ITR-1.",
              },
              {
                icon: Share2,
                title: "Unlisted Shares",
                description: "Holding or investing in unlisted shares disqualifies you.",
              },
              {
                icon: Ticket,
                title: "Lottery, Gambling, Racehorses",
                description: "Income from these activities is not allowed under ITR-1.",
              },
              {
                icon: Briefcase,
                title: "Deferred Tax on ESOPs",
                description: "Employees with ESOP-related deferred tax from start-ups cannot file ITR-1.",
              },
              {
                icon: FileWarning,
                title: "Section 194N Deduction",
                description: "If you claim deduction under section 194N, you cannot file ITR-1.",
              },
            ]}
            subHeading="ITR-1 Due Date for FY 2024-25"
            subDescription="The standard due date to file ITR-1 for Assessment Year 2025-26 is July 31, 2025. File early to avoid late fees and interest charges."
          />

          <ServiceFeatureSection
          title="Structure of the ITR-1 Form"
          description="The ITR-1 Form is organized into five parts and two schedules:"
          items={[
            {
              icon: User, 
              title: "Part A: Personal details",
              description: "Includes PAN, Aadhaar, and address information.",
            },
            {
              icon: Wallet, 
              title: "Part B: Income details",
              description: "Covers income from Salary, House Property, and Other Sources.",
            },
            {
              icon: Percent,
              title: "Part C: Deductions",
              description: "Deductions under Section 80C to 80U.",
            },
            {
              icon: Calculator, 
              title: "Part D: Tax computation",
              description: "Details of tax computation, refund, and bank account information.",
            },
            {
              icon: FileText, 
              title: "Part E: Additional disclosures",
              description: "Any extra disclosures required by the taxpayer.",
            },
            {
              icon: Receipt, 
              title: "Schedule IT",
              description: "Details of advance tax and self-assessment tax payments.",
            },
            {
              icon: TicketPercent,
              title: "Schedule TDS/TCS",
              description: "Tax deducted at source and tax collected at source information.",
            },
          ]}
        />

          <ListComponent/>

          <ComponentEight/>

          {/* Company Registration Process Accordion */}
          <CustomAccordion
            subheading="ITR with Delfyle"
            title="Why File ITR with Delfyle? Discover a Smarter, Simpler Way to Handle Your Taxes"
            description="At Delfyle, we simplify tax filing with personalized support and reliable service. Whether you're employed, self-employed, or running a business, we make the process stress-free and precise—so you can file with confidence."
            items={registrationProcessData}
            variant="numbered"
            theme="light"
            // maxOpenItems={1}
          />

          <CallToAction
            heading="Why Choose Delfyle for"
            highlighted="ITR 1 Return Filing?"
            subheading="We simplify ITR 1 filing with expert guidance, accurate documentation, and complete compliance support to ensure hassle-free income tax return submission."
            cards={[
              {
                icon: <FaFileInvoice className="text-2xl" />,
                title: "Accurate Filing",
                description: "Professional assistance to file your ITR correctly and on time.",
              },
              {
                icon: <FaFileContract className="text-2xl" />,
                title: "Quick Documentation",
                description: "Streamlined process to prepare and submit all required tax documents.",
              },
              {
                icon: <FaShieldAlt className="text-2xl" />,
                title: "Compliance Support",
                description: "Ensure your ITR filing meets all legal requirements and avoids penalties.",
              },
            ]}
            primaryBtnText="File Your ITR 1"
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