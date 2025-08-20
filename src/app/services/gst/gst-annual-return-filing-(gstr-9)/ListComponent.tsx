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
      GST Annual Return Filing (GSTR-9)
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      GSTR-9 Filing Made Simple with Delfyle – GST Annual Return Filing Services
    </p>

    {/* Grid for main blocks */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* GSTR-9 Format: Key Components */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">GSTR-9 Format: Key Components</h3>
        <p className="text-base text-gray-600 mb-4">
          The GSTR-9 return is structured into 6 parts:
        </p>
        <ul className="space-y-2">
          {[
            "Basic Details – GSTIN, legal name, and trade name",
            "Outward Supplies – Taxable and non-taxable supplies",
            "Input Tax Credit (ITC) – Availed, reversed, or ineligible ITC",
            "Tax Paid – Details of tax paid in cash or through ITC",
            "Previous Year Adjustments – Transactions of the prior year disclosed in current returns",
            "Miscellaneous – Demands, refunds, HSN-wise details, and late fees"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Documents Required for GSTR-9 Filing */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Documents Required for GSTR-9 Filing</h3>
        <ul className="space-y-2">
          {[
            "Filed GSTR-1, GSTR-3B, and GSTR-2A returns",
            "Annual financial statements (Profit & Loss, Balance Sheet)",
            "Reconciliation statement (if applicable)",
            "Details of ITC, outward/inward supplies, and taxes paid"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prerequisites for GSTR-9 Filing */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Prerequisites for GSTR-9 Filing</h3>
        <ul className="space-y-2">
          {[
            "GST registration as a regular taxpayer",
            "Completed GSTR-1 and GSTR-3B filings for the relevant financial year",
            "Reconciliation with GSTR-2A and GSTR-3B",
            "Digital Signature Certificate (DSC) or EVC for verification"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* GSTR-9 Late Filing Penalty */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">GSTR-9 Late Filing Penalty</h3>
        <p className="text-base text-gray-600 mb-4">
          Late filing of GSTR-9 attracts a penalty of ₹200 per day (₹100 CGST + ₹100 SGST), subject to a maximum cap of 0.25% of the taxpayer's turnover in the state or union territory.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Avoid penalties by filing your GSTR-9 return on time with expert help from Delfyle.
        </p>
      </div>

      {/* How to File GSTR-9 */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Step-by-Step Process to File GSTR-9</h3>
        <ul className="space-y-2">
          {[
            "Login to GST Portal – Access www.gst.gov.in",
            "Navigate to Annual Returns – Select the relevant financial year",
            "Choose ‘Prepare Online’ or Offline – Based on data volume",
            "Decide Nil Return – Select ‘Yes’ if eligible",
            "Fill in Details – Based on GSTR-1, 3B summaries",
            "Save & Preview – Review the draft before submission",
            "Compute Liabilities – Calculate payable taxes or late fees",
            "Submit with DSC or EVC – Complete the filing process"
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
