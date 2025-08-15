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
      Section 8 Company Registration in India
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Section 8 Company Registration | Eligibility Criteria | Legal Requirements | Documents Required
    </p>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Left - Eligibility Criteria */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Eligibility Criteria for Section 8 Company</h3>
        <p className="text-left text-base md:text-lg mb-6 text-gray-600">
          Specific eligibility criteria must be met to establish a Section 8 company in India:
        </p>
        <ul className="space-y-4">
          {[
            "An Indian national or Hindu Undivided Family (HUF) can incorporate a Section 8 Company.",
            "The entity must have at least one director.",
            "The primary objective should be related to promoting art and science, sports, charitable activities, education, or providing financial assistance to individuals from lower-income groups."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right - Mandatory Legal Requirements */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Mandatory Legal Requirements</h3>
        <p className="text-left text-base md:text-lg mb-6 text-gray-600">
          Before applying for the incorporation process, the following legal requisites must be fulfilled:
        </p>
        <ul className="space-y-4">
          {[
            "Number of Directors: Minimum two for private limited, three for public limited.",
            "Number of Members: Private limited max 200 members; public limited has no limit.",
            "Capital Requirement and Name: No minimum paid-up capital required; 'Private Limited' or 'Limited' not required in name.",
            "Company Objectives: Must have non-profit objectives clearly stated in MoA and AoA."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] m-1 text-lg" />
              <span className="w-[90%]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Full-width - Documents Required */}
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
  </div>
</section>




  );
};

export default ListComponent;
