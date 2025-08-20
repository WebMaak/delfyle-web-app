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
      Trust Registration in India
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Types of Trusts | Regulatory Authority & Laws | Reasons | Benefits
    </p>

    <div className="grid gap-6 md:grid-cols-2">
      {/* 1) Types of Trusts — heading + desc + list */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Types of Trusts</h3>
        <p className="text-left text-base md:text-lg mb-6 text-gray-600">
          Trusts can be classified into various categories based on the activities they undertake. Here are the different types of trusts:
        </p>
        <ul className="space-y-4">
          {[
            "Public Trust",
            "Private Trust",
            "Public Cum-Private Trust",
            "Private Limited Trusts: Established to carry out activities for specific individuals, families, or close associates. These trusts are governed by The Trusts Act of 1882.",
            "Public Limited Trusts: Created to benefit the general public for charitable, educational, and religious purposes.",
            "Public Cum-Private Trust: Serves both public and private purposes."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 2) Regulatory Authority and Laws — heading + desc (2 paras) + list */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Regulatory Authority and Laws for Trust Registration</h3>
        <p className="text-left text-base md:text-lg mb-0 text-gray-600">
          The Registrar of Trusts is the primary regulatory authority responsible for the registration of trust in India. The registration process for private trusts is governed by the Trusts Act of 1882. Public trusts in India must be registered with the relevant state authority as required by the applicable state act.
        </p>
        <p className="text-left text-base md:text-lg text-gray-600">
          Several laws play a significant role in the regulation of trusts in India, including:
        </p>
        <ul className="space-y-4">
          {[
            "Trusts Act of 1882",
            "Income Tax Act of 1961",
            "Societies Registration Act of 1860"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 3) Reasons for Trust Registration — heading + list */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Reasons for Trust Registration</h3>
        <ul className="space-y-4">
          {[
            "Ensures compliance with laws and regulations.",
            "Promotes non-commercial activities in areas like arts, science, education, and the environment.",
            "Grants income tax benefits under sections 12A and 80G.",
            "Allows trusts to operate legally and contribute to various social sectors."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 4) Benefits of Trust Registration — heading + list */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Benefits of Trust Registration</h3>
        <ul className="space-y-4">
          {[
            "Charitable Involvement: Enables individuals to support charitable causes.",
            "Tax Exemptions: Grants tax relaxations to registered trusts.",
            "Financial Support: Facilitates financial assistance to the underprivileged.",
            "Legal Protection: Ensures legal standing under the Indian Trusts Act of 1882.",
            "Family Wealth Protection: Helps in preserving and managing family wealth.",
            "Probate Avoidance: Enables easy transfer of assets to heirs."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* The original full-width list block is intentionally commented out to preserve structure with 4 equal blocks.
    <div className="mt-10 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold text-[#1a1a1a] mt-6">Documents Required for Incorporation</h3>
      <ul className="space-y-4">
        {[
          "Articles of Association (AOA) and Memorandum of Association (MOA)",
          "Declaration by the first director(s) and subscriber(s)",
          "Proof of office address (utility bills, rent agreement, etc.)",
          "Certificate of incorporation (if applicable)",
          "Resolution passed by the promoter company",
          "Consent of Nominee (INC-3)",
          "Identity and residential proof of nominees and subscribers",
          "Digital Signature Certificate (DSC)",
          "Declaration of unregistered companies"
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] m-1 text-lg" />
            <span className="w-[90%]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    */}
  </div>
</section>




  );
};

export default ListComponent;
