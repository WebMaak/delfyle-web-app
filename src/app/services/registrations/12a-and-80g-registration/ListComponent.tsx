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
      12A and 80G Registration Details
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Eligibility Criteria */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Eligibility Criteria</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>
              <b>For 12A Registration</b><br />
              Purpose must be exclusively charitable or religious. The organisation must not have a profit motive, use funds solely for its objectives, maintain proper records, and remain politically neutral.
            </span>
          </li>
          <li className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
            <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
            <span>
              <b>For 80G Registration</b><br />
              The organisation must already have 12A registration, serve a public cause without discrimination, limit fund usage to charitable activities, and maintain transparent financial records.
            </span>
          </li>
        </ul>
      </div>

      {/* Benefits */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <div>
          <h3 className="text-lg font-semibold text-[#1a1a1a]">Benefits of 12A and 80G Registrations</h3>
          <ul className="list-disc ml-5 space-y-2 text-[#1a1a1a] text-sm md:text-base">
            <li>
              <b>Tax Exemption for NGOs:</b> Avoid paying income tax on surplus income with 12A.
            </li>
            <li>
              <b>Tax Deduction for Donors:</b> Donors can claim deductions under 80G, increasing their incentive to give.
            </li>
            <li>
              <b>Enhanced Credibility:</b> Government recognition boosts trust with donors, partners, and funders.
            </li>
            <li>
              <b>Access to Grants:</b> Many funding agencies and government schemes require these registrations.
            </li>
            <li>
              <b>Improved Fundraising:</b> NGOs become more attractive to individual and corporate donors.
            </li>
            <li>
              <b>Operational Transparency:</b> Record-keeping and regulatory compliance promote accountability.
            </li>
          </ul>
        </div>
      </div>

      {/* Validity & Renewal */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Validity & Renewal</h3>
        <ul className="list-disc ml-5 space-y-2 text-[#1a1a1a] text-sm md:text-base">
          <li>
            <b>Provisional Registration:</b> Valid for 3 years.
          </li>
          <li>
            <b>Regular Registration:</b> Valid for 5 years.
          </li>
          <li>
            <b>Renewal:</b> Must be applied for at least 6 months before expiry to ensure continuous compliance.
          </li>
        </ul>
      </div>

      {/* Documents Required */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Documents Required for 12A and 80G Registration</h3>
        <ul className="list-disc ml-5 text-[#1a1a1a] text-sm md:text-base space-y-1">
          <li>Trust Deed / Registration Certificate</li>
          <li>Memorandum of Association & Articles of Association (for Section 8 Companies)</li>
          <li>PAN Card of the organisation</li>
          <li>Bank Statements</li>
          <li>Audited Financials (Last 3 Years)</li>
          <li>List of Trustees/Board Members</li>
          <li>Details of Activities</li>
          <li>FCRA Certificate (if applicable)</li>
          <li>NGO Darpan ID</li>
        </ul>
      </div>

      {/* Delfyle Support */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Simplify Your Registrations with Delfyle</h3>
        <p className="text-base text-gray-600 mb-2">
          Delfyle offers expert guidance to non-profit organisations throughout the 12A and 80G registration process. Our services ensure:
        </p>
        <ul className="list-disc ml-5 text-[#1a1a1a] text-sm md:text-base space-y-1">
          <li>Accurate and timely application submission</li>
          <li>Preparation and verification of all documents</li>
          <li>Handling of correspondence with the Income Tax Department</li>
          <li>Complete compliance with regulatory requirements</li>
        </ul>
      </div>
    </div>
  </div>
</section>



  );
};

export default ListComponent;
