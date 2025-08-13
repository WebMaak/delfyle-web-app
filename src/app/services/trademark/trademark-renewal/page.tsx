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
import PrivateLimitedCompanyContent from "./PrivateLimitedCompanyContent";
import Button from "../../../Components/Button/Button";
import AuthManager from "../../../Components/admin/AuthManager";
import { useUser } from '../../../../hooks/useUser';
import CallToAction from "./CallToAction";
import { FiPackage, FiTool, FiUsers, FiAward, FiHexagon, FiGrid } from "react-icons/fi";
import { TbFileTime } from "react-icons/tb";

// Register ScrollTrigger and ScrollSmoother plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const TrademarkInfringementNotice: React.FC = () => {
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
      title: 'Examination of Trademark',
      content:
        'Once the application is filed, it is examined by the Trade Marks Registry. During this examination, the registry will determine whether the trademark is eligible for registration and verify that it is not identical or deceptively similar to any existing trademark.',
      stepNumber: 1
    },
    {
      id: 'step-2',
      title: 'Publication of Trademark',
      content:
        'If the examination is successful, the trademark will be published in the trademark journal. This will allow any third parties who may have objections to the registration to file their objections.',
      stepNumber: 2
    },
    {
      id: 'step-3',
      title: 'Response to Objections',
      content:
        'If any objections are raised, the applicant will have to respond to them. The applicant may also have to provide additional evidence in support of the application.',
      stepNumber: 3
    },
    {
      id: 'step-4',
      title: 'Grant of Trademark Registration',
      content:
        'If the objections are addressed and the application is deemed eligible for registration, the Trade Marks Registry will grant and issue the trademark certificate. Once you are granted permission, your trademark is registered, and you can do the trademark certificate download India.',
      stepNumber: 4
    },
    {
      id: 'step-5',
      title: 'Renewing a Trademark Registration Certificate',
      content:
        'Renewing a Trademark Registration Certificate Renewing a trademark registration certificate ensures that the protection of the brand or logo is maintained. Without the renewal of the trademark certificate, the brand or logo can become vulnerable to infringement and may result in a loss of exclusive rights and legal action. When the certificate is renewed, it extends the duration of the registered trademark and provides additional legal protection. This is especially important if the brand or logo is widely used and recognized by the public. Renewing a trademark registration certificate is an important step in preserving the brands or logo’s value and preventing any potential issues from arising.',
      stepNumber: 5
    },
    {
      id: 'step-6',
      title: 'Determine the Renewal Period',
      content:
        'Trademark registration in India is valid for 10 years from the registration date. Trademark owners need to renew their registration before the expiration of the 10 years to continue enjoying the benefits of trademark registration.',
      stepNumber: 6
    },
    {
      id: 'step-7',
      title: 'Prepare Renewal Application',
      content:
        'Trademark owners must file a renewal application before the expiration date of the 10 years. The renewal application must be filed with the Trademark Registrar or the Intellectual Property Office of India (IPO).',
      stepNumber: 7
    },
  ];
  
  const features = [
    {
      icon: <FiTool />,
      title: 'Examination of Trademark',
      description:
        'Once the application is filed, it is examined by the Trade Marks Registry. During this examination, the registry will determine whether the trademark is eligible for registration and verify that it is not identical or deceptively similar to any existing trademark.',
    },
    {
      icon: <FiUsers />,
      title: 'Publication of Trademark',
      description:
        'If the examination is successful, the trademark will be published in the trademark journal. This will allow any third parties who may have objections to the registration to file their objections.',
    },
    {
      icon: <FiAward />,
      title: 'Response to Objections',
      description:
        'If any objections are raised, the applicant will have to respond to them. The applicant may also have to provide additional evidence in support of the application.',
    },
    {
      icon: <FiHexagon />,
      title: 'Grant of Trademark Registration',
      description:
        'If the objections are addressed and the application is deemed eligible for registration, the Trade Marks Registry will grant and issue the trademark certificate. Once you are granted permission, your trademark is registered, and you can do the trademark certificate download India.',
    },
    {
      icon: <FiGrid />,
      title: 'Renewing a Trademark Registration Certificate',
      description:
        'Renewing a Trademark Registration Certificate Renewing a trademark registration certificate ensures that the protection of the brand or logo is maintained. Without the renewal of the trademark certificate, the brand or logo can become vulnerable to infringement and may result in a loss of exclusive rights and legal action. When the certificate is renewed, it extends the duration of the registered trademark and provides additional legal protection. This is especially important if the brand or logo is widely used and recognized by the public. Renewing a trademark registration certificate is an important step in preserving the brands or logo’s value and preventing any potential issues from arising.',
    },
    {
      icon: <TbFileTime />,
      title: 'Determine the Renewal Period',
      description:
        'Trademark registration in India is valid for 10 years from the registration date. Trademark owners need to renew their registration before the expiration of the 10 years to continue enjoying the benefits of trademark registration.',
    },
    {
      icon: <TbFileTime />,
      title: 'Prepare Renewal Application',
      description:
        'Trademark owners must file a renewal application before the expiration date of the 10 years. The renewal application must be filed with the Trademark Registrar or the Intellectual Property Office of India (IPO).',
    },
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
          heading={<><span className={styles.coloredplc}>Trademark Renewal </span><span className={styles.coloredreg}>Services Online</span> <span style={{letterSpacing: 'normal'}}> in India  with</span> <span className={styles.colored}>Delfyle</span></>}
          description="Delfyle provides a seamless trademark renewal process in India, ensuring your brand's protection and exclusivity. Our team of experts will guide you through the renewal process, ensuring all legal requirements are met, including documentation, filing, and follow-up with the Trademark Office. With Delfyle, you can rest assured that your trademark rights are protected and your brand's integrity is maintained."
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

          <CallToAction/>
          
        </div>

        {/* Footer */}
        <ModernFooter/>
      </main>
    </div>
    </>
  );
};

export default TrademarkInfringementNotice; 