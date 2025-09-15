import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ListComponent = () => {
  return (
  <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
  One Person Company (OPC) Registration in India
</h2>
<p className="text-center text-sm sm:text-base md:text-lg mb-10 text-gray-600">
  OPC Registration Process | Eligibility Criteria | Advantages & Disadvantages | Why Choose Delfyle
</p>


    <div className="grid gap-6 md:grid-cols-2">
      {/* Left - Eligibility Criteria */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Eligibility Criteria to Register an OPC</h3>
        <p className="text-left text-base md:text-lg mb-10 text-gray-600">
          Before registering a One Person Company, the following conditions must be met:
        </p>
        <ul className="space-y-4">
          {[
            "Natural Person & Indian Citizen: Only an Indian citizen can form an OPC; companies or LLPs cannot.",
            "Resident in India: Promoter must have resided in India for at least 182 days during the previous year.",
            "Minimum Authorized Capital: OPC must have a minimum authorized capital of Rs. 1,00,000.",
            "Nominee Appointment: Promoter must appoint a nominee who becomes a member in case of promoter's death or incapacity.",
            "Restrictions on Certain Businesses: Banking, insurance, and investment businesses are not eligible.",
            "Conversion to Private Limited: OPC must convert if paid-up capital exceeds Rs. 50 lakhs or turnover exceeds Rs. 2 crores.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right - Advantages */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Advantages of OPC</h3>
        <ul className="space-y-4">
          {[
            "Legal Status: OPC is a separate legal entity, protecting the founder from personal liability.",
            "Easy Fundraising: Easier to raise funds from investors and banks compared to sole proprietorship.",
            "Reduced Compliance: Exemptions under Companies Act, 2013 simplify administrative requirements.",
            "Simple Incorporation: Can be formed with one member and one nominee; no minimum paid-up capital needed.",
            "Efficient Management: Single member ensures swift decision-making and management.",
            "Perpetual Succession: OPC continues even if the member changes, ensuring continuity.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Full-width - Disadvantages */}
    <div className="mt-10 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold text-[#1a1a1a] mt-6">Disadvantages of OPC</h3>
      <ul className="space-y-4">
        {[
          "Suitable for Small Businesses: Limited to one member, restricting ability to raise additional capital.",
          "Restriction on Business Activities: Cannot engage in banking, insurance, or charitable businesses.",
          "Ownership & Management: Sole member is also the director, which may lead to conflicts of interest.",
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
