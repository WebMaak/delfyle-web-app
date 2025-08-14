// components/CallToAction.tsx
import React from 'react';

const CallToAction = () => {
  return (
  <section className="bg-white from-pink-100 via-purple-100 to-white py-16 px-6 text-center md:px-20">
  <h2 className="md:text-[3.5rem] text-[2.5rem] font-bold text-gray-800 leading-tight mb-4 text-left md:text-center">
    How Delfyle Can Assist with Copyright Objections?
  </h2>
  <p className="text-gray-600 max-w-4xl mx-auto mb-6 text-lg text-left md:text-center">
    At Delfyle, we specialize in helping creators navigate the complex process of copyright registration and address any objections that arise. Our experienced team is equipped to handle all aspects of copyright law, from initial registration to filing effective responses to objections, ensuring your creative work remains protected and your rights are fully asserted.
  </p>
  <p className="text-gray-600 max-w-4xl mx-auto mb-8 text-lg text-left md:text-center">
    Have you received a copyright objection? Contact Delfyle for expert assistance in drafting a comprehensive response and securing your copyright with confidence.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a
      href="https://wa.me/917439587419"
      style={{ background: 'linear-gradient(90deg, #790046 0%, #E50078 100%)' }}
      className="text-white px-8 py-4 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
    >
      Start Your Copyright Registration Now
    </a>
    <a
      href="/contact"
      className="border border-[#E50078] text-[#E50078] px-8 py-3 rounded-lg bg-white transition transform hover:-translate-y-1 hover:shadow"
    >
      Get Your Free Consultation
    </a>
  </div>
</section>



  );
};

export default CallToAction;
