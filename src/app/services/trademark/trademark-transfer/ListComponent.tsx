import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";

const ListComponent = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
        Benefits and Types of Trademark Transfer
        </h2>
        {/* <p className="text-center text-base md:text-lg mb-10 text-gray-600">
        </p> */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left - Who Can File ITR-6 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Benefits of Trademark Assignment</h3>
          <ul className="space-y-4">
            {[
              "Monetization of Brand: Assignors can realize the financial value of their brand.",
              "Legal Clarity: Defines clear ownership and usage rights.",
              "Business Expansion: Enables brand licensing, franchising, and expansion.",
              "Enforceable Rights: Assignees obtain legally recognized trademark ownership.",
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
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Types of Trademark Assignment</h3>
          
          <ul className="space-y-4">
            {[
              "Complete Assignment: Full transfer of all trademark rights.",
              "Partial Assignment: Rights transferred for specific goods or services only.",
              "Assignment with Goodwill: Trademark and its associated reputation are transferred.",
              "Assignment without Goodwill: Only the mark is transferred, not its reputation; use restrictions apply.",
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
        Prerequisites and Agreement Essentials
        </h2>
        {/* <p className="text-center text-base md:text-lg mb-10 text-gray-600">
        A detailed Trademark Objection Reply must be filed within 30 days of the objection notice. The reply should clearly address each issue raised and include valid justifications.
        </p> */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left - Who Can File ITR-6 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Prerequisites for Trademark Assignment</h3>
          <ul className="space-y-4">
            {[
              "Written Agreement: A formal, written contract is mandatory.",
              "Identifiable Parties: Clear mention of assignor and assignee.",
              "Consent and Consideration: Consent from both parties with specified consideration value.",
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
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Trademark Assignment Agreement Essentials</h3>
          {/* <p className="text-center text-base md:text-lg mb-10 text-gray-600">
            The fees depend on:
          </p>   */}
          <ul className="space-y-4">
            {[
              "Clear terms of transfer",
              "Goodwill clause (inclusion/exclusion)",
              "Geographical limits",
              "Rights to collect damages (past and future)",
              "Legal formalities (stamp duty, notarization)",
              "Signatures and date",
              "Binding on legal heirs",
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
        Trade Marks Act, 1999 and Documents Required
        </h2>
        {/* <p className="text-center text-base md:text-lg mb-10 text-gray-600">
        A detailed Trademark Objection Reply must be filed within 30 days of the objection notice. The reply should clearly address each issue raised and include valid justifications.
        </p> */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left - Who Can File ITR-6 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Restrictions under the Trade Marks Act, 1999</h3>
          <ul className="space-y-4">
            {[
              "Parallel Use Restriction: Assignment not allowed if it causes confusion due to overlapping rights.",
              "Territorial Restriction: Assignment that fragments exclusive rights across regions is prohibited.",
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
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Documents Required</h3>
          {/* <p className="text-center text-base md:text-lg mb-10 text-gray-600">
            The fees depend on:
          </p>   */}
          <ul className="space-y-4">
            {[
              "Trademark Assignment Agreement",
              "Certificate of Trademark Registration",
              "No Objection Certificate (NOC) from Assignor",
              "ID Proof of Assignor and Assignee",
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
