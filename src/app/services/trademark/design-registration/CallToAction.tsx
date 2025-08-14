// components/CallToAction.tsx
import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-white from-pink-100 via-purple-100 to-white py-16 px-6 text-center md:px-20">
      <h2 className="md:text-[3.5rem] text-[2.5rem] font-bold text-gray-800 leading-tight mb-4 text-left md:text-center">
        Get Started Today!
      </h2>
      <h2 className="text-xl font-bold text-gray-800 leading-tight mb-4 text-left md:text-center">
        Secure Your Logo, Secure Your Brand – With Delfyle
      </h2>
      <p className="text-gray-600 max-w-4xl mx-auto mb-6 text-lg text-left md:text-center">
        Your logo is the first impression your business makes—make sure it’s one that lasts. With Delfyle, you’re not just investing in design; you’re investing in legal security, brand authority, and long-term success.
      </p>
      <p className="text-gray-600 max-w-4xl mx-auto mb-8 text-lg text-left md:text-center">
        Contact Delfyle today for professional logo design and trademark services that blend creativity with compliance. Let us help you build a brand that’s bold, recognisable, and protected.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/917439587419"
          style={{ background: 'linear-gradient(90deg, #790046 0%, #E50078 100%)' }}
          className="text-white px-8 py-4 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
        >
          Ready to expedite your trademark registration?
        </a>
        <a
          href="/contact"
          className="border border-[#E50078] text-[#E50078] px-8 py-3 rounded-lg bg-white transition transform hover:-translate-y-1 hover:shadow"
        >
          Get your free consultation now
        </a>
      </div>
      <p className="text-gray-600 mt-10 max-w-4xl mx-auto mb-8 text-lg text-left md:text-center italic">
        Trademark Registration Online with Delfyle — Your Trusted Compliance Partner.
      </p>
    </section>
  );
};

export default CallToAction;
