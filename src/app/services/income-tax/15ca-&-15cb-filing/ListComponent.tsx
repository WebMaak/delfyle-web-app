import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";

const ListComponent = () => {
  return (
   <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      Importance of 15CA & 15CB Filing
    </h2>

    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Form 15CA & 15CB are mandatory compliance documents under the Income Tax Act & FEMA. 
      They ensure proper reporting of foreign remittances, prevent penalties, and help determine 
      taxability of international transactions. 
      <br />
      💡 <span className="font-medium">Simply put:</span> Form 15CA is the declaration, and Form 15CB 
      is the CA’s certification for smooth cross-border payments.
    </p>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Left - Applicability of 15CA */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Applicability of Form 15CA</h3>
        <ul className="space-y-4">
          {[
            "Applicable when a resident (individual, company, LLP, or firm) makes a remittance to a non-resident or foreign company.",
            "Required if the income is taxable under the Income Tax Act.",
            "May or may not require RBI approval under FEMA.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>

        <h4 className="text-md font-semibold text-[#1a1a1a] mt-6">Not Required If:</h4>
        <ul className="space-y-3">
          {[
            "Remittance falls under Rule 37BB specified list (e.g., imports, travel expenses, donations).",
            "Total remittance in a financial year does not exceed ₹5 lakh (except education/medical expenses abroad).",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaTimesCircle className="text-red-500 m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right - Applicability of 15CB */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Applicability of Form 15CB</h3>
        <ul className="space-y-4">
          {[
            "Required when the remittance is taxable in India.",
            "Mandatory if the amount exceeds ₹5 lakh in a financial year.",
            "Applicable when no certificate/order has been obtained from the Assessing Officer (AO).",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>

        <h4 className="text-md font-semibold text-[#1a1a1a] mt-6">Not Required If:</h4>
        <ul className="space-y-3">
          {[
            "Payment is not taxable in India.",
            "Remittance below ₹5 lakh in a financial year.",
            "Exemptions under DTAA or RBI guidelines apply.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaTimesCircle className="text-red-500 m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Bottom - Exemptions */}
    <div className="mt-12 bg-gray-50 p-6 rounded-xl shadow-inner border border-gray-200">
      <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">
        Exemptions – When 15CA & 15CB Are NOT Required
      </h3>
      <ul className="space-y-3">
        {[
          "Imports of goods/services below ₹5 lakh.",
          "Travel under Basic Travel Quota (BTQ), education, pilgrimage, or medical treatment.",
          "Operating expenses of Indian airlines or shipping companies abroad.",
          "Donations, gifts, and personal remittances.",
          "Payments for international bidding.",
          "Remittance of taxes, refunds, and reimbursements.",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
            <FaTimesCircle className="text-red-500 m-1 text-lg" />
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
