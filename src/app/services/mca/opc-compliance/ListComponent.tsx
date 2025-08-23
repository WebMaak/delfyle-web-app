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
      OPC Annual Compliance Checklist
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {/* GST Compliance for OPC */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">GST Compliance for OPC</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          If your OPC is registered under GST, you must file the relevant returns as per the guidelines.
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="text-[#b44593] font-bold">GST Returns:</span> File monthly/quarterly GST returns depending on your turnover.</li>
          <li><span className="text-[#b44593] font-bold">Annual GST Return:</span> Mandatory if your turnover exceeds ₹2 crore, with an accompanying audit.</li>
          <li><span className="text-[#b44593] font-bold">Records:</span> Maintain detailed records of all invoices, purchases, and tax payments.</li>
        </ul>
      </div>

      {/* Penalties for Non-Compliance */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Penalties for Non-Compliance</h3>
        <p className="text-sm md:text-base text-[#1a1a1a] mb-4">
          Non-compliance with OPC annual requirements can lead to serious consequences, including heavy fines and legal actions.
        </p>
        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-[#1a1a1a]">
          <li><span className="text-[#b44593] font-bold">Late Filing Penalty:</span> ₹200 per day per form (e.g., AOC-4, MGT-7A).</li>
          <li><span className="text-[#b44593] font-bold">DIN KYC Penalty:</span> ₹5,000 per director.</li>
          <li><span className="text-[#b44593] font-bold">Income Tax Penalty:</span> Up to ₹10,000 under Section 234F.</li>
        </ul>
      </div>

      {/* Documents Required */}
      <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#b44593]/50 space-y-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Documents Required for OPC Annual Compliance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">Financial Records:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="text-[#b44593] font-bold">Invoices:</span> Purchase and sales invoices.</li>
              <li><span className="text-[#b44593] font-bold">Expenses:</span> Expense bills and receipts.</li>
              <li><span className="text-[#b44593] font-bold">Bank Statements:</span> Bank statements from April to March.</li>
              <li><span className="text-[#b44593] font-bold">GST/TDS Details:</span> GST return and TDS details (if applicable).</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1a1a1a]">Statutory Documents:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm md:text-base text-[#1a1a1a]">
              <li><span className="text-[#b44593] font-bold">Financial Statements:</span> Balance Sheet and P&L Statement.</li>
              <li><span className="text-[#b44593] font-bold">Reports:</span> Director’s Report.</li>
              <li><span className="text-[#b44593] font-bold">Previous Filings:</span> Previous year filings, if any.</li>
              <li><span className="text-[#b44593] font-bold">Personnel Details:</span> Details of directors and shareholders.</li>
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
