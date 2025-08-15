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
import ListComponent from "./ListComponent";
import ListComponentTwo from "./ListComponentTwo";
import Button from "../../../Components/Button/Button";
import AuthManager from "../../../Components/admin/AuthManager";
import { useUser } from '../../../../hooks/useUser';
import PrivateLimitedCompanyContentTwo from "./PrivateLimitedCompanyContentTwo";
import CallToAction from "./CallToAction";
import { FiPackage, FiTool, FiUsers, FiAward} from "react-icons/fi";
import { FaTimesCircle } from "react-icons/fa";
import ListComponentReusable from "../../../Components/TrialComponent/ListComponent/ListComponentReusable";
import TitleDescCanvas from "../../../Components/TrialComponent/TitleDescCanvas/TitleDescCanvas";
import { 
  FaKey, 
  FaIdCard, 
  FaRegEdit, 
  FaFileAlt, 
  FaPenFancy, 
  FaCertificate, 
  FaFileInvoiceDollar 
} from "react-icons/fa";


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
      title: 'Expert Legal Advice:',
      content:
        'Our experienced professionals provide strategic advice and ensure your rights are strongly defended.',
      stepNumber: 1
    },
    {
      id: 'step-2',
      title: 'Thorough Trademark Search:',
      content:
        'We assess potential conflicts before initiating opposition, ensuring a robust foundation for your case.',
      stepNumber: 2
    },
    {
      id: 'step-3',
      title: 'Document Drafting & Filing: ',
      content:
        'From notice preparation to hearing documentation, we handle it all.',
      stepNumber: 3
    },
    {
      id: 'step-4',
      title: 'Seamless Hearing Representation:',
      content:
        'Delfyle represents clients before the Registrar, advocating persuasively at every stage.',
      stepNumber: 4
    },
    {
      id: 'step-5',
      title: 'Transparent Communication:',
      content:
        "You receive regular updates so you're never in the dark.",
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
          heading={<><span className={styles.coloredplc}>Trademark Rectification </span><br /><span className={styles.coloredreg}>Services Online</span> <span style={{letterSpacing: 'normal'}}> in India <br /> with</span> <span className={styles.colored}>Delfyle</span></>}
          description="Ensure timely trademark rectification with Delfyle's expert assistance. We handle all compliance requirements, including trademark registration, trademark objection, trademark certificate, trademark opposition, trademark hearing, trademark rectification, trademark infringement notice, trademark renewal, trademark restoration, trademark transfer, expedited trademark registration, logo design + trademark protection, design registration, design objection, copyright registration, copyright objections."
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

          <PrivateLimitedCompanyContentTwo/>

          <ListComponent/>

          <ListComponentReusable
            title="Disadvantages of LLP"
            description="While LLPs offer many advantages, there are certain drawbacks to consider:"
            listBlocks={[
              {
                items: [
                  "Non-Compliance Penalties: LLPs must file annual returns, even if inactive.",
                  "Difficulty Raising Funds: LLPs cannot raise funds from the public like companies.",
                  "Dissolution Challenges: LLPs may be dissolved if the number of partners falls below two for over six months.",
                ],
                icon: FaTimesCircle, // Using a cross icon for disadvantages
                iconColor: "#ef4444", // Tailwind's red-500
              },
            ]}
            />

          <TitleDescCanvas
            subHeading="LLP Registration"
            heading="LLP Registration Process with Delfyle"
            description="Follow these simple steps to register your LLP in India easily and efficiently:"
            features={[
              {
                icon: <FaKey />,
                title: "Step 1: Obtain a Digital Signature Certificate (DSC)",
                description: "All designated partners must obtain a DSC to file electronic documents."
              },
              {
                icon: <FaIdCard />,
                title: "Step 2: Apply for Director Identification Number (DIN)",
                description: "Designated partners need a DIN, issued by the MCA."
              },
              {
                icon: <FaRegEdit />,
                title: "Step 3: Name Reservation for LLP",
                description: "Choose a unique LLP name and apply for approval under RUN-LLP."
              },
              {
                icon: <FaFileAlt />,
                title: "Step 4: File Incorporation Documents",
                description: "Submit FiLLiP (Form for LLP Incorporation) with partner details and registered office proof."
              },
              {
                icon: <FaPenFancy />,
                title: "Step 5: Draft & File LLP Agreement",
                description: "Prepare an LLP Agreement outlining partner roles, responsibilities, and profit-sharing ratios."
              },
              {
                icon: <FaCertificate />,
                title: "Step 6: Obtain Certificate of Incorporation",
                description: "Once approved, MCA issues the Certificate of Incorporation with LLPIN (LLP Identification Number)."
              },
              {
                icon: <FaFileInvoiceDollar />,
                title: "Step 7: Apply for PAN & TAN",
                description: "Register for PAN and TAN to fulfill tax obligations."
              }
            ]}
            />

            <ListComponentTwo/>

          <CallToAction/>
          
        </div>

        {/* Footer */}
        <ModernFooter/>
      </main>
    </div>
    </>
  );
};

export default TrademarkRectification; 