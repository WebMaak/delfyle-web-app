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
import CallToAction from "../../../Components/CallToAction/CallToAction";
import ListComponentTwo from "../../../Components/TrialComponent/ListComponent/ListComponentTwo";
import TitleDescCanvas from "../../../Components/TrialComponent/TitleDescCanvas/TitleDescCanvas";
import { FiPackage, FiTool, FiUsers, FiAward, FiHexagon, FiGrid } from "react-icons/fi";
import { TbFileTime } from "react-icons/tb";
import { FaCertificate, FaFileContract, FaShieldAlt } from 'react-icons/fa';


// Register ScrollTrigger and ScrollSmoother plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const TrademarkCertificate: React.FC = () => {
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
          heading={<><span className={styles.coloredplc}>Trademark Certificate </span><br /><span className={styles.coloredreg}>Services Online</span> <span style={{letterSpacing: 'normal'}}> in India <br /> with</span> <span className={styles.colored}>Delfyle</span></>}
          description="Delfyle offers comprehensive support for obtaining a Trademark Certificate. Our experts guide you through the entire process, ensuring compliance with all requirements, including trademark registration, trademark objection, trademark certificate issuance, trademark opposition, trademark hearing, trademark rectification, trademark infringement notice, trademark renewal, trademark restoration, trademark transfer, expedited trademark registration, logo design + trademark protection, design registration, design objection, copyright registration, and copyright objections."
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

          <ListComponentTwo
            title="Trademark Application"
            description="The next step is to file an application with the Trade Marks Registry in India. The application must be filed online and should include the following:"
            listItems={[
              "The name and address of the applicant.",
              "Details of the trademark.",
              "The goods and/or services to which the trademark applies.",
              "The class or classes of goods and/or services in which the trademark is to be registered.",
            ]}
          />

          <TitleDescCanvas
            features={features}
            subHeading="Trademark Certificate Part 3"
            heading="Trademark Certificate in India: Everything You Need to Know Part 3"
            description=""
          />

          <ListComponentTwo
            title="Submit Necessary Documents"
            description="Trademark owners should submit the following documents along with the renewal application:"
            listItems={[
              "Copy of the existing registration certificate",
              "Affidavit of use of the trademark",
              "A power of attorney",
              "Copy of the trademark certificate from the Trademark Office",
              "Payment of the renewal fee",
            ]}
          />

          <TitleDescCanvas
            features={[
              {
                icon: <FiPackage />,
                title: 'Receive Acknowledgement',
                description:
                  'Upon receipt of the renewal application, the Trademark Registry will send an acknowledgement to the trademark owner.',
              },
              {
                icon: <FiPackage />,
                title: 'Review of the Renewal Application',
                description:
                  'Following the renewal application submission, the Trademark Registry will review the application and check for any discrepancies.',
              },
              {
                icon: <FiPackage />,
                title: 'Issue of Renewal Trademark Certificate',
                description:
                  'After the Trademark Registry has approved the renewal application, a new registration certificate will be issued. The new registration certificate will have the updated expiration date and will be valid for 10 years from the renewal date.',
              },
              {
                icon: <FiPackage />,
                title: 'Publication of Renewal Certificate',
                description:
                  'The renewed trademark certificate will also be published in the Trademarks Journal.',
              },
              {
                icon: <FiPackage />,
                title: 'How can Delfyle help you get a Trademark Registration Certificate?',
                description:
                  'Delfyle can help customers with trademark registration certificates by providing them with up-to-date information about the process and the necessary documents that need to be submitted. Our team of experts guide our customers through each step of the registration process and ensure they clearly understand what is required. Our experts can review documents, provide feedback on any potential issues, and help resolve any conflicts that may arise. Additionally, we can help customers to understand the implications of registering a trademark and the potential legal problems that may occur. We also provide comprehensive services to help ensure that customers have a successful trademark registration. Our team can help customers to create an effective trademark that meets all the criteria set by the Indian Trademark Office, and we can provide advice on how to protect their trademark from infringement. Once the application is complete, our team will ensure that the application is complete and accurate and will provide any necessary guidance to the customer. At Delfyle, we understand the importance of having a secure, reliable trademark registration and are committed to helping our customers to achieve this goal. We strive to provide the best customer service and guidance to ensure our customers can register their trademarks without hassle.',
              }
            ]}
            
            subHeading="Trademark Certificate Part 4"
            heading="Trademark Certificate in India: Everything You Need to Know Part 4"
            description=""
          />

          <CallToAction
            heading="Why Choose Delfyle for"
            highlighted="Trademark Certification?"
            subheading="We help you obtain trademark certification efficiently, providing expert guidance, quick documentation, and complete legal support to validate and protect your brand."
            cards={[
              {
                icon: <FaCertificate className="text-2xl" />,
                title: "Official Certification",
                description: "Receive legally recognized certification for your trademark.",
              },
              {
                icon: <FaFileContract className="text-2xl" />,
                title: "Quick Documentation",
                description: "Streamlined process for filing and obtaining trademark certification.",
              },
              {
                icon: <FaShieldAlt className="text-2xl" />,
                title: "Brand Protection",
                description: "Ensure your brand rights are fully safeguarded under the law.",
              },
            ]}
            primaryBtnText="Get Your Trademark Certified"
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

export default TrademarkCertificate; 