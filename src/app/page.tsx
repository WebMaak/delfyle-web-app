"use client";

import Hero from "./Components/Hero";
import NewWhatWeDo from "./Components/WhatWeDo/NewWhatWeDo";
import ContactUs from "./Components/ContactUs/ContactUs";
import CompanyLogos from "./Components/CompanyLogos/CompanyLogos";
import TrustDelfyle from "./Components/TrustDelfyle/TrustDelfyle";
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

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
      window.removeEventListener('scroll', handleScroll);
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
    <main className="min-h-screen">
      {/* Progress Bar */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
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
        <ModernNavbar>
          <ModernNavBody>
            <ModernNavbarLogo />
            <ModernNavItems items={navItems} />
            <ModernNavbarButton href="/contact">Contact us</ModernNavbarButton>
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
            </ModernMobileNavMenu>
          </ModernMobileNav>
        </ModernNavbar>
      </div>
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
  );
}
