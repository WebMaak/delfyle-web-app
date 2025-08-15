import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ListComponent = () => {
  return (
  <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      Advantages & Disadvantages of a Partnership Firm
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Partnership Firm Registration | Benefits | Risks | Legal Importance
    </p>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Left - Advantages */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Advantages of a Partnership Firm</h3>
        <p className="text-left text-base md:text-lg mb-6 text-gray-600">
          The advantages of a Partnership Firm are listed as follows:
        </p>
        <ul className="space-y-4 mt-4">
          {[
            "Ease of Formation: Affordable registration with fewer formalities compared to other business structures.",
            "Varied Skill Sets: Partners bring diverse skills, knowledge, and resources to enhance capabilities.",
            "Shared Financial Burden: Financial responsibilities and risks are shared among partners.",
            "Tax Benefits: Profits are taxed at individual partners' tax rates, potentially reducing tax liability.",
            "Flexible Decision-Making: Partners have a say in business operations and decisions.",
            "Greater Access to Capital: Additional partners can contribute funds to support growth."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right - Disadvantages */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Disadvantages of a Partnership Firm</h3>
        <ul className="space-y-4 mt-4">
          {[
            "Unlimited Liability: Partners are personally responsible for the firm's debts and obligations.",
            "Limited Capital: Raising significant funds depends on partners' contributions and loans.",
            "Conflict Potential: Differences in opinions among partners may cause conflicts.",
            "Limited Growth Potential: Partnerships may face challenges in scaling compared to larger businesses.",
            "Continuity Issues: Firm may be disrupted due to a partner's death, withdrawal, or insolvency.",
            "Tax Complexity: Each partner handles individual tax compliance, possibly requiring professional help."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Full-width - Importance */}
    <div className="mt-10 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold text-[#1a1a1a] mt-6">Importance of Registering a Partnership Firm</h3>
      <p className="text-left text-base md:text-lg mb-6 text-gray-600">
        While registering a partnership firm is not legally required under the Indian Partnership Act, it offers several significant advantages and is considered advisable:
      </p>
      <ul className="space-y-4 mt-4">
        {[
          "Legal Standing: Registered partnership firms obtain legal recognition, allowing enforcement of contractual rights.",
          "Suing Third Parties: Registered firms can file lawsuits to protect contractual rights, unlike unregistered firms.",
          "Claiming Set-Off: Registered firms can claim set-off and other legal remedies in legal proceedings."
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
