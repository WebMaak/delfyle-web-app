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
import { useState } from "react";

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

  return (
    <main className="min-h-screen bg-white">
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
              <ModernNavbarButton href="/contact" className="w-full mt-4">Contact us</ModernNavbarButton>
            </ModernMobileNavMenu>
          </ModernMobileNav>
        </ModernNavbar>
      </div>
      <div className="pt-32 pb-12 min-h-[60vh] flex flex-col items-center justify-center text-center" style={{
        background: '#ffffff'
      }}>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#b056ba] via-[#f57cb8] to-[#3e3e6b] bg-clip-text text-transparent">Contact Delfyle</h1>
        <p className="text-2xl md:text-3xl text-gray-100 max-w-3xl mx-auto mb-10 font-medium drop-shadow-lg">We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible.</p>
      </div>
      <div className="flex flex-col items-center justify-center px-2 pb-12">
        <div className="w-full ">
          <ModernContactForm />
        </div>
      </div>
      <ModernFooter />
    </main>
  );
}
