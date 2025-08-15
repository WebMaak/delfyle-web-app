// components/CallToAction.tsx
import React from 'react';
import { FaPhone } from 'react-icons/fa';

const CallToAction = () => {
  return (
   <section className="bg-white from-pink-100 via-purple-100 to-white py-16 px-6 text-center md:px-20">
  <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-gray-800 leading-tight mb-4">
    Get Started with LLP Registration Today!
  </h2>
  <h3 className="max-w-[60%] mx-auto text-xl md:text-2xl font-semibold text-gray-800 leading-snug mb-6">
    Register your LLP with Delfyle and enjoy seamless, professional support throughout the process!
  </h3>
  <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg md:text-xl">
    Need help with LLP registration? Connect with our specialists for expert guidance and hassle-free incorporation.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
    <a
      href="https://wa.me/917439587419"
      style={{ background: 'linear-gradient(90deg, #790046 0%, #E50078 100%)' }}
      className="text-white px-8 py-4 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
    >
      Start Your LLP Registration Now
    </a>
    <a
      href="/contact"
      className="border border-[#E50078] text-[#E50078] px-8 py-4 rounded-lg bg-white transition transform hover:-translate-y-1 hover:shadow-lg"
    >
      Get Free Consultation
    </a>
  </div>

  <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg md:text-xl italic">
    Delfyle — Your Trusted Partner for Professional LLP Registration and Compliance.
  </p>
</section>

  );
};

export default CallToAction;
