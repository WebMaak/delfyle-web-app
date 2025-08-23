import { FaCheckCircle, FaTimesCircle, FaBan, FaExclamationCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ListComponent = () => {
  return (
<section className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      Company Compliance
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {/* What is Compliance for Private Limited Companies */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">What is Company Compliance?</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          Staying compliant with Indian corporate regulations is crucial for private limited companies to avoid penalties and maintain their legal status.
        </p>
        <p className="text-sm md:text-base text-[#1a1a1a]">
          Compliance refers to following statutory rules and procedures under Indian laws, primarily governed by the **Companies Act, 2013**, and enforced by the Registrar of Companies (RoC).
        </p>
      </div>

      {/* Types of Compliance */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Types of Compliance</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          Compliance requirements fall into several key categories:
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="text-[#b44593] font-bold">ROC (Registrar of Companies) Compliance:</span> Mandatory filings under the Companies Act.</li>
          <li><span className="text-[#b44593] font-bold">Annual Compliance:</span> Regular yearly filings and meetings.</li>
          <li><span className="text-[#b44593] font-bold">Event-Based Compliance:</span> Filings required for specific company events.</li>
          <li><span className="text-[#b44593] font-bold">Non-Registrar Compliance:</span> Obligations for GST, TDS, Income Tax, etc.</li>
        </ul>
      </div>

      {/* Key Compliance Activities & Penalties */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Key Compliance Activities & Penalties</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">Annual & Event-Based Compliance:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="text-[#b44593] font-bold">Annual Filings:</span> Financial statements (AOC-4) and annual returns (MGT-7/7A) within 30-60 days of AGM.</li>
              <li><span className="text-[#b44593] font-bold">Meetings:</span> Minimum four Board Meetings per year, plus an Annual General Meeting (AGM).</li>
              <li><span className="text-[#b44593] font-bold">Director KYC:</span> Annual DIR-3 KYC filing by September 30th.</li>
              <li><span className="text-[#b44593] font-bold">Event-Based Filings:</span> Required for changes in directors, share capital, registered office, or auditor.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">Penalties for Non-Compliance:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="text-[#b44593] font-bold">Fines:</span> Significant penalties and late fees for the company and its directors.</li>
              <li><span className="text-[#b44593] font-bold">Disqualification:</span> Directors may be disqualified for non-compliance.</li>
              <li><span className="text-[#b44593] font-bold">Legal Action:</span> Severe cases may lead to legal proceedings and prosecution.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  );
};

export default ListComponent;
