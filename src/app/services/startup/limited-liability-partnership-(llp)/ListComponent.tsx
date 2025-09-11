import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ListComponent = () => {
  return (
   <section className="w-full py-8 md:py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-[1.75rem] md:text-4xl font-bold text-center md:mb-6 mb-2 text-[#1a1a1a]">
      LLP Registration in India
    </h2>
    <p className="text-center text-[0.9rem] md:text-lg md:mb-10 mb-[1.75rem] leading-[1.4] md:leading-[1.6] text-gray-600">
      LLP Registration Process | Prerequisites & Eligibility | Key Features & Advantages | Why Choose Delfyle
    </p>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Left - LLP Registration Process & Prerequisites */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-[1rem] md:text-lg font-semibold text-[#1a1a1a]">LLP Registration Prerequisites & Eligibility</h3>
        <p className="text-left text-[0.9rem] leading-[1.4] md:leading-[1.6] md:text-lg mb-10 text-gray-600">
          To register an LLP in India, the following conditions must be met:
        </p>
        <ul className="space-y-4">
          {[
            "Minimum Two Partners: LLP registration requires at least two partners, with no maximum limit.",
            "Designated Partners: At least two partners must be designated partners, and one must be an Indian resident.",
            "Contribution Requirement: Partners must contribute capital as per the LLP agreement.",
            "Registered Office Address: A valid business address is required for incorporation.",
            "Digital Signature Certificate (DSC): Designated partners need a DSC to sign digital documents.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right - Key Features */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-[1rem] md:text-lg font-semibold text-[#1a1a1a]">Key Features of LLP</h3>
        <ul className="space-y-4">
          {[
            "Limited Liability Protection: Partners' personal assets remain secure.",
            "Separate Legal Identity: LLPs can own assets and enter contracts in their name.",
            "No Minimum Capital Requirement: Start your business with any investment amount.",
            "Perpetual Existence: LLPs continue even if partners change.",
            "Lower Compliance Burden: Fewer regulatory requirements than private limited companies.",
            "No Maximum Partner Limit: Unlike private companies, LLPs can have unlimited partners.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Full-width - Advantages */}
    <div className="mt-10 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
      <h3 className="text-[1rem] md:text-lg font-semibold text-[#1a1a1a]">Advantages of LLP Registration</h3>
      <ul className="space-y-4">
        {[
          "Limited Liability: Partners are not personally liable for LLP debts.",
          "Ease of Formation: LLP registration is simpler and more affordable.",
          "Tax Benefits: LLPs are not subject to dividend distribution tax (DDT).",
          "Fewer Compliance Requirements: No mandatory board meetings or audits unless turnover exceeds ₹40 lakhs.",
          "Flexibility in Operations: LLP agreements provide customizable business structures.",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] m-1 text-lg" />
            <span className="w-[90%]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>



  );
};

export default ListComponent;
