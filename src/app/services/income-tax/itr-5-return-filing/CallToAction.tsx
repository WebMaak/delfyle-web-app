// components/CallToAction.tsx
import React from 'react';
import { FaPhone } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="bg-white from-pink-100 via-purple-100 to-white py-16 px-6 text-center md:px-20">
      <h2 className="md:text-[3.5rem] text-[2.5rem] font-bold text-gray-800 leading-tight mb-4 text-left md:text-center">
        File ITR-5 Online with Delfyle <br /> – Your Trusted Compliance Partner
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg text-left md:text-center">
      Don’t let ITR-5 complexities slow your business down. Whether you're a firm, LLP, cooperative, or estate administrator, Delfyle simplifies your tax return process with accuracy, affordability, and expert insight.
      </p>
      <h2 className="md:text-[2rem] text-[2.5rem] font-bold text-gray-800 leading-tight mb-4 text-left md:text-center">
      Ready to File ITR-5?
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg text-left md:text-center">
      Book a Free Consultation or Start Your Filing Now with Delfyle’s expert-led income tax filing services.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/917439587419"
          style={{ background: 'linear-gradient(90deg, #790046 0%, #E50078 100%)' }}
          className="text-white px-8 py-4 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
        >
          Start ITR-5 Filing Now
        </a>
        <a
          href="/contact"
          className="border border-[#E50078] text-[#E50078] px-8 py-3 rounded-lg bg-white transition transform hover:-translate-y-1 hover:shadow sm:text-base"
        >
          Book Free Consultation
        </a>
      </div>
      <p className="text-gray-600 mt-10 max-w-2xl mx-auto mb-8 text-lg text-left md:text-center italic">
        File with Confidence. File with Delfyle.
      </p>
    </section>
  );
};

export default CallToAction;
