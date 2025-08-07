import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";

const ListComponent = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
        Who Can and Cannot File ITR-6?
        </h2>

        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
        ITR-6 is meant for companies (excluding charitable/religious ones) registered under the Companies Act. 
        It is not applicable for individuals, partnerships, or entities claiming exemptions under Section 11.
        <p className="text-center text-base md:text-lg mt-4 text-gray-600">
        Private Limited Companies | One Person Companies (OPCs) | Public Limited Companies
        </p>
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left - Who Can File ITR-6 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">What is ITR-6 Form?</h3>
          <p className="text-sm md:text-base text-[#1a1a1a]">
            ITR-6 is the prescribed income tax return form for companies not claiming exemption under Section 11
            (i.e., companies not engaged in charitable or religious activities). This form is applicable for companies
            registered under the Companies Act, 2013 or 1956, including:
          </p>
          <ul className="space-y-4">
            {[
              "Private Limited Companies",
              "One Person Companies (OPCs)",
              "Public Limited Companies",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                <span className="w-[90%]">{item}</span>
              </li>
            ))}
          </ul>
        </div>


        {/* Right - Who Cannot File ITR-6 & Due Dates */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a1a]">Who Cannot File ITR-6?</h3>
            <ul className="space-y-2 mt-2 text-sm md:text-base text-[#1a1a1a]">
              <li className="flex gap-2 items-start">
                <FaTimesCircle className="text-[#790046] m-1 w-4 h-4" />
                <span className="w-[90%]">Individuals</span>
              </li>
              <li className="flex gap-2 items-start">
                <FaTimesCircle className="text-[#790046] m-1 w-4 h-4" />
                <span className="w-[90%]">Hindu Undivided Families (HUFs)</span>
              </li>
              <li className="flex gap-2 items-start">
                <FaTimesCircle className="text-[#790046] m-1 w-4 h-4" />
                <span className="w-[90%]">Partnerships and LLPs</span>
              </li>
              <li className="flex gap-2 items-start">
                <FaTimesCircle className="text-[#790046] m-1 w-4 h-4" />
                <span className="w-[90%]">AOPs (Association of Persons) and BOIs (Body of Individuals)</span>
              </li>
              <li className="flex gap-2 items-start">
                <FaTimesCircle className="text-[#790046] m-1 w-4 h-4" />
                <span className="w-[90%]">Local Authorities or Artificial Juridical Persons</span>
              </li>
              <li className="flex gap-2 items-start">
                <FaTimesCircle className="text-[#790046] m-1 w-4 h-4" />
                <span className="w-[90%]">Companies claiming exemption under Section 11 (Charitable/Religious)</span>
              </li>
              <li className="flex gap-2 items-start">
                <FaTimesCircle className="text-[#790046] m-1 w-4 h-4" />
                <span className="w-[90%]">Entities required to file ITR-7</span>
              </li>
            </ul>
          </div>

        </div>

        </div>

        {/* Document Upload Note */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-3 hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a] flex items-center gap-2">
            <HiOutlineDocumentText className="text-blue-500" />
            ITR-6 Due Date (Assessment Year 2025-26)
          </h3>
          <p className="text-gray-700 text-sm md:text-base">
            <ul>
              <li>October 31 – For companies requiring audit under the Income Tax Act</li>
              <li>November 30 – For companies involved in international/domestic transfer pricing (Form 3CEB applicable)</li>
            </ul>
          </p>
        </div>
        <p className="text-center text-base md:text-lg mt-10 text-gray-600 italic">
        Avoid penalties and interest—file your company tax return on time with Delfyle.
        </p>
      </div>
    </section>


  );
};

export default ListComponent;
