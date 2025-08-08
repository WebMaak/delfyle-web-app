// components/CallToAction.tsx
import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-white from-pink-100 via-purple-100 to-white py-16 px-6 text-center md:px-20">
      <h2 className="md:text-[3.5rem] text-[2.5rem] font-bold text-gray-800 leading-tight mb-4 text-left md:text-center">
      Get Expert Help for ITR-3 Filing Today!
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg text-left md:text-center">
      Don’t wait till the last moment. Ensure smooth, compliant, and timely ITR-3 filing with Delfyle’s tax professionals.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/917439587419"
          style={{ background: 'linear-gradient(90deg, #790046 0%, #E50078 100%)' }}
          className="text-white px-8 py-4 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
        >
          Start ITR-3 Filing Now
        </a>
        <a
          href="/contact"
          className="border border-[#E50078] text-[#E50078] px-8 py-3 rounded-lg bg-white  transition transform hover:-translate-y-1 hover:shadow  sm:text-base"
        >
          Get Expert Tax Consultation
        </a>
      </div>
      <p className="text-gray-600 mt-10 mx-auto mb-8 text-lg text-left md:text-center italic">
      Stay compliant. Maximize deductions. File with confidence — File with Delfyle.
      </p>
    </section>

  );
};

export default CallToAction;
