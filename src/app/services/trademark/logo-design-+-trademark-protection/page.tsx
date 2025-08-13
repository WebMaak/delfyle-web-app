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
import CustomAccordion from "../../../Components/CustomAccordion/CustomAccordion";
import Button from "../../../Components/Button/Button";
import AuthManager from "../../../Components/admin/AuthManager";
import { useUser } from '../../../../hooks/useUser';
import CallToAction from "./CallToAction";
import TitleDescCanvas from "../../../Components/TrialComponent/TitleDescCanvas/TitleDescCanvas";
import { FaPhone, FaEnvelope, FaUsers, FaCalendar, FaPaintBrush, FaRocket, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import ListComponentTwo from "../../../Components/TrialComponent/ListComponent/ListComponentReusable";



// Register ScrollTrigger and ScrollSmoother plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const TrademarkObjection: React.FC = () => {
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
      title: 'Creative Meets Legal',
      content: 'We combine the talent of experienced graphic designers with the precision of trademark experts. This dual approach ensures that your logo is not only compelling but also compliant and registrable.',
      stepNumber: 1
    },
    {
      id: 'step-2',
      title: 'Tailored for Your Industry',
      content: 'Our team has expertise across diverse sectors—tech, retail, healthcare, education, and more—ensuring your logo aligns with industry norms while standing out.',
      stepNumber: 2
    },
    {
      id: 'step-3',
      title: 'Strategic Branding Approach',
      content: 'We understand branding psychology and how design influences consumer behavior, ensuring your logo speaks directly to your audience.',
      stepNumber: 3
    },
    {
      id: 'step-4',
      title: 'Delivered in All Key Formats',
      content: 'We use top-tier tools like Adobe Photoshop and Illustrator to provide you with final logo files in multiple formats: JPG, PNG (for web), PDF, EPS, AI (for printing), PSD (editable for future use).',
      stepNumber: 4
    },
    {
      id: 'step-5',
      title: 'Trademark Search Included',
      content: 'Every logo we create undergoes a comprehensive trademark search to confirm originality and avoid conflicts with existing marks.',
      stepNumber: 5
    },
    {
      id: 'step-6',
      title: 'Trademark Filing Support',
      content: 'We don’t just design—we protect. Delfyle offers end-to-end trademark registration services to ensure your brand identity is legally secure from day one.',
      stepNumber: 6
    }
  ];
  
 
  // TitleDescCanvas Features
  const features = [
    {
      icon: <FaPhone />,
      title: "Brand Identity",
      description: "Your logo acts as your business’s face—it’s what customers see first and remember most. It reflects your vision, values, and professionalism."
    },
    {
      icon: <FaEnvelope />,
      title: "Customer Recognition",
      description: "Logos help customers instantly identify your brand in a sea of competitors. A strong logo makes a lasting impression."
    },
    {
      icon: <FaUsers />,
      title: "Trust & Professionalism",
      description: "A professionally designed logo builds credibility and assures customers of your quality and reliability."
    },
    {
      icon: <FaCalendar />,
      title: "Marketing Consistency",
      description: "From your website to packaging, your logo is used everywhere. It ensures brand consistency across all marketing platforms."
    },
    {
      icon: <FaPaintBrush />,
      title: "Emotional Connection",
      description: "Colours, shapes, and design elements evoke emotions. Your logo helps build a subconscious connection with your audience."
    },
    {
      icon: <FaRocket />,
      title: "Competitive Edge",
      description: "A unique and appealing logo sets you apart in crowded markets. It can be the deciding factor when customers make choices."
    },
    {
      icon: <FaShieldAlt />,
      title: "Legal Protection",
      description: "Trademarking your logo grants you exclusive rights to use it, shielding your brand from imitators and legal disputes."
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
          heading={<><span className={styles.coloredplc}>Logo Design + Trademark Protection </span><br /><span className={styles.coloredreg}>Services Online</span> <span style={{letterSpacing: 'normal'}}> in India <br /> with</span> <span className={styles.colored}>Delfyle</span></>}
          description="Delfyle offers comprehensive logo design and trademark protection services, ensuring your brand’s identity is secure and unique."
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

          <TitleDescCanvas
            features={features}
            subHeading="Logo Design"
            heading="Why a Logo is Vital for Your Business?"
            description="A well-designed logo is more than a graphic—it’s the visual cornerstone of your brand. Here's why a logo is essential:"
          />

          {/* Company Registration Process Accordion */}
          <CustomAccordion
            subheading="Logo Design Online"
            title="Why Choose Delfyle for Logo Design Online?"
            description="A well-designed logo is more than a graphic—it’s the visual cornerstone of your brand. Here's why a logo is essential:"
            items={registrationProcessData}
            variant="numbered"
            theme="light"
            maxOpenItems={1}
          />

          <ListComponentTwo
            title="The Delfyle Logo Design Process"
            description="At Delfyle, our logo design services are integrated with legal expertise to protect your brand from the start. We serve businesses across all 45 trademark classes and offer:"
            listBlocks = {[
              {
                items: [
                  "Consultation & Brand Discovery- Understand your business, values, and goals.",
                  "Concept Development- Present initial logo concepts based on your vision and market research.",
                  "Feedback & Revisions- Refine the selected concept based on your feedback.",
                  "Trademark Search- Conduct legal screening to ensure logo eligibility for registration.",
                  "Final Design Delivery- Provide logos in multiple file formats and sizes for all use cases.",
                  "Trademark Registration (Optional)- File your logo for trademark protection under your desired class(es).",
                ],
                icon: FaCheckCircle,
                iconColor: "#22c55e", // Tailwind's green-500
              },
            ]}
          />

          <CallToAction/>
          
        </div>

        {/* Footer */}
        <ModernFooter/>
      </main>
    </div>
    </>
  );
};

export default TrademarkObjection; 