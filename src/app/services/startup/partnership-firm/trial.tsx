import React from "react";

const PartnershipRegistration: React.FC = () => {
  const steps = [
    "Obtain a Digital Signature Certificate (DSC)",
    "Choose a Name for the Partnership Firm",
    "Draft the Partnership Deed",
    "Application for Registration",
    "Obtain the Certificate of Registration",
    "Apply for PAN and TAN",
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Button */}
        <div className="flex justify-center mb-10">
  <a
    href="https://wa.me/917439587419"
    style={{ background: 'linear-gradient(90deg, #790046 0%, #E50078 100%)' }}
    className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-md text-sm sm:text-base font-medium transition transform hover:-translate-y-1 hover:shadow-lg"
  >
    Start Your Section 8 Company Registration Now
  </a>
</div>

{/* Heading */}
<h2 className="text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl font-bold md:text-left text-center mb-6 text-[#1a1a1a]">
  Partnership Firm Registration Process
</h2>

{/* Steps */}
<ul className="space-y-4 mb-10 max-w-2xl mx-auto">
  {steps.map((step, idx) => (
    <li
      key={idx}
      className="flex items-start gap-3 text-sm sm:text-base md:text-lg text-[#1a1a1a]"
    >
      <span className="text-[#790046] font-bold">{idx + 1}.</span>
      <span>{step}</span>
    </li>
  ))}
</ul>


        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg mb-6">
          This is the comprehensive step-by-step process to register a partnership firm. Get expert help from Delfyle to seamlessly complete your partnership firm registration process.
        </p>

        {/* How Delfyle Helps */}
        <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">
          How Can Delfyle Help in Partnership Firm Registration?
        </h3>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          We offer comprehensive assistance in Partnership Firm Registration, simplifying the complex process for you. Our experienced team provides expert guidance, aids in document preparation, assists with name selection, and ensures full legal compliance with affordable partnership firm registration fees. We take care of submitting your application to the relevant authorities and keep you informed with timely updates. Whether initiating a new partnership or formalizing an existing one, our services are tailored to your unique needs when it comes to registering a partnership firm.
        </p>
        <p className="text-gray-600 text-base md:text-lg">
          With Delfyle, you can confidently navigate the partnership firm registration online process, knowing that your partnership is established efficiently, allowing you to concentrate on your business's growth. Our effective solutions and reasonable partnership firm registration cost make the entire process hassle-free and affordable. Contact us today to take the first step toward a successful partnership. Your success is our priority!
        </p>
      </div>
    </section>
  );
};

export default PartnershipRegistration;
