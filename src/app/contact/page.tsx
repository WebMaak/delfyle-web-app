"use client";

import ModernContactForm from "../Components/NewContactForm/ModernContactForm";
import CompanyLogos from "../Components/CompanyLogos/CompanyLogos";
import ModernFooter from "../Components/Footer/ModernFooter";
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
} from "../Components/ui/modern-navbar";
import { useState, useEffect, useRef } from "react";
import ToggleNav from "../Components/ToggleNav/toggleNav";
import ContactHeroStyles from "./ContactHero.module.css";
import TopMarquee from "../Components/TopMarquee/TopMarquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { FiMapPin, FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';

// Define the gradient as a constant
const contactIconGradient = 'linear-gradient(135deg, #b40068 0%, #ff0080 60%, #6b003e 100%)';
const contactIconGradientId = 'contact-icon-gradient';

export default function ContactPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { name: "Startup", link: "/#startup" },
    { name: "Trademark", link: "/#trademark" },
    { name: "Registration", link: "/#registration" },
    { name: "Goods & Services Tax", link: "/#gst" },
    { name: "MCA", link: "/#mca" },
    { name: "Compliance", link: "/#compliance" },
    { name: "Income Tax", link: "/#income-tax" },
    { name: "About Us", link: "/about" }
  ];

  const smootherRef = useRef<any>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
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
      window.removeEventListener('toggleNavMenu', handleToggleNavMenu);
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <TopMarquee />
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
      <main className="min-h-screen bg-white">
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
        <div id="smooth-content">
          {/* Hero Section */}
          <div className={ContactHeroStyles.hero + ' ' + ContactHeroStyles.contactHeroIconVars}>
            <div className={ContactHeroStyles.heroContent}>
              <h1 className={ContactHeroStyles.gradientHeading}>Contact</h1>
              <p>Let's start something great together. Get in touch with most of the team below!</p>
            </div>
            <div className={ContactHeroStyles.heroSocialIcons}>
              <motion.span className={ContactHeroStyles.socialIcon1}
                animate={{ y: [0, -12, 0, 12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <SocialIcon network="facebook" url="https://www.facebook.com/DelfyleSolutons?mibextid=2JQ9oc"
                  bgColor="transparent" fgColor="#b40068" style={{ width: 80, height: 80 }} className="contact-gradient-icon" />
              </motion.span>
              <motion.span className={ContactHeroStyles.socialIcon2}
                animate={{ y: [0, 10, 0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <SocialIcon network="instagram" url="https://www.instagram.com/delfyle_legal?igsh=MzU4ZW4xcjIxMWxw&utm_source=qr"
                  bgColor="transparent" fgColor="#b40068" style={{ width: 80, height: 80 }} className="contact-gradient-icon" />
              </motion.span>
              <motion.span className={ContactHeroStyles.socialIcon6}
                animate={{ y: [0, -8, 0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <SocialIcon network="linkedin" url="https://www.linkedin.com/company/delfyle/"
                  bgColor="transparent" fgColor="#b40068" style={{ width: 80, height: 80 }} className="contact-gradient-icon" />
              </motion.span>
              <motion.span className={ContactHeroStyles.socialIcon4 + ' ' + ContactHeroStyles.mirroredIcon}
                animate={{ y: [0, 12, 0, -12, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <SocialIcon network="x" url="https://x.com/delfyle_co?s=21"
                  bgColor="transparent" fgColor="#b40068" style={{ width: 80, height: 80 }} className="contact-gradient-icon" />
              </motion.span>
              <motion.span className={ContactHeroStyles.socialIcon5 + ' ' + ContactHeroStyles.mirroredIcon}
                animate={{ y: [0, -10, 0, 10, 0] }}
                transition={{ duration: 4.7, repeat: Infinity, ease: 'easeInOut' }}
              >
                <SocialIcon network="youtube" url="https://youtube.com/@Delfyle_legalservices?si=Z0GGMeIPguqcVZkK"
                  bgColor="transparent" fgColor="#b40068" style={{ width: 80, height: 80 }} className="contact-gradient-icon" />
              </motion.span>
            </div>
          </div>
          {/* Contact Form */}
          <div className="flex flex-col items-center justify-center px-2">
            <div className="w-full">
              <ModernContactForm />
            </div>
          </div>
          {/* Contact Info Section - moved after form, bg white, cards light blue */}
          <section className={`contact-info-section ${ContactHeroStyles.contactInfoSection}`} style={{ padding: '60px 0' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-start', justifyContent: 'center' }}>
              <div style={{ flex: '1 1 340px', minWidth: 320 }}>
                <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: 32, color: '#1e293b', letterSpacing: '-1px' }}>We're here for you.</h2>
                <div className="lift-card" style={{ background: '#f4faff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', padding: 28, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 18 }}>
                  <FiMapPin size={40} color="#b40068" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ color: '#64748b', fontSize: 14, fontWeight: 600, marginBottom: 2 }}>Location</div>
                    <a href="https://maps.google.com/?q=Draupadi+Mansion,+11,+Brabourne+Rd,+near+Tea+Board+of+India,+Murgighata,+B.B.D.+Bagh,+Kolkata,+West+Bengal+700001" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 500, fontSize: 18, color: '#222' }}>
                      Draupadi Mansion, 11, Brabourne Rd, near Tea Board of India, Murgighata, B.B.D. Bagh, Kolkata, West Bengal 700001
                    </a>
                  </div>
                </div>
                <div className="lift-card" style={{ background: '#f4faff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', padding: 28, display: 'flex', alignItems: 'center', gap: 18 }}>
                  <FiMail size={40} color="#b40068" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ color: '#64748b', fontSize: 14, fontWeight: 600, marginBottom: 2 }}>Email</div>
                    <a href="mailto:delfylesales@gmail.com" style={{ fontWeight: 500, fontSize: 18, color: '#222' }}>delfylesales@gmail.com</a>
                  </div>
                </div>
              </div>
              <div style={{ flex: '1 1 340px', minWidth: 320, display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div className="lift-card" style={{ background: '#f4faff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', padding: 28, display: 'flex', alignItems: 'center', gap: 18 }}>
                  <FiPhone size={40} color="#b40068" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ color: '#64748b', fontSize: 14, fontWeight: 600, marginBottom: 2 }}>Phone</div>
                    <div style={{ fontWeight: 500, fontSize: 18, color: '#222', display: 'flex', flexDirection: 'row', gap: 16 }} className={ContactHeroStyles.contactNumbers}>
                      <a href="tel:8697603824" style={{ color: '#222' }}>+91 8697603824</a>
                      <span className={ContactHeroStyles.seprator1} >|</span>
                      <span className={ContactHeroStyles.seprator2} >—</span>
                      <a href="tel:7439587419" style={{ color: '#222' }}>+91 7439587419</a>
                    </div>
                  </div>
                </div>
                <div className="lift-card" style={{ background: '#f4faff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', padding: 28, display: 'flex', alignItems: 'center', gap: 18 }}>
                  <FiMessageCircle size={40} color="#b40068" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ color: '#64748b', fontSize: 14, fontWeight: 600, marginBottom: 2 }}>WhatsApp Chat</div>
                    <div className={ContactHeroStyles.contactNumbers}>
                      <a href="https://wa.me/918697603824" target="_blank" rel="noopener noreferrer" style={{ color: '#222' }}>+91 8697603824</a>
                      <span className={ContactHeroStyles.seprator1} >|</span>
                      <span className={ContactHeroStyles.seprator2} >—</span>
                      <a href="https://wa.me/917439587419" target="_blank" rel="noopener noreferrer" style={{ color: '#222' }}>+91 7439587419</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Map Section - modern UI above footer */}
          <section className={ContactHeroStyles.mapSection} style={{ background: 'linear-gradient(120deg, #f8fafc 0%, #e0f2fe 100%)' }}>
            <h2 className={ContactHeroStyles.mapSectionHeading}>Visit us on our branch</h2>
            <div className={ContactHeroStyles.mapContainer}>
              <iframe
                title="Delfyle Location"
                width="100%"
                height="500"
                frameBorder="0"
                style={{ border: 0, display: 'block' }}
                src="https://www.google.com/maps?q=Draupadi+Mansion,+11,+Brabourne+Rd,+near+Tea+Board+of+India,+Murgighata,+B.B.D.+Bagh,+Kolkata,+West+Bengal+700001&output=embed"
                allowFullScreen
              ></iframe>
            </div>
          </section>
          <ModernFooter />
        </div>
        <div className="fixed inset-x-0 top-0 z-50">
          <ModernNavbar navLinkColor="#111827">
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
                <ModernNavbarButton href="/contact" className="w-full mt-4">Contact us</ModernNavbarButton>
              </ModernMobileNavMenu>
            </ModernMobileNav>
          </ModernNavbar>
        </div>
      </main>
      {/* Hidden SVG gradient definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <linearGradient id={contactIconGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b40068" />
          <stop offset="60%" stopColor="#ff0080" />
          <stop offset="100%" stopColor="#6b003e" />
        </linearGradient>
      </svg>
    </>
  );
}
