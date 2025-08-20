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
      LUT Filing in GST for Exporters
    </h2>
    <p className="text-center text-base md:text-lg mb-10 text-gray-600">
      Simplify Your Exports with Delfyle
    </p>

    {/* Grid for main blocks */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* Use Cases for LUT/Bond */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Use Cases for LUT/Bond</h3>
        <ul className="space-y-2">
          {[
            "Export of goods outside India without paying IGST",
            "Export of services to foreign clients",
            "Zero-rated supplies to SEZ units or developers"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits of Filing LUT */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Benefits of Filing LUT in GST for Exporters</h3>
        <ul className="space-y-2">
          {[
            "No IGST Payment – Export without blocking funds in tax payments",
            "Simplified Process – Avoid lengthy GST refund procedures",
            "Improved Cash Flow – Retain working capital for operational needs",
            "Year-Long Validity – No repeated filings throughout the financial year",
            "Ease of Doing Business – Streamlined compliance helps focus on growth"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Documents Required for LUT Filing */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Documents Required for LUT Filing Under GST</h3>
        <ul className="space-y-2">
          {[
            "LUT Cover Letter on company letterhead",
            "GST Registration Certificate",
            "PAN of the business entity",
            "KYC of the authorized signatory (ID and address proof)",
            "GST RFD-11 Form",
            "Authorized signatory letter (board resolution or similar)",
            "Cancelled cheque of business account",
            "Copy of Import Export Code (IEC), if applicable"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Important Reminders for LUT Filing */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Important Reminders for LUT Filing</h3>
        <ul className="space-y-2">
          {[
            "File online via GST Portal (Form GST RFD-11)",
            "Submission must be by an authorized person (Director/Partner/Proprietor)",
            "LUT must be on official company letterhead",
            "Filing must be completed at the beginning of each financial year",
            "If LUT not filed in time, IGST must be paid on exports"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#1a1a1a]">
              <FaCheckCircle className="text-[#790046] text-lg mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Step-by-Step LUT Filing Process with Delfyle */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Step-by-Step LUT Filing Process with Delfyle</h3>
        <ul className="space-y-2">
          {[
            "Consultation – We assess your eligibility and gather necessary documents",
            "Document Preparation – We prepare LUT cover letter and fill GST RFD-11",
            "Online Submission – Filing is done on the GST Portal by our experts",
            "Acknowledgment – We track and share confirmation of successful filing"
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
