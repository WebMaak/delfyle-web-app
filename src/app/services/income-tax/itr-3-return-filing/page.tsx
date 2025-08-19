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
import ListComponent from "./ListComponent";
import Button from "../../../Components/Button/Button";
import AuthManager from "../../../Components/admin/AuthManager";
import { useUser } from '../../../../hooks/useUser';
import CallToAction from "../../../Components/CallToAction/CallToAction";
import SingleList from "./SingleList";
import PrivateLimitedCompanyContentTwo from "./PrivateLimitedCompanyContentTwo";
import { FaFileInvoice, FaFileContract, FaShieldAlt } from 'react-icons/fa';
import ServiceFeatureSection from "../../../Components/ServiceFeatureSection/ServiceFeatureSection"
import {
  Briefcase,
  Building2,
  Globe,
  Layers,
  Home,
  IdCard,
  Banknote,
  FileText,
  TrendingUp,
  FolderOpen,
  Receipt,
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
      title: 'Expert Guidance from CA Professionals',
      content: "Avoid mistakes, incorrect filings, or non-compliance. Our experts assist you at every step.",
      stepNumber: 1
    },
    {
      id: 'step-2',
      title: 'Accurate Tax ComputatiComplete Compliance',
      content: 'We keep you updated with the latest tax regulations, sections, and compliance requirements.',
      stepNumber: 2
    },
    {
      id: 'step-3',
      title: 'Accuracy & Review',
      content: 'All returns undergo a multi-stage verification process to eliminate errors and ensure accuracy.',
      stepNumber: 3
    },
    {
      id: 'step-4',
      title: 'Smart Deductions & Refund Maximization',
      content: 'We ensure you claim every eligible deduction and optimize your tax liability.',
      stepNumber: 4
    },
    {
      id: 'step-5',
      title: ' End-to-End Support',
      content: 'From documents to filing to post-filing queries—Delfyle is with you, always.',
      stepNumber: 5
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

          <ModernMobileNav>
            <ModernMobileNavHeader>
              <ModernNavbarLogo />
              <ModernMobileNavToggle 
                isOpen={isMobileMenuOpen} 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              />
            </ModernMobileNavHeader>
            <ModernMobileNavMenu 
              isOpen={isMobileMenuOpen} 
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, index) => (
                <div key={index} className="w-full">
                  <a
                    href={item.link}
                    className="block w-full py-2 text-neutral-600 dark:text-neutral-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
              <ModernNavbarButton href="/contact" className="w-full mt-4">
                Contact Us
              </ModernNavbarButton>
              <ModernNavbarButton href="/signin" className="w-full mt-2" variant="secondary">
                Sign In
              </ModernNavbarButton>
            </ModernMobileNavMenu>
          </ModernMobileNav>
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
          heading={<><span className={styles.coloredplc}>Expert ITR-3 Filing </span><br /><span className={styles.coloredreg}>Services Online</span> <span style={{letterSpacing: 'normal'}}> in India <br /> with</span> <span className={styles.colored}>Delfyle</span></>}
          description="Ensure timely ITR 3 return filing with Delfyle's expert assistance. We handle all compliance requirements, including ITR 3 return filing, return filing, and compliance monitoring."
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

          <ServiceFeatureSection
            title="What is ITR-3 Form?"
            description="The ITR-3 Form is applicable to a specific group of taxpayers whose income sources are more complex or diverse. This includes those running businesses, offering professional services, or having other financial interests that require disclosure under Indian tax law. Below are the categories of taxpayers who are eligible or required to file using the ITR-3 form:"
            items={[
              {
                icon: Briefcase,
                title: "Individuals and HUFs who earn income from business or profession",
                description:
                  "For those earning from freelancing, consulting, or any self-owned business not registered as a company.",
              },
              {
                icon: Building2,
                title: "Directors of companies",
                description:
                  "Mandatory for company directors, even if they don’t have business income.",
              },
              {
                icon: Globe,
                title: "Individuals with foreign assets or income",
                description:
                  "Required if you hold foreign bank accounts, assets, or earn income from abroad.",
              },
              {
                icon: Layers,
                title: "Persons holding unlisted equity shares",
                description:
                  "Applicable if you own shares in private (unlisted) companies.",
              },
              {
                icon: Home,
                title:
                  "Taxpayers with capital gains, house property income, salary, and other income sources",
                description:
                  "When you earn from multiple sources along with business or profession.",
              },
            ]}
            subHeading="This form is crucial for comprehensive tax disclosure for professionals and business owners."
          />

          <ListComponent/>

          <SingleList/>

          <ServiceFeatureSection
            title="Documents Required for ITR-3 Filing"
            description="Before starting the ITR-3 form filing process, make sure you have the following documents ready:"
            items={[
              {
                icon: IdCard,
                title: "PAN & Aadhaar Card",
                description:
                  "Ensure your PAN and Aadhaar are linked and up to date for verification.",
              },
              {
                icon: Banknote,
                title: "Bank Account Details",
                description:
                  "Keep your bank account number and IFSC code ready for refund or payment purposes.",
              },
              {
                icon: FileText,
                title: "Form 16 (if salaried)",
                description:
                  "Required to report income from salary and tax deducted at source.",
              },
              {
                icon: TrendingUp,
                title: "Capital Gains Statements",
                description:
                  "Include reports from brokers or mutual fund statements for capital gains.",
              },
              {
                icon: Briefcase,
                title: "Business Income Details",
                description:
                  "Include profit & loss statements and books of accounts if applicable.",
              },
              {
                icon: Globe,
                title: "Foreign Asset Details",
                description:
                  "Report any foreign income or assets if applicable under disclosure rules.",
              },
              {
                icon: FolderOpen,
                title: "Investment & Deduction Proofs",
                description:
                  "Submit documents for Section 80C, 80D, and other deductions claimed.",
              },
              {
                icon: Receipt,
                title: "TDS/TCS Details",
                description:
                  "Verify Form 26AS, AIS, and TIS for taxes deducted or collected.",
              },
            ]}
          />
          
          <PrivateLimitedCompanyContentTwo/>

          {/* ITR-3 Filing Process Accordion */}
          <CustomAccordion
            subheading="ITR with Delfyle"
            title="Why File ITR-3 with Delfyle? Discover a Smarter, Simpler Way to Handle Your Taxes"
            description="At Delfyle, we simplify tax filing with personalized support and reliable service. Whether you're employed, self-employed, or running a business, we make the process stress-free and precise—so you can file with confidence."
            items={registrationProcessData}
            variant="numbered"
            theme="light"
            maxOpenItems={1}
          />

          <CallToAction
            heading="Why Choose Delfyle for"
            highlighted="ITR 3 Return Filing?"
            subheading="We offer expert support for ITR 3 filing, helping individuals and professionals with income from business or profession file accurately and stay fully compliant."
            cards={[
              {
                icon: <FaFileInvoice className="text-2xl" />,
                title: "Accurate Filing",
                description: "Professional assistance to file your ITR 3 correctly and on time.",
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
            primaryBtnText="File Your ITR 3"
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