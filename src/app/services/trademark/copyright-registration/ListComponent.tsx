import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";

const ListComponent = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-5xl mx-auto">
    {/* Main Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      Why Is Copyright Registration Important?
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      While copyright protection is automatically granted once a work is created, registering your work offers several key benefits:
    </p>

    {/* Two Column Layout */}
    <div className="grid gap-6 md:grid-cols-2">
      {/* Left Column */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Key Advantages of Registration</h3>
        <ul className="space-y-4 mt-4">
          {[
            "Legal Ownership: Registration provides official documentation of your claim over the work, which is important for legal disputes.",
            "Exclusive Rights: Control over reproduction, distribution, adaptation, and licensing of your work.",
            "Global Protection: Indian registration can offer protection under international treaties.",
            "Commercial Value: Registered works can be licensed, sold, or used as assets in business transactions."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-8 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Why Should You Register Your Work?</h3>
        <ul className="space-y-4 mt-4">
          {[
            "Peace of Mind: Ensures legal protection, preventing unauthorized use of your work.",
            "Enhanced Control: Maintain exclusive rights, including licensing and commercial exploitation.",
            "Deterrent to Infringement: Public registration discourages unauthorized copying or use.",
            "Asset for Income Generation: Registration allows licensing or royalty opportunities."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>



  );
};

export default ListComponent;
