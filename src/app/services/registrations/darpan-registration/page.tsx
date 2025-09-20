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
import ListComponent from "./ListComponent";
import ListComponentTwo from "./ListComponentTwo";
import Button from "../../../Components/Button/Button";
import AuthManager from "../../../Components/admin/AuthManager";
import { useUser } from '../../../../hooks/useUser';
import PrivateLimitedCompanyContentTwo from "./PrivateLimitedCompanyContentTwo";
import PrivateLimitedCompanyContent from "./PrivateLimitedCompanyContent";
import { FiPackage, FiTool, FiUsers, FiAward} from "react-icons/fi";
import { FaTimesCircle } from "react-icons/fa";
import ListComponentReusable from "../../../Components/TrialComponent/ListComponent/ListComponentReusable";
import TitleDescCanvas from "../../../Components/TrialComponent/TitleDescCanvas/TitleDescCanvas";
import { FaUserTie, FaFileAlt, FaBolt } from "react-icons/fa";
import CallToAction from "../../../Components/CallToAction/CallToAction";
import Background from "@/app/Components/Background/Background";
import CustomAccordion from "../../../Components/CustomAccordion/CustomAccordion";
import IconTextList from "./IconTextList"


// Register ScrollTrigger and ScrollSmoother plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const TrademarkRectification: React.FC = () => {
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

  
  return (
    <>
    
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
      <main id="smooth-content" className="relative min-h-screen bg-background text-foreground">
        <div>
        <StartupHero
          heading={
            <>
              <span className={styles.coloredplc}>Darpan</span>
              <span className={styles.coloredreg}> Registration & Compliance</span>
              <span style={{ letterSpacing: 'normal' }}> with </span>
              <span className={styles.colored}>Delfyle</span>
            </>
          }
          description="Simplify your NGO Darpan registration with Delfyle. Our experts guide you through every step, from document preparation to securing your Unique Darpan ID, ensuring your organization gains official recognition and unlocks access to crucial government grants and funding."
        />


          {/* Big Company Logo Marquee Section */}
          <section>        
            <BigLogoMarquee />
          </section>

          <PrivateLimitedCompanyContent/>

          <ListComponent/>

          <CustomAccordion
            subheading="Benefits of Darpan Portal Registration"
            title="Why Your NGO Needs a Darpan ID"
            description="Registering your NGO on the Darpan portal is a crucial step towards enhancing your organization's credibility and accessing vital funding opportunities. This process offers a range of key benefits that empower your work."
            items={[
              {
                id: 'darpan-benefit-1',
                title: 'Official Recognition by NITI Aayog',
                content: 'A Darpan ID serves as official government recognition, certifying your NGO’s existence and operational legitimacy to various government bodies and stakeholders.',
                stepNumber: 1
              },
              {
                id: 'darpan-benefit-2',
                title: 'Eligibility for Multiple Government Grants',
                content: 'The Darpan ID is a mandatory prerequisite for applying to most central and state government grants, schemes, and funding opportunities.',
                stepNumber: 2
              },
              {
                id: 'darpan-benefit-3',
                title: 'Improved Credibility and Transparency',
                content: 'Public listing on the portal showcases your NGO’s commitment to transparency, which in turn boosts public trust and donor confidence.',
                stepNumber: 3
              },
              {
                id: 'darpan-benefit-4',
                title: 'Easy Access to Government Schemes and Updates',
                content: 'The portal keeps you informed about new government initiatives, allowing your NGO to stay updated and apply for relevant programs quickly.',
                stepNumber: 4
              },
              {
                id: 'darpan-benefit-5',
                title: 'Better Data Sharing and Centralised Communication',
                content: 'It acts as a centralized database that simplifies data sharing between your NGO and various government ministries, ensuring effective communication.',
                stepNumber: 5
              },
              {
                id: 'darpan-benefit-6',
                title: 'Boosts Donor Confidence and Public Trust',
                content: 'Being officially recognized on the government portal gives donors and partners a reliable way to verify your organization’s authenticity.',
                stepNumber: 6
              }
            ]}
            variant="numbered"
            theme="light"
            maxOpenItems={1}
          />

          <CallToAction
            heading="Get Your NGO Darpan Registration"
            highlighted="Unlock Access to Government Grants"
            subheading="Our team provides complete end-to-end assistance, from preparing documents to securing your Unique Darpan ID, ensuring a smooth and hassle-free registration process."
            cards={[
              {
                icon: <FaUserTie className="text-2xl" />,
                title: "Document Preparation",
                description: "We help you compile all required documents, including your registration certificate, PAN, and member details, for a seamless application.",
              },
              {
                icon: <FaFileAlt className="text-2xl" />,
                title: "Application Submission",
                description: "Our team accurately prepares and submits your application on the official NGO Darpan portal, ensuring all details are correctly filed.",
              },
              {
                icon: <FaBolt className="text-2xl" />,
                title: "Darpan ID Issuance",
                description: "We track your application until you receive your Unique Darpan ID, enabling you to apply for government schemes and grants.",
              },
            ]}
            primaryBtnText="Get Expert Help"
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

export default TrademarkRectification; 