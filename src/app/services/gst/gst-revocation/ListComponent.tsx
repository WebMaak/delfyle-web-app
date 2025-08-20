import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ListComponent = () => {
  return (
<section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1a1a1a]">
      GST Registration Revocation
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Understand the Importance & Process of Revoking a Cancelled GSTIN
    </p>

    {/* Grid for main blocks */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* Why GST Revocation is Critical */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Why GST Revocation is Critical</h3>
        <p className="text-base text-gray-600 mb-4">
          Failure to revoke a cancelled GST registration can cause serious operational and financial issues for your business.
        </p>
        <ul className="space-y-2">
          {[
            "Inability to Issue GST-Compliant Invoices: Cannot legally collect GST or provide invoices for customer ITC claims.",
            "Loss of Input Tax Credit (ITC): Becomes ineligible to claim ITC on business purchases, increasing costs.",
            "Penalties for Unauthorized GST Collection: Collecting GST without registration is illegal and can lead to significant fines.",
            "Business Disruptions and Loss of Credibility: Impacts relationships with customers and suppliers, and damages reputation."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Important Considerations */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Important Considerations Before Applying</h3>
        <ul className="space-y-2">
          {[
            "Outstanding Dues: Pay all outstanding tax liabilities, penalties, or fees.",
            "Pending Returns: File all necessary GST returns before initiating the process.",
            "Input Tax Credit Reversal: Reverse any unutilized ITC as required by GST laws.",
            "Compliance Requirements: Ensure all legal obligations are met, including for the period of inactivity."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Time Limit & Documentation */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Time Limit and Required Documentation</h3>
        <p className="text-base text-gray-600 mb-4">
          As of October 1, 2023, the time limit to apply for revocation is 90 days. Here are the documents needed:
        </p>
        <ul className="space-y-2">
          {[
            "GSTIN & Login Credentials: For accessing the GST portal.",
            "PAN Card: A copy of the business or proprietor's PAN card.",
            "Proof of Address: Documents like electricity bills or rental agreements.",
            "Bank Account Details: A bank statement or cancelled cheque.",
            "Filed GST Returns: All returns must be filed for the cancelled period.",
            "Application Form (GST REG-21): The required application form for revocation."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</section>

  );
};

export default ListComponent;
