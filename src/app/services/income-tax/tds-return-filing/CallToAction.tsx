// components/CallToAction.tsx
import React from 'react';
import { FaPhone } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="bg-white from-pink-100 via-purple-100 to-white py-16 px-6 text-center md:px-20">
      <h2 className="md:text-[3.5rem] text-[2.5rem] font-bold text-gray-800 leading-tight mb-4 text-left md:text-center">
      Ensure Timely and Accurate TDS Return Filing with Delfyle
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg text-left md:text-center">
      Stay compliant with TDS regulations and avoid penalties with Delfyle's expert TDS return filing services. Our team ensures accurate and timely filing, allowing you to focus on your business growth.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          style={{ background: 'linear-gradient(90deg, #790046 0%, #E50078 100%)' }}
          className="text-white px-8 py-4 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
        >
          File Your TDS Returns Today
        </a>
        <a
          href="/contact"
          className="border border-[#E50078] text-[#E50078] px-8 py-3 rounded-lg bg-white transition transform hover:-translate-y-1 hover:shadow sm:text-base"
        >
          Schedule a Free Consultation
        </a>
      </div>
      <p className="text-gray-600 mt-10 max-w-2xl mx-auto mb-8 text-lg text-left md:text-center italic">
      Simplify Your TDS Compliance with Delfyle.
      </p>
    </section>
  );
};

export default CallToAction;
