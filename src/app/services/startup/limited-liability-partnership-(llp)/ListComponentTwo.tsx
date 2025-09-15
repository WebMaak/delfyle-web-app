import { FaCheckCircle } from "react-icons/fa";
import React from "react";

const ListComponentTwo = () => {
  return (
    <section className="w-full md:py-16 py-4 pb-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-5xl mx-auto">

    {/* Section Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      Documents & Services for LLP Registration
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Essential documents and Delfyle's support services for smooth LLP registration
    </p>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Left - Documents Required */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Documents Required for LLP Registration</h3>
        <ul className="space-y-4">
          {[
            "For Indian Partners: PAN, Aadhaar, address proof (utility bill, bank statement), and passport-size photo.",
            "For Foreign Partners: Passport, address proof (notarized and apostilled), and photo.",
            "Registered Office Proof: Rental agreement, NOC from owner, and utility bill.",
            "Digital Signature Certificate (DSC): Required for designated partners."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right - Delfyle Services */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Register Your LLP with Delfyle</h3>
        <ul className="space-y-4">
          {[
            "LLP name approval assistance",
            "DSC & DIN application support",
            "LLP Agreement drafting",
            "PAN & TAN registration",
            "Ongoing compliance support"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Get started with LLP registration online today with Delfyle – your trusted partner for hassle-free business incorporation.
        </p>
      </div>
    </div>
  </div>
</section>


  );
};

export default ListComponentTwo;
