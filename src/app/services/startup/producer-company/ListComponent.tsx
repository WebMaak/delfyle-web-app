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
      Producer Company in India
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Advantages | Registration Process | Compliance
    </p>

    <div className="grid gap-6 md:grid-cols-2">
      {/* 1) Advantages of a Producer Company */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Advantages of a Producer Company</h3>
        <ul className="space-y-4">
          {[
            "Hybrid Structure: Combines the professional management of a Private Limited Company with the mutual benefits of a Cooperative Society.",
            "Ownership by Primary Producers: Membership is exclusively held by 'primary producers' or 'Producer Institutions,' ensuring focus on benefiting those involved in primary production.",
            "Professional Framework: Operates under the Producer Company Act (Sections 581-A to 581-ZL), providing a structured approach for primary producers.",
            "Limited Liability: Members’ liability is limited to their share contribution, protecting personal assets.",
            "Minimum Capital Requirement: Minimum paid-up capital of Rs. 1 Lakh and authorized capital of Rs. 5 Lakhs, making mobilization feasible.",
            "Flexible Membership: Requires a minimum of 10 producers, with no maximum limit.",
            "No Government or Private Equity Stake: Ensures autonomy and independence in functioning.",
            "National Scope: Can operate across India, offering wider business opportunities."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 2) How to Register a Farmer Producer Company */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">How to Register a Farmer Producer Company?</h3>
        <p className="text-left text-base md:text-lg mb-6 text-gray-600">
          Registering a Producer Company is a structured process similar to incorporating a Private Limited Company in India. Steps include:
        </p>
        <ul className="space-y-4">
          {[
            "Obtain a Digital Signature Certificate (DSC) for all proposed directors.",
            "Obtain Director Identification Number (DIN) for directors.",
            "Reserve a unique company name ending with 'Producer Company'.",
            "Prepare documents: Memorandum of Association (MoA), Articles of Association (AoA), registered office proof, affidavits, and other compliance papers.",
            "File SPICe+ form with Registrar of Companies (ROC).",
            "ROC verification and issue of Certificate of Incorporation.",
            "Post-incorporation steps: Apply for PAN, TAN, and open a company bank account."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 3) Compliance for Producer Companies */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 md:col-span-2">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Compliance for Producer Companies</h3>
        <ul className="space-y-4">
          {[
            "Annual financial audits and AGM reports must be filed with ROC.",
            "Existing cooperative societies can convert into Producer Companies under the Companies Act 2013.",
            "Corporate taxation applies, though agricultural tax benefits may be available.",
            "Leadership and decision-making are managed by a member-elected board.",
            "Dividends can be distributed up to 20% of annual profits.",
            "At least four board meetings must be held annually.",
            "NABARD registration enables financial and technical support.",
            "Annual return filing with ROC detailing operations, membership, and finances."
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
