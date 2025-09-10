"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  ModernNavbar, 
  ModernNavBody, 
  ModernNavItems, 
  ModernNavbarLogo, 
  ModernNavbarButton
} from "../../../Components/ui/modern-navbar";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useUser } from '../../../../hooks/useUser';
import { FaPhone, FaEnvelope, FaUsers, FaCalendar, FaPaintBrush, FaRocket, FaCheckCircle } from "react-icons/fa";
import { FaPenNib, FaFileContract, FaShieldAlt } from 'react-icons/fa';
import gsap from 'gsap';
import StartupHero from "../StartupHero";
import styles from "../StartupHero.module.css";
import BigLogoMarquee from "../../../Components/BigLogoMarquee/BigLogoMarquee";
import ModernFooter from "../../../Components/Footer/ModernFooter";
import ToggleNav from "../../../Components/ToggleNav/toggleNav";
import TopMarquee from "../../../Components/TopMarquee/TopMarquee";
import PrivateLimitedCompanyContent from "./PrivateLimitedCompanyContent";
import CustomAccordion from "../../../Components/CustomAccordion/CustomAccordion";
import Button from "../../../Components/Button/Button";
import AuthManager from "../../../Components/admin/AuthManager";
import CallToAction from "../../../Components/CallToAction/CallToAction";
import TitleDescCanvas from "../../../Components/TrialComponent/TitleDescCanvas/TitleDescCanvas";
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
            heading={
              <>
                <span className={styles.coloredplc}>Logo Design + Trademark Protection </span>
                <span className={styles.coloredreg}>Services Online</span> 
                <span style={{letterSpacing: 'normal'}}> in India with</span> 
                <span className={styles.colored}>Delfyle</span>
              </>
            }
            description="Create a unique logo and secure it legally with Delfyle. Our experts provide professional logo design coupled with trademark registration to protect your brand identity."
          />
          
          {/* Big Company Logo Marquee Section */}
          <section style={{ 
            overflow: 'hidden'
          }}>        
            <BigLogoMarquee />
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

          <CallToAction
            heading="Why Choose Delfyle for"
            highlighted="Logo Design & Trademark Protection?"
            subheading="We combine creative expertise with legal protection, offering logo design and trademark registration services to secure your brand effectively."
            cards={[
              {
                icon: <FaPenNib className="text-2xl" />,
                title: "Creative Logo Design",
                description: "Unique, professional logos that capture and represent your brand identity.",
              },
              {
                icon: <FaFileContract className="text-2xl" />,
                title: "Trademark Registration",
                description: "Efficient filing process to legally protect your logo and brand.",
              },
              {
                icon: <FaShieldAlt className="text-2xl" />,
                title: "Brand Protection",
                description: "Ensure your logo and brand are fully safeguarded under trademark laws.",
              },
            ]}
            primaryBtnText="Design & Register Your Logo"
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

export default TrademarkObjection; 