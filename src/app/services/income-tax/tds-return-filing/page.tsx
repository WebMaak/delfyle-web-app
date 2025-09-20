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
import ListComponentReusable from "./ListComponentReusable";
import ColumnRowTable from "../../../Components/TrialComponent/ColumnRowTable/ColumnRowTable";
import { FaBalanceScale, FaCheckCircle, FaFileAlt, FaFolderOpen } from "react-icons/fa";
import { FaFileInvoice, FaFileContract, FaShieldAlt } from 'react-icons/fa';


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
      title: 'Expert Guidance:',
      content:
        'TDS experts with in-depth tax compliance knowledge',
      stepNumber: 1
    },
    {
      id: 'step-2',
      title: 'Quarterly Compliance Alerts:',
      content:
        'Never miss a deadline again',
      stepNumber: 2
    },
    {
      id: 'step-3',
      title: 'Complete Filing Assistance:',
      content:
        'From document collection to e-verification',
      stepNumber: 3
    },
    {
      id: 'step-4',
      title: 'Revised Return Support:',
      content:
        'Timely rectifications for rejected/incorrect filings',
      stepNumber: 4
    },
    {
      id: 'step-5',
      title: 'Compliance with Latest Tax Norms:',
      content:
        'Stay ahead of changing laws',
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
          heading={<><span className={styles.coloredplc}>Expert TDS Return Filing </span><span className={styles.coloredreg}>Services Online</span> <span style={{letterSpacing: 'normal'}}> in India with</span> <span className={styles.colored}>Delfyle</span></>}
          description="Ensure timely TDS return filing with Delfyle's expert assistance. We handle all compliance requirements, including TDS return filing, return filing, and compliance monitoring."
          />
          
          {/* Big Company Logo Marquee Section */}
          <section style={{ 
            overflow: 'hidden'
          }}>        
            <BigLogoMarquee />
          </section>

          <PrivateLimitedCompanyContent/>

          <ColumnRowTable
            title="TDS Deposit & Due Dates"
            description="TDS deducted must be deposited on or before the 7th of the following month. For March deductions, due date is April 30th (in most cases)."
            columns={[
              ['Quarter', 'Period', 'TDS Return Due Date'],
              ['Q1', 'April - June', '31st July'],
              ['Q2', 'July - September', '31st October'],
              ['Q3', 'October - December', '31st January'],
              ['Q4', 'January - March', '31st May'],
            ]}
          />

          <ColumnRowTable
            title="Common TDS Sections & Thresholds"
            columns={[
              ['Section', 'Nature of Payment', 'Threshold', 'Rate'],
              ['192', 'Salary', 'Basic Exemption Limit', 'As per slab'],
              ['194A', 'Interest (non-securities)', 'Rs. 40,000 / 50,000', '10%'],
              ['194C', 'Contractor/Sub-contractor', 'Rs. 30,000 (single) / 1L', '1% / 2%'],
              ['194I', 'Rent (Land/Building/Machinery)', 'Rs. 2,40,000', '2% / 10%'],
              ['194J', 'Professional/Technical Fees', 'Rs. 30,000', '10%'],
            ]}
          />

          <ColumnRowTable
            title="Types of TDS Return Forms"
            columns={[
              ['Form', 'Use Case'],
              ['24Q', 'Salary payments'],
              ['26Q', 'Non-salary resident payments'],
              ['27Q', 'Payments to non-residents'],
              ['27EQ', 'Tax Collected at Source (TCS)'],
            ]}
          />

          <ListComponentReusable
            title="Claiming TDS Credit"
            description="Deductees must quote correct TDS certificate numbers and match TDS amounts when filing their Income Tax Returns. Accurate returns ensure correct reflection in Form 26AS and seamless refund/credit."
            listBlocks={[
              {
                icon: FaCheckCircle,
                iconColor:"#6ee7b7", // green-500
                title: "Importance of Timely TDS Return Filing",
                items: [
                  "Legal Compliance under Income Tax Act",
                  "Avoid Interest & Penalties (up to Rs. 200/day under Sec 234E)",
                  "Maintain Credibility & Government Compliance",
                  "Enable Deductees to Claim TDS Credit",
                  "Faster Refund & Reduced Tax Scrutiny",
                ],
              },
              {
                icon: FaBalanceScale,
                iconColor:"#fca5a5", // red-500
                title: "Penalties for Non-Compliance",
                items: [
                  "Late Deduction: Interest @ 1% p.m.",
                  "Late Payment: Interest @ 1.5% p.m.",
                  "Late Filing: Rs. 200/day till return filed",
                  "Penalty by Assessing Officer: Up to amount of TDS not paid",
                ],
              },
              {
                icon: FaFileAlt,
                iconColor:"#93c5fd", // blue-500
                title: "Penalties for Non-Compliance",
                items: [
                  "Late Deduction: Interest @ 1% p.m.",
                  "Late Payment: Interest @ 1.5% p.m.",
                  "Late Filing: Rs. 200/day till return filed",
                  "Penalty by Assessing Officer: Up to amount of TDS not paid",
                ],
              },
              {
                icon: FaFolderOpen,
                iconColor:"#c4b5fd", // purple-500
                title: "Filing Revised TDS Returns",
                items: [
                  "Required if PANs, challans, or deduction figures were incorrect",
                  "Submit corrected return after original is accepted by TIN-CPC",
                  "Retrieve Consolidated TDS File (Conso file) from TRACES for revision",
                ],
              },
              {
                icon: FaFileAlt,
                iconColor:"#fdba74", // purple-500
                title: "Essential Details Required for TDS Filing",
                items: [
                  "TAN and PAN of deductor and deductees",
                  "Period of deduction",
                  "Entity Type (Proprietor, LLP, Company, etc.)",
                  "Number of transactions",
                  "Incorporation date",
                  "Previous return acknowledgement details",
                ],
              },
            ]}
          />

          {/* ITR-3 Filing Process Accordion */}
          <CustomAccordion
            subheading="TDS with Delfyle"
            title="Why Choose Delfyle for TDS Return Filing?"
            description="At Delfyle, we provide trusted and efficient solutions for TDS return filing. Here’s what sets us apart:"
            items={registrationProcessData}
            variant="numbered"
            theme="light"
            maxOpenItems={1}
          />

         <CallToAction
          heading="Why Choose Delfyle for"
          highlighted="TDS Return Filing?"
          subheading="We simplify TDS return filing with expert guidance, accurate documentation, and complete compliance support to ensure timely submission and avoid penalties."
          cards={[
            {
              icon: <FaFileInvoice className="text-2xl" />,
              title: "Accurate Filing",
              description: "Professional assistance to file TDS returns correctly and on time.",
            },
            {
              icon: <FaFileContract className="text-2xl" />,
              title: "Quick Documentation",
              description: "Streamlined process for preparing and submitting all required TDS documents.",
            },
            {
              icon: <FaShieldAlt className="text-2xl" />,
              title: "Compliance Support",
              description: "Ensure your TDS filings meet all legal requirements and avoid penalties.",
            },
          ]}
          primaryBtnText="File Your TDS Return"
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