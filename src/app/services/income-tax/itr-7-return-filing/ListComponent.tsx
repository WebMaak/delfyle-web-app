import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";

const ListComponent = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
          Who Can and Cannot File ITR-7?
        </h2>

        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
          ITR-7 is meant for trusts, NGOs, and institutions registered under the Income Tax Act. 
          It is not applicable for individuals, partnerships, or entities claiming exemptions under Section 11.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left - Who Can File ITR-6 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">It is primarily used by:</h3>
          <ul className="space-y-4">
            {[
              "Charitable/Religious Institutions",
              "Political Parties",
              "Scientific Research Bodies",
              "Educational Institutions",
              "Business Trusts & Investment Funds",
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
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Who Cannot File ITR-7?</h3>
          <p className="text-sm md:text-base text-[#1a1a1a]">
          The ITR-7 Form cannot be used by:
          </p>
          <ul className="space-y-4">
            {[
              "Individuals not claiming exemptions under the above-mentioned sections",
              "Hindu Undivided Families (HUFs)",
              "Regular Companies not seeking exemption",
              "Entities required to file ITR-5 or ITR-6",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                <FaTimesCircle className="text-[#790046] m-1 w-4 h-4" />
                <span className="w-[90%]">{item}</span>
              </li>
            ))}
          </ul>

        </div>

        </div>

        {/* Document Upload Note */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-3 hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a] flex items-center gap-2">
            <HiOutlineDocumentText className="text-blue-500" />
            Due Date for Filing ITR-7
          </h3>
          <div className="text-gray-700 text-sm md:text-base">
            <ul className="flex flex-col md:flex-row gap-2">
              <li>July 31 (Non-Audit Cases)</li>
              <li>|</li>
              <li>October 31 (Audit Applicable)</li>
              <li>|</li>
              <li>November 30 (if Transfer Pricing provisions apply)</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-base md:text-lg mt-10 text-gray-600 italic">
        <span className="font-bold">Note: </span> For Assessment Year 2025–26, the last date may vary based on government notifications.
        </p>
      </div>
    </section>


  );
};

export default ListComponent;
