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
import CustomAccordion from "../../../Components/CustomAccordion/CustomAccordion";
import ListComponent from "./ListComponent";
import IconTextList from "./IconTextList";
import Button from "../../../Components/Button/Button";
import AuthManager from "../../../Components/admin/AuthManager";
import { useUser } from '../../../../hooks/useUser';
import CallToAction from "../../../Components/CallToAction/CallToAction";
import SingleList from "../../../Components/TrialComponent/SingleList/SingleList";
import ListComponentTwo from "../../../Components/TrialComponent/ListComponent/ListComponentTwo";
import { FaFileInvoice, FaFileContract, FaShieldAlt } from 'react-icons/fa';
import ServiceFeatureSection from "../../../Components/ServiceFeatureSection/ServiceFeatureSection"
import {
  Building2,
  BarChart3,
  FileSpreadsheet,
  LineChart,
  Calculator,
  Layers,
} from "lucide-react";

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
      title: 'Expert Company Tax Consultants',
      content:
        'We have seasoned professionals who specialize in corporate taxation, compliance, and financial planning.',
      stepNumber: 1
    },
    {
      id: 'step-2',
      title: 'Accuracy & Error-Free Returns',
      content:
        'Each ITR-6 is reviewed by professionals to eliminate mismatches, errors, or audit triggers.',
      stepNumber: 2
    },
    {
      id: 'step-3',
      title: 'Data Security & Confidentiality',
      content:
        'We follow bank-grade encryption and secure infrastructure to protect your sensitive data.',
      stepNumber: 3
    },
    {
      id: 'step-4',
      title: 'Deadline Tracking',
      content:
        'Receive proactive alerts and filing reminders—never miss a tax deadline.',
      stepNumber: 4
    },
    {
      id: 'step-5',
      title: 'Support for Audited Companies',
      content:
        'From Form 3CD to Form 3CA/3CB, we handle audit-related compliances as per Income Tax Rules.',
      stepNumber: 5
    },
    {
      id: 'step-6',
      title: 'Affordable & Transparent Pricing',
      content:
        'Delfyle offers competitive ITR-6 filing packages with no hidden costs.',
      stepNumber: 6
    },
    {
      id: 'step-7',
      title: 'Consultation & Evaluation:',
      content: 'We assess your company’s compliance needs and ITR-6 applicability.',
      stepNumber: 7
    },
    {
      id: 'step-8',
      title: 'Document Collection & Verification:',
      content: 'You provide the necessary financials, and we review your records.',
      stepNumber: 8
    },
    {
      id: 'step-9',
      title: 'Preparation of ITR:',
      content: 'You provide the necessary financials, and we review your records.',
      stepNumber: 9
    },
    {
      id: 'step-10',
      title: 'E-Filing:',
      content: 'ITR-6 is filed electronically on the Income Tax Portal.',
      stepNumber: 10
    },
    {
      id: 'step-11',
      title: 'Acknowledgement & Verification:',
      content: 'We assist with E-verification and provide you with the ITR-V receipt.',
      stepNumber: 11
    }
  ];
 
  
  

  return (
    <>
    <TopMarquee />
      {/* ToggleNav for tablet and mobile only - moved above progress bar */}
      <div className="block lg:hidden fixed inset-x-0 top-0 z-[1100]">
        <ToggleNav 
          mainOptions={navItems.map(item => item.name)}
            subMenus={[
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
          heading={<><span className={styles.coloredplc}>Expert ITR-6 Filing </span><span className={styles.coloredreg}>Services Online</span> <span style={{letterSpacing: 'normal'}}> in India with</span> <span className={styles.colored}>Delfyle</span></>}
          description="Ensure timely ITR 6 return filing with Delfyle's expert assistance. We handle all compliance requirements, including ITR 6 return filing, return filing, and compliance monitoring."
          />
          
          {/* Big Company Logo Marquee Section */}
          <section style={{ 
            overflow: 'hidden'
          }}>        
            <BigLogoMarquee />
          </section>

          <PrivateLimitedCompanyContent/>

          <ListComponent/>

          <SingleList
            title="Why Timely ITR-6 Filing is Important"
            description="Filing your company return before the deadline ensures more than just compliance:"
            buttonText="Learn More"
            showButton={true}
            features={{
              column: [
                "Carry Forward Business Losses (up to 8 years under Section 72)",
                "Avoid Late Filing Penalty (up to ₹10,000 under Section 234F)",
                "Lower Risk of Scrutiny and Notices",
                "Faster Tax Refunds",
                "Improved Creditworthiness for Loans or Government Tenders",
                "Smoother Exit Process in case of business winding up"
              ]
            }}  
          showFeatures={true}
          showTitle={true}
          showDescription={true}
          />
          
          <ServiceFeatureSection
            title="ITR-6 Form Structure"
            description="The ITR-6 form is comprehensive—designed to ensure accurate filing by companies, covering everything from basic identification to detailed financials and final tax computation."
            items={[
              {
                icon: Building2,
                title: "Part A: Entity Details & Financials",
                description:
                  "Contains general information such as Name, PAN, CIN, incorporation details, and contact info. Includes financial reports like Balance Sheet, Profit & Loss Account, and Manufacturing Account.",
              },
              {
                icon: BarChart3,
                title: "Balance Sheet",
                description:
                  "Reports assets, liabilities, share capital, reserves, and other figures as of the financial year-end.",
              },
              {
                icon: FileSpreadsheet,
                title: "Trading & Profit and Loss Account",
                description:
                  "Reflects income, expenditures, and resulting profit or loss during the year.",
              },
              {
                icon: Layers,
                title: "Manufacturing Account",
                description:
                  "Includes data related to inventory, production cost, and movement of raw materials and finished goods.",
              },
              {
                icon: LineChart,
                title: "Part B-TI: Total Income",
                description:
                  "Calculates total taxable income from various heads of income.",
              },
              {
                icon: Calculator,
                title: "Part B-TTI: Tax Liability",
                description:
                  "Determines total tax payable after adjustments for surcharge, rebate, interest, and eligible refunds.",
              },
            ]}
          />

          <IconTextList/>

          <ListComponentTwo
            title="Documents Required for ITR-6 Filing"
            description="No physical documents or annexures are required to be attached while submitting ITR-6. However, companies should maintain and reconcile:"
            listItems={[
              "Form 26AS (Tax Credit Statement)",
              "Trial Balance & Financial Statements",
              "TDS/TCS Certificates",
              "Bank Statements",
              "Audit Reports (if applicable)"
            ]}
          />


          {/* ITR-3 Filing Process Accordion */}
          <CustomAccordion
            subheading="ITR with Delfyle"
            title="Why File ITR-6 with Delfyle?"
            description="At Delfyle, we simplify tax filing with personalized support and reliable service. Whether you're employed, self-employed, or running a business, we make the process stress-free and precise—so you can file with confidence."
            items={registrationProcessData}
            variant="numbered"
            theme="light"
            maxOpenItems={1}
          />

          <CallToAction
            heading="Why Choose Delfyle for"
            highlighted="ITR 6 Return Filing?"
            subheading="We provide professional support for ITR 6 filing, helping companies file accurately and stay compliant with corporate tax regulations."
            cards={[
              {
                icon: <FaFileInvoice className="text-2xl" />,
                title: "Accurate Filing",
                description: "Expert assistance to file your ITR 6 correctly and on time.",
              },
              {
                icon: <FaFileContract className="text-2xl" />,
                title: "Quick Documentation",
                description: "Streamlined process for preparing and submitting all required tax documents.",
              },
              {
                icon: <FaShieldAlt className="text-2xl" />,
                title: "Compliance Support",
                description: "Ensure your ITR filing meets legal requirements and avoids penalties.",
              },
            ]}
            primaryBtnText="File Your ITR 6"
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