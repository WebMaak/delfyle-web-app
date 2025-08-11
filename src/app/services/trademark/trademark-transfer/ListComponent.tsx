import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";

const ListComponent = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
        Common Reasons for Objection
        </h2>
        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left - Who Can File ITR-6 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Section 11 – Similarity with Existing Trademarks</h3>
          <ul className="space-y-4">
            {[
              "Identical Marks: e.g., “Sunshine” for beverages already registered",
              "Phonetic Similarity: “KandyLand” vs. “CandyLand”",
              "Conceptual Similarity: “TechSolutions” vs. “TechPro”",
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
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Section 9 – Lack of Distinctiveness or Misleading Nature</h3>
          
          <ul className="space-y-4">
            {[
              "Descriptive Words: e.g., “FreshJuice” for juices",
              "Generic Symbols: Simple shapes with no uniqueness",
              "False Representation: e.g., “OrganicGarden” for non-organic products"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                <span className="w-[90%]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>
        
        <h2 className="text-3xl mt-10 md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
          How to Respond to a Trademark Objection?
        </h2>
        <p className="text-center text-base md:text-lg mb-10 text-gray-600">
        A detailed Trademark Objection Reply must be filed within 30 days of the objection notice. The reply should clearly address each issue raised and include valid justifications.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left - Who Can File ITR-6 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Supporting Documents May Include:</h3>
          <ul className="space-y-4">
            {[
              "Invoices and purchase orders",
              "Advertisements and brochures",
              "Business cards and packaging",
              "MSME/FSSAI certificates",
              "Website or social media screenshots",
              "Affidavit (for online brand presence)"
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
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Trademark Objection Reply Fees</h3>
          <p className="text-center text-base md:text-lg mb-10 text-gray-600">
            The fees depend on:
          </p>  
          <ul className="space-y-4">
            {[
              "Complexity of the objection",
              "Legal support required",
              "Jurisdiction"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
                <FaCheckCircle className="text-[#790046] m-1 text-lg" />
                <span className="w-[90%]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>

        <p className="text-center text-base md:text-lg mt-10 text-gray-600 italic">
        <span className="font-bold">Note: </span> Delfyle offers affordable pricing plans for all trademark services!
        </p>
      </div>
    </section>


  );
};

export default ListComponent;
