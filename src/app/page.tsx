"use client";

import Hero from "./Components/Hero";
import NewWhatWeDo from "./Components/WhatWeDo/NewWhatWeDo";
import CompanyLogos from "./Components/CompanyLogos/CompanyLogos";
import WhoWeWorkWith from "./Components/WhoWeWorkWith/WhoWeWorkWith";
import Testimonial from "./Components/Testimonial/Testimonial";
import ModernFooter from "./Components/Footer/ModernFooter";
import FeaturesSection from './Components/FeaturesSection/FeaturesSection';
import ModernContactForm from "./Components/NewContactForm/ModernContactForm";
import StickyFeatureReveal from "./Components/StickyFeatureReveal/StickyFeatureReveal";
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
} from "./Components/ui/modern-navbar";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import BigLogoMarquee from "./Components/BigLogoMarquee/BigLogoMarquee";
import ToggleNav from "./Components/ToggleNav/toggleNav";
import TopMarquee from "./Components/TopMarquee/TopMarquee";
import Button from "./Components/Button/Button";
import AuthManager from "./Components/admin/AuthManager";
import Cookies from 'js-cookie';
import { useUser } from '../hooks/useUser';
import CookiePopupStyles from "./Components/CookiePopup.module.css";

function CookiePopup() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!sessionStorage.getItem('cookiePopupDismissed')) {
        setVisible(true);
      }
    }
  }, []);
  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem('cookiePopupDismissed', 'true');
  };
  if (!visible) return null;
  return (
    <div className={CookiePopupStyles.popup}>
      <span className={CookiePopupStyles.icon}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" fill="#fff0f6" stroke="#b40068" strokeWidth="2"/>
          <circle cx="12" cy="12" r="4" fill="#b40068" />
          <circle cx="16.5" cy="8.5" r="1.5" fill="#b40068" />
          <circle cx="7.5" cy="10.5" r="1" fill="#b40068" />
        </svg>
      </span>
      <span className={CookiePopupStyles.text}>
        <strong style={{color:'#fff'}}>We use cookies</strong> to enhance your experience, analyze site usage, and assist in our marketing efforts. By continuing to use our site, you consent to our use of cookies. <a href="/privacy" style={{color:'#fff',textDecoration:'underline'}}>Learn more</a>.
      </span>
      <button onClick={handleClose} className={CookiePopupStyles.okButton}>OK</button>
    </div>
  );
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [panelType, setPanelType] = useState<'auth' | 'profile' | null>(null);
  const { user, loading, setUser } = useUser();
  const smootherRef = useRef<any>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    // Only create one smoother instance
    if (!smootherRef.current) {
      smootherRef.current = ScrollSmoother.create({
        smooth: 1,
        effects: true,
        normalizeScroll: true,
        wrapper: "main",
        content: "#smooth-content",
      });
    }
    // Progress bar animation using window/document scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const progress = Math.min(scrollTop / (docHeight - winHeight), 1);
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress * 100}%`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set initial

    // Listen for custom event from ToggleNav
    const handleToggleNavMenu = (e: any) => {
      if (smootherRef.current) {
        if (e.detail.isOpen) {
          smootherRef.current.paused(true);
        } else {
          smootherRef.current.paused(false);
        }
      }
    };
    window.addEventListener('toggleNavMenu', handleToggleNavMenu);

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('toggleNavMenu', handleToggleNavMenu);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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

  return (
    <>
      <CookiePopup />
      <TopMarquee />
      <main>
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
            }}
          />
        </div>
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
          {/* ToggleNav for tablet and mobile only */}
          <div className="block lg:hidden">
            <ToggleNav mainOptions={navItems.map(item => item.name)} />
          </div>
        </div>
        <AuthManager 
          isOpen={!!panelType} 
          onClose={() => setPanelType(null)} 
          onUserChange={setUser} 
          panelType={panelType} 
        />
        <div id="smooth-content">
          <Hero />
          <BigLogoMarquee logos={[
            "/CompanyLogos/1.png", "/CompanyLogos/2.png", "/CompanyLogos/3.png", "/CompanyLogos/4.png", "/CompanyLogos/5.png", "/CompanyLogos/6.png", "/CompanyLogos/7.png", "/CompanyLogos/8.png", "/CompanyLogos/9.png", "/CompanyLogos/10.png", "/CompanyLogos/11.png", "/CompanyLogos/12.png", "/CompanyLogos/13.png", "/CompanyLogos/14.png", "/CompanyLogos/15.png", "/CompanyLogos/16.png", "/CompanyLogos/17.png", "/CompanyLogos/18.png", "/CompanyLogos/19.png", "/CompanyLogos/20.png", "/CompanyLogos/21.png", "/CompanyLogos/22.png", "/CompanyLogos/23.png", "/CompanyLogos/24.png", "/CompanyLogos/25.png", "/CompanyLogos/26.png", "/CompanyLogos/27.png", "/CompanyLogos/28.png", "/CompanyLogos/29.png", "/CompanyLogos/30.png"
          ]} speed="100s" direction="left" />
          <div className="bg-white">
            <NewWhatWeDo />
            <FeaturesSection />
            <ModernContactForm/>
            <StickyFeatureReveal />
            <WhoWeWorkWith />
            <CompanyLogos />
            <Testimonial />
            <ModernFooter />
          </div>
        </div>
      </main>
    </>
  );
}
