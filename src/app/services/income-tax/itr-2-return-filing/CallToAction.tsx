// components/CallToAction.tsx
import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-white from-pink-100 via-purple-100 to-white py-16 px-6 text-center md:px-20">
  <h2 className="md:text-[3.5rem] text-[2.5rem] font-bold text-gray-800 leading-tight mb-4 text-left md:text-center">
    Ready to File ITR-2 Online?
  </h2>
  <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg text-left md:text-center">
    Trust Delfyle for a smooth, accurate, and fast ITR-2 filing experience. <br/>
    Avoid stress. Avoid penalties. File with experts — File with Delfyle.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a
      href="/contact"
      style={{ background: 'linear-gradient(90deg, #790046 0%, #E50078 100%)' }}
      className="text-white px-8 py-4 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
    >
      Start ITR-2 Filing Now
    </a>
    <a
      href="/contact"
      className="border border-[#E50078] text-[#E50078] px-8 py-3 rounded-lg bg-white hover:bg-[#E5007805] transition transform hover:-translate-y-1 hover:shadow text-sm sm:text-base"
    >
      Schedule Free Tax Consultation
    </a>
  </div>
</section>

  );
};

export default CallToAction;
