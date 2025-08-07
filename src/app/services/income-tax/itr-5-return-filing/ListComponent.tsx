import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";

const ListComponent = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      Who Can and Cannot File ITR-5?
    </h2>

    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      ITR-5 is applicable for a wide range of entities like firms, LLPs, and co-operative societies—but not for individuals, companies, or certain institutions.
    </p>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Left - Who Can File ITR-5 */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Entities eligible to file ITR-5:</h3>
        <ul className="space-y-4">
          {[
            "Firms (excluding companies)",
            "Limited Liability Partnerships (LLPs)",
            "Associations of Persons (AOPs)",
            "Bodies of Individuals (BOIs)",
            "Estate of deceased or insolvent individuals",
            "Co-operative Societies",
            "Local Authorities",
            "Business Trusts & Investment Funds",
            "Artificial Juridical Persons (as per Section 2(31)(vii))",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-green-600 m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right - Who Cannot File ITR-5 & Due Dates */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <div>
          <h3 className="text-lg font-semibold text-[#1a1a1a]">You cannot file ITR-5 if you are:</h3>
          <ul className="space-y-2 mt-2 text-sm md:text-base text-[#1a1a1a]">
            <li className="flex gap-2 items-start">
              <FaTimesCircle className="text-red-500 mt-1" />
              <span>Individual (use ITR-1, ITR-2, etc.)</span>
            </li>
            <li className="flex gap-2 items-start">
              <FaTimesCircle className="text-red-500 mt-1" />
              <span>Hindu Undivided Family (HUF)</span>
            </li>
            <li className="flex gap-2 items-start">
              <FaTimesCircle className="text-red-500 mt-1" />
              <span>Company (use ITR-6)</span>
            </li>
            <li className="flex gap-2 items-start">
              <FaTimesCircle className="text-red-500 mt-1" />
              <span>Trusts/Political Parties/Institutions filing under Sections 139(4A) to 139(4F)</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#1a1a1a] flex items-center gap-2">
            <AiOutlineCalendar className="text-[#b44593]" />
            ITR-5 Filing Due Dates (AY 2025–26)
          </h3>
          <ul className="list-disc list-inside mt-2 text-sm md:text-base text-gray-700 space-y-1">
            <li>31st July – If audit is not required</li>
            <li>31st October – If audit is required</li>
            <li>30th November – If Form 3CEB (transfer pricing) is applicable</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 italic">
            Avoid penalties – file early with Delfyle!
          </p>
        </div>
      </div>
    </div>

    {/* Document Upload Note */}
    <div className="mt-12 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-3 hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold text-[#1a1a1a] flex items-center gap-2">
        <HiOutlineDocumentText className="text-blue-500" />
        Is Document Upload Required?
      </h3>
      <p className="text-gray-700 text-sm md:text-base">
        No. ITR-5 is an annexure-less form – no need to upload documents during submission. But maintaining proper financial records is essential for audits and verification.
      </p>
    </div>
  </div>
</section>


  );
};

export default ListComponent;
