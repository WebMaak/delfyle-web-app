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
      80G Registration Details
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Benefits of 80G Registration */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Benefits of 80G Registration</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          Oganizations with 80G certification enjoy multiple benefits:
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>Tax Deduction: Donors can claim deductions on donations, reducing their taxable income.</li>
          <li>Boosted Credibility: Registered status increases public trust and visibility.</li>
          <li>Improved Fundraising: Attracts more donors by offering financial benefits.</li>
          <li>Increased Transparency: Reinforces compliance and accountability.</li>
          <li>Access to Government and Foreign Grants: Often a prerequisite for funding agencies and international donors.</li>
        </ul>
      </div>

      {/* Documents Required for 80G Registration */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Documents Required for 80G Registration</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          To apply for an 80G certificate, the following documents must be submitted with Form 10A/10G:
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li>Trust Deed / Registration Certificate / Incorporation Document</li>
          <li>PAN Card of the NGO</li>
          <li>Memorandum & Articles of Association (for Section 8 companies)</li>
          <li>Bank Statements of the organization</li>
          <li>Audited Financials for the last three years</li>
          <li>List of Trustees, Members, or Directors</li>
          <li>Record of Charitable Activities Undertaken</li>
          <li>Previous Rejection Order (if any)</li>
        </ul>
        <p className="text-sm md:text-base text-[#1a1a1a] mt-4">
          Ensure these are compiled before initiating the application process.
        </p>
      </div>

      {/* 80G Registration Validity & Renewal */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">80G Registration Validity & Renewal</h3>
        <ul className="list-disc ml-5 space-y-2 text-[#1a1a1a] text-sm md:text-base">
          <li>
            <b>Provisional Registration:</b> Valid for 3 years initially.
          </li>
          <li>
            <b>Regular Registration:</b> Upon renewal, valid for 5 years and must be renewed every five years thereafter.
          </li>
          <li>
            <b>Note for Section 8 Companies:</b> Current 80G validity ends in March 2025. Renewal is mandatory for AY 2025–26 to retain tax benefits.
          </li>
        </ul>
      </div>

      {/* 80G Registration Process with Delfyle */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">80G Registration Process with Delfyle</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">For New or Provisional Registration:</h4>
            <ul className="space-y-2 mt-2 text-sm md:text-base text-[#1a1a1a]">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>Application Submission:</b> File Form 10A online with relevant documentation.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>Review by IT Department:</b> Submitted documents are examined for authenticity.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>Request for Clarification:</b> Additional documents may be requested.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>Approval:</b> On satisfaction, the Commissioner issues the 80G Certificate.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">Transition to Regular Registration:</h4>
            <p className="mt-2 text-sm md:text-base text-[#1a1a1a]">
              Before the provisional certificate expires, apply for regular registration. This includes a thorough review of financials and activities to verify continued eligibility.
            </p>
            <h4 className="font-semibold text-[#1a1a1a] mt-4">For Regular 80G Registration:</h4>
            <ul className="space-y-2 mt-2 text-sm md:text-base text-[#1a1a1a]">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>Form 10G Filing:</b> Submit Form 10G and attach supporting documents.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>On-site Inspection (if applicable):</b> May be conducted by the Income Tax Officer.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
                <span>
                  <b>Certificate Issuance:</b> Upon approval, receive a 5-year valid 80G certificate.
                </span>
              </li>
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
