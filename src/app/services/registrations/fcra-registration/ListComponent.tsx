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
      FCRA Registration & Compliance
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Eligibility Criteria for FCRA Registration */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Eligibility for Normal Registration</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          To apply for normal FCRA registration, an organization must:
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>Be legally registered under the Societies Registration Act, 1860, Indian Trusts Act, 1882, or Section 8 of the Companies Act, 2013.</li>
          <li>Have been active for at least 3 years.</li>
          <li>Demonstrate a minimum expenditure of ₹10 lakhs on core objectives.</li>
          <li>Ensure that capital assets are used exclusively for FCRA-compliant activities.</li>
        </ul>
      </div>

      {/* Eligibility for Prior Permission */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Eligibility for Prior Permission</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          New organizations may apply for prior permission by fulfilling the following:
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>Be registered under an applicable Indian statute.</li>
          <li>Submit a letter of commitment from the foreign donor.</li>
          <li>Ensure no conflict of interest between the organization and the foreign donor.</li>
          <li>At least 75% of the Indian organization’s office bearers must be independent of the foreign donor.</li>
        </ul>
      </div>

      {/* Foreign Contribution & Source */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">What Qualifies as a Foreign Contribution?</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Articles (excluding personal gifts under ₹25,000).</li>
              <li>Any currency—Indian or foreign.</li>
              <li>Foreign securities as defined under relevant Indian laws.</li>
              <li>Interest or income earned from foreign contributions.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">Who is a Foreign Source?</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Foreign governments or their agencies.</li>
              <li>International organizations (excluding UN, IMF, World Bank, etc.).</li>
              <li>Foreign companies or corporations.</li>
              <li>Foreign individuals, trusts, or foundations.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Conditions & Mandatory Requirements */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Key Conditions & Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">Key Conditions for Approval:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Must not be a fictitious or benami entity.</li>
              <li>Should not have been involved in religious conversions or unlawful activities.</li>
              <li>Should not use funds to harm national integrity or incite violence.</li>
              <li>Must have a positive track record for social work.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">Mandatory Requirements:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><b>Legal Entity:</b> Registered under applicable laws.</li>
              <li><b>NGO Darpan ID:</b> Required from the NITI Aayog portal.</li>
              <li><b>FCRA Bank Account:</b> Dedicated account for receiving foreign funds.</li>
              <li><b>Aadhaar for Office Bearers:</b> Mandatory for key personnel.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">Validity & Renewal:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><b>Validity:</b> Registration is valid for 5 years.</li>
              <li><b>Renewal:</b> Must be applied for before expiry to avoid disruption in foreign contributions.</li>
              <li>The Ministry of Home Affairs monitors compliance and handles the renewal process.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Documents Required */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Documents Required for FCRA Registration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">For Normal Registration:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Registration Certificate under Indian law.</li>
              <li>Memorandum of Association / Trust Deed.</li>
              <li>Audited Financial Statements (last 3 years).</li>
              <li>Activity Report (last 3 years).</li>
              <li>NGO Darpan ID.</li>
              <li>Aadhaar Cards of key office bearers.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">For Prior Permission:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li>Registration Certificate and MoA/Trust Deed.</li>
              <li>Commitment Letter from the donor.</li>
              <li>Project Proposal.</li>
              <li>NGO Darpan ID and Aadhaar details.</li>
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
