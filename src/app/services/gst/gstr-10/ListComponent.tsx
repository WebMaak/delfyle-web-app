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
      Filing Your Final GST Return (GSTR-10)
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Ensure Smooth and Lawful Closure of Your GST Registration
    </p>

    {/* Grid for main blocks */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* Why GSTR-10 is Important */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Why Filing GSTR-10 is Important</h3>
        <ul className="space-y-2">
          {[
            "Legal Compliance: Ensures lawful closure of GST registration and avoids future tax complications.",
            "Avoid Penalties: Filing on time helps avoid hefty penalties and interest charges.",
            "ITC Reconciliation: Helps in reconciling and reversing any remaining ITC as per GST laws.",
            "Clearance of Liabilities: Ensures all outstanding tax dues are paid off.",
            "Good Compliance Record: Maintains a clean compliance history."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* GSTR-10 Filing Timeline & Penalties */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Filing Timeline and Late Fees</h3>
        <p className="text-base text-gray-600 font-semibold">
          Filing Timeline:
        </p>
        <p className="text-sm md:text-base text-gray-600 mb-2">
          You must file GSTR-10 within **90 days** from the date of GST registration cancellation or the cancellation order, whichever is later.
        </p>
        <p className="text-base text-gray-600 font-semibold mt-4">
          Late Fees for Missing the Deadline:
        </p>
        <ul className="space-y-1 text-sm md:text-base text-gray-600">
          <li>• ₹100 per day under CGST + ₹100 per day under SGST (Total: ₹200 per day)</li>
          <li>• Maximum Penalty: 0.25% of the taxpayer’s annual turnover.</li>
          <li>• No late fee under IGST.</li>
        </ul>
      </div>

      {/* Required Documents */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Required Documents for Filing GSTR-10</h3>
        <p className="text-base text-gray-600 mb-4">
          Keep the following documents and details ready to ensure a smooth filing process:
        </p>
        <ul className="space-y-2">
          {[
            "GSTIN and cancellation reference number.",
            "GST cancellation order copy.",
            "Stock register showing inputs, semi-finished, and finished goods.",
            "Details of input tax credit (ITC) on stock.",
            "GST payment challans (if tax is payable).",
            "PAN and identity proof of the proprietor or authorized signatory.",
            "Bank account details for refund (if applicable)."
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
